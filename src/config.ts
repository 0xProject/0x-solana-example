import { Connection, Keypair } from "@solana/web3.js";
import { z } from "zod";
import bs58 from "bs58";

const SOLANA_DEFAULT_RPC_URL = "https://api.mainnet-beta.solana.com";

const EnvironmentConfigurationSchema = z.object({
  ZEROEX_API_KEY: z.string().nonempty(),
  PRIVATE_KEY: z.string().optional(),
  RPC_URL: z.url().default(SOLANA_DEFAULT_RPC_URL),
});

interface KeypairConfig {
  keypair: Keypair;
  isUserProvided: boolean;
}

export interface Config {
  zeroexApiKey: string;
  connection: Connection;
  keypairConfig: KeypairConfig;
}

export function fetchConfig(): Config {
  const environmentConfiguration = EnvironmentConfigurationSchema.parse(
    process.env
  );

  return {
    zeroexApiKey: environmentConfiguration.ZEROEX_API_KEY,
    connection: new Connection(environmentConfiguration.RPC_URL),
    keypairConfig: {
      keypair: environmentConfiguration.PRIVATE_KEY
        ? Keypair.fromSecretKey(
            bs58.decode(environmentConfiguration.PRIVATE_KEY)
          )
        : Keypair.generate(),
      isUserProvided: !!environmentConfiguration.PRIVATE_KEY,
    },
  };
}
