import type { NextPage } from 'next'
import Button from '../components/Button';
import ContributorButton from '../components/ContributorButton';
import CustomHead from '../components/CustomHead';
import ContentWrapper from '../components/ContentWrapper';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <>
      <CustomHead
        title="Beanstalk | A Decentralized Credit Based Stablecoin Protocol"
        description="Beanstalk is a decentralized credit based stablecoin protocol that is built on Ethereum. Beanstalk uses credit instead of collateral to create a decentralized, liquid, blockchain-native asset, which is stable relative to the value of a non-blockchain-native asset."
      />
      <ContentWrapper>
        <div className="space-y-6">
          <h1 className="md:text-5xl text-3xl md:leading-[3.5rem]">
            A decentralized credit based stablecoin protocol.
          </h1>
          <Button
            primary
            target="_blank"
            rel="noreferrer"
            href="https://app.bean.money">
            Launch App
          </Button>
          {/* <div>
            <span className={
              `sm:text-5xl text-7xl float-left mr-2
              sm:ml-0 -ml-2.5` // on mobile, line things up with the button
            }>🃏</span>
            <span className="text-gray-700 text-sm">
              600,000 Pods up for grabs in Beans on the Table, a poker tournament hosted by Bean Sprout. <Link href="/poker"><a className="text-blue-500 font-bold">Learn more &rarr;</a></Link>
            </span>
          </div> */}
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl mb-6 font-normal">Learn</h2>
          <Button
            target="_blank"
            rel="noreferrer"
            href="https://bean.money/docs/beanstalk.pdf"
            icon="/icon/beanstalk.svg"
            desc="v1.9.0">
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
          <div className="flex sm:flex-row flex-col sm:space-x-4 sm:space-y-0 space-y-4">
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
          <div className="flex sm:flex-row flex-col sm:space-x-4 sm:space-y-0 space-y-4">
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
      </ContentWrapper>
    </>
  )
}

export default Home
