import React, { useState } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import CommandPalette, { SearchTrigger } from "@site/src/components/HomepageFeatures/CommandPalette";
import { SearchProvider } from "@site/src/components/HomepageFeatures/SearchProvider";
import {
  heroQuickLinks,
  networkOptions,
  networkSwapData,
  v2DocsUrl,
} from "@site/src/components/HomepageFeatures/sectionsData";

import heroStyles from "./index.module.css";
import homeStyles from "../components/HomepageFeatures/styles.module.css";

function VersionBanner() {
  return (
    <div className={heroStyles.vbanner}>
      <span className={heroStyles.stable}>V1 · Stable</span>
      You&apos;re reading the <b>V1 docs</b>. For real-time streaming, Kafka, gRPC &amp; MCP, see the{" "}
      <a href={v2DocsUrl} target="_blank" rel="noopener noreferrer">
        V2 docs →
      </a>
    </div>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function QuickIcon({ type }) {
  const props = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    width: 14,
    height: 14,
    "aria-hidden": true,
  };
  if (type === "start") {
    return (
      <svg {...props}>
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    );
  }
  if (type === "coinpath") {
    return (
      <svg {...props}>
        <circle cx="6" cy="6" r="2.3" />
        <circle cx="18" cy="6" r="2.3" />
        <circle cx="12" cy="18" r="2.3" />
        <path d="M7.7 7.7l2.8 8.1M16.3 7.7l-2.8 8.1M8.5 6h7" />
      </svg>
    );
  }
  if (type === "ide") {
    return (
      <svg {...props}>
        <path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13 5l-2 14" />
      </svg>
    );
  }
  return (
    <svg {...props}>
      <path d="M15 7a4 4 0 1 0-4 4M11 11l-7 7v3h3l1-1h2v-2h2l2-2" />
    </svg>
  );
}

function HeroCodePanel() {
  const [activeNet, setActiveNet] = useState("ethereum");
  const rows = networkSwapData[activeNet]?.rows || networkSwapData.ethereum.rows;

  return (
    <div className={heroStyles.heroVisual} aria-hidden="true">
      <div className={heroStyles.qpanel}>
        <div className={heroStyles.qbar}>
          <span className={heroStyles.dots}>
            <i style={{ background: "#ec6a5e" }} />
            <i style={{ background: "#f3bf4f" }} />
            <i style={{ background: "#61c554" }} />
          </span>
          <span className={heroStyles.fn}>dexTrades.graphql</span>
          <span className={heroStyles.pill}>one schema · any chain</span>
        </div>
        <pre>
          <span className={heroStyles.cc}># Same query — switch the network argument</span>
          {"\n"}
          <span className={heroStyles.ck}>query</span> <span className={heroStyles.cp}>{"{"}</span>
          {"\n  "}
          <span className={heroStyles.cf}>ethereum</span>
          <span className={heroStyles.cp}>(</span>network: <span className={heroStyles.net}>{activeNet}</span>
          <span className={heroStyles.cp}>)</span> <span className={heroStyles.cp}>{"{"}</span>
          {"\n    "}
          <span className={heroStyles.cf}>dexTrades</span>
          <span className={heroStyles.cp}>(</span>options: <span className={heroStyles.cp}>{"{"}</span>limit:{" "}
          <span className={heroStyles.cn}>3</span>
          <span className={heroStyles.cp}>{"}) {"}</span>
          {"\n      "}
          <span className={heroStyles.cf}>baseCurrency</span> <span className={heroStyles.cp}>{"{"}</span> symbol{" "}
          <span className={heroStyles.cp}>{"}"}</span>
          {"\n      "}
          quotePrice
          {"\n      "}
          <span className={heroStyles.cf}>exchange</span> <span className={heroStyles.cp}>{"{"}</span> fullName{" "}
          <span className={heroStyles.cp}>{"}"}</span>
          {"\n    "}
          <span className={heroStyles.cp}>{"}"}</span>
          {"\n  "}
          <span className={heroStyles.cp}>{"}"}</span>
          {"\n"}
          <span className={heroStyles.cp}>{"}"}</span>
        </pre>
        <div className={heroStyles.qsplit}>
          <div className={heroStyles.lab}>Result</div>
          <div className={heroStyles.qout}>
            {rows.map(([pair, price, exchange]) => (
              <div key={pair} className={heroStyles.orow}>
                <span className={heroStyles.pr}>{pair}</span>
                <span className={heroStyles.px}>{price}</span>
                <span className={heroStyles.dx}>{exchange}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={heroStyles.swapbar}>
        {networkOptions.map((net) => (
          <button
            key={net}
            type="button"
            className={net === activeNet ? heroStyles.swapOn : undefined}
            onClick={() => setActiveNet(net)}
          >
            {net}
          </button>
        ))}
      </div>
      <div className={heroStyles.swaphint}>↑ Click a network — the same query, a different chain</div>
    </div>
  );
}

function HomepageHero() {
  const quickIcons = ["start", "coinpath", "ide", "token"];

  return (
    <section className={heroStyles.hero} aria-labelledby="hero-h">
      <div className={clsx(heroStyles.wrap, heroStyles.heroGrid)}>
        <div>
          <p className={heroStyles.eyebrow}>V1 · Unified GraphQL · 40+ chains</p>
          <h1 id="hero-h">Blockchain Data API.</h1>
          <p className={heroStyles.sub}>
            Query real-time and historical data from 40+ blockchains through one unified GraphQL API. Trades,
            transfers, balances, events and money flow — switch chains with a single argument.
          </p>
          <SearchTrigger className={heroStyles.heroSearch} aria-label="Search V1 documentation">
            <SearchIcon />
            <span className={heroStyles.ph}>Search the V1 docs — “Coinpath”, “transfers”, “BSC”…</span>
            <kbd>⌘K</kbd>
          </SearchTrigger>
          <div className={heroStyles.quick}>
            {heroQuickLinks.map((link, i) => {
              const className = clsx(link.primary && heroStyles.quickPrimary);
              if (link.external) {
                return (
                  <a key={link.label} href={link.href} className={className} target="_blank" rel="noopener noreferrer">
                    <QuickIcon type={quickIcons[i]} />
                    {link.label}
                  </a>
                );
              }
              if (link.hash) {
                return (
                  <a key={link.label} href={link.to} className={className}>
                    <QuickIcon type={quickIcons[i]} />
                    {link.label}
                  </a>
                );
              }
              return (
                <Link key={link.label} to={link.to} className={className}>
                  <QuickIcon type={quickIcons[i]} />
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
        <HeroCodePanel />
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <SearchProvider>
      <Layout
        title="Bitquery V1 API Docs — Unified GraphQL for blockchain data across 40+ chains"
        description="Bitquery V1 docs. Query real-time and historical blockchain data — DEX trades, transfers, balances, smart-contract events, Coinpath® money flow and NFTs — through one unified GraphQL API across 40+ chains."
      >
        <div className={homeStyles.pageShell}>
          <VersionBanner />
          <HomepageHero />
          <main>
            <HomepageFeatures />
          </main>
        </div>
        <CommandPalette />
      </Layout>
    </SearchProvider>
  );
}
