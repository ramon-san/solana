# Onchain Programs

Solana has multiple onchain programs you can use. Instructions that use these programs have data in a custom format determined by the specific function being invoked in the onchain program.

When working with programs other than the System program, you'll need to create instructions manually. Using `@solana/web3.js`, you can create instructions with the `TransactionInstruction` constructor. This takes three fields:
- `programId`: The address of the program you're invoking.
- `keys`: An array of objects containing `pubkey` (public key), `isSigner` (boolean), and `isWritable` (boolean).
- `data`: An optional buffer containing the data to pass to the program.

For this example we will ping an onchain program that increments a counter each time it has been called. The program exists in `Devnet` at the address `ChT1B39WKLS8qUrkLvFDXMhEJ4F1XZzwUNHUt4AU9aVa`. The program then stores its data in a specific account at the address `Ah9K7dQ8EHaZqcAsgBW8w37yN2eAy3koFmUn4x3CJtod`.