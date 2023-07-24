# Blocks

The `blocks` field allows us to retrieve details about the blocks from the Bitcoin network.

Here is an exmaple that demonstrates how to retrieve blocks data:

```
query MyQuery {
  bitcoin {
    blocks(options: {limit: 10, desc: "timestamp.iso8601"}) {
      blockHash
      blockSize
      blockSizeBigInt
      blockStrippedSize
      blockVersion
      blockWeight
      chainwork
      difficulty
      height
      timestamp {
        iso8601
      }
    }
  }
}
```

<details>
<summary>Filtering Blocks</summary>

Blocks can be filtered using the following arguments:

-   `any`:
-   `blockHash`: Filter by block hash
-   `blockSize`: Filter by block size
-   `blockStrippedSize`: Filter by stripped size of block
-   `blockVersion`: Filter by version of the block
-   `blockWeight`: Filter by block weight
-   `date`: Filter by selecting time in range, list or just date
-   `difficulty`: Filter by difficulty of the network
-   `height`: Filter by selecting height of the block
-   `options`: Filter returned data by ordering, limiting, and constraining it.
-   `time`: Filter by selecting time in range, list or just time
-   `transactionCount`: Filter by transction count in the block

</details>

The following fields are available for the `blocks`:

-   `any`:
-   `blockHash`: returns hash of block
-   `blockSize`: returns size of the block
-   `blockSizeBigInt`: returns size of the block in `BigInt` format
-   `blockStrippedSize`: returns stripped size of block
-   `blockVersion`: returns version of block
-   `blockWeight`: returns block weight
-   `chainwork`: returns chainwork for Bitcoin
-   `count`: returns aggregate count of blocks
-   `countBigInt`: returns aggregate count of blocks in `BigInt` format
-   `date`: returns date when block was mined
-   `difficulty`: returns difficulty
-   `expression`: performs arithematic operation on fields in the query and returns value of the operation
-   `height`: returns height of the block
-   `maximum`: returns maximum of selected [measurable fields](/v1/docs/graphql-reference/enums/bitcoin-blocks-measureable) of Bitcoin Blocks
-   `medianTime`: returns median timestamp for block
-   `minimum`: returns maximum of selected [measurable fields](/v1/docs/graphql-reference/enums/bitcoin-blocks-measureable) of Bitcoin Blocks
-   `timestamp`: returns block timestamp
-   `transactionCount`: returns number of transactions in block