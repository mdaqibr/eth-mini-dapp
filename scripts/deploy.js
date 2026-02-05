const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying with:", deployer.address);

  const Token = await ethers.getContractFactory("MyToken");
  const token = await Token.deploy(ethers.parseEther("100000"));
  await token.waitForDeployment();

  console.log("ERC20 deployed to:", await token.getAddress());

  const NFT = await ethers.getContractFactory("MyNFT");
  const nft = await NFT.deploy(
    await token.getAddress(),
    ethers.parseEther("100")
  );
  await nft.waitForDeployment();

  console.log("NFT deployed to:", await nft.getAddress());
}

main().catch(console.error);
