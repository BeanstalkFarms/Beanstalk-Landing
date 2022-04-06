import type { GetStaticPathsResult, GetStaticPropsResult, NextPage } from 'next';

import { getAllPostIds, getPostData, PostData } from '../../lib/posts'
import { PostType } from '../../src/types';
import PostLayout, { PostLayoutProps } from '../../components/PostLayout';


export async function getStaticProps({ params } : PostData) : Promise<GetStaticPropsResult<PostLayoutProps>> {
  const postData = await getPostData(PostType.Blog, params.id)
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
      postType: PostType.Blog
    },
  }
}

export async function getStaticPaths() : Promise<GetStaticPathsResult> {
  const paths = getAllPostIds(PostType.Blog)
  return {
    paths,
    fallback: true
  }
}

const BlogPost: NextPage<PostLayoutProps> = (props) => {

  return (
    <>
      <PostLayout { ...props }/>
    </>
  )
}

export default BlogPost;
