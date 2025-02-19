# Keypair

To use Solana you need a keypair. Your public key is used to identify you on the network, and your private key is used to sign transactions.

This script shows you how to generate a new keypair as well as how to load a prexisting keypair in case you already have one. To load an existing keypair, you an `.env` file with the following content:

```bash
SECRET_KEY="[(a series of numbers)]"
```

## Using the script

If you want to generate a new keypair:

```bash
npx esrun 01-keypair/main.ts generate
```

If you want to load an existing keypair:

```bash
npx esrun 01-keypair/main.ts load <PERSON>
```

Where `<PERSON>` is either `alice` or `bob` for this tutorial. If no `<PERSON>` is provided, the script will default to `alice`.

> **Note:** Run the command in the root of the project, the `.env` file should also be saved at root.