---
title: "The Gauge System"
subtitle: Thoughts on a flexible system for Silo reward allocation.
date: 2023-05-08T21:00:00.000Z
author: Beanstalk Farms
description: Thoughts on a flexible system for Silo reward allocation.
image: /assets/uploads/gauge-system.jpeg
tag: Roadmap
---
![](/assets/uploads/gauge-system.png)

The architecture of the Basin DEX offers a variety of opportunities for Beanstalk. While ultimately the new system has the potential to unlock much deeper and more efficient liquidity for Beans, in order to take advantage of that potential and allocate Stalk and Seed rewards in the most optimal fashion, the Silo will have to become much more sophisticated.

Silo incentives have shown a high level of efficacy in guiding user behavior that benefits the health of Beanstalk. Each whitelisted asset is assigned a number of Stalk and Seeds that are allocated to users for every Bean worth of value (Bean Denominated Value, or BDV) upon deposit. Over time, these Seeds generate additional Stalk which entitle users to a larger share of Bean seigniorage and more influence in governance. The additional Seeds granted to depositors of LP tokens encourages users to provide the liquidity necessary for Beans to have value.

In the current version of the Silo, the decision about how many Stalk and Seeds should be awarded for depositing a given asset is made upfront when the asset is whitelisted. Theoretically, the DAO comes to a decision based on the needs of the protocol, weighing the pros and cons of that asset (the level of censorship resistance, liquidity, etc.) relative to the other whitelisted assets. The Stalk and Seed rewards help align the interests of Silo Members with the health of Beanstalk.

The DAO whitelists an asset via BIP, and theoretically it can change the Seed allocation for any whitelisted asset again, also via BIP. In practice however, this is highly inflexible given the nature of the voting process. It seems almost certain that the optimal Stalk and Seed values for each whitelisted asset change over time as improvements are made to the protocol, market conditions fluctuate and the nature of non-Beanstalk assets evolve.

Additionally, choosing the Stalk or Seed rewards for an asset is akin to manually setting monetary policy. Given that the goal of Beanstalk is to be an autonomous system, this should be improved, and the number of times that the DAO manually intervenes should be minimized in the meantime. (Imagine if the DAO was manually setting the Temperature next Season, rather than having implemented a way for the Temperature to autonomously respond to market conditions.)

At the time of writing, the Bean price is around $0.90, and to a large extent it's likely because of the suboptimal Seeds per BDV rewards for Unripe assets. Silo Members currently have to forfeit some Stalk growth in order to perform the conversions necessary to bring the Bean price back to peg. One component of the Silo V3 upgrade will make it more straightforward to change the Seeds reward for a whitelisted asset. There seems to be community interest in taking advantage of this to make the Seed rewards for Unripe Beans and Unripe LP equal, which is expected to have a significant effect on peg maintenance.

As the variety of tokens available for deposit in the Silo increases, it will become harder to efficiently adjust the Stalk and Seed values in an ad hoc manner through standard governance channels (nor is it necessarily optimal for the DAO to do so). The implementation of a Gauge System will provide a mechanism for the Stalk and Seed rewards to fluctuate autonomously based on a set of predefined parameters (i.e., market conditions) chosen by the DAO.

While Beans don’t have collateral, they do have liquidity. The Gauge System will be a flexible tool for the DAO to influence that liquidity. But it is also important for the goals around that liquidity to be highly aligned with Beanstalk when it comes to censorship resistance, decentralization, and economic incentives.

A well designed Gauge System will allow Beanstalk to optimize Stalk and Seed rewards for different assets based on arbitrary market data. Some potential axes to explore would be an asset’s:

* Level of decentralization and censorship resistance;
* Liquidity;
* Price stability;
* Ownership concentration;
* Correlation with the Bean price; or even the
* Geographic distribution of its centralized collateral, if applicable.

The security implications of whitelisted assets need to be considered before granting them Stalk and Seed rewards. If the ownership of a token is heavily concentrated or if it can be arbitrarily minted, somebody could effectively mint Stalk at will if the token is whitelisted in the Silo.

Two of the more significant axes to consider are decentralization and stability. Other than Beans themselves, there tends to be an inverse correlation between these two axes. Decentralized assets are notoriously volatile, and some level of centralization is often accepted as a means to achieve stability. ETH is a maximally decentralized asset, though it remains highly volatile despite its large market cap. On the other end of the spectrum are stablecoins such as USDT and USDC, which are relatively stable but confer centralization risks. 

Decentralization is essential when it comes to liquidity against Beans, but there is limited decentralized, endogenous value on-chain. This is particularly apparent in the case of LUSD, which is decentralized but achieves stability through the use of overcollateralization. The capital inefficiency this introduces suppresses the supply growth of LUSD and limits the depth of liquidity that it can offer Beanstalk.

By crafting principles or rules that the Gauge System can enforce, the DAO can whitelist assets more effectively. For example, a rule could be that pools that contain wrappers of centralized collateral (e.g., FRAX) can only be incentivized with additional Seeds when they make up less than X% of total liquidity trading against Beans.

Some open questions remain for the DAO to consider—which specific axes are important for the DAO to vote on in terms of limiting its exposure to certain assets? Which properties of an asset are possible to measure in a censorship resistant fashion? How often should Stalkholders be expected to vote to adjust what the Gauge System optimizes around?

The [Mayflower Update](https://bean.money/blog/mayflower-update) and [Basin DEX](https://twitter.com/basinexchange) will introduce new levels of efficiency and utility for Beans that pave the way for the future growth of Beanstalk. This growth would best be served with a self-adjusting mechanism for managing and incentivizing liquidity against a variety of different assets. The Gauge System will be a significant step towards realizing the vision of Beanstalk as a fully autonomous rules-based monetary system. 
