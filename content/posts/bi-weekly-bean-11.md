---
title: "Bi-Weekly Bean #11"
subtitle: "The Bi-Weekly Bean, a newsletter that recaps the latest happenings in
  the Beanstalk ecosystem. This issue covers the 9/01/22– 9/17/22 period. "
date: 2022-09-18T00:04:56.670Z
author: Beanstalk Farms
description: "The Bi-Weekly Bean, a newsletter that recaps the latest happenings
  in the Beanstalk ecosystem. This issue covers the 9/01/22– 9/17/22 period. "
image: /assets/uploads/barn-and-beans.png
---
> What is Beanstalk? Beanstalk is a permissionless fiat stablecoin protocol built on Ethereum. Learn more at [bean.money](https://bean.money/).

The BeaNFT Barn Raise Collection is now live! You can check them out on OpenSea [here](https://opensea.io/collection/beanft-barnraise-collection).

BeaNFTs were minted by Beanstalk Farms for Farmers this time. You can find them in the [wallets](https://opensea.io/account) that you used to buy more than 1000 Fertilizer with pre-Replant.

EBIP-2: deltaB Cap, was executed by the BCM ahead of the Merge. EBIP-2 introduced a cap on the absolute value of time-weighted average deltaB for the BEAN:3CRV pool of 1% of total Bean supply to help protect against multi-block MEV oracle manipulation, which became possible post-Merge. You can view details [here](https://github.com/BeanstalkFarms/Beanstalk/pull/92) and the transaction [here](https://etherscan.io/tx/0x1ca14810306dfcb098950137f58b53a4034fe0f097985ea2403ec9d5de467076).

Moreover, Halborn discovered an issue with the Beanstalk contract as part of their audit stream. The BCM has updated Beanstalk to remove the chop() function which was vulnerable as part of EBIP-1. After searching for the chop() event, it seems no one has called the chop() function yet. Therefore, the vulnerability was never exploited. You can view the transaction [here](https://etherscan.io/tx/0x0100d62959b09deea2cdccb8c14c5f9495778452d1d2fcda7f5da1a6cd6e9bec).

A new episode of the The Bean Pod is live:

* [Episode 19](https://anchor.fm/thebeanpodpodcast/episodes/UI-With-Silo-Chad--Sweet-Red-Beans-e1no5tr): UI With Silo Chad & Sweet Red Beans

Moreover, Publius was interviewed on [Mission DeFi](https://www.youtube.com/watch?v=hotl8RA-IxY) by [Brad Nickel](https://twitter.com/b05crypto).

Lastly, feel free to drop by [Discord](https://discord.gg/beanstalk) if you have any questions—the community is always available to help and answer questions.

# **Protocol Summary**

![Untitled](/assets/uploads/beanprice11.png)

The overall protocol has remained stable over the last two weeks with the price of Bean tightly pegged and little change to the Bean supply and the Pod Rate.

![Untitled](/assets/uploads/beansupply11.png)

![Untitled](/assets/uploads/podrate11.png)

Demand for Soil continues to be strong and is reflected in the Temperature that is now down by about ~2000% since Unpause on August 6.

![Untitled](/assets/uploads/temp11.png)

# Beanstalk Farms **Updates**

* vAPYs added to the Silo page
* Farmer Silo Overview module added
* Various other UI updates
* Beanstalk zero fee AMM in development

Comments, suggestions or feedback? Please reach out to mod@bean.farm