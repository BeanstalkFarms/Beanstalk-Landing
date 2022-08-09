---
title: Introducing the BEAN:3CRV Pool
subtitle: A new stableswap liquidity pool seeded on Curve.
date: 2022-01-07T02:25:01.933Z
author: Beanstalk Farms
description: Beanstalk  announces the creation of a new BEAN:3CRV stableswap
  liquidity pool seeded on Curve.
image: /assets/uploads/bean-3crv.png
---
![](https://cdn-images-1.medium.com/max/800/1*dpCnV4b6lY8uUe8lqRh6Kg.png)

# **⚠️** THIS BLOG POST IS OUTDATED - THE BEAN TOKEN AND POOL THIS POST REFER TO ARE DEPRECATED

Today, Beanstalk Farms is pleased to announce the creation of a new BEAN:3CRV stableswap liquidity pool seeded on Curve, a leading Automated Market Maker (AMM) and decentralized exchange. We are thrilled to launch this integration as part of Beanstalk’s mission to bolster Bean price stability, increase utility, and expand access to the protocol.

Now that the BEAN:3CRV liquidity pool is open, anyone can add or remove liquidity [here](https://curve.fi/factory/81/deposit), and trade against it [here](https://curve.fi/factory/81).

## In this article we will cover:

* What is the BEAN:3CRV pool?
* How does the BEAN:3CRV pool benefit Beanstalk?
* How does the BEAN:3CRV pool benefit Beanstalk users?
* How to add and remove liquidity from the BEAN:3CRV pool

## What is the BEAN:3CRV pool?

To understand what the BEAN:3CRV pool is, it’s important to understand what Curve is, what the 3CRV liquidity pool is, and how Curve metapools function.

## Curve

Curve is an AMM and decentralized exchange optimized for stable digital assets. Oftentimes, the assets exchanged on Curve are stablecoins pegged to the same non-blockchain native assets, like the US Dollar. Curve allows users to swap these stablecoins for one another (*e.g.*, exchanging USDC for DAI).

Curve uses liquidity pools to enable the exchange of assets. These pools are a collection of aggregated tokens deposited into a smart contract by any number of liquidity providers (LPs). Curve LPs are compensated for locking their assets in the protocol by earning a percentage of all Curve swap fees, and some pools offer additional yield rewards in the form of Curve DAO Tokens (CRV).

Curve has grown in popularity and activity over the last 12 months, largely because of its stableswap algorithm, which is an AMM for stablecoins pegged to the same assets and which minimizes [price slippage](https://en.wikipedia.org/wiki/Slippage_%28finance%29) and rewards liquidity providers for their capital contributions. The stableswap algorithm improves upon constant product AMMs like Uniswap, which make no assumptions about the type of digital assets being traded. Curve also offers significantly lower trading fees than Uniswap (.04% compared to .3%). For more information on Curve’s stableswap AMM, please refer to the stableswap [white paper](https://curve.fi/files/stableswap-paper.pdf).

Curve is governed by a robust DAO with well-documented governance procedures and strong [censorship resistance](https://creamdotfinance.medium.com/moving-forward-post-exploit-next-steps-for-c-r-e-a-m-finance-1ad05e2066d5). For more information on Curve’s DAO, please refer to the [white paper](https://curve.fi/files/CurveDAO.pdf).

## 3CRV Pool

The largest pool on Curve by liquidity is the Curve 3pool, also known as 3CRV. The pool allows for the exchange of DAI, USDC and USDT, three of the largest stablecoins in the world.

Similar to Uniswap, users who deposit one of the three 3CRV stablecoins in a 3CRV pool receive a 3CRV LP Token. This token tracks the market value of the deposited assets plus fee revenue earned, and can be exchanged back for the deposited assets at any time.

## Curve Metapools

Curve metapools allow one USD pegged asset to be traded against the 3CRV pool. As part of this integration, Beanstalk leverages a metapool so that users can easily swap Beans for DAI, USDC, and USDT via Curve.

Curve’s metapools introduce an elegant platform from which to deploy censorship-resistant AMMs while retaining trading exposure to less censorship-resistant assets like [USDC](https://www.coindesk.com/markets/2020/07/08/circle-confirms-freezing-100k-in-usdc-at-law-enforcements-request/) and [USDT](https://www.theblockcrypto.com/post/129133/tether-freezes-over-1-million-usdt-single-address). To that end, the only way that the issuers of DAI, USDC, or USDT could blacklist trading against Beans on Curve would be to blacklist the entire 3CRV pool. Given the detrimental impact this would have on their own business, this is a highly unlikely scenario.

## BEAN:3CRV Metapool

BEAN:3CRV is a new Curve pool that combines Bean and 3CRV liquidity into a single metapool, which is made up of BEAN, DAI, USDC, and USDT. In practice, the BEAN:3CRV pool creates three new trading pairs — DAI, USDC, and USDT — in addition to the existing BEAN:ETH trading pair that can be accessed on Beanstalk’s [website](https://bean.money).

## How does the BEAN:3CRV pool benefit Beanstalk?

Integrating Beanstalk with Curve via the BEAN:3CRV pool delivers substantial value to Beanstalk in three major ways: increased stability, utility, and exposure.

## Stability

The introduction of the BEAN:3CRV liquidity pool is expected to dilute the price impact of any single swap, especially in comparison to the existing BEAN:ETH Uniswap pool. Furthermore, arbitrageurs will now have an opportunity to profit from Bean price discrepancies between the BEAN:3CRV and BEAN:ETH pools. The combination of these two effects will result in a Bean price more tightly bound around $1 and less sensitive to ETH price volatility.

## Utility

As discussed in the Curve overview above, Curve pays LPs a percentage of all trading fees. With the introduction of the BEAN:3CRV pool, Bean owners now have access to the a non-Beanstalk native source of revenue (i.e. outside of the *Field* and *Silo* and Uniswap pool).

Beanstalk Farms plans to continue integrating Beanstalk with the broader Curve ecosystem, and is working on a proposal to include the BEAN:3CRV pool into gauge votes in process.

## Audience

Since launching around 2 years ago, Curve has emerged as the stablecoin space’s dominant ecosystem. At the time of writing, [Curve has over $23B in deposited liquidity and roughly $750M in average daily trading volume](https://curve.fi/combinedstats).

Given Curve’s prominence within DeFi, the BEAN:3CRV pool should materially improve Beanstalk’s penetration into the broader stablecoin community.

## How does the BEAN:3CRV pool benefit Beanstalk users?

Bean owners benefit very directly from Beanstalk’s growth. The improved stability, utility and accessibility that this Curve integration is expected to further facilitate Beanstalk’s progress in making Beans the ubiquitous stablecoin of DeFi.

## How to add and remove liquidity from BEAN:3CRV Pool

## Add liquidity to BEAN:3CRV Pool

1. Go to the [BEAN:3CRV Pool](https://curve.fi/factory/81).

2. Select “Deposit” in the top navigation bar of the Curve website.

![](https://cdn-images-1.medium.com/max/800/1*SlwVQtEBYGzls50QPeKL_w.png)

3. Select “Connect wallet” and Choose MetaMask from the popup.

![](https://cdn-images-1.medium.com/max/800/1*rfB9zIf6ezu93DBkZVDeUw.png)

4. Enter: BEAN, DAI, USDC or USDT.

![](https://cdn-images-1.medium.com/max/800/1*0i_WSocD1Punlco4U-Z84Q.png)

5. Set the gas priority fee and select “Deposit”.

![](https://cdn-images-1.medium.com/max/800/1*TCgD3GYtboN2o_f6Iiq8Lg.png)

6. Approve the amount of your deposited tokens.

7. Confirm the deposit of your tokens.

8. Review the transaction and add the BEAN:3CRV LP Token to your wallet address.

## Remove Liquidity from BEAN:3CRV Pool

1. Go to the [BEAN:3CRV Pool](https://curve.fi/factory/81).

2. Select “Withdraw” in the top navigation bar of the Curve website.

![](https://cdn-images-1.medium.com/max/800/1*4fIviq8zOx57LLkzl_Offw.png)

3. Select “Connect wallet” and Choose MetaMask from the popup (if not already connected).

4. In the “Share of Liquidity (%)” box enter the desired % of liquidity you want to remove from the BEAN:3CRV Pool or the precise amount in the “Currencies” section.

![](https://cdn-images-1.medium.com/max/800/1*RxCSx5w8HPHJitB0F_G9AA.png)

5. In the “Withdraw % in” section select an option from:

* Bean + DAI + USDC + USDT
* Bean
* DAI
* USDC
* USDT

![](https://cdn-images-1.medium.com/max/800/1*eeGuQgWtbUcAKEshOqmquw.png)

6. Set the gas priority fee and select “Withdraw”.

![](https://cdn-images-1.medium.com/max/800/1*XPI3GdkS3YTfAFNLsKIOUw.png)

7. Confirm the withdrawal transaction.