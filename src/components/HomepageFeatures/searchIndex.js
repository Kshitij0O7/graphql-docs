export const SEARCH_GROUP_ORDER = ["Start", "Data", "Tools", "Chains", "Examples"];

export const SEARCH_INDEX = [
  { t: "Getting started — 5 min", s: "Run your first V1 query", g: "Start", u: "/docs/intro" },
  {
    t: "Get a free access token",
    s: "Generate your API token",
    g: "Start",
    u: "https://account.bitquery.io/user/api_v2/access_tokens",
    external: true,
  },
  { t: "GraphQL IDE", s: "Author, test & share V1 queries", g: "Start", u: "https://ide.bitquery.io/", external: true },
  { t: "V1 vs V2 APIs", s: "Schema & IDE differences", g: "Start", u: "/docs/graphql-ide/v1-and-v2" },
  { t: "DEX trades", s: "Swaps, prices, exchanges", g: "Data", u: "/docs/Examples/dexTrades/dex-trading-data-api" },
  { t: "Token transfers", s: "Inbound / outbound movements", g: "Data", u: "/docs/Examples/Transfers/transfer-api" },
  { t: "Balances", s: "Address balances over time", g: "Data", u: "/docs/Examples/celo/celo-address-balances" },
  { t: "Smart-contract events", s: "Decoded logs & calls", g: "Data", u: "/docs/Examples/smartcontractEvents/smart-contract-events-api" },
  {
    t: "Coinpath® money flow",
    s: "Trace funds across wallets",
    g: "Data",
    u: "/docs/Examples/coinpath/money-flow-api",
  },
  { t: "Address statistics", s: "Activity, counterparties, senders", g: "Data", u: "/docs/Examples/addressStats/address-stats-api" },
  { t: "Tokens & currencies", s: "Metadata, supply, pairs", g: "Data", u: "/docs/Examples/tokens/token-api" },
  { t: "NFT data", s: "Collections, transfers, trades", g: "Data", u: "/docs/Examples/ripple/nft_token_offers" },
  { t: "GraphQL IDE", s: "graphql.bitquery.io", g: "Tools", u: "https://ide.bitquery.io/", external: true },
  { t: "Moneyflow Lite", s: "No-code fund-flow explorer", g: "Tools", u: "https://lite.bitquery.io/", external: true },
  { t: "Explorer", s: "Search addresses, txns, tokens", g: "Tools", u: "https://explorer.bitquery.io/", external: true },
  {
    t: "Account & tokens",
    s: "Manage API access",
    g: "Tools",
    u: "https://account.bitquery.io/user/api_v2/access_tokens",
    external: true,
  },
  { t: "Ethereum", s: "network: ethereum", g: "Chains", u: "/docs/intro" },
  { t: "BNB Chain (BSC)", s: "network: bsc", g: "Chains", u: "/docs/intro" },
  { t: "Polygon", s: "network: matic", g: "Chains", u: "/docs/intro" },
  { t: "Solana", s: "network: solana", g: "Chains", u: "/docs/intro" },
  { t: "Bitcoin", s: "network: bitcoin", g: "Chains", u: "/docs/intro" },
  { t: "All supported chains", s: "40+ networks · status page", g: "Chains", u: "https://app-status.bitquery.io/", external: true },
  {
    t: "Coinpath money-flow example",
    s: "Multi-hop fund tracing query",
    g: "Examples",
    u: "/docs/Examples/coinpath/money-flow-api",
  },
  { t: "Forum", s: "Community Q&A", g: "Examples", u: "https://community.bitquery.io/", external: true },
  { t: "Book a demo", s: "Talk to the team", g: "Examples", u: "https://bitquery.io/forms/api", external: true },
];

export function groupIconPath(group) {
  const paths = {
    Start: "M5 12h14M13 6l6 6-6 6",
    Data: "M4 7h16M4 12h16M4 17h10",
    Tools: "M14 7l3 3M5 19l8.5-8.5a3.5 3.5 0 1 0-5-5L0 14",
    Chains: "M9 12a3 3 0 0 1 3-3h3a3 3 0 0 1 0 6h-1M15 12a3 3 0 0 1-3 3H9a3 3 0 0 1 0-6h1",
    Examples: "M4 5a2 2 0 0 1 2-2h9l5 5v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z M14 3v6h6",
  };
  return paths[group] || paths.Data;
}
