import type { NextPage } from 'next'
import Button from '../components/Button';
import ContributorButton from '../components/ContributorButton';
import PokerBanner from '../components/Banners/PokerBanner';
import CustomHead from '../components/CustomHead';
import styles from './index.module.css';

const Home: NextPage = () => {
  return (
    <div>
      <CustomHead
        title="Beanstalk | A Decentralized Credit Based Stablecoin Protocol"
        description="Beanstalk is a decentralized, credit-based stablecoin protocol that is built on Ethereum. Beanstalk uses credit instead of collateral to create a decentralized, liquid, blockchain-native asset, which is stable relative to the value of a non-blockchain-native asset."
      />
      <div className="flex flex-row">
        <div className={styles.TextContainer}>
          <div className="max-w-[720px] space-y-24 lg:pb-12">
            <img src="/logo.svg" className="h-15" />
            <div className="space-y-6">
              <h1 className="text-5xl font-normal leading-[3.5rem]">
                A decentralized, credit-based stablecoin protocol.
              </h1>
              <Button
                primary
                target="_blank"
                rel="noreferrer"
                href="https://app.bean.money">
                Launch App
              </Button>
            </div>
            <PokerBanner />
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
                desc="Join the community and ask questions">
                Discord
              </Button>
              <Button
                target="_blank"
                rel="noreferrer"
                href="https://dune.xyz/tbiq/Beanstalk"
                icon="/icon/dune.png"
                desc="View Beanstalk protocol analytics">
                Dune Analytics
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
                  name="austin"
                  avatar="/icon/austin.png">
                  What&apos;s Beanstalk?
                </ContributorButton>
              </div>
              <div className="flex flex-row space-x-4">
                <ContributorButton
                  href="https://open.spotify.com/episode/4zSBdnYs56Mlw5RrStZsfk?si=cc15759b547d4ea3"
                  name="nasjaq"
                  avatar="/icon/nasjaq.jpg">
                  Podcast w/ Publius
                </ContributorButton>
                <ContributorButton
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
                href="https://www.reddit.com/r/BeanstalkProtocol/"
                icon="/icon/reddit.png">
                Reddit
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
