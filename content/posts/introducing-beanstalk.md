---
title: Introducing Beanstalk
subtitle: A decentralized credit based stablecoin built on Ethereum.
date: 2021-09-17T17:52:54.077Z
author: Beanstalk Farms
description: A Decentralized Credit Based Stablecoin Protocol
image: /assets/uploads/barn-and-beans.png
tag: Learn
---
![](https://cdn-images-1.medium.com/max/800/1*W0LppdZfX7V1D1DrMTB9ZQ.png)

Welcome to Beanstalk! Beanstalk is a new, decentralized credit based stablecoin protocol that is built on Ethereum. This medium article is a brief introduction to Beanstalk.

### **Highlights**

* The first Beanstalk issues a USD stablecoin (Bean) on the Ethereum blockchain.
* Beanstalk offers a variety of *passive* and *active* opportunities for Bean holders to earn interest directly from the protocol.
* Beanstalk does not have any collateral requirements. Beanstalk uses credit instead of collateral to create price stability relative to a non-blockchain-native asset.

## **A New Type of Stablecoin**

Stablecoins are cryptocurrencies that attempt to peg their market value to some external reference (e.g., USD). Current stablecoin implementations have two key problems: centralization and collateral requirements.

The practicality of using Decentralized Finance is limited by the lack of a decentralized, collateral-free stablecoin. Borrowing rates on USD stablecoins remain excessively high, even as supply increases rapidly. Supply cannot meet demand due to collateral requirements.

> Beanstalk uses credit instead of collateral to create a decentralized, liquid, blockchain-native asset, which is stable relative to the value of a non-blockchain-native asset.

Beanstalk creates protocol-native financial incentives to encourage participation in peg maintenance and governance without requiring any action from everyday Bean users.

## **How does Beanstalk Work?**

Beanstalk issues 3 ERC-20 Standard tokens:

1. Beans, the Beanstalk stablecoin,
2. Stalk, a yield generating governance token, and
3. Seeds, which yield 1/10000 Stalk every Season.

Seasons are the Beanstalk-native timekeeping mechanism. Each Season is ∼1 hour long.

Beanstalk relies on 3 interconnected parts:

1. A decentralized price oracle,
2. The Silo, a decentralized governance mechanism, and
3. The Field, a decentralized credit facility..

### **1. Decentralized Price Oracle**

Beanstalk uses 2 Uniswap liquidity pools — USDC:ETH and BEAN:ETH — to create a decentralized price oracle. When the ratios of the two pools are identical, the price of 1 Bean is considered equal to $1.

> By trading against ETH instead of USDC directly, Beanstalk minimizes exposure to the centralized operators of USDC.

Beanstalk calculates a Time Weighted Average Price (TWAP) for 1 Bean over each Season.

### **2.** The Silo: a **Decentralized Governance Mechanism**

Beanstalk uses the Silo, the Beanstalk Decentralized Autonomous Organization, to create a robust decentralized governance mechanism.

> *Any Bean owner can earn yield from passive participation in Beanstalk governance by Depositing their assets in the Silo to receive Seeds and Stalk.*

Stalk holders can submit and vote on Beanstalk Improvement Proposals and collect a portion of Bean supply increases.

A high value of Deposits and diverse community of Stalk holders creates a robust decentralized governance mechanism.

To encourage consistent security:

* Seeds yield Stalk every Season.
* The associated amount of Seeds and Stalk from a given Deposit must be forfeited when the Deposit is Withdrawn from the Silo.
* Deposits can be Withdrawn from the Silo at any time but are Frozen for 24 full Seasons after Withdrawal.

Deep and consistent liquidity in the Bean:ETH Uniswap liquidity pool improves stability. LP providers to the USD BEAN:ETH Uniswap liquidity pool can also Deposit their LP tokens in the Silo to earn Seeds and Stalk.

> *LP token Deposits receive twice as many Seeds per Bean Deposited as Bean Deposits.*

### **3.** The Field: a **Decentralized Credit Facility**

Beanstalk relies on a decentralized community of lenders to maintain Bean price stability. The faster Beanstalk can attract creditors, the more stable the Bean price. Bean lending takes place in the Field.

* Anytime Beanstalk is willing to issue debt, there is Soil in the Field.
* Soil is the pre-approved number of Beans that can be lent to Beanstalk.
* Any Beans not in the Silo can be lent to Beanstalk in exchange for Pods.

Pods are the Beanstalk-native debt asset. Bean loans have a fixed interest rate and unknown maturity date.

* The number of Pods that grow from 1 Sown Bean is determined by the Weather — the Beanstalk-native interest rate — at the time of Sowing.
* Pods ripen and become Harvestable (redeemable) for 1 Bean on a First In, First Out (FIFO) basis during future Bean supply increases.

## **How Does Beanstalk Create Stability?**

Beanstalk requires a diverse set of participants, including Depositors (Silo Members), Lenders (Bean Farmers), and arbitrageurs. Beanstalk aligns the incentives of every individual participant to maximize price stability and create a diverse decentralized community. Beanstalk-native financial incentives consistently increase censorship resistance, liquidity and stability over time.

> Beanstalk creates stability during both long run decreases and increases in demand for Beans.

At the beginning of each Season, Beanstalk evaluates the Beanstalk oracle price and the Beanstalk debt level and dynamically adjusts the Bean supply, Soil supply and Weather.

When the Bean price is too low, Beanstalk:

* Increases the Soil supply.
* Raises the Weather.

By increasing the Soil and raising the Weather, Beanstalk can decrease the supply of Beans and bring the Bean price back to its peg.

When the Bean price is too high, Beanstalk:

* Increases the Bean supply.
* Lowers the Weather.

By increasing the Bean supply and lowering the Weather, Beanstalk can bring the Bean price back to its peg.

To align the interests of Bean Farmers and Silo Members, half of Bean supply increases go to Pod Harvests. The other half are distributed to Stalk holders and Deposited in the Silo.

In order to prevent inorganic growth, if the Bean price is too high and the debt level is excessively low for 24 consecutive Seasons, Beanstalk sells Beans directly on Uniswap to return the Bean price to $1.

> A reasonable debt level and consistent credit history attract creditors.

When the Beanstalk debt level is excessively high or low, the Weather changes more aggressively to return Beanstalk to a more reasonable level of debt. Beanstalk is willing to issue debt every Season.

## More information

To learn more about Beanstalk you can visit our website: [bean.money](https://bean.money/)

You can ask questions and join the community discussion on [Telegram](https://t.me/joinchat/OdWoJSyPVsRhYzgx) and [Discord](https://discord.gg/y4cJNv5DTM)!

Follow us on [Twitter](https://twitter.com/BeanstalkFarms)!
