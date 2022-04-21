---
title: "Beanstalk: The Path Forward"
subtitle: "Announcing the Barn Raise, a public ten-day fundraiser to restore Beanstalk."
author: Beanstalk Farms
description: >-
  Announcing the Barn Raise, a public ten-day fundraiser to restore Beanstalk.
date: 2022-04-20T22:00:00.000Z
image: /assets/uploads/barn-raising.png
layout: farm
---

Beanstalk is a decentralized and transparent solution to DeFi's endemic stablecoin supply shortage. It was designed from first principles to be a paradigm-shifting DeFi primitive that makes decentralized, cost-efficient stablecoins available to anyone with an internet connection. Beanstalk was initially launched in August 2021 with just 100 Beans and has never taken traditional funding. Over the previous eight months, Beanstalk organically grew to $100M in market cap, attracting $144M in long term-incentivized liquidity.

Until the on-chain governance attack on April 17, the [model](https://bean.money/docs/beanstalk.pdf) was working exactly as designed. During the two weeks prior to the attack, Beanstalk:

-   Paid ~$25M back to creditors, reaching a total of ~$50M paid back since Beanstalk's inception;
-   Distributed ~$25M in interest to Depositors in the Silo;
-   Attracted ~$110M in new liquidity across three liquidity pools; and
-   Reduced the protocol debt ratio by more than 50%.

From Day 1, the protocol has been owned solely by members of the Beanstalk DAO via a decentralized, on-chain governance structure. Unfortunately, a bad actor exploited that very structure to steal all Silo assets, including $76M in non-Bean liquidity. **This was an attack on Beanstalk's governance model, not its economic design.**

Despite this hurdle, the Beanstalk community has emerged stronger than ever and contributors are working around the clock and without pay to get the protocol back online. The Beanstalk Farms team has always said that if Bean is at peg, it's a good day. The community is ready to have a great day.

<!-- <img src="/assets/uploads/bean-logo-128.png" class="block mt-6 mx-auto w-12 h-12" /> -->

![](/assets/uploads/bean-logo-128.png)

## The Plan

The Beanstalk community has discussed a number of possible paths forward for Beanstalk. Below, Beanstalk Farms outlines what it views as the optimal mechanism to safely resume the protocol. It is subject to change as conversations with the community and various sources of capital continue. Ultimately, though, the Beanstalk DAO will vote on the final version of the plan via Snapshot.

### Fundraiser (The Barn Raise)

#### Overview

On May 2nd, Beanstalk will host The Barn Raise, a public ten-day fundraiser to restore up to ~$76M non-Bean liquidity stolen from the Silo. The Barn Raise will consist of two phases: (1) a seven-day Bidding Period, followed by (2) a three-day Sowing Period. This fundraiser presents a unique opportunity for supporters to access a category-defining protocol at a seed-like stage while stepping into pre-existing product-market fit, a proven team, and a steadfast community. Any Ethereum wallet will be able to lend to Beanstalk during the Barn Raise via the new Barn Raise Pod Line ("BR Pod Line").

There will be 76M Soil available during the Barn Raise, meaning that a maximum of $76M can be Sown before the fundraiser ends.

#### Bidding Period

Between 12:00pm ET on 5/2 11:59am ET on 5/9, participants will have the option to submit bids on Pods — Beanstalk's native debt asset — usingnder three parameters: (1) the Weather for Sowing; (2) the maximum position in the BR Pod Line acceptable, and (3) the size of the bid (denominated in USD). Bids will not be cancellable once submitted, but may be modified to (1) lower the Weather, (2) increase the maximum position in the BR Pod Line or (3) increase minimum Plot size. After the Bidding Period concludes, all submitted bids will be locked and auto-filled based on their parameters.

#### Sowing Period

At 12:00pm ET on 5/9, the Weather (interest rate) will start at 20% and increase by 1% every 10 minutes for the duration of the Sowing Period, which will end after three days or when the Soil reaches 0, whichever occurs first. Bids that are not successfully filled during the Sowing Period will be claimable after Beanstalk restarts. Bids will be partially filled if possible.

#### Beanstalk Restart

After the Sowing Period concludes, there will be a brief interlude prior to Beanstalk resuming, which core contributors will use to ensure that satisfactory governance and safety measures are in place. Once Beanstalk resumes, new Bean mints will be distributed in a one-third allocation to each of the Silo, existing Pod Line and BR Pod Line. The BR Pod Line, like the existing Pod Line, will be repaid on a FIFO basis. After the BR Pod Line completely Harvests, the new Bean mint schedule will revert to Beanstalk's original one-half Silo and one-half existing Pod Line allocation.

Capital committed during the Barn Raise will be used to reimburse stolen funds pro rata to the Silo. The protocol will scale its obligations based on the amount of capital raised. This means that if X% of the $76M is raised, participants will receive X% of their pre-exploit Beans, Stalk, Seeds, BDV and Pods.

Silo Members' reimbursed Silo assets will be placed under a vesting schedule based on the percentage of the BR Pod Line that has become Harvestable. If Silo Members choose to Withdraw before the BR Pod Line has been fully repaid, they will face a haircut proportional to the amount of the BR Pod Line repaid. For example, if a Silo Member decides to Withdraw all of their assets from the Silo and `50%` of the BR Pod Line has been repaid, they will forfeit 50% of those assets. Farmable Beans earned from new mints going forward are not subject to this time-vesting schedule.

The Bidding Period will launch on 5/2 at 12:00pm EST. The Sowing Period will launch on 5/9 at 12:00pm EST.

This is the current iteration of the Barn Raise opportunity. As discussed above, the community is still evaluating possible adjustments in order to properly incentivize new capital, and is happy to speak with anyone who has additional thoughts, questions or offers on how to safely reseed Beanstalk's liquidity and resume the protocol.

### Governance

Shortly after the April 17 attack, Beanstalk was paused and on-chain governance was removed. Upon resuming, Beanstalk will be governed via a new community-run multi-sig wallet custodied by a group of nine Beanstalk community members and contributors. This will serve as a temporary security measure until a more secure, fully-decentralized governance mechanism has been architected and sufficiently audited.

Beanstalk Farms continues to be excited about the potential of on-chain governance within DeFi. However, the team recognizes the current implementation challenges of safe on-chain governance and takes the position that an adequate mechanism should be reinstated only with great caution.

### Security

Security is paramount to Beanstalk and a core focus of Beanstalk Farms. Moving forward:

-   The Barn Raise contract will be a separate contract from Beanstalk itself.
-   The Barn Raise contract will be governed by the Gnosis multi-sig wallet detailed in the Governance section.
-   The Barn Raise contract will immediately send capital raised to the Gnosis multi-sig wallet detailed in the Governance section.
-   Beanstalk Farms will ensure that the Barn Raise contract is reviewed by numerous sophisticated, high-quality Solidity developers before being deployed.
-   In early June, Beanstalk will begin a full-scale audit with [Trail of Bits](https://www.trailofbits.com/).
-   Beanstalk Farms will launch an ongoing bug bounty program.
-   Beanstalk Farms has begun a search to attract and retain a highly-experienced, sophisticated security expert who specializes in Solidity smart contracts.

## The Path Forward

Beanstalk has always been an experiment. Contributors recognize a need within DeFi for a capital-efficient, decentralized stablecoin and set out to build it together. Beanstalk's innovative credit facility and incentive mechanisms are responsible for the protocol's growth to a $100M+ market cap in just 8 months.

Unlike every other decentralized, algorithmic stablecoin in history, Beanstalk's economic model has not failed. The Beanstalk Farms team is committed to carrying the torch for Beanstalk's mission in lockstep with the Beanstalk community. We believe that resuming Beanstalk after a successful Barn Raise is the best path to achieve that goal.

---

In the next day or two, Beanstalk Farms will submit a Snapshot proposal of this plan for Stalk holders to vote on.

Beanstalk Farms is inspired by the Beanstalk community's resilience and deep belief in the protocol's core economic vision for DeFi.