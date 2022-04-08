import ContentWrapper from "../../components/ContentWrapper";
import CustomHead from "../../components/CustomHead";
import { getSortedPostsData } from '../../lib/posts'
import { NextPage } from "next";
import { PostData } from '../../lib/posts'
import PostButton from "../../components/PostButton";

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
      title="Blog | Beanstalk"
      description="Posts from members of the Beanstalk Farms community."
    />
    <ContentWrapper variant="default">
      <div className="space-y-6">
        <h1 className="text-4xl font-normal leading-[3.5rem]">
          Blog
        </h1>
        <div className="flex flex-col space-y-4">
          {allPostsData.map(({ id, title, subtitle }) => (
            <PostButton
              key={id}
              href={`/blog/${id}/`}
              title={title}
              subtitle={subtitle}
            />
          ))}
        </div>
      </div>
    </ContentWrapper>
  </>
)

export default Blog
