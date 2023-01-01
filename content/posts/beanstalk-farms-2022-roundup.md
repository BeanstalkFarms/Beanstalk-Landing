---
title: "Beanstalk Farms' 2022 Roundup"
subtitle: "A recap of what happened on the Farm in 2022."
author: "Beanstalk Farms"
description: "A recap of what happened on the Farm in 2022."
date: 2023-01-01T12:45:58.620Z
image: /assets/uploads/roundup.png
tag: Community
---

![image](/assets/uploads/roundup.png)

>   _“Plus ça change, plus c'est la même chose.” (The more things change, the more they stay the same.)_
> 
>   — Jean-Baptiste Alphonse Karr, 1849

**Beanstalk is still an experiment.**

When looking at Beanstalk at the beginning of 2022 versus today, there are a surprising number of similarities:

* A supply of 30-40M Beans;
* About 15-20 contributors working at Beanstalk Farms, a decentralized development organization funded by the Beanstalk DAO; and
* An interest rate (formerly known as the Weather, now known as the Temperature) that ranges from 3500-5500%.

While those are certainly interesting data points, others reveal more substantive indicators of progress since the beginning of the year:

* Bean liquidity is over 3x higher (~$8M vs. ~$26M);
* Another 3,000+ peg crosses despite being offline for nearly 4 months, totalling over 5,000;
* Over $17M in credit has been lent to Beanstalk through the Barn Raise in the worst macro economic conditions in a decade. 

On top of that, it is also very exciting to see:

* An active DAO that continues to engage substantively with and participate in governance of each BIP proposed in 2022 despite the state of crypto markets;
* A number of other development teams building on and around Beanstalk, including Root, Paradox, Irrigation, and more;
* A retainer agreement with Halborn for them to continuously audit new Beanstalk code and other security initiatives like the Immunefi Bug Bounty Program; and
* A version of Beanstalk that is significantly more robust, composable and audited than it was a year ago.

With Beanstalk’s first full calendar year now in the rearview mirror, it is a good opportunity to reflect on the events that took place on the Farm over the last 12 months.

## Spring on the Farm

