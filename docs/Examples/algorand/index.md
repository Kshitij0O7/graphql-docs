---
title: "Algorand API Examples & Documentation"
sidebar_label: Algorand
description: "Query Algorand blockchain data with Bitquery's GraphQL API — blocks, transactions, ALGO and ASA transfers, address balances, smart contract (application) calls, call arguments, and Coinpath tracing. Examples for DeFi analytics, treasury tracking, and CBDC programs."
keywords:
  [
    Algorand API,
    Algorand GraphQL,
    Algorand blockchain data,
    Bitquery,
    Algorand blocks API,
    Algorand transfers API,
    ASA transfers,
    Algorand smart contract calls,
    Algorand coinpath,
    ALGO API,
    Algorand application calls,
    Algorand address API,
  ]
slug: /examples/Algorand/
---

<head>
  <link rel="canonical" href="https://docs.bitquery.io/docs/blockchain/Algorand/" />
</head>

# Algorand API Documentation

Bitquery indexes Algorand mainnet (and Betanet) through a GraphQL API at `https://graphql.bitquery.io`. Algorand is a pure proof-of-stake layer 1 with fast finality, native **ALGO** transfers, and **ASA** (Algorand Standard Asset) tokens for fungible and non-fungible assets. Bitquery exposes blocks, transactions, asset transfers, application (smart contract) calls, call arguments, and multi-hop flow tracing under the `algorand` schema.

The guides below cover each API surface with ready-to-run GraphQL examples.

## What you can do with the Algorand API

- Query blocks by proposer, height, or time window — protocol version, rewards, seeds, and timestamps.
- Fetch transactions with signatures, types, fees, and inner-transaction grouping where indexed.
- Filter ALGO and ASA transfers by asset ID, sender, receiver, and date range.
- Inspect application (smart contract) call transactions and decode on-chain program interactions.
- Pull structured arguments passed to application methods for dApp analytics.
- Trace ALGO and ASA flows across multiple hops with [Coinpath](/docs/building-queries/Coinpath-Explained/Overview).

Use `network: algorand` for mainnet or `network: algorand_betanet` for Betanet queries.

## Quick start

Returns the ten most recent Algorand blocks with height, hash, reward, and timestamp.

```graphql
query {
  algorand(network: algorand) {
    blocks(options: {desc: "timestamp.iso8601", limit: 10}) {
      height
      hash
      reward
      currentProtocol
      timestamp {
        time(format: "%Y-%m-%d %H:%M:%S")
      }
    }
  }
}
```

Run this in the [GraphQL IDE](/docs/graphql-ide/how-to-start). Filter ASA transfers with `currency: {is: ASSET_ID}` where the asset ID is the on-chain ASA identifier.

## API reference

### Core data

**[Algorand Blocks API](https://docs.bitquery.io/docs/blockchain/Algorand/algorand-blocks-api/)** — Block metadata including proposer address, protocol version, rewards, seeds, and height. Use for network monitoring and validator analytics.

**[Algorand Transactions API](https://docs.bitquery.io/docs/blockchain/Algorand/algorand-transactions-api/)** — Transaction-level fields: type, fee, signature, block context, and grouping for complex multi-step operations.

**[Algorand Transfers API](https://docs.bitquery.io/docs/blockchain/Algorand/algorand-transfers-api/)** — ALGO and ASA movements with amounts, senders, receivers, and asset IDs. Filter by date range, address, or specific ASA for treasury and DeFi dashboards.

### Addresses

**[Algorand Address API](https://docs.bitquery.io/docs/blockchain/Algorand/algorand-address-api/)** — Account activity, balance context, and aggregate stats for one or many Algorand addresses.

### Smart contracts

**[Algorand Smart Contract Calls API](https://docs.bitquery.io/docs/blockchain/Algorand/algorand-smart-contract-calls-api/)** — Application call transactions for on-chain programs. Track dApp usage, DeFi protocol volume, and known application IDs.

**[Algorand Arguments API](https://docs.bitquery.io/docs/blockchain/Algorand/algorand-arguments-api/)** — Structured arguments passed in application calls. Decode method inputs for analytics pipelines and protocol-specific reporting.

### Fund tracing

**[Algorand Coinpath API](https://docs.bitquery.io/docs/blockchain/Algorand/algorand-coinpath-api/)** — Multi-hop ALGO and ASA flow tracing across accounts for compliance, exchange deposit tracking, and cross-wallet analytics.

## Common use cases

- **ASA and ALGO treasury tracking** — Monitor balances and transfer history for assets and institutional accounts.
- **dApp and DeFi analytics** — Volume and participation around apps, liquidity pools, or known application IDs.
- **Cross-account tracing** — Follow ASA or ALGO through several hops with Coinpath.
- **Enterprise asset tokenization** — Track issuance, holder distribution, and settlement volumes for tokenized bonds, real estate, or carbon credits issued as ASAs.
- **Government and CBDC programs** — Monitor regulated asset circulation, redemption, and smart-contract-call patterns on Algorand.

## Algorand node vs Bitquery API

| Algorand node / indexer | Bitquery Algorand API |
| --- | --- |
| You run and maintain indexing infrastructure | Pre-indexed blocks, txs, transfers, and app calls |
| Custom pipelines for each data shape | Unified GraphQL with filters, sorting, and pagination |
| Historical analytics require extra tooling | Time-range queries, aggregations, and USD context where available |
| Best for transaction submission and consensus | Best for analytics, dashboards, compliance, and bulk data pulls |

## Related resources

- [Algorand schema overview](/docs/Schema/algorand/overview) — GraphQL schema reference for the `algorand` root
- [Coinpath explained](/docs/building-queries/Coinpath-Explained/Overview)
- [Getting started with the GraphQL IDE](/docs/graphql-ide/how-to-start)
- [Bitquery documentation home](https://docs.bitquery.io/docs/intro/)
