---
title: "Bitcoin API Examples & Documentation"
sidebar_label: Bitcoin
description: "Query Bitcoin blockchain data with Bitquery's GraphQL API — blocks, transactions, UTXO inputs and outputs, address balances, fees, Omni Layer (USDT on Bitcoin), and multi-hop Coinpath tracing. Production-ready examples for wallets, compliance, mining analytics, and treasury reporting."
keywords:
  [
    Bitcoin API,
    Bitcoin GraphQL,
    Bitcoin blockchain data,
    Bitquery,
    UTXO API,
    Bitcoin address balance,
    Bitcoin transaction API,
    Omni Layer API,
    USDT on Bitcoin,
    Bitcoin coinpath,
    Bitcoin fee analytics,
    Bitcoin blocks API,
  ]
slug: /examples/Bitcoin/
---

<head>
  <link rel="canonical" href="https://docs.bitquery.io/docs/blockchain/Bitcoin/" />
</head>

# Bitcoin API Documentation

Bitquery indexes the full Bitcoin mainnet through a GraphQL API at `https://graphql.bitquery.io`. You get pre-parsed blocks, transactions, UTXO-level inputs and outputs, address balances, fee analytics, Omni Layer activity, and multi-hop fund-flow tracing — with historical USD values at transaction time for accounting and compliance workflows.

The guides below cover each API surface with ready-to-run GraphQL examples.

## What you can do with the Bitcoin API

- Pull blocks by height, hash, or time window — difficulty, size, transaction counts, and timestamps.
- Fetch transactions with input/output totals, per-transaction fees in BTC and USD, and pagination for large wallets.
- Reconstruct address balances from raw UTXOs, including balance at a specific historical block height.
- List individual UTXOs received and spent by an address inside any date range.
- Aggregate fees paid by an address or across the network for fee-market analytics.
- Track miner activity, block rewards, and first-active timestamps for mining pools.
- Query Omni Layer transactions and transfers — USDT-on-Bitcoin and other Omni tokens.
- Trace inbound and outbound fund flows across multiple hops with [Coinpath](/docs/building-queries/Coinpath-Explained/Overview).

## Quick start

Returns the five most recent Bitcoin blocks with height, difficulty, transaction count, and timestamp.

```graphql
query {
  bitcoin(network: bitcoin) {
    blocks(options: {desc: "height", limit: 5}) {
      height
      difficulty
      transactionCount
      blockSizeBigInt
      timestamp {
        time(format: "%Y-%m-%d %H:%M:%S")
      }
    }
  }
}
```

Run this in the [GraphQL IDE](/docs/graphql-ide/how-to-start) and adapt filters for your use case.

## API reference

### Core data

**[Bitcoin Blocks API](https://docs.bitquery.io/docs/blockchain/Bitcoin/bitcoin-blocks-api/)** — Block lookups by height or hash, difficulty, block size, transaction counts, and time-window filters. Use for block explorers, mining dashboards, and network health monitoring.

**[Bitcoin Transactions API](https://docs.bitquery.io/docs/blockchain/Bitcoin/bitcoin-transactions-api/)** — Transaction-level data with input and output totals, fees in BTC and USD, version, locktime, and patterns for paginating through large address histories.

**[Bitcoin Inputs and Outputs API](https://docs.bitquery.io/docs/blockchain/Bitcoin/bitcoin-inputs-outputs/)** — UTXO-level detail: prevout references, script types, values, and historical BTC price context. Essential for balance reconstruction, wallet feeds, and proof-of-reserves workflows.

### Addresses and balances

**[Bitcoin Address API](https://docs.bitquery.io/docs/blockchain/Bitcoin/bitcoin-address-api/)** — Current and historical balances derived from UTXOs, `addressStats` aggregates, and first/last-active timestamps for any address or batch of addresses.

### Fees

**[Bitcoin Fee API](https://docs.bitquery.io/docs/blockchain/Bitcoin/bitcoin-fee-api/)** — Per-transaction and aggregate fee queries in BTC and USD. Build fee-market charts, wallet spend analytics, or network-wide fee trend reports.

### Omni Layer (USDT on Bitcoin)

**[Bitcoin Omni Layer API](https://docs.bitquery.io/docs/blockchain/Bitcoin/bitcoin-omni-transactions/)** — Omni transactions and per-address transfers for tokens like USDT-on-Bitcoin and other Omni-class assets riding on Bitcoin transactions.

### Fund tracing

**[Bitcoin Coinpath API](https://docs.bitquery.io/docs/blockchain/Bitcoin/bitcoin-coinpath-api/)** — Multi-hop inbound and outbound fund-flow tracing between Bitcoin addresses. Used for compliance investigations, exchange deposit tracing, and treasury reconciliation.

## Common use cases

- **Exchange and custody reconciliation** — Match deposits and withdrawals to UTXO-level movements across hot and cold wallets.
- **Compliance and AML** — Follow Coinpath flows across hops with full block and transaction context for travel-rule and SAR workflows.
- **Institutional treasury** — Automate proof-of-reserves, cold-wallet audits, and board-level BTC balance reporting.
- **Mining analytics** — Track pool rewards, block production, and miner address activity over time.
- **Omni and colored-coin analytics** — Monitor USDT-on-Bitcoin and other Omni assets alongside native BTC movements.

## Bitcoin node vs Bitquery API

| `bitcoind` / Bitcoin RPC | Bitquery Bitcoin API |
| --- | --- |
| Raw chain state — you build the indexer | Pre-indexed: blocks, txs, UTXOs, addresses, Omni Layer |
| No historical analytics out of the box | History, joins, aggregations, USD conversion at trade time |
| Re-scan the chain to compute balances | One query for current balance, balance at a height, or activity stats |
| Best for submitting transactions and full validation | Best for analytics, dashboards, wallet UIs, compliance, and mining stats |

For real-time, low-latency Bitcoin data, use Bitquery's Bitcoin Kafka stream (`btc.transactions.proto`). GraphQL subscriptions are not available for Bitcoin — Kafka is the real-time path.

## Related resources

- [Bitcoin schema overview](/docs/Schema/bitcoin/overview) — GraphQL schema reference for the `bitcoin` root
- [Coinpath explained](/docs/building-queries/Coinpath-Explained/Overview) — How multi-hop tracing works
- [Getting started with the GraphQL IDE](/docs/graphql-ide/how-to-start)
- [Bitquery documentation home](https://docs.bitquery.io/docs/intro/)
