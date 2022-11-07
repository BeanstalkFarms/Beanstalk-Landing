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
  snapshots?: Snapshot[] | null;
}

export async function getStaticProps() : Promise<GetStaticPropsResult<BlogProps>> { 
  const allPostsData = getSortedPostsData(3)
  const snapshots = //null;
  [
    await loadSnapshot('beanstalkdao.eth', '0x53c358af0fae50f888795c5f2272d50f8759b7702bf7dc2255a03f9fb22ccf45'),
  ];
  return {
    props: {
      allPostsData,
      snapshots,
    },
    revalidate: 60
  }
}

// Metadata
const TITLE = `Beanstalk | ${COPY.BASIC_TAGLINE}`;
const DESC  = COPY.BASIC_DESCRIPTION;

const Home: NextPage<BlogProps> = ({ allPostsData, snapshots }) => {
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
          {snapshots && snapshots.length > 0 ? (
            <div className="pb-6">
              <div className="space-y-1 pb-1 border-b-2 border-blue-100">
                {snapshots.map((snapshot) => (
                  (snapshot.proposal.end < new Date().getTime()) && (
                    <div key={snapshot.proposal.id}>
                      <a href={`https://snapshot.org/#/${snapshot.proposal.space.id}/proposal/${snapshot.proposal.id}`} target="_blank" rel="noreferrer" className="flex flex-row items-center px-2 py-4 space-x-4">
                        <img src="/assets/icon/snapshot.svg" className="h-5" />
                        <span className="flex-1">
                          <span className="font-bold">{snapshot.proposal.title}</span> is live for voting
                        </span>
                        <span className="justify-self-end">&rarr;</span>
                      </a>
                    </div>
                  )
                ))}
              </div>
            </div>
          ) : null}
          <h1 className="md:text-5xl text-3xl md:leading-[3.5rem]">
            A permissionless fiat stablecoin protocol.
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
            {/* <div className="md:flex md:flex-row md:space-y-0 space-y-2 md:space-x-2 items-stretch">
              <div className="flex-1">
                <Link href="/blog/beanstalk-one-year-anniversary">
                  <Button className="align-flex-start" icon={<></>}>
                    Beanstalk: Unpause and One Year Anniversary
                  </Button>
                </Link>
              </div> */}
              {/* <div>
                <Link href="/blog/path-forward-faq">
                  <Button className="h-full flex items-center">
                    FAQ
                  </Button>
                </Link>
              </div> */}
            {/* </div> */}
          </div>
        </div>
        {/**
          * Section: Learn
          */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-normal">Learn</h2>
            <a href={`https://docs.bean.money/community-resources/beanstalk-learning-center`}><p className="text font-normal mr-4 text-blue-600">More &rarr;</p></a>
          </div>
          <div className="space-y-4">
            <Button
              target="_blank"
              rel="noreferrer"
              href="https://bean.money/docs/beanstalk.pdf"
              icon="/assets/icon/beanstalk.svg"
              desc="v2.1.1">
              Whitepaper
            </Button>
            <Button
              target="_blank"
              rel="noreferrer"
              href="https://docs.bean.money"
              icon="/assets/icon/gitbook.png"
              desc="Learn about Beanstalk">
              {`Docs`}
            </Button>
            <Button
              target="_blank"
              rel="noreferrer"
              href="https://discord.gg/beanstalk"
              icon="/assets/icon/discord.png"
              desc="Join the community and ask questions">
              Discord
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
          * Section: Links
          */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-normal">Links</h2>
            <a href={`https://docs.bean.money/community-resources/links`}><p className="text font-normal mr-4 text-blue-600">More &rarr;</p></a>
          </div>
          <div className="space-y-4">
            <Button
              target="_blank"
              rel="noreferrer"
              href="https://analytics.bean.money/"
              icon="/assets/icon/bean.png"
              desc="View advanced analytics">
              Analytics
            </Button>
            <Button
              target="_blank"
              rel="noreferrer"
              href="https://snapshot.org/#/beanstalkdao.eth"
              icon="/assets/icon/snapshot.svg"
              desc="Vote on governance proposals">
              Snapshot
            </Button>
            <Button
              target="_blank"
              rel="noreferrer"
              href="https://immunefi.com/bounty/beanstalk"
              icon="/assets/icon/immunefi.png"
              desc="Submit bug reports">
              Bug Bounty
            </Button>
            <Button
              target="_blank"
              rel="noreferrer"
              href="https://github.com/BeanstalkFarms/Beanstalk"
              icon="/assets/icon/github.png"
              desc="View the open source contracts">
              GitHub
            </Button>
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
