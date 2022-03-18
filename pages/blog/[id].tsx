import ContentWrapper from '../../components/ContentWrapper'
import CustomHead from '../../components/CustomHead'
import { getAllPostIds, getPostData, PostData } from '../../lib/posts'
import type { GetStaticPathsResult, GetStaticPropsResult, NextPage } from 'next';
import BlogLayout from "../../components/BlogLayout";

type PostProps = {
  // Metadata
  title: string,
  date: string,
  image: string | null,
  imageAlt: string | null,
  description: string | null,
  // Content
  content: string, 
}

export async function getStaticProps({ params } : PostData) : Promise<GetStaticPropsResult<PostProps>> {
  const postData = await getPostData(params.id)
  if(!postData) return { notFound: true }
  
  if(!postData.title || !postData.date || !postData.contentHtml) {
    return { notFound: true };
  }

  const props = {
    // Metadata
    title: postData.title,
    date: postData.date.toString(),
    image: postData.thumbnail || null,
    imageAlt: postData.thumbnailAlt || null,
    description: postData.description || null,
    // Content
    content: postData.contentHtml,
  };

  try {
    JSON.parse(JSON.stringify(props));
  } catch(e) {
    console.error(e);
    throw e;
  }

  return {
    props,
    revalidate: 60
  }
}

export async function getStaticPaths() : Promise<GetStaticPathsResult> {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: 'blocking'
  }
}

const DESCRIPTION_LENGTH = 50

const Post: NextPage<PostProps> = (props) => {
  const { title, content, date, image, imageAlt, description } = props;
  return (
    <BlogLayout>
      <CustomHead
        title={`${title} | Beanstalk`}
        description={description || undefined}
        image={image || undefined}
      />
      <ContentWrapper variant="default">
        <div className="space-y-8">
          <div className="space-y-2 border-b border-gray-100 pb-8">
            <p className="text-sm text-slate-400">{date}</p>
            <h2 className="text-4xl font-bold text-slate-900">{title}</h2>
          </div>
          <div
            className={`text-md prose`}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </ContentWrapper>
    </BlogLayout>
  )
}

export default Post;



