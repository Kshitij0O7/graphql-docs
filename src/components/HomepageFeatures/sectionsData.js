export const v2DocsUrl = "https://docs.bitquery.io/";
export const accessTokenUrl = "https://account.bitquery.io/user/api_v2/access_tokens";
export const ideUrl = "https://ide.bitquery.io/";
export const liteUrl = "https://lite.bitquery.io/";
export const explorerUrl = "https://explorer.bitquery.io/";
export const statusUrl = "https://app-status.bitquery.io/";
export const forumUrl = "https://community.bitquery.io/";
export const coinpathDocsUrl = "/docs/Examples/coinpath/money-flow-api";
export const v1V2GuideUrl = "/docs/graphql-ide/v1-and-v2";
export const introUrl = "/docs/intro";
export const balancesDocsUrl = "/docs/Examples/celo/celo-address-balances";
export const addressStatsDocsUrl = "/docs/Examples/addressStats/address-stats-api";
export const tokensDocsUrl = "/docs/Examples/tokens/token-api";
export const nftDocsUrl = "/docs/Examples/ripple/nft_token_offers";

export const heroQuickLinks = [
  { label: "Getting started — 5 min", to: introUrl, primary: true },
  { label: "Coinpath® money flow", to: "#coinpath", hash: true },
  { label: "GraphQL IDE", href: ideUrl, external: true },
  { label: "Get access token", href: accessTokenUrl, external: true },
];

export const networkSwapData = {
  ethereum: {
    rows: [
      ["WETH/USDC", "$3,420.50", "Uniswap"],
      ["PEPE/WETH", "$0.0000094", "Uniswap"],
      ["LINK/USDC", "$17.82", "Sushiswap"],
    ],
  },
  bsc: {
    rows: [
      ["WBNB/USDT", "$612.40", "PancakeSwap"],
      ["CAKE/WBNB", "$2.41", "PancakeSwap"],
      ["FLOKI/WBNB", "$0.00018", "Biswap"],
    ],
  },
  matic: {
    rows: [
      ["WMATIC/USDC", "$0.52", "QuickSwap"],
      ["WETH/USDC", "$3,419.90", "Uniswap"],
      ["AAVE/USDC", "$98.10", "SushiSwap"],
    ],
  },
  solana: {
    rows: [
      ["SOL/USDC", "$184.20", "Raydium"],
      ["BONK/SOL", "$0.0000241", "Orca"],
      ["WIF/USDC", "$2.14", "Meteora"],
    ],
  },
};

export const networkOptions = ["ethereum", "bsc", "matic", "solana"];

export const startHereSteps = [
  {
    step: "Step 01",
    title: "Get a free token",
    body: "Create an account and generate an API access token — no card, free tier included.",
    codeParts: [
      { text: "Authorization: " },
      { text: "Bearer", cls: "c1" },
      { text: " " },
      { text: "<access_token>", cls: "c2" },
    ],
    linkLabel: "Create token",
    href: accessTokenUrl,
    external: true,
  },
  {
    step: "Step 02",
    title: "Open the GraphQL IDE",
    body: "Explore the schema, pick a chain with the network argument, and run a query.",
    bodyHasNetworkCode: true,
    codeParts: [
      { text: "ethereum", cls: "c1" },
      { text: "(network: " },
      { text: "bsc", cls: "c2" },
      { text: ") { … }" },
    ],
    linkLabel: "Open IDE",
    href: ideUrl,
    external: true,
  },
  {
    step: "Step 03",
    title: "Build & explore",
    body: "Query trades, transfers, balances and trace funds with Coinpath® — across every chain.",
    codeParts: [
      { text: "coinpath", cls: "c1" },
      { text: " · " },
      { text: "dexTrades", cls: "c1" },
      { text: " · " },
      { text: "transfers", cls: "c1" },
    ],
    linkLabel: "Getting started",
    to: introUrl,
  },
];

