---
title: "Beanonomics: $BEAN Flows in the Peg Mechanism & DAO"
date: 2023-04-10T21:16:04.293Z
author: Beanstalk Farms
description: An explanation of how Beanstalk's peg mechanism and DAO work
image: /assets/uploads/bnomix.jpeg
tag: Learn
---
Last week we talked about Beanstalk’s strengths and weaknesses within the [stablecoin trilemma](https://bean.money/blog/how-beanstalk-tackles-the-stablecoin-trilemma). Price stability is the most difficult aspect of stablecoin design when it comes to algorithmic models, so this week we’re going into much further detail about the mechanisms involved in peg maintenance, as well as other economic forces in the Beanstalk ecosystem. 

# Summarizing the Trilemma Discussion

In order for cryptocurrencies to work as money, volatility has to be minimized. The current most popular implementations are stablecoins like USDC and USDT, which achieve stability by holding reserve assets equivalent to the amount of tokens issued. However, this design falls short on the axes of decentralization and capital efficiency. Beanstalk is an experiment that attempts to algorithmically balance $BEAN supply and demand in order to achieve price stability, doing so in a decentralized and highly capital efficient manner. The tradeoff with this system is an increased likelihood of volatility due to dependence on the participation of creditors who will lend their $BEAN to the protocol. 

# How Beanstalk Incentivizes Supply & Demand Balance

In order to return the price to $1 when $BEAN is below peg, Beanstalk attempts to reduce the supply by adjusting the interest rate (**[Temperature](https://docs.bean.money/almanac/peg-maintenance/temperature)**) for lending to the protocol. When $BEAN is lent to Beanstalk (**[Sown](https://docs.bean.money/almanac/guides/field/sow)**) it is burned, taking supply off the market. Lending is done through Beanstalk’s credit facility, the **[Field](https://docs.bean.money/almanac/farm/field)**. When $BEAN holders lend they receive **[Pods](https://docs.bean.money/almanac/farm/field#pods)**, which can be Harvested for $BEAN in the future. $BEAN loans have no set duration, and **Pods** become **[Harvestable](https://docs.bean.money/almanac/guides/field/harvest)** on a first-in, first-out basis. The current **Temperature** determines how many **Pods** the lender will receive per $BEAN loaned, and thus how many $BEANs can be Harvested upon reaching the front of the first-in first-out **[Pod Line](https://docs.bean.money/almanac/protocol/glossary#fifo)**. The **Temperature** is the interest rate for lending $BEAN and it is adjusted at the beginning of each Season (~1 hour period). The Beanstalk algorithm alters the **Temperature** based on the amount of lending happening in an attempt to converge the price to $1. 

In addition to changing the **Temperature**, Beanstalk algorithmically adjusts the available supply of **Soil**, which is the amount of $BEAN the protocol is willing to borrow. The protocol is always willing to borrow, but the amount changes based on the amount of liquidity as well as the excess or shortage of $BEAN in the liquidity pools used as price oracles. **[Soil](https://docs.bean.money/almanac/farm/field#soil)** supply is also adjusted at the beginning of each Season in order to help converge $BEAN price to $1.

*Quick peg explanation to give context to the section above: $BEAN is pegged to $1, but how does Beanstalk determine where price is in relation to the peg? It uses the [BEAN:3CRV pool](https://curve.fi/#/ethereum/pools/factory-v2-152/deposit/) on Curve as an oracle. The pool contains $BEAN and 3CRV, an LP token for the 3pool, which contains 3 of the most commonly used stablecoins; $USDC, $USDT, and $DAI. If the ratio of $BEAN value to 3CRV value in the pool is 50:50, then $BEAN is considered to be at its intended peg.*

When the $BEAN price is greater than $1 the **Temperature** is lowered, resulting in less **Pods** received per $BEAN loaned. As more **Pods** become harvestable and get redeemed for $BEAN, combined with lending to the protocol becoming less attractive, the supply should rise relative to demand, providing downwards price pressure to push $BEAN back down towards the peg. 

This constitutes the basis of Beanstalk’s peg mechanism, **Soil** supply and **Temperature** are adjustable. This means the protocol can adapt the amount of debt it needs to offer, and the interest rate associated with new debt, with a goal of influencing the market supply and then ultimately the price.

If you are interested in a more granular view into how Beanstalk adjusts these parameters please see the [Field](https://docs.bean.money/almanac/farm/field) section of the docs, as well as the [whitepaper](https://bean.money/beanstalk.pdf). If you’re more of a visual learner check out the graphic below. 

![](/assets/uploads/bean-peg-mechanics.jpeg)

# The Role of the Beanstalk DAO

Besides lending $BEAN to Beanstalk through the **Field**, the other main way to participate in the growth of the protocol is depositing $BEAN in the **[Silo](https://docs.bean.money/almanac/introduction/how-beanstalk-works)**. Depositing in the **Silo** stakes a holder’s $BEAN, in exchange rewarding them with [**Stalk** and **Seed**](https://docs.bean.money/almanac/farm/silo) tokens. **Stalk** is a governance token, used to create and vote on Beanstalk Improvement Proposals (BIPs). **Seed** tokens generate **Stalk** over time, at a rate of 1/10000 per Season. With Seasons lasting approximately 1 hour, each **Seed** will generate 1 full Stalk every 416 days. Additionally, **Stalkholders** are entitled to seigniorage, which rewards them with 1/3rd of new $BEAN supply that is minted through the **Field**. In addition to $BEAN, BEAN:3CRVLP tokens and **[Unripe Assets](https://docs.bean.money/almanac/farm/barn#unripe-assets)** can also be deposited in the **Silo.** LP tokens grant additional **Seed** rewards to incentivize liquidity for $BEAN.

The purpose of **Silo** deposits receiving these rewards is to provide [protocol-native utility](https://bean.money/blog/bank-runs-airplanes-and-beanstalk) for $BEAN, giving people an incentive to hold it so they can earn seigniorage and participate in governance. Demand for $BEAN is ultimately the driving force that allows the peg mechanisms discussed above to function. While the peg system’s design gives $BEAN innate utility, as it can be **Sown** to later mint new $BEAN plus interest, giving holders more venues to use $BEAN will help strengthen demand and make the system run more smoothly. This concept is an important part of upcoming items on the roadmap for Beanstalk, which includes restoring on-chain governance and developing new $BEAN trading pairs.

# Unripe Assets

Unripe Assets were mentioned in the previous section as eligible for deposit in the **Silo**, so let’s explain what purpose they serve within the ecosystem. In April 2022 Beanstalk suffered a governance exploit, which drained ~$77M worth of assets from the **Silo**. In an effort to recapitalize the lost funds the DAO created the Barn, as well as [**Fertilizer** and **Sprouts**](https://docs.bean.money/almanac/farm/barn). **Fertilizer** is an ERC-1155 token that can be bought for 1 USDC, and comes with an associated number of Sprouts. At the outset of this recapitalization program Fertilizer supply was at 77M, available fertilizer supply fluctuates based on sales and unripe BEAN3CRV conversions. The USDC taken in from  **Fertilizer** sales serves to deepen liquidity in the BEAN 3crv pool. As new $BEAN is minted through the peg mechanism described in section 1 of this piece, Sprouts become Rinsable Sprouts, meaning that they can be redeemed for $BEAN. 1/3rd of newly minted $BEAN goes towards this process. 

![](/assets/uploads/beansiloo.jpeg "Asset Flows in the Silo")

\
**[Unripe Assets](https://docs.bean.money/almanac/farm/barn#unripe-assets)** are another part of the **[Barn](https://docs.bean.money/almanac/farm/barn)**. An equivalent amount of these were awarded to everyone who held $BEAN or whitelisted LP tokens at the time of the exploit. Unripe $BEAN and Unripe Bean:3CRV represent a pro rata claim on the underlying Ripe $BEAN and Ripe Bean:3CRV that is minted when **Fertilizer** is sold.

# Summing it Up

Beanstalk is no doubt a complex system, however, it’s an attempt at making significant progress in the stablecoin trilemma, and ambitious goals often require ambitious designs. Hopefully this explanation gave you a better understanding of Beanstalk’s experimental economic design, and how the peg mechanism, DAO, and recapitalization effort are all tied together. 

As always, the Farmers over on Discord are an excellent resource for any questions about Beanstalk, and our new Twitter account is coming out with fresh educational threads and organic Bean memes all the time. Blog posts will be regularly scheduled now, coming out every Monday, so check in next week for an analysis of Beanstalk’s Q1 ‘23 metrics.