---
title: "A Farmer's Guide to the Barn Raise"
subtitle: "A comprehensive overview of the Barn Raise mechanics."
author: Beanstalk Farms
description: >-
  A comprehensive overview of the Barn Raise mechanics.
date: 2022-05-29T06:00:00.000Z
image: /assets/uploads/grayscale-barn.png
---

**[July 20th, 2022] Note: This blog post is not maintained. You can find up-to-date documentation on the Barn Raise mechanics [here](https://docs.bean.money/farm/barn).**

On August 6, 2021, Beanstalk was first planted by Publius. Beanstalk, while still early in its life, grew to produce over 100 million Beans over the first 6074 Seasons (~8.5 months). 

On April 17, 2022, [Jack](https://etherscan.io/address/0x1c5dcdd006ea78a7e4783f9e6021c32935a10fb4) chopped down Beanstalk. The foundations are still there, but Beanstalk must be Replanted in order to continue.

<figure>
<p align="center">
  <img 
    src="/assets/uploads/jack-and-the-beanstalk.jpg" 
    alt="Jack and the Beanstalk"
    height=450px
    width=300px
  />
</p>
<figcaption align="center"><b>Beanstalk Exploit (Colorized, 2022)</b></figcaption>
</figure>

# Overview

In order to support the Replant, Beanstalk will host the Barn Raise — a fundraiser to restore $77M in non-Bean liquidity stolen from the Silo — **starting Monday, June 6 at 4:00pm UTC**.

Fertilizer, a semi-fungible token, will be sold during the Barn Raise. At the beginning of the Barn Raise, 77M Fertilizer will be for sale for 1 USDC each. The roots of Beanstalk will be Replanted in July. After Replant, Fertilizer will receive a pro rata share of one-third of new Bean mints, while one-third is allocated to Silo Members and one-third is allocated to the Pod Line. Fertilizer sales will recapitalize non-Bean liquidity stolen in the attack.

### Vesting

In order to align new capital with pre-exploit Farmers, all pre-exploit Beans and LP Tokens will become _Unripe Beans_ and _Unripe LP_ respectively upon Replant. Unripe assets represent a pro rata share of the underlying assets minted as Fertilizer is sold and debt repaid to Fertilizer. _Chopping_ is the process of burning Unripe Beans in exchange for Beans, or burning Unripe LP in exchange for LP Tokens. Unripe assets are subject to a vesting schedule.

Unripe assets can be Deposited, Withdrawn, Claimable, or Circulating (see Glossary for definitions). Only Circulating Unripe assets can be Chopped. Unripe assets will be distributed upon Replant in the same state in their pre-exploit state, with the exception of Withdrawn assets that will be distributed as Claimable (as if the Withdrawal timer had elapsed). Farmers who had Beans deposited in Pod Orders pre-exploit will receive Claimable Unripe Beans and their Orders will be Cancelled. Pod Listings will stay open by default and Farmers will have an opportunity to Cancel them before Replant.

Stalk and Seeds will be distributed based on the percentage of Fertilizer sold at the time of the Replant, and any remaining Stalk and Seeds balances will vest as more Fertilizer is sold. Pods stay the same as pre-exploit.


>As an example, if 20% of Fertilizer is sold before Replant, pre-exploit balances of:
>
>1000 Beans, 2000 BDV of LP Tokens, 4000 Stalk, 12000 Seeds, and 20000 Pods,
>
>would then become the following when Beanstalk is Replanted:
>
>1000 _Unripe_ Beans, 2000 _Unripe_ LP Tokens, 800 Stalk, 2400 Seeds, and 20000 Pods.

Farmers can Chop their Unripe assets based on the product of the two following values: the percentage of Fertilizer sold and the percentage of debt repaid to Fertilizer. 

>As an example, if 20% of total Fertilizer has sold and 30% of the debt issued for Fertilizer has been repaid, then the penalty for Unripe Beans that are Chopped to Beans is _1 - (20% * 30%) = 94%_.
>
>If the 100% of total Fertilizer has sold and 50% of the debt issued for Fertilizer has been repaid, then the penalty for Unripe Beans that are Chopped to Beans is _1 - (100% * 50%) = 50%_.
>
>These examples work the same way for Unripe LP.

The vesting for pre-exploit Stalk and Seeds is a bit different. Stalk and Seeds simply unlock based on the percentage of Fertilizer that has been sold. This makes the Silo a more attractive destination for new Silo Members early on after Replant. As Stalk and Seeds vest, they need to be manually claimed to become active and start receiving Farmable Beans and Farmable Stalk. 

>As an example, if 20% of total Fertilizer has sold before the Replant, Silo Members receive 20% of their Stalk and Seed balances at the time of the Replant. Once 50% of total Fertilizer has sold, Silo Members can manually claim an additional 30%, bringing their total to 50% of their pre-exploit Stalk and Seed balances.

New Silo Deposits after Replant are not subject to any vesting schedule. Neither are Farmable Beans, Harvestable Pods, or Fertilized Beans (the Beans earned from Fertilizer).

### Forfeited Assets

As mentioned above, Unripe assets that are Chopped before all Fertilizer is sold and all Fertilizer is paid back are subject to a penalty and forfeited. In some cases, the forfeiture of Unripe assets will reduce the amount of Fertilizer for sale, and in others it makes the remaining Unripe assets vest earlier. 

>As an example, if there’s 50M Fertilizer still available for sale from Beanstalk, and someone with 2M BDV of Unripe LP forfeits with a 50% penalty (getting 1M BDV of LP Tokens and forfeiting a claim to 1M BDV of LP Tokens in the process), only 49.5M more Fertilizer has to be sold. This is because 1M BDV is forfeited, and half of that value is non-Bean liquidity, so 500k less Fertilizer needs to be sold.
>
>The above only plays out if LP Tokens are forfeited, because it’s the liquidity that is being recapitalized by Fertilizer sales. If someone forfeits Beans, that just makes the Unripe Beans vest earlier.

There are edge cases where it is possible for Unripe assets to Chop for >100% of their pre-exploit balance. In order for this to happen, the non-Bean amount of forfeited LP Tokens must exceed the amount of Fertilizer left for sale.

>For example, if Fertilizer is sold out and then someone forfeits their Unripe LP, anyone who doesn’t Chop until 100% of the debt is repaid Fertilizer will receive >100% of their pre-exploit balance when fully vested.

### Fertilizer

#### Humidity

The interest rate on Fertilizer is called Humidity.

>As an example, 1000 Fertilizer purchased at 500% Humidity with 1000 USDC would stop earning Beans after 6000 Beans.

Fertilizer purchased before Replant will have a 500% Humidity, and the Humidity will change upon Replant. After the Replant, the Humidity will start at 250% and decrease by 0.5% every Season until the Humidity is 20%. It will take about 19 days after the Replanting to hit the minimum Humidity of 20%.

![Humidity Visualization](/assets/uploads/humidity.png)

By rewarding early participation in the Barn Raise and having the reward drop off quickly, demand for Soil and the Silo increases as Fertilizer becomes less attractive. This will facilitate the incentive structures created by Beanstalk to quickly return to a relatively similar state to prior to the attack. 

#### New Bean Mints

There are 3 states Fertilizer can be in:
* If Fertilizer is not sold yet, it’s Available.
* If Fertilizer is owed Bean mints, it’s Active. Active Fertilizer receives one-third of new Bean mints any Season there is Active Fertilizer.
* If Fertilizer is done earning Bean mints, it’s Used.

![Fertilizer Visualization](/assets/uploads/fertilizer.png)


It is expected that if Beanstalk is successful long-term, even 20% Humidity would eventually be attractive based on the number of Active Fertilizer. If there’s no Active Fertilizer and there’s still Fertilizer to be sold, someone can buy Fertilizer and earn the entire one-third of Bean mints allocated to Active Fertilizer.

The vesting schedule tied to the product of Fertilizer sold and Fertilizer paid back minimizes the new supply from vesting assets even in the instance there are extended periods of minimal demand for Fertilizer. 

#### Commemorative NFTs

Fertilizer will be ERC-1155 tokens with the Season of purchase as the unique identifier.

In order to commemorate early participation in the Barn Raise, separate ERC-721 NFTs with distinct artwork will be available for mint for Farmers who purchase Fertilizer before the Replant (between June 6 and late July—the exact date of the Replanting will be voted on by the Beanstalk DAO).

The minimum participation size for getting an NFT is 1000 USDC, and these NFTs are limited to the first 10,000 transactions of at least that minimum.

Minting of the NFTs will be optional to minimize gas costs to participate in the Barn Raise.

# Rationale

This Barn Raise structure:
* Leans into the strength of the mechanism that got Beanstalk to this point by not scaling the system down with a haircut;
* Makes pre-exploit Farmers whole over time; and
* Lowers the amount of capital needed to make pre-exploit Farmers whole in certain instances.

If Beanstalk is Replanted before Fertilizer sells out and Silo Members Convert from Unripe LP to Unripe Beans when P < 1, then the amount of recapitalized liquidity required to make everyone whole decreases (because the liquidity is decreasing). 

Vice versa, if Beanstalk is Replanted before Fertilizer sells out and Silo Members Convert from Unripe Beans to Unripe LP when P > 1, then the amount of recapitalized liquidity required to make everyone whole increases (because the liquidity is increasing). This is acceptable as this scenario only plays out when P > 1 (a good problem to have). The ceiling on the amount of Fertilizer for sale would be about half the Unripe LP if all Unripe Beans were Converted.

>As an example, if someone has 100 Unripe LP, and 0% of it has vested, there are no underlying assets to Chop (the penalty for Chopping would be 100%). If someone has 100 Unripe LP, and 20% of it has vested, then they would have the option to Chop their 100 Unripe LP and get 20 LP Tokens in exchange (forfeiting their claim to the rest of the LP Tokens in the process). 
>
>If P < 1, they would also have the option to Convert their Unripe LP to Unripe Beans. Assuming the delta in the liquidity pool is 20 Beans below peg, then they can take their 100 Unripe LP and Convert all of it into 100 Unripe Beans, and the price will return to 1. This is because in reality, only 20 LP Tokens was converted to 20 Beans.

Because there are only approximately 30M Beans, this imposes an upper bound on Fertilizer of ~92 million. 

The forfeiture of Unripe LP during the vesting schedule also reduces the amount of liquidity that needs to be raised, and thus the amount of Fertilizer for sale. 

This Barn Raise structure doubles down on the core economic mechanism that got Beanstalk to this point. It is up to the market to decide if Beanstalk deserves to exist—and these difficult endogenous circumstances give Beanstalk the opportunity to prove itself even more in the midst of exogenous market turmoil.

<hr/>

# Notes

**Technical explanations for the curious Farmer**

Ok, so how _exactly_ does the vesting work and where are the Choppable assets coming from? Let’s walk through an example.

Let’s say someone buys 100 Fertilizer for 100 USDC, and this is the only Fertilizer sold so far. At a high level Beanstalk does two things—it recapitalizes pre-exploit LP Tokens and pre-exploit Beans.

Part 1—When recapitalizing pre-exploit LP Tokens, Beanstalk:
1. mints the number of Beans required to add liquidity to the liquidity pool at the pre-exploit Bean price (for the sake of simplicity, with 100 USDC, let’s say Beanstalk mints 85 Beans because the pre-exploit price was >1);
2. adds 100 USDC and 85 Beans as liquidity in the Curve pool for X LP Tokens; and
3. adds X LP Tokens to the underlying pool for Unripe LP.

Part 2—When recapitalizing pre-exploit Beans, Beanstalk:
1. mints Beans according to the ratio of Deposited Beans lost in the exploit and the total capital required to recapitalize all assets (for the sake of simplicity, with 100 USDC, let’s say Beanstalk mints 40 Beans); and
2. adds 40 Beans to the underlying pool for Unripe Beans.

At this point, none of the LP Tokens or Beans in their underlying pools are vested, or Choppable, because the amount of debt repaid to Fertilizer is still 0%.

Let’s say there is a delta surplus of 300 Beans in the liquidity pool at the end of the first Season. 100 Beans each go to Silo Members, the Pod Line, and Fertilizer holders. At this point, the penalty for Chopping would be &lt;100%, because a non-zero amount of debt has been repaid to Fertilizer holders.

# Glossary

**Unripe Beans**: An ERC-20 token that entitles pre-exploit Bean holders to a pool of vesting Beans. These vesting Beans are minted as debt to Fertilizer holders is repaid.

**Unripe LP**: Same as Unripe Beans but for LP Tokens.

**Deposited** asset: Beans or LP Tokens that are Deposited in the Silo.

**Withdrawn** asset: Beans or LP Tokens that have been Withdrawn from the Silo and the Withdrawal timer has not elapsed (once this has elapsed, the assets become Claimable).

**Claimable** asset: Beans or LP Tokens that are wrapped in the Beanstalk contracts. These assets can be Deposited in the Silo, Claimed and moved to the user’s wallet, etc.

**Circulating** asset: Beans or LP Tokens that are in users’ wallets.

**Fertilizer**: Tokens offered by Beanstalk throughout the Barn Raise that receive one-third of new Bean mints.

**Humidity**: The interest rate for Fertilizer. Like the _Weather_, this changes depending on the state of Beanstalk.

**BDV**: Bean-denominated value.




