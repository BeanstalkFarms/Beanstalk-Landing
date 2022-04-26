---
title: "Beanstalk: The Path Forward FAQ"
subtitle: "Additional information about the plan to Unpause Beanstalk."
author: Beanstalk Farms
description: >-
  Additional information about the plan to Unpause Beanstalk.
date: 2022-04-20T22:15:00.000Z
image: /assets/uploads/barn-raising.png
layout: farm
---

**This document will be updated and added to as new information relevant to the Barn Raise and Unpausing Beanstalk becomes available.**

**Fundraiser (The Barn Raise)**
-------------------------------

> Why does Beanstalk need a fundraiser?

Beanstalk suffered a governance exploit that drained the protocol's liquidity. The Barn Raise is a way to attract sufficient liquidity to Unpause Beanstalk in a healthy manner.

> Why is the Barn Raise time-bound?

Giving participants a pre-defined period during which they can participate in the Barn Raise will incentivize participants to compete for available Soil at attractive Pod Line positions in a timely fashion, and allow Beanstalk to be quickly Unpaused. Because Beanstalk cannot be Unpaused until the Barn Raise is complete, setting a fixed window for the Barn Raise allows for a clear timeline for the protocol to Unpause.

> Does the protocol need ~$77M? Would a smaller amount such as $XM be sufficient to Unpause the protocol and allow it to grow again in a healthy manner? Is there a minimum amount to raise?

Given the protocol's economic performance prior to the exploit, it has demonstrated sufficient resilience to Unpause even with a relatively small amount of liquidity. However, an ideal scenario is one in which all ~$77M in stolen funds are recouped.

> Why not keep Beanstalk running during the Barn Raise?

Raising capital while Beanstalk is running presents certain technical challenges; executing the Barn Raise and Unpausing Beanstalk in two discrete steps allows everyone to ensure each step is done safely.

> What is Beanstalk's utility?

In the medium term, Beanstalk has tremendous utility as a liquidity provider, having created and scaled three discrete liquidity pools prior to the governance exploit.

Beanstalk is the only positive carry stablecoin in DeFi — it has the potential to be the most economically attractive stablecoin product available.

For more about Beanstalk's utility, please refer to this community-authored [article](https://mirror.xyz/astn.eth/w5336TYVkb-9eIlKxrCPKLoUNvYRgJmd6nB4Br5-Vs8).

> What asset will be used to Sow during the Barn Raise?

The exact token that will be used in the Barn Raise is TBD, but given the time delay between the Barn Raise and Unpausing Beanstalk, it will likely be a major stablecoin such as USDC or UST, not ETH.

> Will Barn Raise Pods be tradable?

TBD. We’re exploring safe architectures for making BR Pods tradable like regular Pods. We expect to audit this functionality before it ships.

> Why start this in 10 days?

We need time to build and test contracts appropriately.

> Will Bids be available for all to see prior to Sowing?

Yes, all Bid information will be visible on the Barn Raise website.

> If the full $77M gets filled during Bidding period, will there be a Sowing period?

There will still be a Sowing period. The Weather will begin at `20%` and increase `1% every 10 minutes`. As it increases, Bids at each Weather will automatically fill, new investors will have the opportunity to Sow, and bidders at higher weather will have the opportunity to reduce their bid. This process continue until Soil reaches 0.

> When do Bids get executed?

Bids execute automatically if and when the Weather reaches the Weather specified in the Bid.

> Won’t everyone place a Bid at the maximum Weather?

Bids are not guaranteed to be filled during the Barn Raise. As the Weather climbs during the Sowing Period, anyone can Sow. If Soil reaches 0 before a Bid is reached, that Bid receives no Pods, and the principal is refunded to the Bidder.

Example: 

- Someone places a bid at `400%` Weather to Sow `$10M`.
- The Weather starts at `20%` and begins increasing. Participants begin Sowing.
- At `250%` Weather, all $77M is raised; the Barn Raiser is completed.
- The person who bidded at 400% Weather receives no Pods. Their `$10M` principal is refunded.

