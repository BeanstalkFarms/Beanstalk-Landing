---
title: "Beanstalk: The Path Forward FAQ"
subtitle: "Additional information about the plan to recapitalize and Unpause Beanstalk."
author: Beanstalk Farms
description: >-
  Additional information about the plan to recapitalize and Unpause Beanstalk.
date: 2022-05-14T22:15:00.000Z
image: /assets/uploads/barn-raising.png
layout: farm
---

**This document will be updated as new information relevant to Beanstalk’s recapitalization and Unpause becomes available.**

**The Barn Raise**
-------------------------------

> Why does Beanstalk need a fundraiser?

Beanstalk suffered a governance exploit that drained the protocol's liquidity. The goal of the fundraise is to recapitalize that stolen liquidity and then Unpause Beanstalk.

While raising the full $77M is a sufficient – and ideal – condition of a successful Barn Raise, it is not a necessary one. Because this process is designed to scale the protocol based on the size of the Barn Raise, Beanstalk will be able to Unpause with an arbitrary amount of new liquidity. In practice, raising $0 is the equivalent of restarting Beanstalk from scratch. Therefore, any amount raised is better than nothing. However, at the time of writing, there are confirmed commitments for ~20% of the $77M.

> Does the protocol need ~$77M? Would a smaller amount such as $XM be sufficient to Unpause the protocol and allow it to grow again in a healthy manner? Is there a minimum amount to raise?

Given the protocol's economic performance prior to the exploit, it has demonstrated sufficient resilience to Unpause even with a relatively small amount of liquidity. However, an ideal scenario is one in which all ~$77M in stolen funds are recouped.

> What is Beanstalk's utility?

In the medium term, Beanstalk has tremendous utility as a liquidity provider, having created and scaled three discrete liquidity pools prior to the governance exploit.

Beanstalk is the only positive carry stablecoin in DeFi — it has the potential to be the most economically attractive stablecoin product available.

For more about Beanstalk's utility, please refer to this community-authored [article](https://mirror.xyz/astn.eth/w5336TYVkb-9eIlKxrCPKLoUNvYRgJmd6nB4Br5-Vs8).

> Why use a token to represent debt instead of a Pod Line?

Using a token allows Beanstalk to offer the same terms to multiple investors. Pods in a Pod Line have an inherent priority.

**Unpausing Beanstalk**
-----------------------

> What's going to happen to Beans, Stalk, Seeds, BDV, and Pods?

All Beanstalk assets will be scaled down by a factor proportional to the percentage of capital raised.

Example: If Beanstalk raises 40% of the target ~$77M, each Silo Member's existing Stalk balances will be scaled down by 60%.

> Can I Withdraw my assets from the Silo after the relaunch?

Yes. However, recapitalized Silo assets will be placed on a vesting schedule based on the percentage of the debt that is repaid to the token outlined in the main Path Forward article. 

If Silo Members choose to Withdraw before the debt has been fully repaid, they will face a haircut. The size of the haircut will be proportional to the amount of the debt repaid.

Example: You had 10,000 BDV in the Silo prior to the exploit. Beanstalk raises $77M, Unpauses and performs normally. After some time, 40% of the debt is repaid to the token holders. Withdrawing your Silo deposit at this point would yield `0.4 * 10,000 BDV = 4,000 BDV` of assets. The remaining assets are forfeited.

> What happens to the rest of my assets when I Withdraw early?

Forfeited assets will effectively be distributed back to the rest of the Silo Members that are still subject to the vesting schedule.

> Why use a market cap-based vesting schedule?

The market cap-based vesting schedules creates a strong alignment between existing Silo Members and Barn Raise participants, allowing new capital to enter with confidence that the Silo Members they are bailing out are not incentivized to quickly leave, and even if they do, there is a limit to the amount of capital that can leave at any time.

> What pools will be launched when Beanstalk Unpauses?

Beanstalk will likely Unpause with one liquidity pool on Curve containing a stablecoin pair.

> How will Silo conversions be handled with vesting? Will people that are locked still be able to convert above/below peg?

Beanstalk Farms is still exploring the technical implications here, but we believe Convert functionality is crucial to Beanstalk’s stability and expect to launch with this enabled.

> What if I had Circulating assets at the time of the exploit?

Circulating assets are subject to the same vesting schedule as Deposited assets.

> What if I had Withdrawn assets at the time of the exploit?

Withdrawn assets will be treated as Circulating assets (as if the Withdrawal timer had elapsed).

> How will the Weather change after the Barn Raise?

Beanstalk will Unpause with the pre-exploit Weather.


**Governance**
--------------

> How is Beanstalk Farms going to handle governance moving forward?

On-chain governance has been removed for the time being. A community-controlled multisig wallet will maintain ownership of the protocol. On-chain governance will resume in the future when a safe, decentralized governance mechanism is developed and fully audited.

> How will the multisig work?

Beanstalk Farms is evaluating how other DAOs utilize multisig wallets to ensure safe and effective governance. It is expected there will be a minimum of 9 holders included in the multisig. These slots will be split between members of the Beanstalk community, Beanstalk Farms contributors and Publius.

**Security**
------------

> How will you prevent this from happening again?

Governance of Beanstalk is moving to a multisig wallet custodied by the community until a safe on-chain solution can be developed and audited. BIPs will be voted on via Snapshot until then.

Beanstalk will undergo both Halborn and Trail of Bits audits, and Beanstalk Farms will launch bug bounty programs with Immunefi and potentially other reputable bug bounty firms.

Beanstalk Farms will double down on its efforts to attract and retain experienced security engineers who specialize in smart contract development.

> Is multisig governance contrary to the decentralized ethos of Beanstalk?

Everything is relative, and the multisig will still be custodied by a diverse set of distributed community members. However, multisig governance is still a sub-optimal and temporary solution. Once Beanstalk has been Unpaused, Beanstalk Farms will explore a more resilient decentralized governance solution. Any new governance solution will be thoroughly audited before being proposed on-chain.

> Will there be more audits?

Yes. Beanstalk will undergo end-to-end audits with Halborn beginning in mid-May and with Trail of Bits beginning in early June.

> Will there be a bug bounty?

Yes. Beanstalk Farms has engaged Immunefi among others to launch a comprehensive ongoing bug bounty program.
