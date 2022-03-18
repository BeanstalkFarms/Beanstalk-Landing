---
title: Beanstalk’s 6 Month Roadmap
subtitle: ""
author: Beanstalk Farms
thumbnail: /assets/uploads/roadmap-banner.png
date: 2022-02-11T22:56:47.704Z
description: Beanstalk is a decentralized credit based stablecoin protocol that
  is built on Ethereum.
image: /assets/uploads/roadmap.png
thumbnailAlt: Beanstalk Roadmap Banner
---

![](https://cdn-images-1.medium.com/max/800/1*1CzkFtHdGSpZciuHESh9_g.png)

### Beanstalk at 6 Months

Beanstalk is an experiment.

It has been a little over 6 months since Beanstalk was deployed on Ethereum Mainnet on August 6, 2021. In that time, Beanstalk has:

*   Started to demonstrate its ability to regularly cross the Bean price above and below its value peg;
*   Inspired the creation of Beanstalk Farms, a strong distributed set of core contributors, and Bean Sprout, a Beanstalk accelerator, with 25+ contributors across the globe between the two organizations; and
*   Bootstrapped both a thoughtful, intelligent, curious community which holds lively debates and discussions in the [Beanstalk Discord](https://discord.gg/y4cJNv5DTM), and an active DAO that has passed 11/12 proposed BIPs, 8 of which were passed with a supermajority.

Beanstalk’s (relatively) long lifetime has also provided invaluable data that has allowed the efficiency of the peg maintenance model to be honed through Beanstalk Improvement Proposals (BIPs). BIPs [2](https://github.com/BeanstalkFarms/Beanstalk/pull/4), [6](https://github.com/BeanstalkFarms/Beanstalk/pull/14), [7](https://github.com/BeanstalkFarms/Beanstalk/pull/19) and [9](https://github.com/BeanstalkFarms/Beanstalk/pull/32) each had clear effects on Beanstalk’s peg maintenance model.

As of writing, Beanstalk has crossed the Bean price over its value peg over 2700 times. Liquidity has steadily increased, particularly in the recently deployed BEAN:3CRV Curve pool. The magnitude of deviations from the peg has continued to decrease.

**The result is a proof of concept.**

It is now possible to take that proof of concept and the lessons learned through Beanstalk’s first 6 months to build out the Beanstalk architecture and the Beanstalk stack to leverage the composable nature of DeFi and make Beanstalk the ubiquitous stablecoin issuer of DeFi.

### Beanstalk within the DeFi Ecosystem

The experimental nature of Beanstalk dictated that initial development and communication (formal and informal) should focus on the peg maintenance model. As Beanstalk continues to demonstrate the efficacy of its model, attention can start to shift towards answering questions about how Beanstalk can best fit into DeFi and leverage its status as the leading credit based stablecoin issuer.

In theory, Beanstalk can mint an unlimited amount of Beans to meet demand, such that the marginal equilibrium price is at the value peg. Bean supply is the other half to that equation. Thus, the fundamental question around Beanstalk’s growth into the ubiquitous stablecoin issuer of DeFi, is one of utility: what can users _do_ with their freshly minted Beans, other than sell them.

To date, the main use for Beans is to leave them in the Silo to earn compounding interest. BIP-2, which made depositing Harvestable Pods in the Silo nearly frictionless, had a clear effect on limiting marginal supply when Pods Harvested. BIP-7, which made Converting Deposited Beans into Deposited LP when P > 1 with minimal loss of Stalk, and vice versa, had a clear effect on the magnitude of price deviations from the peg. In order for Beanstalk to become the ubiquitous stablecoin issuer of DeFi, future development of Beanstalk should leverage the lessons learned from these BIPs, namely that **assets should be able to remain on the Bean Farm and/or within the Silo as much as possible, with as little friction as possible.** Therefore, the question becomes how to make the Silo and the Bean Farm as smoothly integrable across DeFi as possible.

The importance of access to high quality information and resources about Beanstalk has also been an apparent contributor to its success over the past six months. As the sophistication and size of Beanstalk grows, a consistent, well-organized communication effort from Beanstalk Farms is essential to the continued growth of a curious, decentralized, and educated community.

The following are some high level developments to Beanstalk that Beanstalk Farms will be working on in the coming months to facilitate Beanstalk becoming a core protocol within DeFi, both on-chain and off-chain.

As always, these types of forward looking documents remain subject to change based on new information in the rapidly changing DeFi landscape.

### On-Chain Development

With regard to the Beanstalk Diamond, development can be divided into (1) larger architectural upgrades that make integrating a wide variety of protocols, tokens and use cases into the Beanstalk ecosystem as simple and scalable as possible, (2) factory contracts that supplement (1), and (3) minor tweaks to the model to maximize its efficiency.

Each of the below items may be integrated into Beanstalk through multiple BIPs. Dates are provided as rough estimates for when the first BIP for each particular upgrade will be proposed on-chain.

#### Larger Architectural Upgrades

**Generalized Silo (February, 2022)**

[BIP-12](https://github.com/BeanstalkFarms/Beanstalk/pull/46) is the first step towards a complete generalization of the Silo. The next step to generalize the Silo is to enable Conversions from arbitrary whitelisted tokens to arbitrary whitelisted tokens with minimal loss of Stalk.

Currently, Beanstalk supports Stalk-efficient Conversions from Beans to BEAN:ETH Uniswap V2 LP Tokens, and vice versa. As the number of assets in the Silo increases, the possible different conversions increases exponentially. To facilitate any of these potential Conversions, Beanstalk Farms will propose a BIP to allow Beanstalk to support conversions from arbitrary Deposited assets to arbitrary Deposited assets without the loss of grown Stalk.

The Silo can support the reception and distribution of generalized rewards. For example, in the instance where BEAN:3CRV LP Tokens can be deposited on Convex for cvxBEAN:3CRV, Silo Members that have Deposited BEAN:3CRV LP Tokens in the Silo could Convert them to cvxBEAN:3CRV within the Silo. Furthermore, anyone could Deposit cvxBEAN:3CRV directly into the Silo. cvxBEAN:3CRV Silo Depositors would be rewarded CVX rewards in addition to Stalk and Seeds.

Non-fungible tokens (\*e.g.\*, Uniswap V3 LP Tokens) can also be incorporated into the Silo.

**Generalized Minting Pools (February-March, 2022)**

Currently, the minting of Beans and Soil is determined solely based on the BEAN:ETH Uniswap V2 Pool. As the number of liquidity pools that BEAN trades in increases, the BEAN:ETH Uniswap V2 Pool will become less and less accurate as an indicator of (1) the liquidity and time weighted average Bean price, and (2) the appropriate number of Beans and Soil to mint to regularly cross the Bean price above and below its value peg.

In order to ensure Beanstalk is able to accurately respond to market conditions at the start of each Season, Beanstalk Farms intends to propose a BIP to allow Beanstalk to add or remove arbitrary liquidity pools into the minting of Beans and Soil.

Beanstalk considers both the price of and liquidity in the pool over the previous Season. In order to minimize exposure to manipulation, using the time weighted average price (TWAP) and time weighted average liquidity (TWAL) is ideal. Some DEX protocols natively support TWAL, while others do not. In instances where a DEX does not support TWAL, the portion of LP Tokens in the Silo as a portion of the total LP tokens can reduce exposure to manipulation entirely at the cost of decreasing the accuracy of the Bean and Soil minting.

This imposes a restriction: pools used for minting must either natively support TWAL or the LP Tokens for the pool must be whitelisted for Deposit in the Silo.

The Beans or Soil minted at the start of each Season will be based on the net sum of the liquidity and time weighted average excesses and shortages of each minting pool over the previous Season.

Initially, minting pools will only be able to be added or removed via BIPs. In the future, a more flexible system (for example, to handle instances where another currency in a minting pool has a depegging event) can be implemented.

**Generalized Bean Farm (March, 2022)**

[BIP-2](https://github.com/BeanstalkFarms/Beanstalk/pull/4) introduced the ability for users to move assets within the Bean Farm (_i.e._, from the Silo to the Field, and vice versa) without those assets touching the user’s wallet. This improves the gas efficiency, and potentially improves the tax efficiency of Beanstalk-related transactions, for certain users.

The Bean Farm can be generalized to accept arbitrary assets with direct or indirect liquidity against Beans. Whereas currently Beanstalk allows for ETH to be sent to the Bean Farm to be used to Buy and Sow or Buy and Silo, in the future Beanstalk will support similar functionality for arbitrary assets, so long as Beanstalk can immediately sell those assets into Beans.

Additionally, users will be able to use Beanstalk to sell Beans back into arbitrary assets, without necessarily removing them from the Bean Farm and into their wallets. This generalized Bean Farm will radically improve the efficiency of Beanstalk.

**Interoperable Bean Farm (April, 2022)**

The generalized Bean Farm can be expanded to allow users to not just buy and sell any asset on any decentralized exchange Beans trade on, but also interact with other protocols using function selectors. This will allow users to interact with any protocol in an arbitrary manner, within the Beanstalk ecosystem and without the assets hitting users’ wallets.

For example, if a Farmer has ETH on the Bean Farm or in their wallet, they could deposit into a Liquity trove, mint LUSD against their ETH, trade that LUSD to Beans and Sow the Beans for Pods or Deposit them in the Silo, all in a single gas-efficient transaction.

**Liquid Stalk and Seeds (April-May, 2022)**

Stalk and Seeds are the two Beanstalk-native yield bearing assets. Stalk entitles holders to a portion of all future Bean mints. Seeds entitle holders to new Stalk every Season.

Stalk and Seed liquidity will improve the complexity and liquidity of the Beanstalk ecosystem significantly.

Beanstalk Farms intends to propose a BEAN:STALK:SEED Balancer pool, the LP tokens of which can be Deposited in the Silo for additional Stalk and Seeds. Appropriately setting the amount of additional Stalk and Seeds received for Depositing these LP Tokens in the Silo to prevent overinflation of Stalk and Seeds is an important part of this structure.

There remains one big open question around Seeds, which you can read more about below.

**Fungible Deposits (May-June, 2022)**

Silo Deposits can be made fungible ERC-1155 tokens.

There is some complexity around making LP Deposits fungible within a Season of Deposit because the Bean-denominated value of an LP Deposit is determined at the time of Deposit, not based on the average over the course the Season it was Deposited.

Furthermore, Beanstalk will only be able to issue a maximum of 8 different fungible ERC-1155s within the Beanstalk diamond due to the maximum integer size in Solidity. Therefore, additional ERC-1155 Deposits will have to be stored in external contracts. This is not technically difficult to implement, but increases gas costs to users.

Beanstalk Farms will propose BIPs to facilitate fungible ERC-1155 tokens for arbitrary Silo Deposits, up to 8 within the Beanstalk diamond and unlimited additional tokens outside it.

**Gauge System (June-July, 2022)**

Initially, Stalk holders will be able to vote to add or remove a token from the Silo whitelist exclusively through BIPs. However, a more flexible and scalable gauge system to approve Stalk and Seed awards to various asset Deposits will help make integrating assets and protocols with Beanstalk as secure, decentralized and frictionless as possible.

A gauge system somewhat similar to the Curve ecosystem will be developed for the allocation of Stalk and Seeds to specific types of Silo Deposits. The core principle of the Stalk System, that Stalk is forfeited upon Withdrawal of the underlying Deposit from the Silo, should remain in place regardless of the specific gauge implementation.

Seeds may be abstracted away from the Silo to facilitate the most flexible gauge system for rewards possible (see “One Big Open Question” below for more).

**Gas Optimization (Continuous)**

Beanstalk is a fairly gaseous protocol. The Farmers Market was an opportunity to focus intently on minimizing the gas cost to transact within Beanstalk, specifically in regards to creating Orders and Listings. Instead of storing the full Order and Listing data on-chain, the Farmers Market only stores the hash of the necessary data, and then the UI relies entirely on events to verify the existence of Listings/Orders.

It is possible to implement similar data structure efficiency across the entire Beanstalk state. For instance, Beanstalk could store a Silo Member’s Deposits in a single Merkle root instead of a whole mapping. The Season and Weather state could also be stored in a single Merkle root. Such upgrades would drastically minimize the gas costs related to things like the Sunrise function, Depositing and Withdrawing.

The ultimate vision is to have Beanstalk stored on-chain as a single hash. The subgraph could be built out to support balance checks and provide the Merkle proofs.

**Audits (Continuous)**

Beanstalk is currently being audited by [Omniscia](https://omniscia.io/), and will be audited by [Trail of Bits](https://www.trailofbits.com/) in Q2, 2022. The initial audit from Omniscia is expected to be completed sometime in February.

After the initial audit is completed, all future Beanstalk Farms BIPs will be audited before being proposed by at least one auditor. This is a standard Beanstalk Farms hopes will be practiced by the DAO upon completion of the initial audit, and intends to lead by example.

#### Integration Factory

Offering factory contracts to make integrating Beans, Stalk and Seeds into various other DeFi protocols as simple as possible will help facilitate adoption.

**Beanstalk Launchpad (March-April, 2022)**

Various protocols have demonstrated interest in fundraising Beans to hold in their treasury and/or bootstrap a liquidity pool. Beanstalk Farms will develop a Launchpad which facilitates the easy deployment of Bean Fundraisers and Bean liquidity pools.

Upon implementation of the gauge system, the Launchpad should also define a low friction process to apply for gauge in a decentralized fashion.

**Stalk and Seed Factory (June-July 2022)**

Liquid Stalk and Seeds will be a major milestone on the path to making Beans into a core financial primitive of DeFi, and open up a variety of new use cases for Beanstalk. But, Stalk and Seeds also come with a fair amount of accounting complexity.

Stalk and Seed holders earn Beans, Stalk _and_ Seeds during periods of Bean minting. Those newly earned Stalk immediately start earning compound interest, increasing the complexity of the accounting.

Beanstalk Farms intends to develop one or more factory contracts to help facilitate frictionless integration of Stalk and Seeds into a wide variety of other DeFi protocols.

#### Model Tweaks and Efficiency Improvements

There remain a number of opportunities to improve the efficiency and incentive structures of Beanstalk.

**Farmers Market Upgrades (March-May, 2022)**

The recently implemented Farmers Market can be refined to increase liquidity and decrease friction for users. Beanstalk Farms will propose one or more BIPs to implement the following improvements:

*   Pod Orders and Pod Listings can support arbitrary pricing functions;
*   Multiple Plots can be Listed in the same Pod Listing;
*   Multiple Orders and Listings can be Listed, Filled and Cancelled in a single transaction; and
*   Overlapping Pod Orders and Pod Listings can be cleared automatically.

**Various Tweaks (Continuous)**

There are various areas where further improving the efficiency of the peg maintenance model is clearly possible, even if particular improvements are not clear at the moment. Some of those potential areas for improvements are:

*   Silo Bean seigniorage rewards should be paid out over a period of time, not all at once and immediately upon minting. This will facilitate lowering the Withdrawal Freeze below 4 Seasons, and its potential removal altogether;
*   The accuracy of measurement of demand for Soil can be improved; and
*   The Weather Changes can be improved further.

#### A Look Further Ahead

If the above developments to Beanstalk, which will mostly occur in the first half of 2022 are successful in their aim to facilitate the adoption of Beanstalk and Beans across the Ethereum DeFi ecosystem, there are a variety of unique opportunities Beanstalk could leverage. These are some rough ideas for larger scale Beanstalk development projects that Beanstalk Farms and/or others can pursue over the course of 2022 and beyond. Estimated dates for this section are not included to reflect the uncertain nature of these developments, both technical and practical.

**Multi-Chain Architecture**

As Beanstalk begins to demonstrate a product market fit on Ethereum Mainnet, there is a major opportunity to leverage the credit history of Beanstalk to take advantage of the lack of sufficient decentralized stablecoins on a variety of other blockchains (_e.g._, AVAX, Solana), as well as a variety of Ethereum L2s.

The main benefit to building a Beanstalk-native multi-chain architecture is to solve the “nothing at stake” problem. If Beanstalk is to become a large issuer of money on multiple chains, it is highly unlikely that the size of a single cross-chain messaging protocol is likely to provide sufficient security to the entire Beanstalk network.

In general, to limit overhead and risk, a multi-chain Beanstalk implementation will rely on arbitrageurs to maintain the value of Beans, Stalk and Seeds relatively consistent across different chains. The multi-chain architecture should primarily coordinate the ordering of Pods across chains and facilitate the transfer of Beans, Stalk and Seeds (most likely via a burn-and-mint).

Beanstalk Farms has started researching the architecture for a multi-chain Beanstalk. While the progress in cross-chain messaging architecture, like [Celer Network](https://www.celer.network/), is encouraging, there are a variety of remaining unanswered technical questions that must be answered to ensure that Beanstalk can scale to multiple blockchains without sacrificing its security and decentralization.

**Beanstalk DEX**

Decentralized exchanges suffer from a chicken and egg problem. Liquidity attracts volume, which attracts more liquidity and more volume. One way various DEXs compete is by lowering their transaction fees. However, DEXs typically rely on transaction fees to attract and retain liquidity, thus creating the bootstrapping dilemma. The Stalk System offers an attractive alternative model to attract liquidity.

In theory, the Stalk System could be used facilitate a Beanstalk-native zero-fee DEX.

The Beanstalk DEX would not replace the need for various other DEXs to be integrated into the Silo and the minting schedule, as centralized providers of stablecoins could always blacklist the Beanstalk contract. However, a Beanstalk DEX remains an interesting concept, particularly in combination with a multi-chain architecture which could facilitate extremely fee-efficient cross-chain exchanges from any asset Beans trade against on the Beanstalk DEX on one chain to any asset Beans trade against on the Beanstalk DEX on another chain.

#### One Big Open Question

The rest of this roadmap has been written as if both Stalk and Seeds will become fungible assets in the near future. However, upon reflection about creating the most flexible, efficient, censorship resistant, multi-chain Beanstalk, it is evident that there are a lot of benefits to abstracting away Seeds from the Silo entirely.

_The Background_

Seeds were originally conceived as an accounting tool to facilitate the linear increase in Stalk over time, which creates opportunity cost for Withdrawing your assets from the Silo and then Redepositing them again.

_The Beauty_

While ultimately unnecessary from an implementation perspective, the idea of two different assets that are both futures on the growth of the Bean supply, but with very different return profiles over different time horizons, was quite elegant from an economics perspective. Among other things, the Stalk:Seed price would be an indicator of the expectation of _when_ the Bean supply is expected to increase.

_The But_

However, in the context of a multi-chain, everlasting Beanstalk with a gauge system, fungible Seeds become an obstacle to flexibility, especially compared to a model that emulates Seeds (_i.e.,_ Deposits still accrue grown Stalk over time) without making them fungible.

Consider the scenario where a pool, for whatever reason, is no longer attractive to reward Stalk and Seeds to, such that the gauge system removes all Stalk and Seed rewards going forward. While a Silo Member in a Stalk-only Beanstalk is highly likely to Convert the deprecated assets to another asset that is still earning grown Stalk, thus limiting the permanent exposure Beanstalk has to a single pool, if the Depositor has fungible Seeds there is no way to stop rewarding grown stalk to those Deposits, even if the token is deprecated by the gauge system. The owner of the Seeds owns them forever, which greatly limits the effectiveness and sustainability of a gauge system.

_The Big Open Question_

There is a clear reason to **consider removing fungible Seeds from the Beanstalk roadmap entirely**.

Given that from the publishing of the original whitepaper to date the Beanstalk design has included fungible Seeds, this is a question worthy of high quality discussion and debate.

### Off-Chain Development

Making Beanstalk widely accessible and easily understandable requires a significant off-chain development effort to complement the on-chain development.

Beanstalk Farms is working to coordinate a variety of community-centric projects and programs to facilitate the deep understanding and widespread adoption of Beanstalk as a core protocol, and Beans as a key stablecoin, within DeFi and beyond.

Dates provided are rough estimates on when the first iteration of off-chain projects will be published.

**Brand (February-March, 2022)**

As Beanstalk becomes more widely adopted across DeFi, there is a tension around balancing a truly decentralized development effort with a strong and consistent appearance and presence to newcomers.

Beanstalk is meticulously crafted and designed for optimal user behavior. Beanstalk’s overall branding should match this level of fidelity and extend to all user interactions and touchpoints. Conscious efforts are being made to revamp all aspects of Beanstalk’s look and feel which should help create an overall iconic Beanstalk experience.

Beanstalk Farms will publish an open-source “Brand Kit” to facilitate easy access to logos, images, and other protocol-related media. The Brand Kit will reflect the decentralized ethos of Beanstalk and maximize the ability for anyone to leverage the content and materials created by Beanstalk Farms. The adoption of the Brand Kit will likely be proposed via Snapshot.

The Brand Kit will include but is not limited to:

*   A brand visual identity style guide:  
    \- Revamped logo  
    \- Revamped typography  
    \- Brand colors  
    \- Principles for composition, illustration, and standards of excellence
*   A brand user experience design guide
*   A brand copy style guide

**Diamond Foundation (March-April, 2022)**

Beanstalk is an early adopter of the EIP-2535 Diamond Standard. While developing Beanstalk as a diamond has been incredibly beneficial, there are a variety of drawbacks which derive primarily from the novelty of the Standard and the lack of tooling to support diamonds.

For example, etherscan and Dune Analytics both do not easily integrate diamonds. While there is some diamond specific tooling like louper.dev, Beanstalk Farms wants to support the continued development of better tools and resources for projects building diamonds.

Beanstalk Farms will coordinate with the creator of [EIP-2525](https://eips.ethereum.org/EIPS/eip-2535), [Nick Mudge](https://twitter.com/mudgen), and various other projects leveraging the Diamond Standard to create a decentralized Diamond Foundation to advance the adoption of and development to support the Diamond Standard.

**Open Source Middleware Suite (February-March, 2022)**

Beanstalk Farms will continue to improve the existing Beanstalk and Bean subgraphs to support a variety of new Beanstalk developments (_e.g._, the recently launched Farmers Market).

Beanstalk Farms is developing both Python and TypeScript Beanstalk SDKs that will be open sourced upon completion. The Beanstalk SDKs will use the various Beanstalk subgraphs by default, but also be able to handle instances where the subgraphs are unavailable for whatever reason. This should significantly decrease friction around building applications on top of Beanstalk. [bean.money](http://bean.money) will transition to leveraging the SDK upon completion.

Beanstalk Farms will host an API built on the Beanstalk SDK on the [Akash decentralized network](https://akash.network/).

**Open Source** [**bean.money**](http://bean.money) **(April-May, 2022)**

In the coming weeks, Beanstalk Farms will open source the code for bean.money. Open-source code is essential to decentralized development.

Beanstalk Farms will maintain the [bean.money](http://bean.money) code to support the on-chain development described above.

In addition, Beanstalk Farms will work to develop an open-source, best-in-class analytics suite for Beanstalk, to facilitate widespread access to high quality data about Beanstalk and the Beanstalk ecosystem.

**Documentation (April-May, 2022)**

To date, Beanstalk Farms has maintained the whitepaper as a “living” document, which is regularly modified to reflect the current protocol implementation. A meticulous whitepaper version history has been maintained for transparency and clarity.

However, the rest of the documentation around Beanstalk is both scattered across bean.money and Medium articles and not regularly updated to reflect the latest Beanstalk implementation.

Beanstalk Farms will transition all Beanstalk-related documentation to an open-source Beanstalk github. This will include the whitepaper (which will continue to be maintained as a live document), how-to guides to navigate [bean.money](http://bean.money) and the Beanstalk protocol, a complete set of references, an FAQ and a variety of other educational content related to Beanstalk.

**Other Distributed Development Teams (Continuous)**

Decentralized development is essential for the long term success of Beanstalk. While there are already two independent, complementary Beanstalk development organizations (Beanstalk Farms and Bean Sprout), Beanstalk Farms will provide support to other development teams that want to develop Beanstalk or other protocols on top of Beanstalk.