**Unpausing Beanstalk**
-----------------------

> What's going to happen to Beans, Stalk, Seeds, BDV, and Pods?

All Beanstalk assets will be scaled down by a factor proportional to the percentage of total capital Sown during the Barn Raise.

Example: If Beanstalk raises `40%` of the target ~$77M, each Silo Member's existing Stalk balances will be scaled down by `60%`.

> Can I Withdraw my assets from the Silo after the relaunch?

Yes. However, reimbursed Silo assets will be placed on a vesting schedule based on the percentage of the Barn Raise Pod Line ("BR Pod Line") that has become Harvestable.

If Silo Members choose to Withdraw before the BR Pod Line has been fully repaid, they will face a haircut. The size of the haircut will be proportional to the amount of the BR Pod Line repaid.

Example: You had `10,000 BDV` in the Silo prior to the exploit. Beanstalk raises $77M in exchange for `250M Pods`. Beanstalk Unpauses and performs normally. After some time, `100M Pods` from the BR Pod Line has become Harvestable. Withdrawing your Silo deposit at this point would yield `(100/250) * 10,000 BDV = 4,000 BDV` of assets. The remaining assets are forfeited.

> What happens to the rest of my assets when I Withdraw early?

Forfeited assets will effectively be distributed back to rest of the Silo Members that are still subject to the vesting schedule.

> Why use a market cap-based vesting schedule?

The market cap-based vesting schedules creates a strong alignment between existing Silo Members and Barn Raise participants, allowing new capital to enter with confidence that the Silo Members they are bailing out are not incentivized to quickly leave, and even if they do, there is a limit to the amount of capital that can leave at any time.

> What will the Weather be when the Barn Raise begins?

The Weather will start at `20%` and increase by `1%` every `10 minutes`.

> What will the Weather be after Beanstalk Unpauses?

The Weather will be the same as prior to the exploit.

> What pools will be launched when Beanstalk Unpauses?

Beanstalk will likely Unpause with one liquidity pool on Curve containing a stablecoin pair.

> How will Silo conversions be handled with vesting? Will people that are locked still be able to convert above/below peg?

Beanstalk Farms is still exploring the technical implications here, but we believe Conversion functionality is crucial to Beanstalk’s stability and expect to launch with this enabled.

**Governance**
--------------

> How is Beanstalk Farms going to handle governance moving forward?

On-chain governance has been removed for the time being. A community-controlled multi-sig wallet will maintain ownership of the protocol. On-chain governance will resume in the future when a safe, decentralized governance mechanism is developed and fully audited.

> How will the multi-sig work?

Beanstalk Farms is evaluating other how other DAOs utilize multi-sig wallets to ensure safe and effective governance. It is expected there will be a minimum of 9 holders included in the multi-sig. These slots will be split between members of the Beanstalk community, Beanstalk Farms contributors and Publius.

**Security**
------------

> How will you prevent this from happening again?

Governance of Beanstalk is moving to a multi-sig wallet custodied by the community until a safe on-chain solution can be developed and audited. BIPs will be voted on via Snapshot until then.

Beanstalk will undergo a Trail of Bits audit beginning in June, and Beanstalk Farms will launch bug bounty programs with Immunefi and potentially other reputable bug bounty firms.

Beanstalk Farms will double down on its efforts to attract and retain experienced security engineers who specialize in smart contract development.

> Does centralized multi-sig governance violate the decentralized ethos of Beanstalk?

To some extent. Everything is relative, and the multi-sig will still be custodied by a diverse set of distributed community members. However, multi-sig governance is still a sub-optimal and temporary solution. Once Beanstalk has been Unpaused, Beanstalk Farms will explore a more resilient decentralized governance solution. Any new governance solution will be thoroughly audited before being proposed on-chain.

> Will there be more audits?

Yes. Beanstalk will undergo an end-to-end audit with Trail of Bits beginning in early June.

> Will there be a bug bounty?

Yes. Beanstalk Farms has engaged Immunefi among others to launch a comprehensive ongoing bug bounty program.