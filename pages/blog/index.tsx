import { NextPage } from "next";
import { NextSeo } from "next-seo";
import { useState, useEffect } from "react";
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


const Blog: NextPage<BlogProps> = ({ allPostsData }) => {
  const [filter, setFilter] = useState(null);
  const tags = allPostsData.map(post => post.tag);
  const uniqueTags = Array.from(new Set(tags)).sort();

  const updateFilter = (e: any) => {
    setFilter(e.target.value === "All" ? null : e.target.value);
  }

  return (
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
          <div className="sm:flex sm:flex-row block items-center justify-between sm:space-x-3 sm:space-y-0 space-y-2">
            <h1 className="text-4xl font-normal leading-[3.5rem]">
              Blog
            </h1>
            <select onChange={e => updateFilter(e)} id="category" className="bg-gray-35 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-70 p-2.5 hover:border-[#C1DEF2] border border-[#C1DEF2]">
              <option selected>All</option>
              {uniqueTags.map((tag, index) => (
                <option key={index}>{tag}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col space-y-4">
            {filter 
              ? (allPostsData.filter(post => post.tag === filter).map(({ id, title, subtitle, date, tag }) => (
                <PostButton
                  key={id}
                  href={`/blog/${id}/`}
                  title={title}
                  date={date}
                  tag={tag}
                  subtitle={subtitle}
                />
              ))) 
              : (allPostsData.map(({ id, title, subtitle, date, tag }) => (
                <PostButton
                  key={id}
                  href={`/blog/${id}/`}
                  title={title}
                  date={date}
                  tag={tag}
                  subtitle={subtitle}
                />
              )))
            }
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default Blog
