import React from "react";

const iconPaths = {
  dex: "M7 7h11l-3-3M17 17H6l3 3",
  transfers: "M4 12h12M12 6l6 6-6 6",
  balances: "M2 5h20v14H2z M2 10h20",
  events: "M13 2 4 14h6l-1 8 9-12h-6l1-8z",
  coinpath: "M6 6a2.3 2.3 0 1 0 0-4.6 2.3 2.3 0 0 0 0 4.6z M18 6a2.3 2.3 0 1 0 0-4.6 2.3 2.3 0 0 0 0 4.6z M12 18a2.3 2.3 0 1 0 0-4.6 2.3 2.3 0 0 0 0 4.6z M7.7 7.7l2.8 8.1M16.3 7.7l-2.8 8.1M8.5 6h7",
  address: "M3 3v18h18 M7 14l4-4 3 3 5-6",
  currency: "M12 7v10 M9.5 9.2a2.5 2 0 0 1 5 0c0 2.8-5 1.2-5 4a2.5 2 0 0 0 5 0",
  nft: "M3 4h18v16H3z M8.5 9.5a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2z M21 16l-5-5L5 20",
  unified: "M12 3v18M3 12h18",
  network: "M7 7h10v10M7 17 17 7",
  history: "M12 7v5l3 2 M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z",
  v1v2: "M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01",
  ide: "M8 8l-4 4 4 4M16 8l4 4-4 4M13 5l-2 14",
  lite: "M6 6a2.3 2.3 0 1 0 0-4.6 2.3 2.3 0 0 0 0 4.6z M18 6a2.3 2.3 0 1 0 0-4.6 2.3 2.3 0 0 0 0 4.6z M12 18a2.3 2.3 0 1 0 0-4.6 2.3 2.3 0 0 0 0 4.6z M7.7 7.7l2.8 8.1M16.3 7.7l-2.8 8.1M8.5 6h7",
  explorer: "M11 11a7 7 0 1 0 0-14 7 7 0 0 0 0 14z M21 21l-4.3-4.3",
  account: "M15 7a4 4 0 1 0-4 4M11 11l-7 7v3h3l1-1h2v-2h2l2-2",
};

export function CardIcon({ id, className }) {
  const d = iconPaths[id];
  if (!d) return null;
  return (
    <span className={className}>
      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d={d} />
      </svg>
    </span>
  );
}

export function ToolIcon({ id, className }) {
  const d = iconPaths[id];
  if (!d) return null;
  return (
    <span className={className}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d={d} />
      </svg>
    </span>
  );
}

export function ChainIcon({ id }) {
  if (id === "ethereum") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden>
        <path fill="#627EEA" d="M12 2 5.6 12.3 12 16.1l6.4-3.8z" />
        <path fill="#8AA0F0" d="M12 2 5.6 12.3 12 9.4z" />
        <path fill="#627EEA" d="M12 17.3 5.6 13.5 12 22l6.4-8.5z" />
        <path fill="#8AA0F0" d="M12 17.3 5.6 13.5 12 14.9z" />
      </svg>
    );
  }
  if (id === "bsc") {
    return (
      <svg viewBox="0 0 24 24" fill="#F3BA2F" aria-hidden>
        <path d="M12 4.5 14.6 7 12 9.6 9.4 7zM7 9.5 9.6 12 7 14.6 4.4 12zM17 9.5 19.6 12 17 14.6 14.4 12zM12 14.4 14.6 17 12 19.6 9.4 17zM12 9.9 14.1 12 12 14.1 9.9 12z" />
      </svg>
    );
  }
  if (id === "matic") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden>
        <circle cx="12" cy="12" r="10" fill="#8247E5" />
        <path
          fill="#fff"
          d="M15.6 10.1c-.3-.18-.7-.18-1.04 0l-2.4 1.42-1.63.92-2.37 1.4c-.3.18-.7.18-1.04 0l-1.86-1.1c-.3-.18-.53-.52-.53-.92v-2.13c0-.35.18-.7.53-.91l1.84-1.07c.3-.18.7-.18 1.04 0l1.84 1.1c.3.18.53.52.53.91v1.42l1.63-.96V8.27c0-.35-.17-.7-.52-.91l-3.44-2.02c-.3-.18-.7-.18-1.04 0L3.66 7.36c-.35.21-.53.56-.53.91v4.02c0 .35.17.7.53.91l3.48 2.02c.3.18.7.18 1.04 0l2.37-1.38 1.63-.96 2.38-1.38c.3-.18.7-.18 1.04 0l1.84 1.06c.3.18.53.52.53.92v2.13c0 .35-.18.7-.53.91l-1.8 1.07c-.3.18-.71.18-1.05 0l-1.84-1.06c-.3-.18-.53-.52-.53-.92v-1.38l-1.63.96v1.42c0 .35.17.7.52.91l3.48 2.02c.3.18.7.18 1.04 0l3.48-2.02c.3-.18.53-.52.53-.91v-4.06c0-.35-.17-.7-.53-.92z"
        />
      </svg>
    );
  }
  if (id === "solana") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden>
        <defs>
          <linearGradient id="solGrad" x1="3" y1="18" x2="20" y2="6" gradientUnits="userSpaceOnUse">
            <stop stopColor="#9945FF" />
            <stop offset="1" stopColor="#14F195" />
          </linearGradient>
        </defs>
        <g fill="url(#solGrad)">
          <path d="M6.4 6.3h12.8l-2.6 2.5H3.8z" />
          <path d="M3.8 10.75h12.8l2.6 2.5H6.4z" />
          <path d="M6.4 15.2h12.8l-2.6 2.5H3.8z" />
        </g>
      </svg>
    );
  }
  if (id === "bitcoin") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden>
        <circle cx="12" cy="12" r="10" fill="#F7931A" />
        <text x="12" y="16.5" fontSize="13" fontWeight="700" fill="#fff" textAnchor="middle" fontFamily="Arial">
          ₿
        </text>
      </svg>
    );
  }
  if (id === "tron") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden>
        <circle cx="12" cy="12" r="10" fill="#EF0027" />
        <path d="M6.5 7.5l11 1.8-5.2 8.4-4-7.2 6.8 1.1-8.4-4.1z" fill="#fff" stroke="#fff" strokeWidth="0.5" strokeLinejoin="round" />
      </svg>
    );
  }
  return null;
}

export function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--bq-accent)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function MigrateIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 12h14M13 6l6 6-6 6" />
      <path d="M20 4v16" />
    </svg>
  );
}
