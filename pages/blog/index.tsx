import ContentWrapper from "../../components/ContentWrapper";
import CustomHead from "../../components/CustomHead";
import { getSortedPostsData } from '../../lib/posts'
import { NextPage } from "next";
import { PostData } from '../../lib/posts'
import PostItem from "../../components/PostItem";

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

const Blog: NextPage<BlogProps> = ({ allPostsData }) => (
  <>
    <CustomHead
      title="Beanstalk Blog | Content From the Farm"
      description="Blog posts from members of the Beanstalk Farms community."
    />
    <ContentWrapper>
      <div className="space-y-6">
        <h1 className="text-5xl font-normal leading-[3.5rem]">
          Beanstalk blog
        </h1>
        <div className="flex flex-row space-x-4">
        {allPostsData.map(({ id, date, title, thumbnail }) => (
          <PostItem
            title={title}
            image={thumbnail}
            key={id}
            date={date}>
            </PostItem>
          ))}
        </div>
      </div>
    </ContentWrapper>
  </>
)

export default Blog
