import type { NextPage } from 'next'
import Link from 'next/link';
import { NextSeo } from 'next-seo';

import Button from '../components/Button';
import PostButton from '../components/PostButton';
import ContentWrapper from '../components/ContentWrapper';
import {getSortedPostsData, PostData} from "../lib/posts";

type BlogProps = {
  allPostsData: PostData[]
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData(3)
  return {
    props: {
      allPostsData
    }
  }
}

const TITLE = `Beanstalk | A Decentralized Credit Based Stablecoin Protocol`;
const DESC  = `Beanstalk is a decentralized credit based stablecoin protocol that is built on Ethereum. Beanstalk uses credit instead of collateral to create a decentralized, liquid, blockchain-native asset, which is stable relative to the value of a non-blockchain-native asset.`;
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || '//localhost:3000';

const Home: NextPage<BlogProps> = ({ allPostsData }) => {
  return (
    <>
      <NextSeo
        title={TITLE}
        description={DESC}
        openGraph={{
          url: `${SITE_URL}`,
          title: TITLE,
          description: DESC,
          type: "article",
          images: [
            {
              url: SITE_URL + "/assets/meta/basic.png",
              width: 1200,
              height: 628,
              type: 'image/jpeg',
            }
          ],
          site_name: 'Beanstalk',
        }}
        twitter={{
          handle: '@beanstalkfarms',
          cardType: 'summary_large_image',
          site: '@beanstalkfarms'
        }}
      />
      <ContentWrapper variant="farm">
        <div className="space-y-6">
          <h1 className="md:text-5xl text-3xl md:leading-[3.5rem]">
            A decentralized credit based stablecoin protocol.
          </h1>
          <div className="space-y-2">
            <div className="md:flex md:flex-row md:space-y-0 space-y-2 md:space-x-2 items-stretch">
              <div className="flex-1">
                <Link href="/blog/path-forward">
                  <Button
                    primary
                    desc={<span className="text-white text-2xl system md:block hidden">&rarr;</span>}
                    icon="/assets/icon/beanstalk-white.svg">
                    Beanstalk: The Path Forward
                  </Button>
                </Link>
              </div>
              <div>
                <Link href="/blog/path-forward-faq">
                  <Button className="h-full flex items-center">
                    FAQ
                  </Button>
                </Link>
              </div>
            </div>
            <div>
              <a href="https://snapshot.org/#/beanstalkfarms.eth/proposal/0x54fad9c756daa38bb4bafadbee2cea6cb98f380fe2d6a62fdf723d0b15430d42" target="_blank" rel="noreferrer" className="flex flex-row items-center bg-yellow-100 px-4 py-4 rounded-md space-x-4 border border-yellow-500">
                <img src="/assets/icon/snapshot.svg" className="h-8" />
                <span className="flex-1 font-bold">BFP-66: Hire Halborn to Perform Audit</span>
                <span className="justify-self-end">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl mb-6 font-normal">Learn</h2>
          <Button
            target="_blank"
            rel="noreferrer"
            href="https://bean.money/docs/beanstalk.pdf"
            icon="/assets/icon/beanstalk.svg"
            desc="v1.16.0">
            Whitepaper
          </Button>
          <Button
            target="_blank"
            rel="noreferrer"
            href="https://discord.gg/beanstalk"
            icon="/assets/icon/discord.png"
            desc="Join the community and ask questions">
            Discord
          </Button>
          <Button
            target="_blank"
            rel="noreferrer"
            href="https://omniscia.io/beanstalk-core-protocol/"
            icon="/assets/icon/omniscia.webp"
            desc="3/31/2022">
            Omniscia Audit
          </Button>
          <Button
            target="_blank"
            rel="noreferrer"
            href="https://dune.xyz/tbiq/Beanstalk"
            icon="/assets/icon/dune.png"
            desc="View Beanstalk protocol analytics">
            Dune Analytics
          </Button>
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/Yn9cn_IZy7o" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-normal">Blog</h2>
            <a href={`/blog`}><p className="text font-normal mr-4 text-blue-600">See all &rarr;</p></a>
          </div>
          <div className="flex flex-col space-y-4">
            {allPostsData.map(({ id, date, title, subtitle }) => (
              <PostButton
                key={id}
                href={`/blog/${id}`}
                title={title}
                subtitle={subtitle}
              />
            ))}
          </div>
        </div>
        {/* <div className="space-y-4">
          <h2 className="text-3xl mb-6 font-normal">Community</h2>
          <div className="flex sm:flex-row flex-col sm:space-x-4 sm:space-y-0 space-y-4">
            <ContributorButton
              href="https://beanmerchant.substack.com/p/updated-beanstalk-faq-"
              name="Bean Merchant"
              avatar="/assets/community/bean-merchant.png">
              Beanstalk FAQ
            </ContributorButton>
            <ContributorButton
              href="https://mirror.xyz/astn.eth/w5336TYVkb-9eIlKxrCPKLoUNvYRgJmd6nB4Br5-Vs8"
              name="austin"
              avatar="/assets/community/austin.png">
              Zero to Beanstalk
            </ContributorButton>
          </div>
          <div className="flex sm:flex-row flex-col sm:space-x-4 sm:space-y-0 space-y-4">
            <ContributorButton
              href="https://open.spotify.com/episode/4zSBdnYs56Mlw5RrStZsfk?si=cc15759b547d4ea3"
              name="nasjaq"
              avatar="/assets/community/nasjaq.jpg">
              Podcast w/ Publius
            </ContributorButton>
            <ContributorButton
              href="https://twitter.com/doctor_parth/status/1488941756448382976?s=21"
              name="DrParth"
              avatar="/assets/community/drparth.jpg">
              $BEAN vs. ESD
            </ContributorButton>
          </div>
        </div> */}
        <div className="space-y-4">
          <h2 className="text-3xl mb-6 font-normal">Subscribe</h2>
          <p>{`Subscribe to The Bi-Weekly Bean and we'll send major Beanstalk updates straight to your inbox.`}</p>
          <iframe src="https://beanstalkfarms.substack.com/embed" width="100%" frameBorder="0" scrolling="no"></iframe>
        </div>
        {/* <div className="space-y-4">
          <h2 className="text-3xl mb-6 font-normal">Follow</h2>
          <Button
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/BeanstalkFarms"
            icon="/assets/icon/twitter.png">
            Twitter
          </Button>
          <Button
            target="_blank"
            rel="noreferrer"
            href="https://medium.com/beanstalkfarms"
            icon="/assets/icon/medium.jpg">
            Medium
          </Button>
          <Button
            target="_blank"
            rel="noreferrer"
            href="https://www.youtube.com/channel/UCsIk5WEk3F4kKmFFmbLd6Ng"
            icon="/assets/icon/youtube.png"
            iconStyle={{ borderRadius: 0 }}>
            Youtube
          </Button>
          <Button
            target="_blank"
            rel="noreferrer"
            href="https://www.reddit.com/r/BeanstalkProtocol/"
            icon="/assets/icon/reddit.png">
            Reddit
          </Button>
        </div> */}
      </ContentWrapper>
    </>
  )
}

export default Home
