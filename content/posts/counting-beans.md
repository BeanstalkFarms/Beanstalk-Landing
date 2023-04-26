---
title: Counting Beans
subtitle: Q1 2023 Metrics and Analysis
date: 2023-04-24T19:31:24.319Z
author: Beanstalk Farms
description: An overview of the Metrics describing Beanstalk in Q1 2023
image: /assets/uploads/counting-beans.jpeg
tag: Learn
---
This is a new type of article for Beanstalk, exploring all the key metrics that describe the health and growth trajectory of the protocol. Think of it almost like a quarterly report, although sometimes editions may come out more frequently. In this first installment, we’ll be analyzing the metrics from Q1 ‘23 with all data sourced from Beanstalk’s [Analytics Page](https://app.bean.money/#/analytics). 



# Overview

Beanstalk takes a radically different approach to formulating an algorithmic stablecoin by using a credit-based model. With no reserves backing $BEAN, Beanstalk instead attempts to establish value for its native stablecoin through its creditworthiness as a protocol. The ability of Beanstalk to maintain a $1 peg relies on users’ willingness to lend $BEAN to the protocol. When more lending is required to move the price back towards the peg, Beanstalk alters the amount of debt it is willing to take on and the $BEAN interest rate lenders receive. 

On the surface it can be seen that the $BEAN price was below peg and slightly declined over the course of the quarter. Underlying factors include gradual $BEAN selling activity and few conversions of Unripe BEAN3CRV to Unripe BEAN. The latter is a roadblock which will be addressed in the near future (in Silo V3) by adjusting the Seed rewards for Unripe asset conversions. 

Obviously, publishing a metrics-based report for the first time during a quarter with such low protocol activity isn’t ideal, but necessary nonetheless to paint an accurate picture of where Beanstalk is today and identify what the path forward may be. This report will also serve as a baseline with which the upcoming developments and their resulting impacts can be assessed. 

*If you’re new to the Beanstalk community and would like some context around the metrics discussed and terms used in this report please refer to our previous articles on [Beanstalk’s positioning within the stablecoin trilemma](https://bean.money/blog/how-beanstalk-tackles-the-stablecoin-trilemma) as well as [Beanstalk’s peg mechanism](https://bean.money/blog/beanonomics-bean-flows-in-the-peg-mechanism-dao).*

# $BEAN/3CRV Metrics



## Price

![](/assets/uploads/screen-shot-2023-04-14-at-9.23.12-am.png "Historical $BEAN price on Curve")

After holding the peg tightly throughout most of Q4 ‘22, the $BEAN price began to slide in late November, last crossing below the peg on November 20th. Over Q1 ‘23 the decline continued, slipping from $.95 down to the current price of $.91 As discussed, reversing this trend is one of the main focuses of ongoing efforts in the Beanstalk ecosystem. The way to accomplish this is by attracting more creditors, and/or by incentivizing more conversions of Unripe BEAN3CRV, both of which should remove excess BEAN from the Curve pool and restore the peg.

New markets and trading pairs are also in the works to increase liquidity. This ties into one of the essential operations of any currency—functioning as a medium of exchange. Increasing the number of assets that $BEAN can be directly exchanged for creates new opportunities for liquidity providers and can make $BEAN more attractive to hold and lend to the protocol. 

## Trading Volume and Liquidity

![](/assets/uploads/screen-shot-2023-04-24-at-12.40.25-pm.png "Volume of trades in BEAN/3CRV pool")

Compared to Q4, volume was significantly lower in Q1, with the highest single-day volume being $86,000 in mid-February. Muted volume was not due to a lack of liquidity, as the BEAN:3CRV pool consistently contained around $25M in assets throughout the quarter. The [pool](https://curve.fi/#/ethereum/pools/factory-v2-152/deposit) has been somewhat $BEAN heavy, currently containing $14m $BEAN and $11M 3CRV. This is partially due to the previously mentioned Unripe BEAN3CRV that is yet to be converted.

![](/assets/uploads/screen-shot-2023-04-24-at-12.41.50-pm.png "Historical BEAN3CRV pool liquidity ")

Understandably, demand for a stablecoin experiencing a prolonged depeg is low, thus the minimal trading volume. Once friction around Unripe asset conversions in the Silo is reduced and the $BEAN price returns closer to peg, one might expect a resulting increase in trading volume as regular arbitrage opportunities around the peg introduce themselves again. Increasing utility for $BEAN through new trading pairs will also encourage more swaps from 3CRV tokens (USDC, USDT, DAI) to $BEAN within the pool, potentially helping to level out the balance of assets as well. 

## **BEAN Supply**

![](/assets/uploads/screen-shot-2023-04-24-at-12.44.08-pm.png "Historical chart of outstanding BEAN supply")

\
BEAN Supply is relevant for both the 3CRV metrics above, and the following section covering protocol metrics. Supply did increase slightly over the course of Q1, from 33.7M to 35.4M, primarily due to the budget mint in [BIP-33](https://snapshot.org/#/beanstalkdao.eth/proposal/0x46af2f9d85ad2b9d298ff75737fb35d4f4a617e500647cb73e2bbabd82e6d725) that you can see near February 8th on the chart.

# Protocol Metrics



## BEANs Sown

![](/assets/uploads/screen-shot-2023-04-24-at-12.45.40-pm.png "Historical chart of Beans Sown at the end of each Season")

The amount of $BEAN being lent to the protocol (Sown) plateaued a bit over the course of Q1, coinciding with the prolonged time below peg. Supply growing by nearly 2M while the amount of Sown BEANs only increased by 300,000 has contributed to the downwards price pressure seen in Q1.

## **Temperature**

![](/assets/uploads/screen-shot-2023-04-24-at-12.47.13-pm.png "Historical Temperature")

Temperature is Beanstalk’s method of influencing the lending of $BEAN to the protocol. It functions like an interest rate, determining the amount of Pods received per $BEAN lent. Raising the Temperature makes lending more attractive. When the $BEAN price is oscillating tightly around $1 the Temperature will similarly fluctuate up and down, as can be seen in the period from September to early November 2022 on the chart above. With the prolonged time below peg in Q1, Temperature has been steadily climbing to 10,000%. This is an all-time high for Temperature, and at the current rate this means that 1 BEAN can be Sown to receive roughly 100 Pods.

## P﻿ods

![](/assets/uploads/screen-shot-2023-04-24-at-12.48.23-pm.png "Historical chart of outstanding Pods at the end of each Season")

While the Temperature has been rising, the amount of BEANs lent to Beanstalk has not responded, so the number of Pods issued over Q1 is relatively flat. Pods become Harvestable for an equivalent number of BEANs on a FIFO basis, but the duration is undetermined. When the $BEAN price is below peg, Pods will take longer to become Harvestable.

## **Pods Harvested**

![](/assets/uploads/screen-shot-2023-04-24-at-12.50.16-pm.png "Historical chart of harvested Pods")

## P﻿od Rate

![](/assets/uploads/screen-shot-2023-04-24-at-12.50.59-pm.png "Outstanding number of Pods per Bean expressed as a percentage")

The Pod Rate can be used as a proxy for the overall health of the Beanstalk system, measuring the amount of debt taken on relative to the size of the Bean supply. A rate above 25% is considered excessive debt, and as can be seen on the chart this rate ranged between 2,000% - 2,500% during Q1. When the $BEAN price is below $1, Beanstalk is willing to issue new debt (Soil) equivalent to the sum of liquidity and time-weighted excess of BEANs in the BEAN:3CRV pool. 

## D﻿elta B

![](/assets/uploads/screen-shot-2023-04-24-at-12.52.26-pm.png "Historical chart of Delta B at the end of each season")

\
The sum of liquidity and time-weighted excess/shortage of BEANs in the BEAN:3CRV pool is referred to as Delta B. A negative Delta B as seen above means that there is excess BEAN liquidity in the pool relative to the amount of 3CRV value. At the end of a season if Delta B is negative Beanstalk will increase the amount of Soil available, meaning more BEAN can be lent to the protocol in exchange for Pods. During the period from September to mid-November when the $BEAN price was oscillating closely around the peg Delta B was hovering around zero, but has gone increasingly negative over the course of Q1. 



# In Summary

Beanstalk’s Q1 metrics provide a lot of insight into the nature of the gradual dip in the price over the last few months. It’s evident that one of the most significant contributions to this trend is the cost of converting Unripe BEAN3CRV to Unripe BEAN (via the loss of Seeds). This cost is being removed as part of the upcoming Silo V3 upgrade. Beyond this, enhancing the utility of BEAN as a currency through new liquidity venues should attract more holders who can potentially lend their BEANs to Beanstalk. For this purpose the development pipeline is working on Wells, a unique new venue for $BEAN trading pairs. For a look into the idea behind Wells and what it aims to accomplish check out the [Bean University discussion](https://www.youtube.com/watch?v=Ty8HYlsu3Cc) from earlier this year. 

As always, if you’d like to learn more about Beanstalk and connect with the Farmer community you can find extensive resources and people willing to answer any questions you may have over in the [Discord](https://t.co/mxRBo85kOk). Don’t forget to check out the new [@Bean_Farmers](https://twitter.com/Bean_Farmers) Twitter for educational threads and some tasty Bean memes.