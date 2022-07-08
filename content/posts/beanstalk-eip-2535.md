---
title: "\U0001F331 Beanstalk \U0001F91D EIP-2535 \U0001F48E"
subtitle: "An overview of Beanstalk Farms' decision to build Beanstalk using a diamond implementation."
author: "Beanstalk Farms"
description: >-
  When we started planting the seeds that would become Beanstalk, we initially
  planned for a simple single-proxy upgradable implementation…
date: 2021-09-24T00:45:58.620Z
image: /assets/uploads/eip-2535.png
---

![](https://cdn-images-1.medium.com/max/800/1*m7yIcU21uVq6-dLp5ha9Nw.png)

When we started planting the seeds that would become Beanstalk, we initially planned for a simple single-proxy upgradable implementation. However, it soon became clear that Beanstalk’s code was going to be well over Ethereum’s 24 kb contract limit. For reference, here are the contract sizes for the facets in Beanstalk’s initial deployment.

> Claim: 5.86 kb  
> Field: 7.61 kb  
> Governance: 18.54 kb  
> Oracle: 3.44 kb  
> Season: 13.71 kb  
> Silo: 22.78 kb

Accordingly, the initial single-proxy implementation was planned to have 4 contracts: Field, Governance, Season and Silo. However, splitting a protocol across 4 different contracts creates unnecessary complications on the front-end and large overhead for development. Each contract would require its own upgradable proxy and manage its own independent state. Users would have to juggle 4 different contract addresses, each with their own set of functions.

![](https://cdn-images-1.medium.com/max/800/1*lc24Mg-8v7CpdFeyq2KFhQ.png)

_Enter_ [_EIP-2535_](https://eips.ethereum.org/EIPS/eip-2535)_._ EIP-2535 is a multi-facet proxy implementation also referred to as a diamond. The diamond implementation allows a single proxy to manage multiple smart contracts. All functions are run by the same proxy and therefore can share the same state. All function calls are made to a single proxy address. The proxy facilitates this by mapping function selectors to contract addresses. When the diamond receives a function call, it performs a lookup on what contract that selector maps to and then performs a delegate call on that function. Given the drastic improvement this presented, we changed course and elected to build Beanstalk as a diamond.

This is what Beanstalk looks like as a diamond. In addition to the 3 standard diamond facets, Beanstalk has 6 facets. Adding facets requires virtually no overhead as facets contain independent functionality. This allowed us to separate all the claim functionality into its own facet in order to create an efficient all-encompassing `claim` function. We also separated the Oracle into its own facet so it is upgradable independently of the Season facet.

![](https://cdn-images-1.medium.com/max/800/1*KFf0RtHMYQaXBoZYhbBeXw.png)

Below are some takeaways from our experience building on EIP-2535.

## User Experience

### User Interface

The diamond implementation allows Beanstalk to have a single address instead of 4. If Beanstalk had used the single-proxy implementation, function calls would have to be made to each specific contract.

For example, the `depositBeans` call would have to be made to the Silo contract, and the `sowBeans` call would have to be made to the Field contract. For anyone trying to develop a Beanstalk bot or web app, it can be confusing to have 4 different contracts each with their own ABI and contract address.

It is easy to see how this can quickly become overwhelming to users: simply tracking events would require aggregating events from 4 different event listeners. Instead, the Beanstalk diamond is a single contract with a single address and ABI. This makes for a much cleaner experience.

With the diamond, users know that all events and functions belong to a single contract. Monitoring Beanstalk on web applications like Etherscan is straight forward because all protocol data is stored in a single contract.

### Gas

The diamond lowers gas costs for users. In a single-proxy implementation, the various contracts would have to call each other in order to access or modify their states and call their functions. Cross-smart-contract function calls cost gas.

An example of where the diamond saves gas is the `sunrise` function. The `sunrise` function would have to query the number of Soil and mint Soil in the Field contract, mint new Beans in the Silo contract, and access the Governance contract to check for any active BIPs. In the single-proxy implementation, the season contract would have to do an external contract call to the other 3 contracts at least once. With EIP-2535, this all happens seamlessly inside of the diamond.

The diamond also saves gas through the use of Solidity libraries. The same library can be linked to multiple facets. Thus, the same internal function can be used by multiple facets instead of having to make an external function or delegate call. Because facets can share a state, these libraries are able to access and modify state variables.

For example, there are a number of instances where Beanstalk directly interacts with the Uniswap pool. The Field and Silo facets need to be able to buy Beans to provide functionality for buying and Sowing, and buying and Depositing, respectively. The Claim facet needs to be able to remove liquidity when users claim withdrawn LP tokens. The Season facet needs to be able to sell Beans on Uniswap during a Season of Plenty.

We were able to take advantage of the diamond’s ability to reuse internal functions by creating a Solidity library called `LibMarket`, that is responsible for processing all interactions with the Uniswap pool. The Claim, Field, Season and Silo facets are all able to use this library without having to duplicate the code, or make an extra external function or delegate call.

### Drawbacks

The only drawback for users is that websites like [Dune Analytics](https://dune.xyz/home) and [Etherscan](https://etherscan.io/) do not currently natively support diamond contracts.

However, [Louper](https://louper.dev/) provides an interface for accessing and viewing all diamond functions, which works as a good alternative to Etherscan, and we are going to create our own [subgraph](https://thegraph.com/) in lieu of Dune Analytics.

Given that the diamond implementation is still new, we imagine as it becomes adopted and standardized these sites will also add support for it.

## Developer Experience

### Straightforward:

We were surprised by how straightforward deploying the diamond implementation was given how daunting the `diamondCut` was at first. All you need to do is:

*   Choose a diamond implementation from the GitHub project [here](https://github.com/mudgen/diamond).
*   Add the deployment script from the GitHub project.
*   Start developing facets, which is no different than developing a normal smart contract, and add the facet names to the deployment script.
*   Call the deploy function and, like magic, the diamond is deployed with facets.

The diamond also makes deploying an additional Beanstalk incredibly quick, easy and cheap. As the USD version of Beanstalk establishes its ability to regularly cross the price of 1 Bean over $1, we anticipate demand for Beans that are pegged to other assets. For example, deploying a Beanstalk that issues Beans that are pegged to the value of 1 BTC is as simple as deploying a new Oracle facet. All other existing facets can be reused.

### Easy:

Developing a diamond contract is no more difficult than developing a normal smart contract. Once you understand how to define the `AppStorage` in the base contract of every facet there is not much else to learn.

The shared state makes it so that so no functionality has to split between facets, so they are easy to read and verify they work as intended.

Going back to the example of the `sunrise` function, in a single-proxy implementation, the `sunrise` function would have to be split across 4 different smart contracts. That means that the Field, Governance, Season and Silo contracts would all have to have their own `sunrise` functions. These functions would need to be public functions that are only callable by the Season contract. This would add complication to the deployment code as each contract would have the same references to the other contracts. When coding such a function, we would have had to constantly switch back and forth between contracts to ensure that all functionality is there and behaving properly.

Below is an example of the `sunrise` function call in a single-proxy implementation:

![](https://cdn-images-1.medium.com/max/800/1*MsyTeLYVbOHC0rp0NWnbvQ.png)

> With the diamond implementation, all the sunrise code can live in the Season facet with the exception of the Oracle functionality, which we intentionally moved to a different facet to make it easy to independently upgrade or replace.

![](https://cdn-images-1.medium.com/max/800/1*7JWx3JTLLLadlToEE00eZw.png)

We were able to share functionality between smart contracts through delegate calls. Beanstalk has an`updateSilo` function which is called in the Claim and Silo facets. As `updateSilo` is a massive function, we didn’t want to have to deploy it in two separate contracts.

We were able to easily route around this by adding a function that performs a delegate call to to a library that is easily shared between facets:

```
function updateSilo(address account) internal {
    DiamondStorage storage ds = diamondStorage();
    bytes4 functionSelector =
      bytes4(keccak256(“updateSilo(address)”));
    address facet = 
      ds.selectorToFacetAndPosition[functionSelector].facetAddress;
    bytes memory myFunctionCall = 
      abi.encodeWithSelector(functionSelector, account);
    (bool success,) = address(facet).delegatecall(myFunctionCall);
    require(success, “Silo: updateSilo failed.”);
} 
```

### Clean:

We were amazed by how clean the diamond implementation code is. Having the state stored in a single struct makes interacting with the state extremely modular and makes the protocol feel like a single contract. It also allows you to group functionality that would must normally be spread across multiple contracts into the same function in a single contract, which makes for a much more comprehensible implementation.

In Beanstalk, there are numerous different assets that a user will interact with–Beans, Pods, LP and ETH. All of these different assets need to be claimed at a certain point. We want claiming to be as simple as possible and we want assets in the claimable state to feel as if they are already in your wallet.

The diamond implementation allows us to create a generic `claim` function that would `claim` all the different assets in a single call. In a single-proxy implementation, Pods would be stored in the Field and the other assets in the Silo. Thus, such a function would have to be implemented in either the Silo, Field or both, neither of these are optimal solutions. It would also have to be a cross-contract function call. With the diamond implementation, we were able to create a Claim facet that handles all this functionality in a single facet. Then, we added this function to an internal library and were able to reuse the `claim` function in any part of the contract without having to a) pay gas to deploy the same code twice and b) make users pay extra gas for a cross-contract function calls.

### Drawbacks:

The only drawback we found on the developer side was that deployment was extremely expensive. This is because the diamond needs to store every function selector in the state and each state variable costs 20,000 gas to store as a part of the initial `diamondCut`. As Beanstalk is a massive project, it has a lot of functions so this added gas cost was fairly significant. However, we found it to be an acceptable drawback as it was a one time cost which has no negative impact on our users. Furthermore, the lower cost to upgrade Beanstalk definitely offsets this initial cost.

## Upgradability

We expect Beanstalk to be upgraded on a regular basis. The diamond contract is extremely user friendly and modular to upgrade. It allows for adding, replace, and removing functionality on a function by function level.

### Cost:

In a single-proxy implementation, upgrading Beanstalk would be rigid and expensive. Whereas a single-proxy implementation only allows for the whole contract to be upgraded, the diamond allows for the proxy to be upgraded on a function by function basis.

In order to add a getter function that returns a list of the user’s crates in the single-proxy implementation would require deploying a whole new Silo, which costs millions of gas. In the diamond implementation, it only requires deploying a new contract with only the one function.

For example, modifying the `sunrise` function would require deploying a full new Beanstalk in the single-proxy case as the `sunrise` function would span all of the contracts. In the diamond implementation, only deploying a new `sunrise` function is required.

Therefore, a diamond is orders of magnitude less expensive to upgrade.

### Easy:

The diamond implementation comes with a standard `DiamondCutFacet`. This facet has a `diamondCut` function that standardizes upgrades in diamonds. It takes in a list of addresses, functions and an indicator of whether the function should be added, replaced or removed. This standardized method makes it extremely easy to create a `diamondCut` to upgrade a diamond, and makes it extremely clear what functionality is being changed.

A `diamondCut` also allows for an `InitDiamond`, which defines an `init` function. The `init` function is run at the end of the `diamondCut` call. This `InitDiamond` can be used to easily modify any state variables or run any code that needs to be run in order to enable the functionality added by the `diamondCut`. In addition, a `diamondCut` can be submitted with just an `InitDiamond`, which allows users to run a 1 time script on the contract for a low gas cost.

Overall, the `diamondCut` makes upgrading and modifying diamonds extremely straight forward and user friendly. In the case of the single-proxy implementation, we would need to create our own structure for processing upgrades, which would likely only allow for upgrades on a contract by contract basis. In addition, there would not be a general corollary to the `InitDiamond`, as state modifications can only be done on a contract by contract basis.

### DAO Compatible:

Beanstalk is governed by a DAO controlled by its native Stalk token. This means that upgrades are performed via an on-chain voting system. The `DiamondCut` structure makes proposing an update natural: each BIP (Beanstalk Improvement Proposal) is simply a `DiamondCut`.

Without the diamond, we would have to create our own format for submitting BIPs, which likely would have been less standardized and more confusing. Committing a BIP is also far easier as a diamond: Beanstalk calls the `diamondCut` function on the `DiamondCut` structure contained within in the BIP.

As the diamond becomes more widely used BIPs will be easy for any Solidity developer to propose. Additionally, interpreting and verifying the information contained in a BIP is clear as selectors can be interpreted to verify exactly what functions are being added, replaced, and removed, and whether or not there is an `init` function alongside the BIP.

## Conclusion

Beanstalk is a diamond with 9 different facets. At this time, it is clear to us that the diamond implementation was the correct choice.

Every Ethereum developer is initially frustrated once they hit the on-chain contract limit for the first time and realize they have to spilt up the contract. The diamond greatly eases that frustration. It makes smart contract development modular down to the function level, so much so such that it gives the illusion that you are creating a single smart contract.

ERC-2535 is still new, but we expect that it will see continuous adoption in the future, especially as protocols become more and more complex. We look forward to being a part of the community and future developments of EIP-2535.

There are a few things we wish we had known earlier on in the development process. First, we wish we would have added even more facets. More facets makes code clearer and there is no reason not to break down facets into smaller facets in Beanstalk. Secondly, we should have used more libraries to share functionality between smart contracts.

## More information

A massive thanks to [Nick Mudge](https://medium.com/u/ca7b1065d06a) for all the work he has put into EIP-2535, and continuously supporting the diamond community. He is a great follow on [Twitter](https://twitter.com/mudgen). Here is a link to more information on [EIP-2535](https://eips.ethereum.org/EIPS/eip-2535).

To learn more about Beanstalk you can visit our [website](http://bean.money).

If you have questions or are interested in helping develop Beanstalk, reach out to us on our various social media platforms! You can ask questions and join the community discussion on [Telegram](https://t.me/joinchat/OdWoJSyPVsRhYzgx) and [Discord](https://discord.gg/y4cJNv5DTM)!

All of Beanstalk’s code is available and public on [Github](https://github.com/BeanstalkFarms/Beanstalk).

To stay up to date on all things Beanstalk, follow @BeanstalkFarms on [Twitter](https://twitter.com/BeanstalkFarms)!