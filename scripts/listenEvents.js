// const { ethers } = require("hardhat");

// const ERC20_ADDRESS = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";
// const NFT_ADDRESS  = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9";

// async function main() {
//   const token = await ethers.getContractAt("MyToken", ERC20_ADDRESS);
//   const nft   = await ethers.getContractAt("MyNFT", NFT_ADDRESS);

//   console.log("👂 Listening for events...");

//   token.on("Transfer", (from, to, value) => {
//     console.log(`ERC20 → ${from} → ${to}: ${value.toString()}`);
//   });

//   nft.on("NFTMinted", (owner, tokenId) => {
//     console.log(`NFT Minted → ${owner}, ID ${tokenId.toString()}`);
//   });
// }

// main();


const { ethers } = require("hardhat");

const ERC20_ADDRESS = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";
const NFT_ADDRESS  = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9";

async function main() {
  const token = await ethers.getContractAt("MyToken", ERC20_ADDRESS);
  const nft   = await ethers.getContractAt("MyNFT", NFT_ADDRESS);

  console.log("👂 Listening for events...");

  token.on("Transfer", (from, to, value) => {
    console.log(`ERC20 → ${from} → ${to}: ${value.toString()}`);
  });

  nft.on("NFTMinted", (owner, tokenId) => {
    console.log(`NFT Minted → ${owner}, ID ${tokenId.toString()}`);
  });

  // 🔒 KEEP PROCESS ALIVE
  await new Promise(() => {});
}

main().catch(console.error);
