const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MyToken", function () {
  it("should transfer tokens", async function () {
    const [owner, user] = await ethers.getSigners();

    const Token = await ethers.getContractFactory("MyToken");
    const token = await Token.deploy(ethers.parseEther("1000"));

    await token.transfer(user.address, ethers.parseEther("100"));

    const balance = await token.balanceOf(user.address);
    expect(balance).to.equal(ethers.parseEther("100"));
  });
});
