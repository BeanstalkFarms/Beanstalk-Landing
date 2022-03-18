---
title: 'WIP: Technical Explanation of BeaNFT'
description: >-
  In order to issue the BeanNFT Genesis Collections in a fair and decentralized
  fashion, there were a few complications we had to solve…
date: ''
categories: []
keywords: []
slug: ''
---

In order to issue the BeanNFT Genesis Collections in a fair and decentralized fashion, there were a few complications we had to solve technically. In designing a technical solution, our goals were to:

*   Generate the BeaNFTs based on the data of each Sow transaction;
*   Include the information from the Sow transaction in the BeaNFT metadata;
*   Distribute the BeaNFTs when they were earned, not at the end of the BeaNFT event;
*   Enable users to see their BeaNFTs before minting and only mint the ones they want to, as minting can be expensive;
*   Ensure that each NFT could only be minted to the address that earned the NFT;
*   Allow Bean Farmers to easily track the top Sows each season;
*   Be as decentralized as possible given the physical and time constraints.

This is the solution we came up with:

A subgraph deployed on the Graph Network processes Sow transactions and saves the relevant data in each Season. The subgraph also processes SeasonSnapshot events. When it does so, it saves the Season specific data and assigns NFT Ids to the top 10 Sows in that Season ordered by time of Sow. If there are less than 10 Sows, it assigns all Sows an NFT Id. The [bean.money](https://bean.money/) UI reads the data from the subgraph to display the top Sows, which accounts have earned what NFT Ids, and which BeaNFTs each account owns.

At the end of each Season, a script reads in the data for the newly generated NFTs, generates an NFT based off of the Sow data and uploads the image as well as the metadata to the IPFS. The script then signs the account, NFT Id and IPFS hash with a private key. This private key was randomly generated and only Publius has custody of this key. It then uploads the account, NFT Id, IPFS hash and signature to a database.

The UI calls the database to see all NFTs that **can (delete “can”)** have been distributed to the address associated with the connected Metamask account. It reads event calls from the BeaNFT smart contract to see if any of the account’s BeaNFTs have already been minted and then displays all unminted NFTs to the user and gives them the option to mint them.

The BeaNFT smart contract has a signer stored in its memory. This signer is the public key that is associated with the private key that was used to sign each NFT data. Thus, a BeaNFT cannot be minted if it cannot verify that the address, Id and hash combination was by the private key associated with the signer stored in the contract. The signer can only be set by the address that owns the smart contract (which is Publius’s wallet). and ownership privileges can be relinquished.

The `mint` call takes in 4 variables: address, NFT Id, IPFS hash and signature. There is also a `mintAll` function that takes in 4 arrays of the 4 different variables. The contract that verifies that:

*   The submitted signature matches the 3 variables that were submitted alongside the signature;
*   The signature was signed by the correct private key;
*   The NFT Id has not yet been minted.

Thus, once an NFT has been minted, it cannot be changed or redistributed by anyone other than the owner of the NFT.

Once the event is over and all NFTs have been minted Publius will set the signer address to the burn address and relinquish ownership of the smart contract.