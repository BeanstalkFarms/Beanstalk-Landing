import ContentWrapper from "../../components/ContentWrapper";
import CustomHead from "../../components/CustomHead";
import { getSortedPostsData } from '../../lib/posts'
import { NextPage } from "next";
import { PostData } from '../../lib/posts'
import PostButton from "../../components/PostButton";
import { PostType } from "../../src/types";

type BIPProps = {
  allPostsData: PostData[]
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData(PostType.BIP)
  return {
    props: {
      allPostsData
    }
  }
}

const BIP: NextPage<BIPProps> = ({ allPostsData }) => (
  <>
    <CustomHead
      title="Beanstalk BIPs - Beanstalk Improvement Protocols | Beanstalk"
      description="List of Beanstalk Improvement Protocols."
    />
    <ContentWrapper variant="default">
      <div className="space-y-6">
        <h1 className="text-4xl font-normal leading-[3.5rem]">
          BIP
        </h1>
        <div className="flex flex-col space-y-4">
          {allPostsData.map(({ id, title, subtitle }) => (
            <PostButton
              key={id}
              href={`/bip/${id}/`}
              title={title}
              subtitle={subtitle}
            />
          ))}
        </div>
      </div>
    </ContentWrapper>
  </>
)

export default BIP
