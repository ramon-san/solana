import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

const suppliedPublicKey = process.argv[2];
const network = process.argv[3];
let connectionEndpoint: string;

switch (network) {
  case "mainnet":
    console.log("Using mainnet for the connection endpoint!");
    connectionEndpoint = "https://api.mainnet-beta.solana.com";
    break;
  case "testnet":
    console.log("Using testnet for the connection endpoint!");
    connectionEndpoint = "https://api.testnet.solana.com";
    break;
  default:
    console.log("Using devnet for the connection endpoint!");
    connectionEndpoint = "https://api.devnet.solana.com";
}

if (!suppliedPublicKey) {
  throw new Error("❌ Provide a public key to check the balance of!");
}

try {
  const connection = new Connection(connectionEndpoint, "confirmed");
  const publicKey = new PublicKey(suppliedPublicKey);
  const balanceInLamports = await connection.getBalance(publicKey);
  const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

  console.log(`The balance of ${publicKey} is ${balanceInSOL} SOL!`);
  console.log("✅ Finished!");
} catch (error) {
  console.error(`❌ ${error}`);
  process.exit(1);
}