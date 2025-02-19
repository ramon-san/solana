# Writing Data

All modifications to onchain data happen through **transactions**. Transactions are mostly a set of instructions that invoke Solana programs. Transactions are atomic, meaning they either succeed—if all the instructions have been executed properly—or fail as if the transaction hasn't been run at all.

The steps within a transaction on Solana are called **instructions**. Each instruction contains:
- An array of accounts that will be read from and/or written to. This is what makes Solana fast; transactions that affect different accounts are processed simultaneously.
- The public key of the program to invoke.
- Data passed to the program being invoked, structured as a byte array.

When a transaction is run, one or more Solana programs are invoked with the instructions included in the transaction.

With the `@solana/web3.js` library, you can create a new transaction with the constructor, `new Transaction()`. Once created, you can add instructions to using the `add()` method.

Given that Solana is public, you can view all transactions in the [Solana Explorer](https://explorer.solana.com/). If you do a transaction and copy-paste its signature, you can see its details. You can also use the explorer to match SNS (Solana Name Service) names to public keys. To see real-time transactions, you can use [Solscan](https://solscan.io/txs).

## Using the script

To run the script:

```bash
npx esrun 03-write-data/main.ts <DESTINATION_WALLET_ADDRESS> <SENDER>
```

- `DESTINATION_WALLET_ADDRESS`: The public key of the wallet to send the transaction to. If not specified it defaults to Bob's wallet.
- `SENDER`: The name of the user that will send the transaction (`alice` or `bob`). If not specified it defaults to Alice.