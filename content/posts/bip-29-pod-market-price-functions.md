---
title: 'Announcing BIP-29: Pod Market Price Functions'
subtitle: The Beanstalk DAO approves BIP-29.
date: 2022-11-11T22:56:47.042Z
author: Beanstalk Farms
description: The Beanstalk DAO approves BIP-29.
image: /assets/uploads/bip-29-passed.png
tag: Proposals
---
![](/assets/uploads/bip-29-passed.png)

Beanstalk Farms is pleased to announce that [BIP-29: Pod Market Price Functions](https://snapshot.org/#/beanstalkdao.eth/proposal/0x53c358af0fae50f888795c5f2272d50f8759b7702bf7dc2255a03f9fb22ccf45) has passed by a vote of the DAO. 

## Pod Market Price Functions

BIP-29 proposed the following to implement the following changes:

* Implementing V2 Pod Orders and Listings such that the Price per Pod is priced as a function of place in the Pod Line (via piecewise cubic polynomials);
* Allowing Farmers to delegate use of their Farm balances to other contracts and add EIP-2612 permit support to Farm balances; and
* Adding EIP-2612 permit support for Silo Deposits.

The Pod Market used to limit Farmers to creating Pod Orders and Listings with a single Fill price per Pod independent of place in Line. Pod Orders and Listings with a single Fill price failed to maximize overall marketplace liquidity by requiring the placing or updating of multiple Orders/Listings in order to create a non-flat pricing curve, which would be highly expensive for users.

Now that Pod Orders and Listings can be dynamically priced, market efficiency and depth should improve. Pod Market V2 functionality isn't yet live on the Beanstalk UI and will be rolled out over the course of the next several weeks and months.

With EIP-2612 permit support for Silo Deposits and Farm balances, the number of transactions required to interact with Beanstalk decreases. This will enable projects like [Root](https://roottoken.org/) to allow users to interact with their protocols and Beanstalk in a single transaction.

## About Beanstalk

Beanstalk is a decentralized protocol that allows anyone to realize the value of an open, permissionless fiat stablecoin. The Beanstalk community of lenders, borrowers and savers secures a protocol-native stablecoin, Bean, with the goal of creating the world’s most accessible digital money system. By eliminating collateral requirements, Beanstalk can be the catalyst for a trustless money that unlocks the potential of decentralized finance for everyone.
* 