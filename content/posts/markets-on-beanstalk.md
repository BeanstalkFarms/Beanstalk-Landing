---
title: Markets on Beanstalk Call Notes
subtitle: Notes on how to prioritize the rollout of Beanstalk-native markets.
date: 2023-03-27T19:54:42.000Z
author: Beanstalk Farms
description: Notes on how to prioritize the rollout of Beanstalk-native markets.
image: /assets/uploads/markets-on-beanstalk.png
tag: Roadmap
---
![](/assets/uploads/markets-on-beanstalk.png)

From January to March 2023, Beanstalk developers conducted public calls each week discussing design, development and roadmap decisions (these calls are now held on an ad hoc basis). These discussions are a chance for high level coordination and transparent decision making with regards to the many engineering challenges involved in creating a robust decentralized and censorship resistant financial tech stack. 

On February 28th, developers discussed the implementation of Beanstalk native assets as ERC-1155s, the expansion of the Pod Market to allow for the exchange of Silo Deposits, and Stalk and Seed liquidity. This post is a set of notes from the discussion.

### Discussion Conclusions

- Next steps are to implement Silo Deposits and Plots as ERC-1155s.
- The first market to be built should allow the exchange of Silo Deposits and Plots, with the ability to trade against ERC-20s added later.
- Stalk per BDV will not be included at first, due to the complexities involved.
- Stalk and Seeds are not required to be liquid at first, but can be added later.

### Pod Marketplace Context

- There is some inefficiency in the secondary market for Beanstalk debt.
- V1 of the Pod Marketplace facilitated the sale of Plots for Beans, which was not previously possible because Pods do not implement any ERC standard and thus there was no way to exchange Pods in a permissionless setting.
- You could list a Plot for a given amount of Beans or place an order with Beans for some Pods.
- Because Pods are ordered, an order includes a parameter for Place in Line.
- Statically priced orders result in some inefficiency.
- V2 supported polynomial functions, implementing a pricing curve, where price is a function of place in line. Currently there is no UI supporting it.
- V3 could offer Silo Deposits or Fertilizer for Pods.
- Placing orders with Deposits has the advantage that the user wouldn't have to forfeit all the Stalk and potential Bean seignorage accrued while the Beans are in an order.
- Something like Tractor or Seaport would provide the ability to place orders for arbitrary assets against arbitrary assets, such as if Deposits or Pods were to be implemented as ERC-1155s.
- The orders could still be a function of place in line as with V2, preserving those efficiency gains.

### Benefits of Seaport/Tractor

- Tractor and Seaport facilitate off-chain orders which can be significantly more complex with less on-chain development, but which are particularly complicated to support at the UI level. There are a lot of open questions around creating a user interface that can support whatever pairs are made available. The difficulty is underscored by the fact that there is still no V2 UI.
- Part of this conversation is an attempt to prioritize markets that could be built on Tractor/Seaport. Which exchanges are in Beanstalk's interest to facilitate?
- There may be some value in offering many different pairs, but that will fragment liquidity and require a very sophisticated aggregator.
- An advantage of Tractor/Seaport is that you can have asynchronous orders created and stored off-chain, and you can have the execution of an order affect the status of other orders. This makes liquidity much more efficient, but also introduces significant complexity at the indexer and UI level.

### Pod Orders for Tokens

- Already possible on the back end.
- You can create one massive order that will accept a variety of tokens and references an oracle that is included in the order, and allow a user to buy with any combination of tokens.
- Encoding one large order is harder for the indexer to process, because it would have to assess each asset and calculate the price of each using some oracle.
- An alternative would be to create multiple different orders, one each for all the acceptable currencies. The downside to that is the from the user experience perspective, where the user would have to sign to authorize multiple transactions. With Tractor, it may be possible to sign a list of orders at once, which would improve the user experience.
- In either case, it's mostly already possible to do either on the back end, the more significant challenges are the indexer and UI. The less custom functionality the better in that respect. The indexer will need to be able to code every single function selector that's used, so minimizing the set of possibilities makes the indexing task simpler.
- Users might desire to denominate their desired price in stable currency, so you'd have to specify some oracle price. This is ultimately one of the biggest issues as you support multiple tokens.
- The UI should be able to make a determination which order offers the best price in practice given the starting currency. As much as possible should be abstracted away from the user. Especially if used in combination with Pipeline, the possibilities can be infinite, so narrowing the scope to just a few currencies would probably make it easier overall.
- It's much more straightforward for a seller to create a listing that specifies which currency he is accepting and have the buyer perform the conversion as part of the sale, versus encoding the conversion as part of the sell order. It's a matter of how complex to make things from an SDK/UI perspective. The goal is obviously to enable any user to fill any open order in one transaction.

### Which Trading Pairs Make Sense?

