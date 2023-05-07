import type { GetStaticPathsResult, GetStaticPropsResult, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Script from 'next/script';

import Wrapper, { WrapperProps } from '../../components/Wrapper'
import { SITE_URL } from '../../lib/constants';
import { getAllPostIds, getPostData, PostData } from '../../lib/posts'

type PostProps = {
  // Metadata
  id: string;
  title: string;
  subtitle: string | null;
  author: string;
  date: string;
  image: string | null;
  description: string;
  layout?: WrapperProps['variant'];
  subscribe?: boolean;
  // Content
  content: string;
}

export async function getStaticProps({ params } : PostData) : Promise<GetStaticPropsResult<PostProps>> {
  let postData;
  try {
    postData = await getPostData(params.id)
  } catch(e) {
    return { notFound: true };
  }

  //
  if(!postData || !postData.title || !postData.date || !postData.contentHtml) {
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
      layout: postData.layout || "default",
      subscribe: postData.subscribe || true,
      // Content
      content: postData.contentHtml,
    },
  }
}

export async function getStaticPaths() : Promise<GetStaticPathsResult> {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
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
    layout,
    description,
    subscribe,
  } = props;

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
          url: `${SITE_URL}/blog/${id}`,
          title: `${title} | Beanstalk`,
          description: description || undefined,
          type: "article",
          images: [
            {
              url: (image != null) ? SITE_URL + image : SITE_URL + "/assets/uploads/barn-and-beans.png",
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
      <Wrapper variant={layout || "default"}>
        <div className="space-y-12">
          <div className="space-y-6 border-b border-gray-[#E5E7ED] py-12">
            <p className="text-md text-slate-500">{author} &middot; {date}</p>
            <div className="space-y-2">
              <h1 className="md:text-5xl text-3xl font-bold text-slate-900">{title}</h1>
              {subtitle ? <h2 className="text-2xl text-slate-700 font-light">{subtitle}</h2> : null}
            </div>
          </div>
          <div
            className={`text-[18px] prose`}
            dangerouslySetInnerHTML={{ __html: content }}
          />
          {subscribe === false ? null : (
            <>
              <hr />
              {/* <div className="space-y-4">
                <h2 className="text-2xl mb-6 font-normal">Subscribe</h2>
                <p>{`Subscribe to The Bi-Weekly Bean and we'll send major Beanstalk updates straight to your inbox.`}</p>
                <iframe src="https://beanstalkfarms.substack.com/embed" width="100%" frameBorder="0" scrolling="no"></iframe>
              </div> */}
            </>
          )}
        </div>
      </Wrapper>
    </>
  )
}

export default Post;