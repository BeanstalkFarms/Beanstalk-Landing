import type { GetStaticPropsResult, NextPage } from 'next'
import Link from 'next/link';
import { NextSeo } from 'next-seo';

import Button from '../components/Buttons/Button';
import PostButton from '../components/Buttons/PostButton';
import Wrapper from '../components/Wrapper';
import {getSortedPostsData, PostData} from "../lib/posts";
import { COPY, IMAGES, SITE_URL } from '../lib/constants';
import { loadSnapshot, Snapshot } from '../lib/snapshot';

type BlogProps = {
  allPostsData: PostData[];
  snapshot?: Snapshot;
}

export async function getStaticProps() : Promise<GetStaticPropsResult<BlogProps>> {
  const allPostsData = getSortedPostsData(3)
  const snapshot = await loadSnapshot('beanstalkdao.eth', '0xe47741c4bfa4ac97ad23bbec0db8b9a5f2efc3e1737b309476d90611698193f4');
  console.log('Snapshot', snapshot)
  return {
    props: {
      allPostsData,
      snapshot,
    },
    revalidate: 60
  }
}

// Metadata
const TITLE = `Beanstalk | ${COPY.BASIC_TAGLINE}`;
const DESC  = COPY.BASIC_DESCRIPTION;

const Home: NextPage<BlogProps> = ({ allPostsData, snapshot }) => {
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
              url: IMAGES.BASIC_META,
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
      <Wrapper variant="farm">
        {/**
          * Section: Introduction
          */}
        <div className="space-y-6">
          {snapshot && (
            <div>
              <a href={`https://snapshot.org/#/${snapshot.proposal.space.id}/proposal/${snapshot.proposal.id}`} target="_blank" rel="noreferrer" className="flex flex-row items-center bg-slate-100 px-4 py-5 rounded-lg space-x-4">
                <img src="/assets/icon/snapshot.svg" className="h-5" />
                <span className="flex-1">
                  <span className="font-bold">{snapshot.proposal.title}</span> is live for voting
                </span>
                <span className="justify-self-end">&rarr;</span>
              </a>
            </div>
          )}
          <h1 className="md:text-5xl text-3xl md:leading-[3.5rem]">
            A decentralized credit-based stablecoin protocol.
          </h1>
          <div className="space-y-2">
            <div>
              <a href="https://app.bean.money" target="_blank" rel="noreferrer">
                <Button
                  primary
                  desc={<span className="text-white text-2xl system md:block hidden">&rarr;</span>}
                  icon="/assets/icon/beanstalk-white.svg">
                  Launch App
                </Button>
              </a>
            </div>
            <div className="md:flex md:flex-row md:space-y-0 space-y-2 md:space-x-2 items-stretch">
              <div className="flex-1">
                <Link href="/blog/path-forward">
                  <Button className="align-flex-start" icon={<></>}>
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
          </div>
        </div>
        {/**
          * Section: Learn
          */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-normal">Learn</h2>
            <a href={`/learn`}><p className="text font-normal mr-4 text-blue-600">More &rarr;</p></a>
          </div>
          <div className="space-y-4">
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
              href="https://snapshot.org/#/beanstalkfarms.eth"
              icon="/assets/icon/snapshot.svg"
              desc="Vote on governance proposals">
              Snapshot
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
        </div>
        {/**
          * Section: Blog
          */}
        <div className="space-y-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-normal">Blog</h2>
            <a href={`/blog`}><p className="text font-normal mr-4 text-blue-600">See all &rarr;</p></a>
          </div>
          <div className="flex flex-col space-y-4">
            {allPostsData.map(({ id, date, title, subtitle, image }) => (
              <PostButton
                key={id}
                href={`/blog/${id}`}
                title={title}
                subtitle={subtitle}
                date={date}
                image={image}
              />
            ))}
          </div>
        </div>
        {/**
          * Section: Subscribe
          */}
        <div className="space-y-4">
          <h2 className="text-3xl mb-6 font-normal">Subscribe</h2>
          <p>{`Subscribe to The Bi-Weekly Bean and we'll send major Beanstalk updates straight to your inbox.`}</p>
          <iframe src="https://beanstalkfarms.substack.com/embed" width="100%" frameBorder="0" scrolling="no"></iframe>
        </div>
      </Wrapper>
    </>
  )
}

export default Home

/* <div className="space-y-4">
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
</div> */

/* <div>
  <a href="https://snapshot.org/#/beanstalkfarms.eth/proposal/0x87d874a4a8b079c5dc092d7240e4c34fbb7d93252c9158fcb697bd9adff9bac9" target="_blank" rel="noreferrer" className="flex flex-row items-center bg-yellow-100 px-4 py-3 rounded-md space-x-4 border border-yellow-500">
    <img src="/assets/icon/snapshot.svg" className="h-5" />
    <span className="flex-1 font-bold">BFP-69: Start Date Change for the Barn Raise</span>
    <span className="justify-self-end">&rarr;</span>
  </a>
</div> */