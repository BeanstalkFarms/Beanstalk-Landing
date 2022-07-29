---
title: BIP-21 Proposal Announcement
subtitle: Beanstalk Farms has proposed BIP-21 on Snapshot.
date: 2022-07-29T22:56:47.042Z
author: Beanstalk Farms
description: Beanstalk Farms has proposed BIP-21 on Snapshot.
image: /assets/uploads/bip-21-proposed.png
---
![](/assets/uploads/bip-21-proposed.png)

Today, Beanstalk Farms is pleased to announce the proposal of BIP-21—the path to Replanting and Unpausing Beanstalk—on Snapshot. Stalkholders can now vote on BIP-21 [here](https://snapshot.org/#/beanstalkdao.eth/).

After suffering a governance exploit on April 17, 2022, Beanstalk has been Paused and the Beanstalk Farms team of core contributors have worked to prepare Beanstalk to Unpause in a safe manner. This has included:

* Structuring the [Barn Raise](https://docs.bean.money/farm/barn) to recapitalize Beanstalk and its pre-exploit Silo Members;
* Implementing a new temporary [governance structure](https://docs.bean.money/governance/beanstalk/bcm-process);
* Completing two audits with [Halborn](https://bean.money/blog/halborn-audit-of-beanstalk-completed) and [Trail of Bits](https://bean.money/blog/trail-of-bits-audit-of-beanstalk-completed); and 
* Proposing [BIP-21](https://snapshot.org/#/beanstalkdao.eth/), the path to Replanting and Unpausing Beanstalk. 

Voting on BIP-21 has begun and will end on August 5, 2022 at 9:00am PT / 12:00 pm ET or when a two-thirds supermajority is reached. If BIP-21 passes, Beanstalk will be Unpaused thereafter on August 6th, 2022 around 16:00 UTC. 

Read more about the Replant timeline [here](https://bean.money/blog/anticipated-replant-timeline). For more information on how Beanstalk governance works, visit our [governance documentation](https://docs.bean.money/governance/beanstalk).

BIP-21 has three primary objectives:

1. Executing a series of transactions to Replant Beanstalk;
2. Committing a series of upgrades to Beanstalk; and
3. Unpausing Beanstalk.

Below is a summary of some of the major upgrades to Beanstalk proposed in BIP-21:

* **_Oracle Whitelist (f.k.a. Generalized Minting)_:** Before the exploit, Beans and Soil were only minted according to the shortage or excess of Beans in the old BEAN:ETH liquidity pool on Uniswap. The Oracle Whitelist allows Beanstalk to mint new Beans and Soil based off of the shortage or excess of Beans in any number of whitelisted liquidity pools that Beans trade in. At Unpause, the only pool on the Oracle Whitelist will be the new BEAN:3CRV pool, but liquidity pools can be added to the Oracle Whitelist via governance.
* **_Convert Whitelist (f.k.a. Generalized Convert)_:** Before the exploit, Deposited Beans could be Converted to Deposited BEAN:ETH LP when the Bean price was above $1, and vice versa when the Bean price was below $1. The Convert Whitelist allows Farmers to perform any number of whitelisted _Conversions_ in the Silo, where each Conversion has a token being Converted _From_, a token being Converted _To_, and condition in which the _From_ token can be Converted to the _To_ Token. Conversions can be added to the Convert Whitelist via governance. Check out [BIP-21](https://github.com/BeanstalkFarms/Beanstalk/pull/72) to see the updated Convert Whitelist.
* **_Sub-optimal Conversion_:** Previously when a Silo Member Converted a Deposited LP Token to a Deposited Bean, Grown Stalk from Seeds could be lost if the current BDV of the Deposit is lower than at the time of Deposit due to impermanent loss. This made Converting unattractive when Beanstalk wants to encourage Conversions. With BIP-21, Silo Members retain Grown Stalk from Seeds for a given Deposit, and retain their BDV if it decreased since the time of Deposit. 
* **_FarmFacet_:** The FarmFacet allows Farmers to compose transactions in Beanstalk together. The full power of this won’t be realized yet unless you are developing on Beanstalk, but eventually there will be a generalized transaction builder in the UI that non-technical Farmers can use to compose together arbitrary transactions in Beanstalk.
* **_Depot and Curve Pipeline_:** The Depot is an extension of the composability of the FarmFacet to the rest of the Ethereum network. Any protocol with a Pipeline to the Depot can be used via Beanstalk. Pipelines can be added to the Depot via Beanstalk governance. The Curve Pipeline is the first integration of this functionality between Beanstalk and another protocol, allowing Farmers to use certain Curve functions from within Beanstalk. 
* **_Withdrawal Freeze_:** Assets that are Withdrawn from the Silo are now Claimble at the end of the Season rather than 4 Seasons later. This reduces the friction Farmers face when interacting with Beanstalk.
* **_Division of Silo Reward Claiming_:** On the pre-exploit UI, Farmers would _Farm_ their Grown Stalk, which would also claim all other Silo rewards in a single transaction, even when it may not have been gas-efficient to do so. Now, Farmers can separately _Mow_ their Grown Stalk and _Plant_ their Plantable Seeds, which gives Silo Members more customizability in their transactions with the Silo.
* **_Deposit transferability_:** Deposits being non-transferable is an inefficiency for Silo Members. Deposits are now transferable—this also lays the foundations for a future Deposit Market, which would allow Farmers to trade Deposits in a decentralized, trustless fashion.

## About Beanstalk

Beanstalk is a decentralized protocol that allows anyone to realize the value of an open, permissionless fiat stablecoin. The Beanstalk community of lenders, borrowers and savers secures a protocol-native stablecoin, Bean, with the goal of creating the world’s most accessible digital money system. By eliminating collateral requirements, Beanstalk can be the catalyst for a trustless money that unlocks the potential of decentralized finance for everyone.
