# Mini Decentralized Asset Platform (Ethereum)

A mini decentralized application built using **Ethereum**, **Hardhat**, **ERC20**, and **ERC721 (NFT)** standards.

This project demonstrates **smart contract development**, **wallet integration**, **token standards**, **event handling**, and **blockchain development workflows** as required in the assignment.

---

## 📌 Features

- ✅ ERC20 Token (fungible asset)
- ✅ ERC721 NFT (non-fungible asset)
- ✅ Token-based NFT minting
- ✅ Local Ethereum blockchain using Hardhat
- ✅ Wallet interaction (Hardhat + MetaMask)
- ✅ Real-time blockchain event handling
- ✅ Off-chain event listener

---

## 🗂️ Project Structure

```bash
mini-dapp/
│
├── contracts/
│   ├── MyToken.sol        # ERC20 token contract
│   └── MyNFT.sol          # ERC721 NFT contract
│
├── scripts/
│   ├── deploy.js          # Deploys ERC20 & NFT contracts
│   └── listenEvents.js    # Listens to blockchain events
│
├── hardhat.config.cjs     # Hardhat configuration
├── package.json
├── README.md

```
## ⚙️ Tech Stack
- Solidity – Smart contract language
- Hardhat – Ethereum development framework
- OpenZeppelin – Secure ERC20 & ERC721 standards
- Ethers.js (v6) – Blockchain interaction
- Node.js – Runtime environment
- MetaMask – Wallet integration

## 🚀 How the Application Works (End-to-End Flow)
### Local Blockchain Creation
- Hardhat creates a local Ethereum blockchain using:
```
npx hardhat node
```
- Runs at http://127.0.0.1:8545
- Generates 20 pre-funded test accounts
- Simulates real Ethereum behavior (blocks, gas, transactions)
- This fulfills the requirement for using a blockchain development framework.

### Smart Contract Deployment
- Contracts are deployed using:
```
npm run deploy
```

Deployment flow:
1. MyToken (ERC20)

   - Mints initial supply to the deployer
   - Emits Transfer events

2. MyNFT (ERC721)

   - Linked to the ERC20 token
   - Requires ERC20 tokens to mint NFTs
   - Emits NFTMinted events

This fulfills:

- Smart contract development
- ERC20 & ERC721 token standards

### Wallet Interaction (Hardhat + MetaMask)
🔹 Hardhat Wallet
- Uses auto-generated test accounts
- Managed via ethers.getSigners()
- Used for deployment and testing

🔹 MetaMask Wallet Connection
- To connect MetaMask to the local blockchain:

   1. Open MetaMask
   2. Add a new network:
```
Network Name: Hardhat Local
RPC URL: http://127.0.0.1:8545
Chain ID: 31337
Currency Symbol: ETH
```
   3. Import a Hardhat account using a private key printed in the terminal

MetaMask now interacts with the same local blockchain.

This fulfills the wallet integration requirement.

## Blockchain Event Handling
The script listenEvents.js listens to blockchain events off-chain.

Events captured:

- ERC20 Transfer
- ERC721 NFTMinted

Run the listener:
```
npm run listen
```
Example output:
```
ERC20 → sender → receiver: 100
NFT Minted → owner, TokenID
```
This fulfills the event handling requirement.

## User Interaction (Console)
Use Hardhat console to interact with contracts:
```
npx hardhat console --network localhost
```
Example ERC20 transfer:

```
const token = await ethers.getContractAt(
  "MyToken",
  "ERC20_ADDRESS"
);

await token.transfer(
  "RECIPIENT_ADDRESS",
  100
);
```
The event is instantly detected by the listener.

## Setup Instructions
Prerequisites
- Node.js v18+
- npm

Check versions:
```
node -v
npm -v
```

## 📦 Installation
```
git clone <repository-url>
cd mini-dapp
npm install
```

## ▶️ Running the Application
### Step 1: Start Local Blockchain
```
npx hardhat node
```
### Step 2: Deploy Contracts
```
npm run deploy
```
Save the deployed contract addresses.

### Step 3: Update Event Listener
```
scripts/listenEvents.js
```
Paste deployed addresses:
```
const ERC20_ADDRESS = "0x...";
const NFT_ADDRESS  = "0x...";
```

### Step 4: Listen for Events
```
npm run listen
```

### Step 5: Interact via Console
```
npx hardhat console --network localhost
```