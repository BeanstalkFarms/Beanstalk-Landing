---
title: Water clocks and the Beanstalk helmsman
subtitle: "Part 2: Peg maintenance"
date: 2022-06-29T01:36:20.743Z
author: mod323
description: "Peg maintenance: how Beanstalk uses control theory to maintain peg."
image: /assets/uploads/beanstalk-helmsman.jpg
---
![Beanstalk helmsman](/assets/uploads/beanstalk-helmsman.jpg)

*Check out Part 1 in this series about Beanstalk: [Protocol-Native Utility](https://bean.money/blog/bank-runs-airplanes-and-beanstalk)*

Control systems, systems that provide a desired response by controlling an output, are believed to have been in use since ancient times. The Ancient Egyptians, for example, controlled the flow of water to measure time. The concept of water clocks was simple—two clay pots, one filled with water and a hole at the bottom. The hole served as a controller, depending on its size it controlled the amount of water that passed through it.

The first automatic control system, the centrifugal governor, was invented by Christiaan Huygens in the 17th century and was used to regulate the distance and pressure between millstones in windmills. James Watt adapted a governor to control his steam engine in 1788 and they continued to be widely used during the Steam Age in the 19th century. The governor controlled the speed of an engine by regulating the flow of fuel, so as to maintain a near-constant speed.

![A water clock, Watt’s governor and a helmsman](/assets/uploads/a-water-clock-watt’s-governor-and-a-helmsman.png "A water clock, Watt’s governor and a helmsman")

 <p style="text-align: center;"> A water clock, Watt’s governor and a helmsman</p>

## But what do controllers have to do with Beanstalk? 

Beanstalk uses two controllers to regularly cross the price of Bean over peg: 

1. Mint the shortage of Beans in the liquidity pool when P > 1; and
2. Regulate the interest rate (the Weather) for Sowing Beans in the Field (Beanstalk’s credit facility).

The minting controller is a simple proportional controller (similar to the governor used by Watt) which measures the error from peg—in this case, the shortage of Beans in the liquidity pool—and mints it. The larger the error, or shortage, the larger the number of Beans minted.

<figure>
<p align="center">
  <img 
    src="/assets/uploads/bean-3crv-pool.png" 
    alt="Bean:3CRV"
  />
</p>
</figure>
<p style="text-align: center;">Bean:3CRV pool - in this pool, the ratio of Beans to 3CRV determines the price of Bean</p>

It’s at the Field however, where economics and control theory meet.

## The Field

The Field’s objective is to remove excess Beans in the liquidity pool. It does this by issuing Soil. Anytime there’s Soil, Beanstalk is willing to borrow Beans in exchange for Pods (Beanstalk’s debt native asset). The question is, at what Weather? It might feel intuitive at first to link it to the price of Bean (or the amount that needs to be removed) through a proportional controller, i.e. the larger the deviation from peg, the higher the Weather, right? 

While in theory that may work, Beanstalk separates the markets of Bean and Soil to avoid:

1. Manipulation of the Weather through manipulating the price of Bean; and
2. A negative feedback loop where larger deviations from peg create larger changes in Weather and accordingly the debt issued, increasing the odds of a death spiral.

Instead, the Field looks at three things to determine how to adjust the Weather:

* If the price of Bean is above or below peg;
* If the debt of Beanstalk is above or below a threshold; and
* the rate of change in demand for Soil.

The last one is the derivative term in a controller. The same rate of change that the helmsman accounted for when steering the ship. 

A derivative term does not consider the magnitude of the error, this means that while it can move a system towards a direction, it can’t bring the error to zero. 

*Beanstalk doesn’t try to bring Bean to peg, it tries to cross it.*

![Beanstalk ship](/assets/uploads/beanstalk-ship.png)

If Beanstalk was a ship, it would be steered by a helmsman that only knows their relative position to destination and whether the ship is accelerating or decelerating towards or away from it. But never how fast the ship is sailing, nor how close or far they are from their destination. Back and forth, regularly crossing it. 

## Soil

Demand for Soil, or the rate of change of it, is an elegant way to control the Weather, but doesn’t come without limitations. 

Demand for Soil can only be measured by selling Soil, which comes at the expense of debt issuance. This means that, in theory, for the Field to always perfectly measure changes in demand, then there needs to be infinite Soil available. 

Beanstalk initially sought to solve this problem by having the Soil available be the cumulative of the excess of Beans in the liquidity pool over multiple seasons bounded by a minimum and a maximum Soil that was a percent of the total Bean supply. This soon proved problematic as it led the protocol to take on large amounts of debt when P > 1 (i.e., the very time where no Beans need to be removed from the supply).

Soil issuance has been optimized through a series of BIPs ([here](https://github.com/BeanstalkFarms/Beanstalk/blob/master/bips/bip-6.md) and [here](https://github.com/BeanstalkFarms/Beanstalk/blob/master/bips/bip-9.md)) that have dramatically improved the efficiency of the Soil market. The maximum available Soil at any season now is equal to the excess of Beans in the liquidity pool and the minimum is a function of the Weather and debt paid back. However, limiting the amount of Soil minted each Season limits the protocol’s ability to measure demand for Soil, especially at times when it sells out Season over Season. When that happens, the protocol switches to a time-based formula that compares how long it took for Soil to sell out within a given Season.

<p style="text-align: center;"> *      *      * </p>

Beanstalk’s credit facility and its ability to properly price the Weather is foundational not only to peg maintenance but also a healthy debt level. A delicate balance between issuing the right amount of Soil at the right Weather. So how has it performed? The proof is in the pudding.

![Bean peg crosses](/assets/uploads/bean-peg-crosses.png)