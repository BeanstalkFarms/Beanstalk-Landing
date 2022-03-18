---
title: bean.money Website Settings Guide
subtitle: ""
author: Beanstalk Farms
description: 'Using bean.money for easy, fee-efficient Beanstalk interactions'
date: '2021-11-17T23:10:26.405Z'
categories: []
keywords: []
slug: /@BeanstalkFarms/bean-money-website-settings-guide-1bdc1627fbe2
---

Beanstalk is designed with its users in mind: many complex interactions with Beanstalk can be performed in a single, fee-efficient transaction. bean.money, the Beanstalk website, makes performing complex interactions with Beanstalk simple.

The following guide explains 1) the various transaction settings available to users when transacting through bean.money, and 2) how to ensure you leverage tax efficiency improvements enabled by [BIP-2](https://github.com/BeanstalkFarms/Beanstalk/blob/bip-2/bips/bip-2.md) if you are reinvesting harvestable Pods or Withdrawals back into Beanstalk. If you are new to Beanstalk, you may want to first read the introductory article [here](https://medium.com/@BeanstalkFarms/introducing-beanstalk-557c45cb8d80). For more information on how to invest in Beanstalk in general, click [here](https://medium.com/@BeanstalkFarms/earn-interest-from-beanstalk-just-the-basics-165a8cc5fecd).

### Settings:

In each module, there is a “_Settings_” button that lets users customize their transaction.

![](https://cdn-images-1.medium.com/max/800/1*zPZoh--xaE0Vl9vjLVztFA.png)

Once the settings button is clicked, a suite of options unique to the user and specific transaction will present themselves in the bottom right of the module.

![](https://cdn-images-1.medium.com/max/800/1*pTLsQ4OEmJKriIoC7AQNFQ.png)

The website simplifies the user experience by only showing settings if they are relevant to the transaction and applicable to the user. For example, the website only displays a “_Use LP_” option to include circulating LP Tokens in a transaction if a) the user has circulating LP Tokens, and b) the transaction can include circulating LP Tokens.

Transaction settings #1-4 allow the user to select the specific assets they want to use as inputs for the transaction. In general, bean.money allows Beans, ETH, or a combination of Beans and ETH to be used as inputs for transactions.

Below are explanations of each setting option ordered by number according to the above photo (#9 is pictured below the list):

1.  **LP:** If the BEAN:ETH LP Token logo is selected, users can input the number of LP Tokens to deposit into the Silo as part of their transaction. _This mode is only available to users if they have circulating LP while interacting with the Silo._
2.  **Bean:** If the Bean logo is selected, users can input the number of Beans they want to use in their transaction. If the transaction requires ETH and the Bean logo is selected (for example, an LP Token deposit), Beanstalk will sell Beans into ETH to complete the transaction.
3.  **ETH:** If the ETH logo is selected, users can input the number of ETH they want to use in their transaction. If the transaction requires Beans and the ETH logo is selected (for example, an LP Token deposit), Beanstalk will sell the ETH into Beans to complete the transaction. _By default, users will be on ETH mode if they do not have any Beans._
4.  **Bean + ETH:** If the Bean + ETH logo is selected, users can input the number of Beans and/or ETH they want to use in their transaction. An input may be required into one or both of the input fields depending on the transaction.
5.  **Use LP:** If “_Use LP_” is toggled on, users can input the number of circulating LP Tokens they want to deposit into the Silo in addition to depositing Beans, ETH or both Beans + ETH normally. _This option is only available to users if they have circulating LP Tokens and they are in the Bean, ETH or the Bean + ETH modes (modes 2-4)._
6.  **Claim:** If “_Claim_” is toggled on, users will claim any harvestable Pods, claimable Withdrawals, and claimable ETH as part of their transaction. If the user has harvestable Pods, claimable Beans and/or claimable LP Tokens and is in either the Bean or Bean + ETH modes (modes 2 or 4), they can use the Beans being claimed in the current transaction without having the claimed assets every go into your wallet. If the user has claimable LP Tokens and toggles the “_Claim_” option on, Beanstalk will remove the liquidity and use or distribute the underlying Beans and ETH as appropriate (for more, see #9). _This option is only available to users if they have harvestable Pods, claimable Beans, claimable ETH or claimable LP Tokens_
7.  **Convert:** If “_Convert_” is toggled on, users can convert deposited Beans into deposited LP Tokens by matching the deposited Beans with additional ETH. _This option is only available to users that already have deposited Beans and requires additional ETH._
8.  **Slippage:** When a transaction is trading Beans and ETH, a “_Slippage_” option will appear. Slippage is the maximum difference between the price at the time the transaction is submitted and and the price at the time the transaction is executed. By default, transactions will be set with a slippage of 0.5%. For more information, click [here](https://coinmarketcap.com/alexandria/glossary/slippage).
9.  **Remove LP:** (For #9, see the below picture) If “_Remove LP_” is toggled on when users claim and remove LP Tokens from the Silo, Beanstalk removes the liquidity from the BEAN:ETH pool and distributes the Beans and ETH under the LP tokens to the user. When “_Remove LP_” is toggled off, users claim LP Tokens as uniswap LP Tokens without converting the LP Tokens into Beans and ETH. _The “Remove LP” option is on by default and is only available to users with claimable LP Tokens._

![](https://cdn-images-1.medium.com/max/800/1*EEKtea6hxG85eqIPl8OU6w.png)

### Leveraging BIP-2 Through bean.money Settings

BIP-2 improved tax efficiency for transactions that reinvest harvestable Pods, claimable Beans and/or claimable LP Tokens into Beanstalk: all assets can be reinvested into Beanstalk without the assets ever touching the transacting wallet.

bean.money helps easily facilitate tax efficient Beanstalk transactions.

**Eligibility**

Anytime wallet that has “Claimable Beans” displayed in their Balances module in the Analytics section is eligible to leverage BIP-2 for a tax efficient reinvestment.

**Use**

To perform tax efficient reinvestments into Beanstalk, **DO NOT** hit the “Claim” button in the Balances module.

Instead, go to the Silo or Field module, depending on whether you want to re-deposit or re-sow your claimable Beans.

In the Silo or Field module, select either modes 2 or 4. Then, toggle “_Claim_” on (setting #6) and **confirm that the Beans displayed in the module has increased by the amount of claimable Beans in your Balances section.**

Once “_Claim_” is toggled on, input the desired number of Beans to use in the transaction and transact normally. If the number of Beans input is greater than your total amount of claimable Beans, Beanstalk will use circulating Beans from your wallet to cover the difference. If the number of Beans input is less than your total amount of claimable Beans, the remaining Beans will be claimed as normal and delivered to the transacting wallet.

**Partial Claims**

Beanstalk does not currently support partial harvests or claims.