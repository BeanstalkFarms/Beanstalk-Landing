import type { GetStaticPathsResult, GetStaticPropsResult, NextPage } from 'next';
import { NextSeo } from 'next-seo';

import ContentWrapper from '../../components/ContentWrapper'
import { getAllPostIds, getPostData, PostData } from '../../lib/posts'
import BlogLayout from "../../components/BlogLayout";
import Script from 'next/script';


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
  const postData = await getPostData(params.id)
  if(!postData) return { notFound: true }
  
  if(!postData.title || !postData.date || !postData.contentHtml) {
    return { notFound: true };
  }

  // Log information about posts for SEO debugging.
  console.log(`getStaticProps: blog/${params.id}`)
  console.table([
    { name: 'title', length: postData.title.length, valid: postData.title.length <= 55 },
    { name: 'description', length: postData.description.length, valid: postData.description.length <= 160 }
  ]);

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
  const paths = getAllPostIds()
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
      {/**
        * React doesn't <script> tags embedded via dangerouslySetInnerHtml if the 
        * tags are mounted after page load. This prevents widgets like Twitter from showing
        * correctly without a full page refresh. Instead, we embed necessary widget scripts
        * on all blog/[id] pages to make sure things display correctly.
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
              // alt: imageAlt,
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
          <hr/>
          <div className="space-y-4">
            <h2 className="text-2xl mb-6 font-normal">Subscribe</h2>
            <p>{`Subscribe to The Bi-Weekly Bean and we'll send major Beanstalk updates straight to your inbox.`}</p>
            <iframe src="https://beanstalkfarms.substack.com/embed" width="100%" frameBorder="0" scrolling="no"></iframe>
          </div>
        </div>
      </ContentWrapper>
    </>
  )
}

export default Post;