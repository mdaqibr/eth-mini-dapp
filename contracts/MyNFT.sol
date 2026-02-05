// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract MyNFT is ERC721URIStorage, Ownable {
    uint256 public tokenCounter;
    IERC20 public paymentToken;
    uint256 public mintFee;

    event NFTMinted(address indexed owner, uint256 tokenId);
    event NFTTransferred(address indexed from, address indexed to, uint256 tokenId);

    constructor(address _tokenAddress, uint256 _mintFee)
        ERC721("MyNFT", "MNFT")
        Ownable(msg.sender)
    {
        paymentToken = IERC20(_tokenAddress);
        mintFee = _mintFee;
    }

    function mintNFT(string memory tokenURI) external {
        require(
            paymentToken.balanceOf(msg.sender) >= mintFee,
            "Not enough tokens to mint NFT"
        );

        require(
            paymentToken.allowance(msg.sender, address(this)) >= mintFee,
            "Approve tokens first"
        );

        paymentToken.transferFrom(msg.sender, owner(), mintFee);

        uint256 tokenId = tokenCounter;
        tokenCounter++;

        _safeMint(msg.sender, tokenId);
        _setTokenURI(tokenId, tokenURI);

        emit NFTMinted(msg.sender, tokenId);
    }

    /**
     * @dev OpenZeppelin v5 transfer hook replacement
     * Called on mint, transfer, and burn
     */
    function _update(
        address to,
        uint256 tokenId,
        address auth
    ) internal override returns (address from) {
        from = super._update(to, tokenId, auth);

        // Emit only on real transfers (not mint or burn)
        if (from != address(0) && to != address(0)) {
            emit NFTTransferred(from, to, tokenId);
        }
    }
}
