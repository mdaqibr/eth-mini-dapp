const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MyNFT", function () {
  it("should mint NFT when user has tokens", async function () {
    const [owner, user] = await ethers.getSigners();

    const Token = await ethers.getContractFactory("MyToken");
    const token = await Token.deploy(ethers.parseEther("1000"));

    const NFT = await ethers.getContractFactory("MyNFT");
    const nft = await NFT.deploy(await token.getAddress(), ethers.parseEther("100"));

    await token.transfer(user.address, ethers.parseEther("200"));
    await token.connect(user).approve(await nft.getAddress(), ethers.parseEther("100"));

    await nft.connect(user).mintNFT("ipfs://sample");

    expect(await nft.ownerOf(0)).to.equal(user.address);
  });
});
