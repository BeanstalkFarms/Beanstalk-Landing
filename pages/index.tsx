import type { NextPage } from 'next'
import Head from 'next/head'
import { FC } from 'react';

import styles from './index.module.css';

const Button : FC<{
  target?: string,
  rel?: string,
  href?: string,
  primary?: boolean,
  icon?: string,
  desc?: string,
}> = ({
  children,
  primary = false,
  icon = undefined,
  desc = undefined,
  ...props
}) => (
  <a {...props}
  className={
    `w-full sm:px-6 px-4  py-4 rounded-lg
    hover:border-gray-900 hover:scale-[1.01] transition-all cursor-pointer
    border border-gray-400
    ${icon
      ? 'flex flex-row items-center text-left space-x-4'
      : 'block text-center'}
    ${primary
      ? `bg-[#3EB94E] text-white`
      : `bg-white`}
  `}>
    {icon && <img src={icon} className="h-10 w-10 rounded-full" />}
    <span className="text-xl">{children}</span>
    {desc && <div className="flex-1 text-right font-[Futura-PT-Book] text-[17px] text-gray-600">{desc}</div>}
  </a>
);

const ContributorButton : FC<{
  target?: string,
  rel?: string,
  href: string,
  avatar: string,
  name: string,
}> = ({
  children,
  avatar = undefined,
  name = undefined,
  ...props
}) => (
  <a {...props}
  target="_blank"
  rel="noreferrer"
  className={
    `w-full sm:px-6 px-4 py-4 rounded-lg
    hover:border-gray-900 hover:scale-[1.01] transition-all cursor-pointer
    border border-gray-400
    sm:space-y-2
    bg-white
  `}>
    <div className="sm:flex sm:flex-row block items-center sm:space-x-3 sm:space-y-0 space-y-2">
      <img src={avatar} className="h-6 w-6 rounded-full" />
      <div className="text-xl">{children}</div>
    </div>
    <div className="font-light text-gray-600 font-[Futura-PT-Book] text-[17px]">{name} <span className="text-gray-400 sm:inline-block">&middot; Community</span></div>
</a>
);

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Beanstalk</title>
      </Head>
      <div className="flex flex-row">
        <div className={styles.TextContainer}>
          <div className="max-w-[639px] space-y-24 lg:pb-12">
            <img src="/logo.svg" className="h-16" />
            <div className="space-y-6">
              <h1 className="text-5xl font-normal leading-[3.5rem]">
                A decentralized, credit-based stablecoin protocol.
              </h1>
              <Button primary href="https://app.bean.money">
                Launch App
              </Button>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl mb-6 font-normal">Learn</h2>
              <Button
                target="_blank"
                rel="noreferrer"
                href="https://bean.money/docs/beanstalk.pdf"
                icon="/icon/beanstalk.svg"
                desc="v1.7.0">
                Whitepaper
              </Button>
              <Button
                target="_blank"
                rel="noreferrer"
                href="https://discord.gg/beanstalk"
                icon="/icon/discord.png"
                desc="Ask questions and join the community">
                Discord
              </Button>
              <div className="flex flex-row space-x-4">
                <ContributorButton
                  href="https://beanmerchant.substack.com/p/updated-beanstalk-faq-"
                  name="Bean Merchant"
                  avatar="/icon/bean-merchant.png">
                  Beanstalk FAQ
                </ContributorButton>
                <ContributorButton
                  href="https://mirror.xyz/astn.eth/LeuGtteOh8N0GVHwuPL4R1TIPXmjQuZQFzGObCLezUM"
                  name="astn"
                  avatar="/icon/astn.png">
                  What&apos;s Beanstalk?
                </ContributorButton>
              </div>
              <div className="flex flex-row space-x-4">
                <ContributorButton
                  target="_blank"
                  rel="noreferrer"
                  href="https://open.spotify.com/episode/4zSBdnYs56Mlw5RrStZsfk?si=cc15759b547d4ea3"
                  name="nasjaq"
                  avatar="/icon/nasjaq.jpg">
                  Podcast w/ Publius
                </ContributorButton>
                <ContributorButton
                  target="_blank"
                  rel="noreferrer"
                  href="https://twitter.com/doctor_parth/status/1488941756448382976?s=21"
                  name="DrParth"
                  avatar="/icon/drparth.jpg">
                  $BEAN vs. ESD
                </ContributorButton>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl mb-6 font-normal">Follow</h2>
              <Button
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/BeanstalkFarms"
                icon="/icon/twitter.png">
                Twitter
              </Button>
              <Button
                target="_blank"
                rel="noreferrer"
                href="https://medium.com/beanstalkfarms"
                icon="/icon/medium.jpg">
                Medium
              </Button>
              <Button
                target="_blank"
                rel="noreferrer"
                href="https://dune.xyz/tbiq/Beanstalk"
                icon="/icon/dune.png">
                Dune Analytics
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.FarmImage}></div>
      </div>
    </div>
  )
}

export default Home
