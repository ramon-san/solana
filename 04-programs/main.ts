import "dotenv/config";
import * as web3 from "@solana/web3.js";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";

const payer = getKeypairFromEnvironment("ALICE_SECRET_KEY");
const connection = new web3.Connection(web3.clusterApiUrl("devnet"));

const pingProgramAddress = "ChT1B39WKLS8qUrkLvFDXMhEJ4F1XZzwUNHUt4AU9aVa";
const pingProgramDataAddress = "Ah9K7dQ8EHaZqcAsgBW8w37yN2eAy3koFmUn4x3CJtod";

// Create a new transaction
const transaction = new web3.Transaction();
// Initialize public keys for the program and data accounts
const programId = new web3.PublicKey(pingProgramAddress);
const pingProgramDataId = new web3.PublicKey(pingProgramDataAddress);

// Create the instruction, in this program only the data account reference is needed.
const instruction = new web3.TransactionInstruction({
  keys: [
    {
      pubkey: pingProgramDataId,
      isSigner: false,
      isWritable: true,
    },
  ],
  programId,
});

// Add the instruction to the transaction
transaction.add(instruction);
// Send the transaction and sign it with the keypair that is paying for the transaction
const signature = await web3.sendAndConfirmTransaction(
  connection,
  transaction,
  [payer],
);

console.log(`You can view your transaction on Solana Explorer at:\nhttps://explorer.solana.com/tx/${signature}?cluster=devnet`);
console.log("✅ Finished!");