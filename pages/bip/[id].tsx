import type { GetStaticPathsResult, GetStaticPropsResult, NextPage } from 'next';

import { getAllPostIds, getPostData, PostData } from '../../lib/posts'
import Button from '../../components/Button';
import PostLayout, { PostLayoutProps } from '../../components/PostLayout';
import { PostType } from '../../src/types';


export async function getStaticProps({ params } : PostData) : Promise<GetStaticPropsResult<PostLayoutProps>> {
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
      postType: PostType.BIP
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

const BIPPost: NextPage<PostLayoutProps> = (props) => {
  return (
    <>
      <PostLayout { ...props }>
        <Button
              primary
              target="_blank"
              rel="noreferrer"
              href="https://app.bean.money/governance">
              Vote Now!
        </Button>
      </PostLayout>
    </>
  )
}

export default BIPPost;
