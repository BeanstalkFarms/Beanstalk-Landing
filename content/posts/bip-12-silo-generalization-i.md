---
title: "BIP-12: Silo Generalization I"
date: "2019-09-06"
thumbnail: https://i.picsum.photos/id/1003/1181/1772.jpg?hmac=oN9fHMXiqe9Zq2RM6XT-RVZkojgPnECWwyEF1RvvTZk
---

Today, Beanstalk Farms is pleased to announce that [BIP-12](https://github.com/BeanstalkFarms/Beanstalk/pull/46), which generalizes the Silo to support arbitrary token Deposits, has been passed by a vote of the Beanstalk DAO.

The Silo
========

The Silo is the Beanstalk DAO. It offers passive yield opportunities to Depositors for participation in the governance of Beanstalk upgrades via Beanstalk Improvement Proposals (BIPs). Anyone can become a Silo Member by Depositing whitelisted tokens into the Silo to earn Stalk. Stalk owners govern Beanstalk upgrades and are rewarded with half of new Bean mints when the Bean supply increases.

Prior to BIP-12's passing, the Silo only supported Deposits of Beans and LP Tokens for the BEAN:ETH Uniswap V2 liquidity pool.

BIP-12 Overview
===============

BIP-12 adds generalized token Deposit functionality to the Silo based on a mutable whitelist, and adds the BEAN:3CRV Curve pool to the whitelist. Each token on the whitelist must include a formula for Bean-denominated value (BDV), and the Stalk and Seed values per BDV Deposited.

Tokens can be added to or removed from the Silo whitelist via BIP. Tokens on the whitelist can be Deposited, Withdrawn and Claimed, but not Converted.

Incorporating other assets into the Silo via a whitelist allows Beanstalk to offer Stalk rewards to arbitrary liquidity pools, assets and protocols that strengthen the Beanstalk ecosystem. In doing so, BIP-12 strengthens Beanstalk's ability to attract and retain liquidity.

More information
================

BIP-12 is a community-led initiative developed by [Beanstalk Farms](https://twitter.com/BeanstalkFarms). If you have ideas for other Beanstalk-related projects, join the community discussion on [Discord](https://discord.gg/y4cJNv5DTM)!

To learn more about Beanstalk, please visit our [website](http://app.bean.money/).