Despite Beanstalk only being a few months old at the beginning of 2022, it’s lifetime was [already relatively long](https://dune.com/queries/553354/1038437) when compared to past credit based stablecoins attempts like ESD, DSD and Basis Cash. It was around this time when Beanstalk started to approach the efficacy of its peg maintenance mechanism that Farmers know today . By this point the DAO had upgraded Beanstalk via BIPs [6](https://github.com/BeanstalkFarms/Beanstalk-Governance-Proposals/blob/master/bip/bip-06-soil-efficiency.md), [7](https://github.com/BeanstalkFarms/Beanstalk-Governance-Proposals/blob/master/bip/bip-07-convert.md) and [9](https://github.com/BeanstalkFarms/Beanstalk-Governance-Proposals/blob/master/bip/bip-09-efficiency-improvements.md)—upgrades that Beanstalk arguably would not have survived without in the long-term.

In February, the implementation of [BIP-12](https://github.com/BeanstalkFarms/Beanstalk-Governance-Proposals/blob/master/bip/bip-12-silo-generalization.md) allowed BEAN:3CRV LP tokens to be Deposited in the Silo to earn a portion of Bean seigniorage and a vote in Beanstalk governance—this significantly decreased the size of Bean price deviations from its peg as the pool attracted more liquidity. For reference, on February 12th, the Uniswap V2 BEAN:ETH pool and Curve BEAN:3CRV factory pool had about $7.5M and $2.6M in liquidity, respectively (supporting a total outstanding Bean supply of ~42M).

Shortly thereafter, [volume started to pick up](https://twitter.com/isthispublius/status/1501598714045030411) on the Pod Market that was added to Beanstalk in [BIP-11](https://github.com/BeanstalkFarms/Beanstalk-Governance-Proposals/blob/master/bip/bip-11-pod-market.md), a BEAN:LUSD pool was deployed, the BEAN:3CRV pool was added to the Curve gauge and the Beanstalk UI started to see significant upgrades implemented by Beanstalk Farms contributors. Bean Sprout, a Beanstalk accelerator formed by the DAO, incubated Root, which began as an idea for rate free Silo interest swaps on top of Beanstalk. 

In April, demand for Beans really started to pick up, and the world’s first decentralized credit system started to deleverage for the first time—the Pod Rate dropped from ~1600% to ~600% in a matter of a few weeks:

![image](/assets/uploads/deleverage.png)

In the ~8 months that followed Beanstalk’s initial deployment, it organically (without subsidies or private funding) grew to a supply of over [100M Beans](https://twitter.com/isthispublius/status/1515391022162927628) and attracted $144M in long-term incentivized liquidity up until Easter Sunday.

## Governance Exploit and Barn Raise

On April 17, 2022, Beanstalk was exploited via a governance attack (sadly, [the Easter theme](https://pre-exploit-beanstalk-ui.netlify.app/) was only live on the Beanstalk UI for a few hours). The attacker used a flash loan to exploit the protocol’s then on-chain governance mechanism and transferred all of the Deposited assets in the Silo to an address they controlled, resulting in a theft of ~$77M in non-Bean assets.

Upon exploit, Beanstalk was Paused and the on-chain governance mechanism was removed. For the next 6 weeks, the community vigorously debated various plans for how Beanstalk should proceed, and in particular, the structure of the recapitalization plan that became known as the Barn Raise. Stalkholders ultimately voted on the final version of the Barn Raise via Snapshot in [BFP-72: The Path Forward, No Haircuts](https://github.com/BeanstalkFarms/Beanstalk-Governance-Proposals/blob/master/bfp/bfp-72-no-haircuts.md).

BFP-72 didn’t hide that Replanting Beanstalk without any haircuts to pre-exploit assets was not without risks:

> Between the macroeconomic environment and the collapse of Terra, the market is incredibly weak right now. Beanstalk should be able to operate under adverse conditions if it wants to be the ubiquitous stablecoin issuer of DeFi. Instead of being conservative, and having Beanstalk shrink significantly, only to quickly grow back to the size it was prior to the attack—with the right plan, it makes sense to be aggressive, turn Beanstalk back on without any haircut, and instead let the model perform in adverse circumstances, both exogenous and endogenous.
> 
> ...
> 
> This proposed structure doubles down on the core economic mechanism that got Beanstalk to this point. It is up to the market to decide if Beanstalk deserves to exist—and these endogenous circumstances give Beanstalk the opportunity to prove itself even more in the midst of exogenous market turmoil.

On June 6th, the Barn Raise began. The new Beanstalk Community Multisig would custody the USDC used in the Barn Raise until Replant and ownership of Beanstalk upon Replant. _[Ultimately, it takes a village](https://www.youtube.com/watch?v=KfIb1DgQEzg)_ was the most played song in the Beanstalk Discord that day.

Contributors stayed busy throughout the summer, including:

* Supporting Trail of Bits and Halborn in their audits of Beanstalk; 
* Publishing the [Farmers’ Almanac](https://docs.bean.money/almanac/);
* [Restructuring Beanstalk Farms](https://github.com/BeanstalkFarms/Beanstalk-Governance-Proposals/blob/master/bfp/bfp-80-bf-committee.md); and
* Sprinting towards the launch of Beanstalk UI V2 (no more spinning Bean of death!).

## Replant

> “Wen replant?”
> 
> — Unknown

If you’re reading this in 2023, [two audits might seem like table stakes](https://github.com/BeanstalkFarms/Beanstalk-Audits) for Beanstalk, but in the summer of 2022 it was a lifeline. Stalkholders decided that Beanstalk should be Replanted after the release of the audit reports from Halborn and Trail of Bits, which were published in mid-late July.

Shortly thereafter, Root, the first company publicly building on top of Beanstalk, [announced their $9M fundraising round](https://medium.com/@rootmarkets/root-protocol-rent-free-markets-on-beanstalk-6a6b3f71415d). Seeing traditional institutions demonstrate interest in funding businesses building on top of Beanstalk, in spite of the governance exploit and macro conditions, was valuable social validation. Beanstalk still has a lot of work to do in terms of demonstrating its efficacy, but the launch of Root made it all the more clear that if Beanstalk works as a base layer of money, there will be infinite use cases built on top of it in the future.

[BIP-21](https://github.com/BeanstalkFarms/Beanstalk-Governance-Proposals/blob/master/bip/bip-21-replant.md) proposed to Replant Beanstalk, and by the time that supermajority was reached on August 4th, the Barn Raise had attracted over $17M USDC worth of credit (via Fertilizer purchases, the debt asset of the Barn Raise). This indicated significant demand for Beanstalk debt, particularly when considering that only ~33M Beans had ever been Sown prior to the exploit. In addition, the debt was purchased in the backdrop of Beanstalk likely being Replanted with an all-time high Pod Rate in the worst (a) macro environment in at least a decade, (b) crypto market in years, (c) stablecoin market of all time and (d) endogenous circumstances possible, as a result of the governance exploit.

Many other substantive upgrades were made to Beanstalk by the DAO at Replant through BIP-21, including:

* The [Oracle Whitelist](https://docs.bean.money/farm/sun#oracle-whitelist);
* Optimization of Soil issuance when deltaB > 0;
* The Farm Facet and [Farm balances](https://docs.bean.money/developers/overview/internal-balances) that allow Farmers to compose transactions within Beanstalk together;
* The [Depot and Curve Pipeline](https://docs.bean.money/almanac/farm/depot) that enables interactions with Curve through Beanstalk; and
* The introduction of more customization in Silo reward claiming.

Since the exploit, security became a core focus of Beanstalk Farms, Bean Sprout and Publius, which led to retaining Halborn to continuously audit new Beanstalk code and the launch of the [Immunefi Bug Bounty Program](https://immunefi.com/bounty/beanstalk/). Core contributors are working closely with Halborn to write cohesive inline documentation for the entirety of Beanstalk. 

## Real Economic Activity

In November of this year, a parimutuel betting protocol called [Paradox](https://twitter.com/BetParadox/status/1594027418117091328) launched, offering World Cup betting pools denominated in [Roots](https://twitter.com/rootsmoney/status/1592955820467441665), a fungible wrapper for Silo Deposits developed by Root that launched the same day. A significant amount of infrastructure was shipped in order to make this happen, including:

* The beta release of the [Beanstalk SDK](https://twitter.com/0xa13x/status/1592920205361287168), which facilitated the launch of the Root and Paradox UIs; and
* The deployment of [Pipeline](https://twitter.com/SiloChad/status/1592916348027691009), which enables performing an arbitrary series of actions in the EVM in a single transaction, and in this instance:
    1. Wrapping ETH;
    2. Swapping WETH with USDT via the tricrypto2 pool on Curve;
    3. Swapping USDT with BEAN via the BEAN:3CRV pool on Curve;
    4. Copying the amount of BEAN from the swap into a Deposit; and
    5. Using that Bean Deposit to mint Roots, all in a single transaction.

With these launches (alongside Farm balances, the Farm function, etc.), a complete interoperability toolset became available for building on Beanstalk for the first time and made Beanstalk significantly more plug and play.

With the launch of World Cup betting pools on Paradox denominated in Roots, for the first time in the history of Beanstalk, there was demand for Beans that was not entirely speculative in nature, and Beans were bought to do something with.

**The result is a proof of concept.**

It is now possible to take that proof of concept and the lessons learned through building the tech necessary for this launch and continue to build out the Beanstalk tech stack to leverage the composable nature of DeFi and make Beanstalk the ubiquitous stablecoin issuer of DeFi.

## Year in Review

By the numbers:
* Over 17M Fertilizer sold, representing 22.26% of the way towards a full recapitalization;
* Over 126,000 lines of code written across the various Beanstalk development repositories (the Beanstalk contract, UI, SDK, Subgraph, etc.);
* Over 103,000 words written across 152 proposals and 53 blog posts; 
* Over 23,000 Beans in grants to community members via the Community Grant Program;
* Over 100 hours of community calls held in Discord across class, DAO meetings and sharing plans about The Path Forward;
* 14 version updates to the whitepaper; and
* At least 4 protocols being built on top of Beanstalk in Root, Paradox, Irrigation and Onibi.

A lot happened on the Farm in 2022 and it is an exciting indicator of what is to come!

Beanstalk Farms is eager to participate in the exciting future ahead. Stay tuned, and have a Happy New Year!