- Which pairs would be economically beneficial to Beanstalk?
- Deposited Beans for Pods makes a lot of sense intuitively. Harder to see how a seller accepting only USDC benefits Beanstalk directly.
- The more assets that are accepted, the more liquid Pods become.
- For simplicity, it might make sense to start with just Beans and then expand to whitelisted assets (assets that have implicit value to Beanstalk).
- From a UI perspective, the cost of adding tradeable assets depends largely on how complicated the UI will be to begin with. A simple UI can accommodate more assets easily than a more involved UI.
- Different asset types (ERC-20/721/1155) will greatly increase the complexity of the UI, so constraining those would make a lot of sense.
- Implementing Bean deposits and Pods as ERC-1155 may make marketplaces easier to support rather than having to develop two new interfaces for one that talks to deposits and one that talks to Pods.
- Supporting 1155s against 1155s from a UI perspective will be difficult. Even 1155s to arbitrary 20s is a lot easier than 1155s to 1155s.
- A simple interface for exchanging Deposits and Pods as ERC-1155s can be done. But one that enables efficient pricing will be much more difficult. Pods change in value depending on place in line, and Deposits differ based on season. It's not clear how to display that in a digestible way to let somebody discover the right pricing.
- When both assets are semi-fungible, it may inherently fragment liquidity. Ideally, Deposits themselves could be abstracted and flattened such that orders can start being only two dimensional on the Deposit side. The way to get around this fragmentation might be through Stalk liquidity.
- It's important for the BDV of Silo Deposits and the Bean ERC-20 token to be highly interchangeable. There are numerous ways to do this from an interface perspective. It's desirable to be able abstract away as much as possible. The improvements to the Pod Marketplace are going to open up a lot of liquidity in the form of Bean and BEAN:3CRV Deposits, and users with Beans should be able to access all of that liquidity.
- Seems like being able to trade Deposits for Pods is complicated but obviously economically beneficial to Beanstalk.
- You probably have to have Stalk liquidity before the market can become particularly efficient or abstract from a user perspective.
- You could in theory have a Deposits for Pods marketplace with no consideration of Stalk whatsoever, which would be a minor upgrade from the current Pod marketplace, but not up to par with the full functionality.
- There's a lot of unanswered questions around how to facilitate the most efficient and abstract interaction with the different axes of Deposits.

### Other Markets

- In addition to Pods and Deposits, some sort of Bean Deposit future where there is forward looking expected yield priced into current BDV is an interesting Market to consider.
- Probably makes sense to have full spot markets before moving to derivatives.
- Fertilizer markets are worth considering.
- In theory when Stalk is liquid there will be the Deposits, which will be 1155 and are effectively the right to burn a certain amount of Stalk and Seeds with the Deposit to receive the underlying, an ERC-20 Stalk, and then some sort of semi-fungible Seed where the Seeds are yielding Stalk based on the underlying asset that is deposited.
- There is some work being done to further abstract the concept of Seeds, but at least with regards to Stalk and Deposits, there should be the opportunity to exchange Asset A for Stalk or Asset A for Deposits and those are distinct once you have Stalk liquid.

### Does It Make Sense To Have a Market That Trades Deposits Before Stalk Is Liquid?

- The major use case for Deposits will be people willing to buy Pods with a Deposit, and the Deposits used will be known ahead of time. So it does allow for users to make decisions about how to value the Grown Stalk. The smart contract won't necessarily need to make assumptions about the Grown Stalk.
- There might be value in the short term for people to be able to buy and sell Unripe Deposits on the marketplace.
- These markets aren't going to be fully efficient until Stalk is liquid, but there is likely still plenty of utility to be realized by enabling users to create buy orders for Plots with Deposits.
- Once deposits implement ERC-1155, they can also be made available on OpenSea, just without the advantage of any sort of pricing function or the ability to use Bean, and users will have to pay fees.

### Further Questions

- Facilitating Deposits on the marketplace even just as ERC-20s (including Unripe assets), and potentially also Deposits for Pods, seems to be the highest leverage.
- After that the question is around Stalk and potentially Seed liquidity and how that fits into everything.
- Should Stalk be divided into governance tokens and seignorage/interest tokens? What's the best way to facilitate efficient markets around Beanstalk?
- How does everything fit into the overall timeline? Which markets should roll out first?
- How does the liquidity around Stalk and Seeds affect the creation of markets for Deposits and does one need to happen before the other?

### Priorities

- One interesting angle is that before Stalk is liquid, Stalk per BDV is really a bonus because the Deposits come with the Stalk. Whereas after Stalk is liquid, it is really a penalty because the Deposits do not necessarily come with the Stalk. That leads to some additional complexity on the UI front.
- It might be necessary to develop a market that facilitates the transfer of Deposits both with and without Stalk and Seeds, depending on user preference.
- Starting with ERC-1155 Deposits and then later adding liquid Stalk would not change much from a UI perspective, but it would require changes to the order structure and aggregation.
- It may make less sense to start thinking about Stalk liquidity because it adds another degree of dimensionality, which is pretty tricky to solve from a UX standpoint. If the immediate goal is to be able to exchange Deposits, it might be a good idea to focus on that and put Stalk liquidity on the back burner until it's more clear that the market requires it.
- In addition, the development of liquid Stalk is quite complex and will probably be a multi-month endeavor from the point that development starts in earnest.
- So in the short or medium term the starting point should just be around a basic implementation of Deposits without Stalk and Seed liquidity as an 1155. This could be done in parallel with the development of Pods as 1155.
- The consensus seems to be to start with a Deposit for Pod marketplace and then add the Stalk functionality after the initial launch of the market.
- None of this needs to include the complexity of Stalk for BDV, but that can ultimately be added at the UI level at some point.