/**
 * ArticleCalculatorCta — Thailand ATM Calculator
 * Design: Calm fintech utility; compact, contextual, and visibly secondary to the factual article content.
 */

interface ArticleCalculatorCtaProps {
  title: string;
  body: string;
  label: string;
}

export default function ArticleCalculatorCta({ title, body, label }: ArticleCalculatorCtaProps) {
  return (
    <aside className="my-7 rounded-xl border border-brand-purple/20 bg-brand-purple-surface px-5 py-5 sm:px-6" aria-label="ATM cost calculator">
      <p className="font-display text-base font-bold text-foreground">{title}</p>
      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{body}</p>
      <a
        href="/"
        className="mt-4 inline-flex items-center rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-white no-underline transition-opacity hover:opacity-90"
      >
        {label}
      </a>
    </aside>
  );
}
