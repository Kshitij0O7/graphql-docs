// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    "intro",
    {
      type: "category",
      label: "GraphQL IDE",
      link: {
        type: "generated-index",
        title: "GraphQL IDE",
        description: "Explore functionalities and usage of the GraphQL IDE.",
      },
      items: [
        "graphql-ide/how-to-start",
        "graphql-ide/ide",
        "graphql-ide/account",
        "graphql-ide/apikey",
        "graphql-ide/errors",
        "graphql-ide/query-builder",
        "graphql-ide/points",
        "graphql-ide/supported-blockchains",
        "graphql-ide/use-it-in-your-application",
        "graphql-ide/v1-and-v2",
      ],
    },
    {
      type: "category",
      label: "Building Queries",
      link: {
        type: "generated-index",
        title: "Building Queries",
        description: "Learn to build and structure queries effectively.",
      },
      items: [
        "building-queries/basic-structure-of-a-query",
        "building-queries/network-selection",
        "building-queries/FAQ",
        {
          type: "category",
          label: "Coinpath Explained",
          items: [
            "building-queries/Coinpath-Explained/Overview",
            {
              type: "category",
              label: "Fund Tracking",
              items: [
                "building-queries/Coinpath-Explained/Fund Tracking/EVM_Chains",
                "building-queries/Coinpath-Explained/Fund Tracking/Ledger_Based_Chains",
                "building-queries/Coinpath-Explained/Fund Tracking/UTXO_Chains",
              ],
            },
            "building-queries/Coinpath-Explained/How_to_read_coinpath_graph",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Query Features",
      link: {
        type: "generated-index",
        title: "Query Features Documentation",
        description: "Detailed features available for building queries.",
      },
      items: [
        {
          type: "category",
          label: "Aggregation",
          items: [
            "query-features/aggregation/aggregation",
            "query-features/aggregation/count",
            "query-features/aggregation/sum",
          ],
        },
        {
          type: "category",
          label: "Arguments",
          items: [
            "query-features/arguments/argument",
            "query-features/arguments/EVM_arguments",
            "query-features/arguments/Other_Chains_arguments",
          ],
        },
        {
          type: "category",
          label: "Expressions",
          items: [
            "query-features/expressions/overview",
          ],
        },
        {
          type: "category",
          label: "Filtering",
          items: [
            "query-features/filtering/fields",
            "query-features/filtering/limits",
            "query-features/filtering/options",
            "query-features/filtering/sorting",
          ],
        },
        {
          type: "category",
          label: "Fragments",
          items: [
            "query-features/fragments/overview",
          ],
        },
        {
          type: "category",
          label: "Search",
          items: [
            "query-features/search/search",
          ],
        },
        {
          type: "category",
          label: "Utilities",
          items: [
            "query-features/utilities/utilities",
          ],
        },
        "query-features/aliases",
        "query-features/Metrics",
      ],
    },
    
    {
      type: "category",
      label: "Schema",
      link: {
        type: "generated-index",
        title: "Blockchain Schema Documentation",
        description: "Comprehensive blockchain schema references.",
      },
      items: [
        {
          type: "category",
          label: "Avalanche",
          items: [
            "Schema/Avalanche/address",
            "Schema/Avalanche/arguments",
            "Schema/Avalanche/blocks",
            "Schema/Avalanche/calls",
            "Schema/Avalanche/coinpath",
            "Schema/Avalanche/overview",
            "Schema/Avalanche/transactions",
            "Schema/Avalanche/transfers",
          ],
        },
        {
          type: "category",
          label: "Cronos",
          items: [
            "Schema/Cronos/activeaddresses",
            "Schema/Cronos/address",
            "Schema/Cronos/addresstats",
            "Schema/Cronos/arguments",
            "Schema/Cronos/blocks",
            "Schema/Cronos/coinpath",
            "Schema/Cronos/dextrades",
            "Schema/Cronos/overview",
            "Schema/Cronos/references",
            "Schema/Cronos/smartcontractcalls",
            "Schema/Cronos/smartcontractevents",
            "Schema/Cronos/transactions",
            "Schema/Cronos/transfers",
          ],
        },
        {
          type: "category",
          label: "Binance Smart Chain",
          items: [
            "Schema/binance_smart_chain/activeaddresses",
            "Schema/binance_smart_chain/address",
            "Schema/binance_smart_chain/addresstats",
            "Schema/binance_smart_chain/arguments",
            "Schema/binance_smart_chain/blocks",
            "Schema/binance_smart_chain/coinpath",
            "Schema/binance_smart_chain/dextrades",
            "Schema/binance_smart_chain/overview",
            "Schema/binance_smart_chain/references",
            "Schema/binance_smart_chain/smartcontractcalls",
            "Schema/binance_smart_chain/smartcontractevents",
            "Schema/binance_smart_chain/transactions",
            "Schema/binance_smart_chain/transfers",
          ],
        },
        {
          type: "category",
          label: "Bitcoin",
          items: [
            "Schema/bitcoin/addressstats",
            "Schema/bitcoin/blocks",
            "Schema/bitcoin/coinpath",
            "Schema/bitcoin/inputs",
            "Schema/bitcoin/omnitransactions",
            "Schema/bitcoin/omnitransfers",
            "Schema/bitcoin/outputs",
            "Schema/bitcoin/overview",
            "Schema/bitcoin/transactions",
          ],
        },
        {
          type: "category",
          label: "Cardano",
          items: [
            "Schema/cardano/overview",
            "Schema/cardano/address",
            "Schema/cardano/addressstats",
            "Schema/cardano/blocks",
            "Schema/cardano/coinpath",
            "Schema/cardano/inputsOutputs",
            "Schema/cardano/mints",
            "Schema/cardano/transactions",
          ],
        },
        {
          type: "category",
          label: "Celo",
          items: [
            "Schema/celo/activeaddresses",
            "Schema/celo/address",
            "Schema/celo/addresstats",
            "Schema/celo/arguments",
            "Schema/celo/blocks",
            "Schema/celo/coinpath",
            "Schema/celo/dextrades",
            "Schema/celo/overview",
            "Schema/celo/references",
            "Schema/celo/smartcontractcalls",
            "Schema/celo/smartcontractevents",
            "Schema/celo/transactions",
            "Schema/celo/transfers",
          ],
        },
        {
          type: "category",
          label: "Dash",
          items: [
            "Schema/Dash/addressstats",
            "Schema/Dash/blocks",
            "Schema/Dash/coinpath",
            "Schema/Dash/inputs",
            "Schema/Dash/omnitransactions",
            "Schema/Dash/omnitransfers",
            "Schema/Dash/outputs",
            "Schema/Dash/overview",
            "Schema/Dash/transactions",
          ],
        },
        {
          type: "category",
          label: "Dogecoin",
          items: [
            "Schema/Dogecoin/addressstats",
            "Schema/Dogecoin/blocks",
            "Schema/Dogecoin/coinpath",
            "Schema/Dogecoin/inputs",
            "Schema/Dogecoin/omnitransactions",
            "Schema/Dogecoin/omnitransfers",
            "Schema/Dogecoin/outputs",
            "Schema/Dogecoin/overview",
            "Schema/Dogecoin/transactions",
          ],
        },
        {
          type: "category",
          label: "Harmony",
          items: [
            "Schema/harmony/arguments",
            "Schema/harmony/blocks",
            "Schema/harmony/smartContractCalls",
            "Schema/harmony/smartContractEvents",
            "Schema/harmony/stakingTransactions",
            "Schema/harmony/transactions",
            "Schema/harmony/transfers",
          ],
        },

        {
          type: "category",
          label: "Polygon",
          items: [
            "Schema/Polygon/activeaddresses",
            "Schema/Polygon/address",
            "Schema/Polygon/arguments",
            "Schema/Polygon/balance",
            "Schema/Polygon/blocks",
            "Schema/Polygon/coinpath",
            "Schema/Polygon/dextrades",
            "Schema/Polygon/overview",
            "Schema/Polygon/references",
            "Schema/Polygon/smartcontractcalls",
            "Schema/Polygon/smartcontractevents",
            "Schema/Polygon/transactions",
            "Schema/Polygon/transfers",
          ],
        },

        {
          type: "category",
          label: "Solana",
          items: [
            "Schema/solana/address",
            "Schema/solana/blockRewards",
            "Schema/solana/blocks",
            "Schema/solana/coinpath",
            "Schema/solana/instructionAccounts",
            "Schema/solana/instructions",
            "Schema/solana/overview",
            "Schema/solana/transactions",
            "Schema/solana/transfers",
          ],
        },
        {
          type: "category",
          label: "Ripple",
          items: [
            "Schema/ripple/accountRoots",
            "Schema/ripple/address",
            "Schema/ripple/addressStats",
            "Schema/ripple/balances",
            "Schema/ripple/blocks",
            "Schema/ripple/checks",
            "Schema/ripple/coinpath",
            "Schema/ripple/escrows",
            "Schema/ripple/nftokenOffers",
            "Schema/ripple/offers",
            "Schema/ripple/overview",
            "Schema/ripple/payments",
            "Schema/ripple/rippleStates",
            "Schema/ripple/transactions",
            "Schema/ripple/transfers",
          ],
        },
        {
          type: "category",
          label: "Tezos",
          items: [
            "Schema/tezos/address",
            "Schema/tezos/arguments",
            "Schema/tezos/balanceUpdates",
            "Schema/tezos/blocks",
            "Schema/tezos/coinpath",
            "Schema/tezos/operations",
            "Schema/tezos/transactions",
            "Schema/tezos/transfers",
          ],
        },
        
        {
          type: "category",
          label: "Tron",
          items: [
            "Schema/tron/address",
            "Schema/tron/arguments",
            "Schema/tron/blocks",
            "Schema/tron/coinpath",
            "Schema/tron/contracts",
            "Schema/tron/dexTrades",
            "Schema/tron/overview",
            "Schema/tron/smartContractCalls",
            "Schema/tron/smartContractEvents",
            "Schema/tron/transactions",
            "Schema/tron/transfers",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Examples",
      link: {
        type: "generated-index",
        title: "API Examples",
        description: "Real-world examples for blockchain APIs.",
      },
      items: [
        {
          type: "category",
          label: "L1 Chains",
          items: [
            {
              type: "category",
              label: "Ethereum",
              items: [
                "Examples/activeAddresses/blockchain-active-addresses-api",
                "Examples/dexTrades/dex-pool-api",
                "Examples/dexTrades/dex-trading-data-api",
                "Examples/dexTrades/ohlc",
                "Examples/Transactions/Trace_API",
              ],
            },
            {
              type: "category",
              label: "Algorand",
              items: [
                "Examples/algorand/address",
                "Examples/algorand/arguments",
                "Examples/algorand/blocks",
                "Examples/algorand/coinpath",
                "Examples/algorand/smartContractCalls",
                "Examples/algorand/transactions",
                "Examples/algorand/transfers",
              ],
            },
            {
              type: "category",
              label: "Avalanche",
              items: ["Examples/avalanche/avax-trades-api"],
            },
            {
              type: "category",
              label: "Bitcoin",
              items: [
                "Examples/bitcoin/Bitcoin-Blocks-API",
                "Examples/bitcoin/Bitcoin-Coinpath-API",
                "Examples/bitcoin/Bitcoin-Input-and-Output API",
                "Examples/bitcoin/Bitcoin-OmniTransactions-and-OmniTransfers API",
                "Examples/bitcoin/Bitcoin-Transaction-API",
                "Examples/bitcoin/bitcoin-address-api",
              ],
            },
            {
              type: "category",
              label: "Cosmos",
              items: [
                "Examples/cosmos/address",
                "Examples/cosmos/attributes",
                "Examples/cosmos/blocks",
                "Examples/cosmos/coinpath",
                "Examples/cosmos/messages",
                "Examples/cosmos/transactions",
                "Examples/cosmos/transfers",
              ],
            },

            {
              type: "category",
              label: "Hedera",
              items: [
                "Examples/hedera/hedera-address",
                "Examples/hedera/hedera-api-video",
                "Examples/hedera/hedera-io",
                "Examples/hedera/hedera-messages",
                "Examples/hedera/hedera-transactions",
              ],
            },

            {
              type: "category",
              label: "Filecoin",
              items: ["Examples/filecoin/messages"],
            },
            {
              type: "category",
              label: "Flow",
              items: ["Examples/Input_Output/IO_examples"],
            },
            {
              type: "category",
              label: "Ripple",
              items: [
                "Examples/ripple/balances",
                "Examples/ripple/nft_token_offers",
                "Examples/ripple/payments",
                "Examples/ripple/trades",
                "Examples/ripple/transfers",
              ],
            },
            {
              type: "category",
              label: "Solana",
              items: ["Examples/Solana/instructions"],
            },
            {
              type: "category",
              label: "Stellar",
              items: [
                "Examples/stellar/stellar-address-api",
                "Examples/stellar/stellar-effects-api",
                "Examples/stellar/stellar-liquiditypool-api",
                "Examples/stellar/stellar-payments-api",
                "Examples/stellar/stellar-tradeeffects-api",
                "Examples/stellar/stellar-transactions-api",
              ],
            },
            {
              type: "category",
              label: "Tron",
              items: [
                "Examples/tron/address",
                "Examples/tron/arguments",
                "Examples/tron/blocks",
                "Examples/tron/coinpath",
                "Examples/tron/contracts",
                "Examples/tron/dexTrades",
                "Examples/tron/smartContractCalls",
                "Examples/tron/smartContractEvents",
                "Examples/tron/trades",
                "Examples/tron/transaction",
                "Examples/tron/transfers",
              ],
            },
            {
              type: "category",
              label: "Dogecoin",
              items: [
                "Examples/Dogecoin/get-latest-price",
              ],
            },
            {
              type: "category",
              label: "Velas",
              items: [
                "Examples/velas/calls",
                "Examples/velas/events",
                "Examples/velas/trades",
                "Examples/velas/transactions",
                "Examples/velas/transfers",
              ],
            },
            {
              type: "category",
              label: "Zcash",
              items: ["Examples/Zcash/address-api"],
            },
          ],
        },
        {
          type: "category",
          label: "L2 Chains",
          items: [
            {
              type: "category",
              label: "Polygon (Matic)",
              items: ["Examples/address/specific-queries"],
            },
            {
              type: "category",
              label: "Staking (Beacon Chain)",
              items: ["Examples/Beacon Chain Examples/eth2_examples"],
            },
          ],
        },
        {
          type: "category",
          label: "Coinpath",
          items: ["Examples/coinpath/money-flow-api"],
        },
        {
          type: "category",
          label: "Miscellaneous",
          items: [
            {
              type: "category",
              label: "Smart Contracts",
              items: [
                "Examples/smartcontractCalls/smart-contract-calls-api",
                "Examples/smartcontractEvents/Non_EVM_events",
                "Examples/smartcontractEvents/smart-contract-events-api",
              ],
            },
            {
              type: "category",
              label: "Transactions",
              items: [
                "Examples/Transactions/input-output-api",
                "Examples/Transactions/transaction-api",
              ],
            },
            {
              type: "category",
              label: "Transfers",
              items: ["Examples/Transfers/transfer-api"],
            },
          ],
        },
      ],
    },

    {
      type: "category",
      label: "Use Cases",
      link: {
        type: "generated-index",
        title: "Practical Use Cases",
        description: "Explore real-world applications of blockchain APIs.",
      },
      items: [
        "Use-Cases/crypto-ml-price-prediction",
        "Use-Cases/multi-chain-portfolio-tracker",
        "Use-Cases/react-example",
        "Use-Cases/tradeAmount-heatmap",
        "Use-Cases/tradingview",
        "Use-Cases/wordpress-wpgetapi",
      ],
    },
    {
      type: "category",
      label: "API Blog",
      link: {
        type: "generated-index",
        title: "API Blog",
        description: "Latest insights and updates on APIs.",
      },
      items: ["API-Blog/dogecoin-wallet-auditing"],
    },
  ],
};

module.exports = sidebars;
