# 0x Solana Swap Example

This TypeScript project demonstrates how to interact with the [0x Swap API for Solana](https://docs.0x.org) to get a quote, build swap instructions, and send a swap transaction.

## Example Output

```bash
➜  0x-solana-example git:(main) ✗ npm run index

> 0x-solana-example@1.0.0 index
> tsx src/index.ts

💰 Quote received
✅ Simulation succeeded
✍️ Transaction sent with signature: 2TDhPBiHTQWzcJf72VGnXRaq4mpAN3qymbTC4brg4vdQvXBWirEsmzNCMbb3htKBgsz2yiksjtH4qkVr5mScf12H
✅ Transaction confirmed: https://solscan.io/tx/2TDhPBiHTQWzcJf72VGnXRaq4mpAN3qymbTC4brg4vdQvXBWirEsmzNCMbb3htKBgsz2yiksjtH4qkVr5mScf12H/
```

## What It Does

This script performs the following steps:

1. Loads environment variables from `.env` (0x API key, private key, RPC URL).
2. Fetches a swap quote from the 0x `/swap-instructions` endpoint.

If you have provided a private key:

3. Builds and signs a transaction from the instructions.
4. Simulates the transaction to catch errors before sending.
5. Sends a transaction to the Solana blockchain to execute the swap.

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/0xProject/0x-solana-example.git
cd 0x-solana-example
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create a `.env` File

Copy the example from [.env.example](./.env.example) into a new `.env` file:

| Variable Name    | Description                                                                                                          | Required | Default Value                         |
| ---------------- | -------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------- |
| `ZEROEX_API_KEY` | API Key for use with 0x Solana API.                                                                                  | ✅       | _None_                                |
| `PRIVATE_KEY`    | Must be base58-encoded.                                                                                              | ❌       | _Random generated_                    |
| `RPC_URL`        | Valid Solana RPC HTTP endpoint. For example, get a free RPC key and endpoint from [Helius](https://www.helius.dev/). | ❌       | `https://api.mainnet-beta.solana.com` |

### 4. Run the Example

```bash
npm run index
```

## 📝 Notes

- The amount and token mint addresses are hardcoded for simplicity (SOL → USDC), but can be parameterized.
