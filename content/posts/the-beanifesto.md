---
title: The Beanifesto
subtitle: Upcoming Protocol Developments and How They Improve Beanstalk
date: 2023-05-17T20:44:35.285Z
author: Beanstalk Farms
description: "The Beanifesto: Upcoming Protocol Developments and How They Improve Beanstalk"
image: /assets/uploads/mayflowerupdate3.png
---
The future is bright, and the sun is shining down on Beanstalk. Now is a pivotal time for the protocol, the DAO, and the Beanstalk community. 

The next couple months will see major upgrades and innovations come to fruition. The Mayflower Update is setting sail; all aboard for the next chapter in this bold monetary experiment. 

**[What does the Mayflower Update consist of?](https://bean.money/blog/mayflower-update)** The three main elements are: changes to the Sunrise system, various adjustments and improvements to DAO functions packaged together as Silo V3, and the launch of the Basin DEX. Here are the timelines for these elements, details on their sub-components, and color around the motivation and intended outcomes of each.

# Good Morning Sun

![Sunrise Improvements consist of 2 changes; The addition of a Dutch auction for the Temperature of a given Season, and dynamic rewards for calling the Sunrise function](/assets/uploads/sunriseadj.png)

Sunrise Improvements are the first components of Mayflower that have been implemented, with DAO voters passing [BIP-34](https://app.bean.money/#/governance/0xb43ce40fff8c91924a9567638eb60bf3fe60ba2c9b6d2d62b0e38a63f07bb423) on May 3rd and changes taking effect immediately. BIP-34 reduces unnecessary Pod issuance, improving the overall efficiency of the Field. Right-sizing Pod issuance will make peg maintenance more efficient and increase the creditworthiness of Beanstalk.

First is the introduction of a Dutch auction conducted over the first 25 blocks (the Morning) of a Season, where the Temperature scales from 1% to 100% of the maximum Temperature. Upon every Sunrise, Beanstalk calculates a Temperature for the Season based on the excess or shortage of $BEAN in the BEAN3CRV pool ([Delta B](https://docs.bean.money/almanac/protocol/glossary#deltab)). Since the Temperature determines the number of Pods creditors receive per Bean lent to the protocol, making it dynamic within a Season will reduce instances of over-incentivizing creditors when demand for Soil is high. This makes the peg mechanism more efficient, making Beanstalk more creditworthy. 

Secondly, Beanstalk must incentivize someone to call the Sunrise function each Season. Previously this was done by rewarding 25 BEANs to the caller, with the reward increasing every second the function was not called. BIP-34 makes this reward variable based on Ethereum gas costs and BEAN price when the function is being called. The rationale is to reduce unnecessary BEAN issuance to increase Beanstalk’s efficiency and reduce sell pressure.

On the surface, Sunrise Improvements might seem like small adjustments, but both make the protocol more efficient regarding asset usage. Over time these frequent small reductions in supply growth will compound, with dynamic Sunrise call compensation removing sell pressure and reduced Pod issuance due to the Dutch auction allowing the peg mechanism to work more effectively.

# Silo Remodeling

![](/assets/uploads/silov3.png)

Part two of the Mayflower Update voyage takes place at the Silo, centered on streamlining the user experience and removing frictions associated with [Unripe Asset conversion](https://twitter.com/Bean_Farmers/status/1646898626311127042). Auditing of the code involved is underway and is planned to conclude in late May. After that, BIP-36 will go live for voting, and if passed, the Silo V3 changes will be introduced in June. The changes consist of:

* Removing the Withdrawal Timer for Deposits
* Tokenizing Deposits as ERC-1155s;
* Enabling dynamic Seeds per BDV adjustments by the DAO; and
* Instituting Seed reward parity between Unripe BEAN and Unripe BEAN:3CRV.

The benefits that come with the Silo upgrade are multifaceted; DeFi composability, user experience, and peg mechanism efficiency are all catching buffs in V3. Here’s how it breaks down.

## Seed Rewards Changes

Among all these impactful changes, Seed reward parity should lead the way in terms of improving the peg as it removes a major friction contributing to BEAN’s prolonged depeg. Unripe BEAN:3CRV LP deposits receive 4 Seeds per BDV (BEAN Denominated Value), compared to 2 for Unripe BEAN deposits. This has created a situation where Unripe BEAN:3CRV holders will lose out on rewards if they convert those tokens to Unripe BEAN, preventing BEAN liquidity from flowing from the BEAN:3CRV pool to the Silo. Since the balance, or in this case imbalance, of BEAN to 3CRV determines the price of BEAN, equalizing the Seed rewards should lead to more Unripe BEAN:3CRV conversions and clear the path for a return to peg. Further breakdown of this change and its intended effects can be found in [this thread](https://twitter.com/Bean_Farmers/status/1651609665862778885). 

Enabling the DAO to vote on adjustments for Seed rewards given to different deposited assets not only allows parity to be achieved in this instance, but also makes future adjustments with other whitelisted assets possible. This change looks ahead to the near future, where more trading pairs for BEAN will be available beyond 3CRV (more on this below.). DAO control over Seed rewards adjustments opens the door for creating a Gauge System, where voters can direct rewards to specific pools. Details of the gauge system are yet to be determined, but if you’re familiar with protocols like Curve, Balancer, or Velodrome, those systems should give an idea of what Beanstalk’s will look like. Some initial thoughts on the Gauge System can be found in this [recent blog post](https://bean.money/blog/gauge-system).

## Deposit Experience and Composability Improvements 

The other two changes included in BIP-36 focus on user experience and composability for Silo Deposits. Currently, there is a lockup period between withdrawing assets and being able to claim them to a wallet. This will be changed to a single transaction, saving users money on gas. This change also makes deposits usable for creating orders on the Pod market since BEANs can be withdrawn and exchanged immediately when the order is filled. The implications here are that depositing becomes more attractive with lower costs and immediate accessibility to withdrawals, and the Pod Market becomes more liquid since depositors can create orders while their assets are still in the Silo. 

For Silo Deposits, ERC-1155 tokenization will unlock composability across the wider DeFi ecosystem, allowing them to be bought and sold permissionlessly on marketplaces such as OpenSea. Since this flexible standard allows fungible and non-fungible tokens to be transferred simultaneously, depositors can list the tokenized deposit representing their deposited position on third-party marketplaces. When purchased, the underlying deposited BEAN will be transferred to the buyer. Since BEANs deposited in the Silo accrue interest through seigniorage, they have positive carry. This attribute is interesting to consider for DeFi purposes, as a stablecoin with positive carry would likely entail more favorable borrowing terms when used as collateral. Overall, tokenization is a big step forward in advancing the utility of BEAN, instantly opening up marketplaces for deposit trading and paving the way for integration into DeFi protocols.

![ERC-1155 Deposit Prototypes](/assets/uploads/erc1155deposits.png)

# Basin, Wells, and Pumps

Think of Basin as a superpowered DEX for BEAN trading pairs, and potentially other protocols’ native tokens. It’s designed to be multi-block MEV resistant, which current DeFi exchanges have yet to address, and provides a new level of customization to LPs. Here’s the breakdown, starting with an explanation of the multi-block MEV challenge. 

Multi-block MEV has been a vulnerability for [DEXs on Ethereum since the Merge](https://blog.uniswap.org/uniswap-v3-oracles). With Beanstalk using DEX pools (like Curve) as price oracles for $BEAN, the potential for bad actors (block proposers) to manipulate price over multiple blocks is an issue for the peg maintenance algorithm. A validator can know if they will control the next block, opening up the possibility of raising the TWAP oracle price via flash loan. While it requires a large amount of capital to conduct a profitable manipulation, this edge case can be dealt with through customizable oracles.

![Basin DEX Architecture](/assets/uploads/basinarchitecture3-1-.png)

Basin is a new type of DEX, composed of liquidity pools, termed Wells, and price oracles, known as Pumps. So far, two outside audits have already been completed and are in the remediation phase. Deployment of Basin and the initial BEAN:ETH Well is scheduled for June, with the BIP-37 implementation vote in late June. While a later blog will cover all the details of Basin, now is a good time to cover the key features and use cases.

**Pumps**- Customizability allows for unique implementations, such as the first-of-its-kind multi-block MEV-resistant TWAP oracle. Pumps also offer cost advantages, allowing Well deployers to collect only the necessary data and reduce storage costs. 

**Wells**- Wells are designed to be similarly customizable and, in a future version, will allow LPs to encode specific order parameters and even entire trading strategies for the assets they provide to a pool. For the first iteration of Wells, liquidity can be provided on custom pricing functions and for multiple assets at once. All in all, Basin aims to be an optimal environment for liquidity providers.

The system’s customizability and MEV resistance are also beneficial for traders, as increased multi-block MEV resistance and reduced data storage costs will be reflected in the costs incurred by users. Basin provides the framework for zero-fee exchanges, where liquidity is encouraged via protocol-native incentives. 

## Integration with Beanstalk

Beanstalk provides an ideal opportunity to implement a feeless Well, as LP tokens can be deposited in the Silo to earn Seigniorage once whitelisted (the BEAN:ETH Well whitelist vote is currently scheduled to take place in late June.) As discussed in previous posts, adding additional liquidity venues for BEAN makes it more useful as a stablecoin, since it can be exchanged directly for a wider variety of assets.

# Setting Sail

While Beanstalk has proved its resilience over the past year post-exploit, the following months will see a new wave of innovations and improvements in the protocol and ecosystem. Expanding use cases in DeFi, clearing the path for a return to peg, and increasing efficiencies in protocol operations are all included in the Mayflower Update. Beyond Mayflower, the Gauge System and on-chain governance are the two major projects up next. Several auxiliary ecosystem projects, such as Root and Irrigation, are also on the horizon. The Farm is getting bigger and better, so join the community on [Discord](https://t.co/mxRBo85kOk), keep an eye on [@bean_farmers](https://twitter.com/Bean_Farmers) & [@BeanstalkFarms](https://twitter.com/BeanstalkFarms) for frequent updates, and check out Beanstalk for yourself <https://app.bean.money/>.