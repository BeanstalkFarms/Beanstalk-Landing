---
title: "BIP-15: Demand for Soil Improvement"
subtitle: Beanstalk DAO approves new optimization of Soil demand measurement.
date: 2022-04-07T22:37:17.554Z
author: Beanstalk Farms
description: Today, Beanstalk Farms is pleased to announce that BIP-15, which
  optimizes how Soil demand is measured, has been passed by an on-chain vote of
  the Beanstalk DAO.
tag: Proposals
---
<!--StartFragment-->

Today, Beanstalk Farms is pleased to announce that [BIP-15](https://github.com/BeanstalkFarms/Beanstalk/pull/62), which optimizes how Soil demand is measured, has been passed by an on-chain vote of the Beanstalk DAO. 

**The Field and Sub-Optimal Soil Demand Calculation**

The Field is Beanstalk’s decentralized credit facility. It offers yield opportunities to creditors for participating in peg maintenance. Anyone can become a Bean Farmer by Sowing Beans (lending Beans to Beanstalk) when the Soil (number of Beans Beanstalk is willing to borrow) is non-zero. Sown Beans are burned and exchanged for Pods based on the Weather (the Beanstalk-native interest rate) at the time the Sow is made. Pods become Harvestable (redeemable for Beans 1:1) on a FIFO basis when the Bean supply expands in response to excess demand for Beans.

Prior to BIP-15, the Beanstalk DAO passed two BIPs - BIP-6 and BIP-9 - aimed at optimizing Beanstalk’s Soil issuance model. While the new Soil supply model has had a strong effect on peg maintenance, as evidenced by the change in the acceleration of the Pod Rate following the implementation of BIP-9, the amount of Soil available each Season now changes significantly from Season to Season. The Soil demand measurement system was not designed to measure demand for Soil with a volatile Soil supply.

Furthermore, during periods of heavy demand for Soil, users frequently experienced transaction failures, resulting in a sub-optimal user experience and an inefficiency in the Soil market.

**BIP-15 Overview**

BIP-15 simplifies and adds new qualifications for calculating Soil demand that accounts for potential swings in the Soil supply from Season to Season.

BIP-15 also adds a parameter to Sow function calls for the minimum Beans to Sow such that even if the maximum Beans to Sow is unavailable, some Beans are still Sown. 

These changes improve Soil market efficiency and reduce operational burdens like excess transaction failures for users.

## About Beanstalk

Beanstalk is a decentralized protocol that allows anyone to realize the value of an open, credit based stablecoin. The Beanstalk community of lenders, borrowers and savers secures a protocol-native stablecoin, Bean, with the goal of creating the world’s most accessible digital money system. By eliminating collateral requirements, Beanstalk aims to be the catalyst for a trustless solution to unlock the universal potential of decentralized finance. Learn more at [bean.money](http://bean.money).

<!--EndFragment-->