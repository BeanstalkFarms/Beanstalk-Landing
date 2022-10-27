import { NextPage } from "next";
import { NextSeo } from "next-seo";

import Wrapper from "../../components/Wrapper";
import { getSortedPostsData } from '../../lib/posts'
import { PostData } from '../../lib/posts'
import PostButton from "../../components/Buttons/PostButton";
import { IMAGES, SITE_URL } from "../../lib/constants";

type BlogProps = {
  allPostsData: PostData[]
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

const TITLE = `Blog | Beanstalk`;
const DESC  = `Posts from Beanstalk Farms and members of the community.`;

const Blog: NextPage<BlogProps> = ({ allPostsData }) => (
  <>
    <NextSeo
      title={TITLE}
      description={DESC}
      openGraph={{
        url: `${SITE_URL}/blog`,
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
    <Wrapper variant="default">
      <div className="space-y-6">
        <h1 className="text-4xl font-normal leading-[3.5rem]">
          Blog
        </h1>
        <div className="flex flex-col space-y-4">
          {allPostsData.map(({ id, title, subtitle, date }) => (
            <PostButton
              key={id}
              href={`/blog/${id}/`}
              title={title}
              date={date}
              subtitle={subtitle}
            />
          ))}
        </div>
      </div>
    </Wrapper>
  </>
)

export default Blog