export const dataTypes = [
  {
    id: "dex",
    title: "DEX trades",
    description: "Swaps, prices, base/quote pairs and exchanges across DEXs.",
    root: "dexTrades",
    to: "/docs/Examples/dexTrades/dex-trading-data-api",
  },
  {
    id: "transfers",
    title: "Token transfers",
    description: "Inbound and outbound movements for any address or token.",
    root: "transfers",
    to: "/docs/Examples/Transfers/transfer-api",
  },
  {
    id: "balances",
    title: "Balances",
    description: "Current and historical balances for wallets and contracts.",
    root: "address.balances",
    to: balancesDocsUrl,
  },
  {
    id: "events",
    title: "Smart-contract events",
    description: "Decoded logs, calls and arguments by contract.",
    root: "smartContractEvents",
    to: "/docs/Examples/smartcontractEvents/smart-contract-events-api",
  },
  {
    id: "coinpath",
    title: "Coinpath® money flow",
    description: "Trace funds wallet-to-wallet across multiple hops.",
    root: "coinpath",
    to: coinpathDocsUrl,
    flag: "Hallmark",
  },
  {
    id: "address",
    title: "Address statistics",
    description: "Activity, counterparties, senders and receivers per address.",
    root: "address",
    to: addressStatsDocsUrl,
  },
  {
    id: "currency",
    title: "Tokens & currencies",
    description: "Metadata, supply, decimals and trading pairs.",
    root: "currency",
    to: tokensDocsUrl,
  },
  {
    id: "nft",
    title: "NFT data",
    description: "Collections, transfers and marketplace trades.",
    root: "transfers · NFT",
    to: nftDocsUrl,
  },
];

export const coinpathBullets = [
  { bold: "Multi-hop tracing", text: " of inflows and outflows for any address." },
  { bold: "Depth & date controls", text: " to scope an investigation precisely." },
  { bold: null, text: "Try it no-code in ", bold2: "Moneyflow Lite", text2: ", then query it via the API." },
];

export const flowNodes = [
  { address: "0x3f…a91c", tag: "source", variant: "src" },
  { conn: "− 1,240 ETH · 3 txns" },
  { address: "0x7b…2e4d", tag: "hop 1 · exchange" },
  { conn: "− 890 ETH · 5 txns" },
  { address: "0x9c…81f0", tag: "hop 2 · mixer" },
  { conn: "− 410 ETH · 2 txns" },
  { address: "0x12…66ab", tag: "destination", variant: "sink" },
];

export const modelCards = [
  {
    id: "unified",
    title: "Unified schema",
    description: "Trades, transfers and balances share one consistent shape.",
    linkLabel: "Learn the model",
    to: introUrl,
  },
  {
    id: "network",
    title: "The network argument",
    description: "Switch chains by name — ethereum, bsc, matic…",
    linkLabel: "See examples",
    to: introUrl,
  },
  {
    id: "history",
    title: "History & real-time",
    description: "Complete archival data plus near-real-time indexing.",
    linkLabel: "Query archives",
    to: introUrl,
  },
  {
    id: "v1v2",
    title: "V1 vs V2",
    description: "How the schemas differ and when to use each.",
    linkLabel: "Compare",
    to: v1V2GuideUrl,
  },
];

export const bitqueryTools = [
  {
    id: "ide",
    title: "GraphQL IDE ↗",
    description: "Author, test and share V1 queries with schema explorer.",
    linkLabel: "Open IDE",
    href: ideUrl,
  },
  {
    id: "lite",
    title: "Moneyflow Lite ↗",
    description: "No-code fund-flow explorer powered by Coinpath®.",
    linkLabel: "Open tool",
    href: liteUrl,
  },
  {
    id: "explorer",
    title: "Explorer ↗",
    description: "Search addresses, transactions and tokens across chains.",
    linkLabel: "Open explorer",
    href: explorerUrl,
  },
  {
    id: "account",
    title: "Account & tokens ↗",
    description: "Generate and manage your API access tokens.",
    linkLabel: "Manage tokens",
    href: accessTokenUrl,
  },
];

export const chains = [
  { id: "ethereum", name: "Ethereum", arg: "ethereum", to: introUrl },
  { id: "bsc", name: "BNB Chain", arg: "bsc", to: introUrl },
  { id: "matic", name: "Polygon", arg: "matic", to: introUrl },
  { id: "solana", name: "Solana", arg: "solana", to: introUrl },
  { id: "bitcoin", name: "Bitcoin", arg: "bitcoin", to: introUrl },
  { id: "tron", name: "Tron", arg: "tron", to: introUrl },
];
