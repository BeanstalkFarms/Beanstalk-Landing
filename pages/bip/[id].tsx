import type { GetStaticPathsResult, GetStaticPropsResult, NextPage } from 'next';
import { NextSeo } from 'next-seo';

import ContentWrapper from '../../components/ContentWrapper'
import { getAllPostIds, getPostData, PostData, PostType } from '../../lib/posts'
import Script from 'next/script';
import Button from '../../components/Button';


type PostProps = {
  // Metadata
  id: string;
  title: string;
  subtitle: string | null;
  author: string;
  date: string;
  image: string | null;
  description: string;
  // Content
  content: string;
}

export async function getStaticProps({ params } : PostData) : Promise<GetStaticPropsResult<PostProps>> {
  const postData = await getPostData(PostType.BIP, params.id)
  if(!postData) return { notFound: true }
  
  if(!postData.title || !postData.date || !postData.contentHtml) {
    return { notFound: true };
  }

  // Note: all CMS fields that are optional must
  // have `|| null` applied below because `undefined` is
  // not JSON-serializable.
  return {
    props: {
      // Metadata
      id: params.id,
      title: postData.title,
      subtitle: postData.subtitle || null,
      author: postData.author,
      date: postData.date,
      image: postData.image || null,
      description: postData.description,
      // Content
      content: postData.contentHtml,
    },
  }
}

export async function getStaticPaths() : Promise<GetStaticPathsResult> {
  const paths = getAllPostIds(PostType.BIP)
  console.log(paths)
  return {
    paths,
    fallback: true
  }
}

const Post: NextPage<PostProps> = (props) => {
  const {
    id,
    title,
    subtitle,
    author,
    date,
    content,
    image,
    description
  } = props;

  const siteUrl = (typeof window !== 'undefined') ? window.location.origin : "https://bean.money";

  return (
    <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.15.0/dist/katex.min.css"/> 
      {/**
        * React doesn't <script> tags embedded via dangerouslySetInnerHtml if the 
        * tags are mounted after page load. This prevents widgets like Twitter from showing
        * correctly without a full page refresh. Instead, we embed necessary widget scripts
        * on all BIP/[id] pages to make sure things display correctly.
        * More here: https://nextjs.org/docs/basic-features/script
        */}
      <Script src="https://platform.twitter.com/widgets.js" strategy="beforeInteractive" />
      <NextSeo
        title={`${title} | Beanstalk`}
        description={description || undefined}
        openGraph={{
          url: `${siteUrl}/${id}`,
          title: `${title} | Beanstalk`,
          description: description || undefined,
          type: "article",
          images: [
            {
              url: (image != null) ? siteUrl + image : siteUrl + "/assets/uploads/barn-and-beans.png",
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
      <ContentWrapper variant="default">
        <div className="space-y-8">
          <div className="space-y-8 border-b border-gray-100 pb-8">
            <p className="text-sm text-slate-400">{author} &middot; {date}</p>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-slate-900">{title}</h1>
              {subtitle ? <h2 className="text-xl text-slate-500 font-light">{subtitle}</h2> : null}
            </div>
          </div>
          <div
            className={`text-md prose`}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
        <Button
            primary
            target="_blank"
            rel="noreferrer"
            href="https://app.bean.money/governance">
            Vote Now!
      </Button>
      </ContentWrapper>
    </>
  )
}

export default Post;