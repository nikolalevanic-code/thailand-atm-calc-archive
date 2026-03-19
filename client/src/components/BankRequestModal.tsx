/**
 * BankRequestModal — Popup form for "Don't see your bank?"
 * Design: Calm Fintech Utility
 * V1: Submits via mailto (no backend). Stores submission in localStorage.
 */

import { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { CURRENCIES } from '@/lib/cardData';

interface BankRequestModalProps {
  open: boolean;
  onClose: () => void;
}

export default function BankRequestModal({ open, onClose }: BankRequestModalProps) {
  const [form, setForm] = useState({
    bankName: '',
    cardName: '',
    country: '',
    email: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const countries = Object.values(CURRENCIES).flatMap(c => c.countries).sort();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.bankName || !form.country) return;

    // Store in localStorage
    try {
      const existing = JSON.parse(localStorage.getItem('bank_requests_v1') ?? '[]');
      existing.push({ ...form, submittedAt: new Date().toISOString() });
      localStorage.setItem('bank_requests_v1', JSON.stringify(existing));
    } catch {}

    // Open mailto as fallback delivery
    const subject = encodeURIComponent(`Bank Request: ${form.bankName} (${form.country})`);
    const body = encodeURIComponent(
      `Bank: ${form.bankName}\nCard: ${form.cardName || 'Not specified'}\nCountry: ${form.country}\nEmail: ${form.email || 'Not provided'}`
    );
    window.open(`mailto:hello@thailand-atm-calculator.com?subject=${subject}&body=${body}`, '_blank');

    setSubmitted(true);
  }

  function handleClose() {
    setSubmitted(false);
    setForm({ bankName: '', cardName: '', country: '', email: '' });
    onClose();
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display text-xl">Request your bank</DialogTitle>
        </DialogHeader>

        {submitted ? (
          <div className="py-6 text-center space-y-3">
            <CheckCircle className="w-10 h-10 text-better mx-auto" />
            <p className="font-medium text-foreground">Thanks! We'll add it soon.</p>
            <p className="text-sm text-muted-foreground">
              We review requests weekly and aim to add new cards within 7 days.
            </p>
            <Button onClick={handleClose} className="mt-2 bg-brand hover:bg-brand/90 text-white">
              Close
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 pt-1">
            <div className="space-y-1">
              <label className="text-sm font-medium">Bank name <span className="text-destructive">*</span></label>
              <input
                type="text"
                required
                placeholder="e.g. Westpac, HDFC Bank, ING"
                value={form.bankName}
                onChange={e => setForm(f => ({ ...f, bankName: e.target.value }))}
                className="w-full px-3 py-2 rounded-md border border-border text-sm focus:outline-none focus:ring-2 focus:ring-ring/30"
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium">Card / product name <span className="text-muted-foreground font-normal">(optional)</span></label>
              <input
                type="text"
                placeholder="e.g. Altitude Debit, Travel Money Card"
                value={form.cardName}
                onChange={e => setForm(f => ({ ...f, cardName: e.target.value }))}
                className="w-full px-3 py-2 rounded-md border border-border text-sm focus:outline-none focus:ring-2 focus:ring-ring/30"
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium">Country <span className="text-destructive">*</span></label>
              <select
                required
                value={form.country}
                onChange={e => setForm(f => ({ ...f, country: e.target.value }))}
                className="w-full px-3 py-2 rounded-md border border-border text-sm focus:outline-none focus:ring-2 focus:ring-ring/30 bg-white"
              >
                <option value="">Select country...</option>
                {countries.map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium">Your email <span className="text-muted-foreground font-normal">(optional — for update notification)</span></label>
              <input
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                className="w-full px-3 py-2 rounded-md border border-border text-sm focus:outline-none focus:ring-2 focus:ring-ring/30"
              />
            </div>

            <div className="flex gap-2 pt-1">
              <Button type="button" variant="outline" onClick={handleClose} className="flex-1">
                Cancel
              </Button>
              <Button type="submit" className="flex-1 bg-brand hover:bg-brand/90 text-white">
                Submit request
              </Button>
            </div>

            <p className="text-xs text-muted-foreground text-center">
              We only use your email to notify you when the card is added. No spam.
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
