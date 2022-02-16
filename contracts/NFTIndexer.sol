// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

import "../interfaces/IERC721.sol";

/**
 * @title NFTIndexer
 * NFTIndexer - Return owned tokens
 */
contract NFTIndexer {
    
    function tokensOfOwner(address _contract, address _owner) external view returns(uint256[] memory ownerTokens) {
        IERC721 contractInstance = IERC721(_contract);
        uint256 tokenCount = contractInstance.balanceOf(_owner);
        if (tokenCount == 0) {
            // Return an empty array
            return new uint256[](0);
        } else {
            uint256[] memory result = new uint256[](tokenCount);
            uint256 totalTkns = contractInstance.totalSupply();
            uint256 resultIndex = 0;
            uint256 tnkId;

            for (tnkId = 1; tnkId <= totalTkns; tnkId++) {
                if (contractInstance.ownerOf(tnkId) == _owner) {
                    result[resultIndex] = tnkId;
                    resultIndex++;
                }
            }

            return result;
        }
    }

}
