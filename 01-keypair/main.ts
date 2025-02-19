import { Keypair } from "@solana/web3.js";
import "dotenv/config";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";

const loadKey = (person: string) => {
  let variableName: string;

  switch (person) {
    case "alice":
      variableName = "ALICE_SECRET_KEY";
      break;
    case "bob":
      variableName = "BOB_SECRET_KEY";
      break;
    default:
      console.log(`❌ Please provide either 'alice' or 'bob' as a person`);
      process.exit(1);
  }

  const keypair = getKeypairFromEnvironment(variableName);

  console.log(`The public key is: `, keypair.publicKey.toBase58());
  console.log(`✅ Finished!`);
}

const generateKey = () => {
  const keypair = Keypair.generate();

  console.log(`The public key is: `, keypair.publicKey.toBase58());
  console.log(`The secret key is: `, keypair.secretKey);
  console.log(`✅ Finished!`);
}

// Get the command line argument
const command = process.argv[2];
const person = process.argv[3] || "alice";

// Execute the appropriate function based on the command
switch (command) {
  case "load":
    loadKey(person);
    break;
  case "generate":
    generateKey();
    break;
  default:
    console.log("❌ Please specify either 'load' or 'generate' as a command");
}