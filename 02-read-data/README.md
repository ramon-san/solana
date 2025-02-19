# Reading Data

We learn how to read data from the Solana blockchain. We do a quick balance check of our wallet.

Every interaction with the Solana network using `@solana/web3.js` is going to happen through a `Connection` object. The `Connection` object establishes a connection with a specific Solana network, called a 'cluster'. On a high level, Solana has three clusters:
- **Mainnet:** Live production environment for deployed applications.
- **Devnet:** Testing with public accessibility for developers experimenting with their applications.
- **Testnet:** Stress-testing for network upgrades and validator performance.

To add SOL to your `Devnet` wallet, visit the [Solana Faucet](https://faucet.solana.com/) and paste your wallet address (public key).

In this code example we communicate with an API hosted by Solana Labs. The API is rate-limited, but it is a good way to get started with Solana development.

> _The public RPC (Remote Procedure Call) endpoints are not intended for production applications. Please use dedicated/private RPC servers when you launch your application, drop NFTs, etc. The public services are subject to abuse and rate limits may change without prior notice. Likewise, high-traffic websites may be blocked without prior notice._ - [Solana Docs](https://solana.com/docs/references/clusters)

## Using the script

To run the script:

```bash
npx esrun 02-read-data/main.ts <WALLET_ADDRESS> <CLUSTER>
```

- `<WALLET_ADDRESS>` is the public key of the wallet you want to check the balance of (my public key for devnet is `GiiN6h7BFMxPQ2zmiYZ7m8QffaQjGHomKRrmgtNtvXMT`).
- `<CLUSTER>` is the cluster you want to connect to. It can be `devnet`, `testnet`, or `mainnet`. If not provided, it defaults to `devnet`.

> **Note:** Run the command in the root of the project, the `.env` file should also be saved at root.