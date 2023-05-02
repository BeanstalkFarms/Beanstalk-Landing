---
title: The Mayflower Update
subtitle: A new dawn for Bean Farmers.
date: 2023-04-26T19:54:42.000Z
author: Beanstalk Farms
description: A new dawn for Bean Farmers.
image: /assets/uploads/mayflower-update.png
tag: Roadmap
---
![](/assets/uploads/mayflower-update.png)

On Season 6704, as the early dawn light broke across the rolling fields, the Farmers of Beanstalk gathered on the Mayflower, their trusty vessel, ready to set sail towards a new horizon. They had weathered many storms and worked hard to tend to their recovered crops, but they knew that in order to grow and thrive, they needed to adapt and evolve.

Today, Beanstalk Farms is excited to announce the Mayflower Update and an anticipated launch timeline. Note: *[BIP-34 Sunrise Improvements and BIP-35: Stalk Delegation and Process Amendments](https://app.bean.money/#/governance)* were proposed today!

The Mayflower Update consists of three major changes that will significantly improve the way the Beanstalk community experiences farming: (1) Sunrise Improvements, (2) Silo V3 and (3) Basin. 

# Sunrise Improvements

Today, the Sunrise Improvements BIP is [live for voting](https://app.bean.money/#/governance). The Sunrise Improvements upgrade is primarily composed of 2 changes:

**Morning Auction**

When the Bean price is above peg, Beanstalk still issues Soil in order to measure demand for Soil (and consequently adjust the Temperature). However, during times of short-term excess demand for Soil, Beanstalk pays significantly more in Pods than is necessary to attract creditors.

During the Morning of each Season (the first 5 minutes, or 25 blocks), the Temperature offered by Beanstalk is dynamic. Each Morning, the offered Temperature ramps from 1% to 100% of the maximum Temperature.

The Morning Auction should reduce unnecessary Pod issuance, which should improve Beanstalk’s creditworthiness as a borrower. In addition, maximizing Beans borrowed for a given Pod issuance improves Beanstalk’s efficiency.

*Here's a preview of the new Field page in the Beanstalk UI:*
![](/assets/uploads/morning-auction.png)

**Sunrise Incentive Adjustment**

Beanstalk updates its monetary policy every Season, which occurs upon a successful call of the `sunrise` function. It costs gas to call the `sunrise` function and Beanstalk often overpays in Beans to incentivize users to call it. The Sunrise Incentive Adjustment upgrade makes it such that how much Beanstalk pays for incentivization of the `sunrise` function takes into account Ethereum network conditions (i.e., current gas costs) and Beanstalk economic conditions (i.e., the Bean price).

Reducing unnecessary Bean issuance in the `sunrise` incentive reward should reduce sell pressure on Beans.

# Silo V3

The Silo V3 upgrade introduces multiple composability and UX improvements to the Silo, one of the core components of Beanstalk.

**Removal of the Withdrawal Timer**

When Beanstalk was launched in August 2021, Farmers had to wait 24 Seasons before being able to claim Withdrawn assets from the Silo. This lockup period likely served Beanstalk well during its infancy stage. Now that Beanstalk is more established, and more participants understand the incentives of the Stalk System, it has become clear that the Withdrawal timer is an economic inefficiency that creates a supply overhang when there are Withdrawn assets. 

Since Replant, the Withdrawal timer has lasted until the remainder of the current Season. Now that the Withdrawal timer is being removed, Bean seigniorage will be distributed based on a time-weighted average, rather than based Stalk at the end of the Season. Distributing seigniorage this way eliminates the profit of a potential attack where a user deposits assets in the Silo, calls `sunrise`, earns Bean seigniorage and withdraws the assets all in a single transaction while retaining Bean exposure for zero blocks.

Examples of developments that become possible after the removal of the Withdrawal timer include the [redemption of Roots](https://roottoken.org/redeem) for Circulating Beans in a single transaction, the ability to [order Pods](https://app.bean.money/#/market/buy) on the Market with Deposits, etc.

**Tokenization of Deposits as ERC-1155s**

Making the positive carry of holding Beans usable in DeFi is critical to the success of Beanstalk. In practice, this means facilitating economic activity in Silo Deposits, given that it is Deposits that earn Bean inflation (and not Beans that are held outside the Silo).

To that end, tokenizing Deposits and having them conform to an established ERC standard like ERC-1155 is a necessary step in this direction. This will immediately provide utility in the form of a permissionless market for Deposits on existing infrastructure like OpenSea.

**Dynamic Seeds per BDV**

Currently, there is no straightforward way to change the Seeds per BDV rewards for a given Silo Deposit type. After Silo V3, it will be possible for the DAO to adjust the Seeds reward for a given whistlisted asset via BIP. This serves as the technical foundation for a future Gauge System where the DAO can express preferences that lead to Stalk and Seed rewards for various whitelisted assets changing in real time.

**Unripe Seeds Parity**

Currently, Unripe Bean Deposits receive 2 Seeds per BDV and Unripe BEAN:3CRV LP Deposits receive 4 Seeds per BDV. Most Bean liquidity is underlying Unripe LP, but converting to Unripe Beans results in a loss of Seeds. This seems to be one of the primary reasons for why a significant amount of Unripe LP remains in the Silo despite the opportunity to convert to Unripe Beans to arbitrage the Bean price.

Changing the Seed rewards for both Unripe assets to the same value would remove a significant cost to converting from Unripe LP to Unripe Beans. This may result in more conversions, which would have a significant effect on peg maintenance.

A DAO vote is likely in order to determine what the exact Seeds per BDV values for Unripe Beans and Unripe BEAN:3CRV LP should be set to in Silo V3.

# Basin

![](/assets/uploads/basin-draw.png)

*Liquidity pools on the upcoming DEX are known as Wells, but the overall DEX architecture is known as Basin. Give the new [Basin Twitter](https://twitter.com/basinexchange) account a follow.*

There are a number of problems with current implementations of AMMs on Ethereum. In a post-Merge environment, existing on-chain AMMs are not multi-block MEV resistant. Given that Beanstalk needs to price Beans against other assets (on-chain) and that the goal of Beanstalk is to be as censorship and manipulation resistant as possible, multi-block MEV is an attack vector that should be addressed. 

Additionally, most AMMs in DeFi are generally not designed to be composable and have little flexibility in allowing developers customize their liquidity pool implementation. Trading fees, pricing functions, and price oracles are embedded and cannot be customized independently.

Basin aims to solve these problems:
- Pumps, the oracles of the Basin DEX are composable and customizable by design. The first implementation developed by Beanstalk Farms provides the first multi-block MEV resistant oracle implementation on the Ethereum network.
- Developers can utilize the work of other ecosystem contributors and the Beanstalk DAO who develop, audit and deploy custom pricing functions, Pump implementations, and even new pool factory contracts.   
- The composability of Basin also allows for the deployment of Wells with zero trading fees. Providing liquidity to Wells which do not collect trading fees can be incentivized via protocol-native incentives, such as whitelisting the Well LP token in the Silo.

See Publius' [Worthless Tech](https://publius.money/blog/2023-01-06-worthless-tech) and [Beanstalk Development Update](https://publius.money/blog/2023-01-06-beanstalk-development-update) writeups for a deep-dive.

**Basin Integration**

Launching Basin in a way that Beanstalk directly benefits from requires a BIP that integrates the two protocols. Integrating the two protocols means:
* Support for Beanstalk to compute the BDV of a given Well LP token in order to reward a corresponding amount of Stalk and Seeds upon Deposit in the Silo;
* Conversions to and from Beans and the Well LP token (at minimum);
* Support for Beanstalk to read how far above or below peg the Bean price is in a Well, such that Beanstalk can mint Beans/Soil accordingly; and
* Whitelisting the BEAN:ETH Well LP token.

# Anticipated Mayflower Timeline

**Late April**

- [BIP-34: Sunrise Improvements](https://app.bean.money/#/governance) Voting Period begins
- [BIP-35: Stalk Delegation and Process Amendments](https://app.bean.money/#/governance) Voting Period begins
- Halborn and Cyfrin audits of Basin end
- Silo V3 audit begins

**Early May**

- BIP-34 and BIP-35 Voting Periods end
- Basin Integration audit starts

**Mid May**

- Silo V3 audit ends
- Fix review for Halborn and Cyfrin audits of Basin end

**Late May**

- BIP-36: Silo V3 Voting Period begins
- Code4rena audit of Basin begins and ends

**Early June**

- BIP-36 Voting Period ends
    - Unripe Seeds parity is launched
- Basin Integration audit ends

**Mid June**

- The Basin DEX and a BEAN:ETH Well is deployed
- BIP-37: Basin Integration Voting Period begins

**Late June**

- BIP-37 Voting Period ends
    - BEAN:ETH Well becomes whitelisted in the Silo