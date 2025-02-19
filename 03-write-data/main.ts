import "dotenv/config";
import { Connection, Transaction, SystemProgram, sendAndConfirmTransaction, PublicKey } from "@solana/web3.js";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";

const suppliedToPubkey = process.argv[2] || '52SrFCjK1gEeRty6coTw6qA1kLpKMNVLN9py5qpHcFe2';
const suppliedFromUser = process.argv[3] || 'alice';

let suppliedFromVariableName: string;

switch (suppliedFromUser) {
  case 'alice':
    suppliedFromVariableName = "ALICE_SECRET_KEY";
    break;
  case 'bob':
    suppliedFromVariableName = "BOB_SECRET_KEY";
    break;
  default:
    console.log(`❌ Please provide a valid user to send from.`);
    process.exit(1);
}

if (!suppliedToPubkey) {
  console.log(`❌ Please provide a public key to send to`);
  process.exit(1);
}

const senderKeypair = getKeypairFromEnvironment(suppliedFromVariableName);

// Create a PublicKey object from the supplied public key
const toPubkey = new PublicKey(suppliedToPubkey);
// Connect to the cluster
const connection = new Connection("https://api.devnet.solana.com", "confirmed");

console.log("✅ Loaded our own keypair, the destination public key, and connected to Solana");

// Create a new Transaction object
const transaction = new Transaction();
// Add a SystemProgram instruction to transfer lamports from the sender to the recipient
const sendSolInstruction = SystemProgram.transfer({
  fromPubkey: senderKeypair.publicKey,
  toPubkey,
  lamports: 5000,
});
// Add the instruction to the Transaction object
transaction.add(sendSolInstruction);
// Sign the transaction with the sender's keypair and send it
const signature = await sendAndConfirmTransaction(connection, transaction, [senderKeypair]);

console.log(`💸 Finished! Sent 5000 Lamports to the address ${toPubkey}.`);
console.log(`Transaction signature is ${signature}!`);