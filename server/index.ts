import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import { readFile } from "fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const SITE_URL = "https://www.thailand-atm-calculator.com";

type RouteMeta = {
  title: string;
  description: string;
  type: "website" | "article";
};

const HOME_META: RouteMeta = {
  title: "Thailand ATM Fees Calculator — Avoid Hidden Conversion Fees",
  description: "Find out how much Thai ATMs really cost you. Compare exchange rates, bank fees, and avoid hidden conversion charges that can add 5–10% to your withdrawal.",
  type: "website",
};

const ROUTE_META: Record<string, RouteMeta> = {
  "/": HOME_META,
  "/blog": {
    title: "Thailand ATM & Money Guides (2026) | Thailand ATM Calculator",
    description: "Practical Thailand ATM guides covering foreign-card fees, withdrawal limits, currency conversion, travel cards, and cash planning.",
    type: "website",
  },
  "/blog/best-atm-thailand-foreigners": {
    title: "Best ATMs in Thailand for Foreigners (2026): Fees, Limits & DCC | Thailand ATM Calculator",
    description: "Compare Thai ATM fees, card-network costs, withdrawal limits, and DCC offers before taking out cash with a foreign card.",
    type: "article",
  },
  "/blog/thailand-atm-fees": {
    title: "Thailand ATM Fees (2026): 250–350 THB Fee + Conversion Costs | Thailand ATM Calculator",
    description: "Understand Thai ATM fees, Visa and Mastercard charges, card costs, and the conversion offer to decline before you withdraw.",
    type: "article",
  },
  "/blog/thailand-atm-withdrawal-limit": {
    title: "Thailand ATM Withdrawal Limits (2026): 20,000 THB Per Transaction Explained | Thailand ATM Calculator",
    description: "Most Thai ATMs cap withdrawals at 20,000 THB per transaction. Here are the limits by bank for 2026 — and how to avoid paying double fees.",
    type: "article",
  },
  "/blog/thailand-atm-no-fee": {
    title: "How to Withdraw Money in Thailand Without Fees (2026): Best Cards & Strategy | Thailand ATM Calculator",
    description: "Wise, Revolut, and Schwab can reduce home-bank charges. Here is a practical strategy to minimise ATM fees in Thailand.",
    type: "article",
  },
  "/blog/wise-revolut-thailand": {
    title: "Wise vs Revolut for Thailand (2026): Fees, ATM Limits & Which to Choose | Thailand ATM Calculator",
    description: "Wise and Revolut fees, ATM limits, and practical differences for cash withdrawals in Thailand in 2026.",
    type: "article",
  },
  "/blog/how-much-cash-thailand": {
    title: "How Much Cash to Bring to Thailand in 2026: Daily Budget by Travel Style | Thailand ATM Calculator",
    description: "Budget travellers need ~1,200 THB/day; mid-range ~2,500 THB. Plan how much cash to bring to Thailand by trip length.",
    type: "article",
  },
};

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  })[character] ?? character);
}

function canonicalForPath(pathname: string) {
  const normalizedPath = pathname === "/" ? "/" : pathname.replace(/\/$/, "");
  return `${SITE_URL}${normalizedPath}`;
}

function routeMetaForPath(pathname: string) {
  const normalizedPath = pathname === "/" ? "/" : pathname.replace(/\/$/, "");
  return ROUTE_META[normalizedPath] ?? HOME_META;
}

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Serve route-aware canonical metadata before the SPA takes over.
  app.get("*", async (req, res, next) => {
    try {
      const indexPath = path.join(staticPath, "index.html");
      const canonical = canonicalForPath(req.path);
      const metadata = routeMetaForPath(req.path);
      const title = escapeHtml(metadata.title);
      const description = escapeHtml(metadata.description);
      const html = await readFile(indexPath, "utf8");
      const routeAwareHtml = html.replace(
        /<title>[^<]*<\/title>/,
        `<title>${title}</title>`,
      ).replace(
        /<meta name="description" content="[^"]*" \/>/,
        `<meta name="description" content="${description}" />`,
      ).replace(
        /<meta property="og:title" content="[^"]*" \/>/,
        `<meta property="og:title" content="${title}" />`,
      ).replace(
        /<meta property="og:description" content="[^"]*" \/>/,
        `<meta property="og:description" content="${description}" />`,
      ).replace(
        /<meta property="og:type" content="[^"]*" \/>/,
        `<meta property="og:type" content="${metadata.type}" />`,
      ).replace(
        /<link rel="canonical" href="[^"]*" \/>/,
        `<link rel="canonical" href="${canonical}" />`,
      ).replace(
        /<meta property="og:url" content="[^"]*" \/>/,
        `<meta property="og:url" content="${canonical}" />`,
      ).replace(
        /<meta name="twitter:title" content="[^"]*" \/>/,
        `<meta name="twitter:title" content="${title}" />`,
      ).replace(
        /<meta name="twitter:description" content="[^"]*" \/>/,
        `<meta name="twitter:description" content="${description}" />`,
      );
      res.type("html").send(routeAwareHtml);
    } catch (error) {
      next(error);
    }
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
