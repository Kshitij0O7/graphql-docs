---
title: "Cardano API Examples & Documentation"
sidebar_label: Cardano
description: "Query Cardano blockchain data with Bitquery's GraphQL API — blocks, transactions, UTXO inputs and outputs, native token mints, address balances, staking, Djed stablecoin activity, and Coinpath fund-flow tracing. Examples for wallets, DeFi analytics, and compliance."
keywords:
  [
    Cardano API,
    Cardano GraphQL,
    Cardano blockchain data,
    Bitquery,
    Cardano blocks API,
    Cardano transactions API,
    Cardano native tokens,
    Cardano mints API,
    Djed stablecoin API,
    Cardano coinpath,
    Cardano address balance,
    eUTXO API,
  ]
slug: /examples/Cardano/
---

<head>
  <link rel="canonical" href="https://docs.bitquery.io/docs/blockchain/Cardano/" />
</head>

# Cardano API Documentation

Bitquery indexes Cardano mainnet through a GraphQL API at `https://graphql.bitquery.io`. Cardano's **eUTXO** model means ADA and native tokens live in transaction outputs; Bitquery exposes blocks, transactions, UTXO-level inputs and outputs, address balances, mint and burn events, staking context, and multi-hop ADA flow tracing in a single query surface.

The guides below cover each API surface with ready-to-run GraphQL examples.

## What you can do with the Cardano API

- Look up blocks by height, hash, or time window — epoch, slot, slot-in-epoch, slot leader, VRF key, and transaction counts.
- Pull transactions with input/output totals, fees in ADA and USD, mint counts, and withdrawals.
- Get address balances across ADA and every native token a wallet holds, plus staking and rewards context.
- Walk UTXO-level inputs and outputs to reconstruct exact balances or build transaction feeds.
- Track mints and burns of any native token — NFTs, fungibles, and stablecoins like DJED.
- Trace ADA flows inbound and outbound across multiple hops with [Coinpath](/docs/building-queries/Coinpath-Explained/Overview).

## Quick start

Returns the five most recent Cardano blocks with hash, height, transaction count, and timestamp.

```graphql
query {
  cardano(network: cardano) {
    blocks(options: {desc: "height", limit: 5}) {
      height
      blockHash
      transactionCount
      epoch
      slot
      timestamp {
        time(format: "%Y-%m-%d %H:%M:%S")
      }
    }
  }
}
```

Run this in the [GraphQL IDE](/docs/graphql-ide/how-to-start). Filter native tokens with `currency: {is: "asset1..."}` using the [CIP-14 asset fingerprint](https://github.com/cardano-foundation/CIPs/blob/master/CIP-0014/README.md), or use `currency: {is: "ADA"}` for lovelace.

## API reference

### Core data

**[Cardano Blocks API](https://docs.bitquery.io/docs/blockchain/Cardano/blocks/)** — Block lookups by height or time, epoch and slot context, slot-leader metadata, protocol version, and transaction counts.

**[Cardano Transactions API](https://docs.bitquery.io/docs/blockchain/Cardano/transactions/)** — Transaction hashes, fees in ADA and USD, mint counts, daily aggregates, and patterns for paginating wallet history.

**[Cardano Inputs and Outputs API](https://docs.bitquery.io/docs/blockchain/Cardano/inputs-outputs/)** — UTXO-level data for balance reconstruction, transfer feeds, and per-output value breakdowns across ADA and native assets.

### Addresses and staking

**[Cardano Address API](https://docs.bitquery.io/docs/blockchain/Cardano/address/)** — Per-asset balances, staking snapshot fields, and the `addressStats` aggregate cube for activity summaries.

### Native tokens

**[Cardano Mints API](https://docs.bitquery.io/docs/blockchain/Cardano/mints/)** — Native-token mint and burn events. Track NFT drops, fungible token issuance, and policy-level mint activity.

### Stablecoins

**[Djed Stablecoin API](https://docs.bitquery.io/docs/blockchain/Cardano/djed/)** — DJED mints, burns, transfers, and wallet-level balance examples filtered by the DJED asset fingerprint.

### Fund tracing

**[Cardano Coinpath API](https://docs.bitquery.io/docs/blockchain/Cardano/coinpath/)** — Multi-hop inbound and outbound ADA flow tracing for compliance, treasury monitoring, and exchange deposit analysis.

## Common use cases

- **Wallet and portfolio UIs** — Show ADA plus every native token held at an address without running your own indexer.
- **DeFi and DEX analytics** — Monitor liquidity pool addresses, swap volumes, and token circulation on Cardano DEXes.
- **NFT and token issuance tracking** — Follow mint policies, collection drops, and holder distribution after launch.
- **Stablecoin monitoring** — Track DJED mint, burn, and transfer patterns for treasury and risk dashboards.
- **Compliance and forensics** — Use Coinpath to trace ADA through several hops with full transaction context.

## Cardano node vs Bitquery API

| `cardano-node` / RPC | Bitquery Cardano API |
| --- | --- |
| Raw chain state — you build the indexer | Pre-indexed: blocks, txs, UTXOs, native tokens, staking |
| No historical analytics out of the box | History, joins, aggregations, USD conversion |
| You stream and decode CBOR yourself | GraphQL response — pick the fields you need |
| Best for submitting transactions and full validation | Best for analytics, dashboards, wallet UIs, and compliance |

## Related resources

- [Cardano schema overview](/docs/Schema/cardano/overview) — GraphQL schema reference for the `cardano` root
- [Cardano explorer](https://explorer.bitquery.io/cardano) — Browse indexed Cardano data visually
- [Coinpath explained](/docs/building-queries/Coinpath-Explained/Overview)
- [Getting started with the GraphQL IDE](/docs/graphql-ide/how-to-start)
- [Bitquery documentation home](https://docs.bitquery.io/docs/intro/)
