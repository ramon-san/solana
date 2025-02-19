# Solana Tutorial

Throughout this tutorial we use Node.js to interact with the Solana blockchain. We use the `@solana/web3.js` library for all interactions.

## Setup

To follow this tutorials it is recommended to have the LTS (Long Term Support) version of Node.js installed. When using MacOS, the easiest way to do this is to download `nvm` (Node Version Manager).

```bash
brew install nvm
```

> If you already have an installed version of node aside from the one installed with `nvm`, you should uninstall it before proceeding.

After installing `nvm`, you should create NVM's working directory if it doesn't exist:

```bash
mkdir ~/.nvm
```

Following this you should add the following to your shell profile (`~/.zshrc`):

```bash
export NVM_DIR="$HOME/.nvm"
[ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && \. "/opt/homebrew/opt/nvm/nvm.sh"  # This loads nvm
[ -s "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion
```

> After editing the shell profile use `source ~/.zshrc` to apply the changes. 

Finally, you can install the LTS version of Node with the following command:

```bash
nvm install --lts
```

> After installation if you have multiple versions, you can switch using `nvm use --lts`.

## Resources

For this tutorial we created two Wallets in the Solana Devnet:

| | Public Key |
| --- | --- |
| Alice | `GiiN6h7BFMxPQ2zmiYZ7m8QffaQjGHomKRrmgtNtvXMT` |
| Bob | `52SrFCjK1gEeRty6coTw6qA1kLpKMNVLN9py5qpHcFe2` |

The tutorial contains the following folders:

| Repo | Description | Link |
| --- | --- | --- |
| 1 | [Keypair](./01-keypair) | Generate or load a Solana keypair. | [Website](https://solana.com/developers/courses/intro-to-solana/intro-to-cryptography) |
| 2 | [Read Data](./02-read-data) | Read data from the Solana network, simple query to check wallet balance. | [Website](https://solana.com/developers/courses/intro-to-solana/intro-to-reading-data) |
| 3 | [Write Data](./03-write-data) | Create a transaction on the Solana network. | [Website](https://solana.com/developers/courses/intro-to-solana/intro-to-writing-data) |