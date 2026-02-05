# Mini Decentralized Asset Platform (Ethereum)

A mini decentralized application built using **Ethereum**, **Hardhat**, **ERC20**, and **ERC721 (NFT)** standards.  
This project demonstrates smart contract development, deployment, wallet interaction, and real-time blockchain event handling.

---

## 📌 Features

- ✅ ERC20 Token (fungible asset)
- ✅ ERC721 NFT (non-fungible asset)
- ✅ Token-based NFT minting
- ✅ Local Ethereum blockchain using Hardhat
- ✅ Event handling (ERC20 transfers & NFT mint events)
- ✅ Off-chain event listener
- ✅ Wallet interaction via Hardhat signers

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
---
## ⚙️ Tech Stack

- Solidity – Smart contracts
- Hardhat – Ethereum development framework
- OpenZeppelin – Secure contract standards
- Ethers.js (v6) – Blockchain interaction
- Node.js – Runtime environment

## 🚀 How the Application Works (Flow)
##### Local Blockchain
- Hardhat runs a local Ethereum node with pre-funded test accounts.

##### Contract Deployment

- MyToken (ERC20) is deployed and mints tokens to the deployer.
- MyNFT (ERC721) is deployed and linked to the ERC20 contract.
- NFT minting requires ERC20 token payment.

##### Event Handling

- ERC20 emits Transfer events
- NFT emits NFTMinted events
- An off-chain script listens to these events in real time

##### User Interaction

- Tokens can be transferred between accounts
- NFTs can be minted
- Events are captured and logged

---
## 🛠️ Setup Instructions
##### Prerequisites
Make sure you have:
- Node.js v18+
- npm
- Linux / macOS / Windows

Check versions:
```
node -v
npm -v
```
## 📦 Installation

Clone the repository:
```
git clone <repo-url>
cd mini-dapp
```

Install dependencies:
```
npm install
```
---
## ▶️ Running the Application
##### 🟢 Step 1: Start Local Blockchain

Open Terminal 1:
```
npx hardhat node
```

This starts a local Ethereum network at:
```
http://127.0.0.1:8545
```
##### 🟢 Step 2: Deploy Smart Contracts

Open Terminal 2:
```
npm run deploy
```

Example output:
```
Deploying with: 0xf39F...
ERC20 deployed to: 0x5FbDB231...
NFT deployed to: 0xe7f1725E...
```
📌 Save these contract addresses.

##### 🟢 Step 3: Update Event Listener

Edit:
```
scripts/listenEvents.js
```

Replace:
```
const ERC20_ADDRESS = "PASTE_ERC20_ADDRESS";
const NFT_ADDRESS  = "PASTE_NFT_ADDRESS";
```

with the deployed addresses.

##### 🟢 Step 4: Listen for Blockchain Events

Open Terminal 3:
```
npm run listen
```

Output:
```
👂 Listening for events...
```
##### 🟢 Step 5: Interact Using Hardhat Console

Open Terminal 4:
```
npx hardhat console --network localhost
```

Transfer ERC20 tokens:
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

You’ll see the event in the listener terminal:
```
ERC20 → sender → receiver: 100
```