import { getAllPostIds, getPostData, PostData } from '../../lib/posts'

export async function getStaticProps({ params } : PostData) {
  const postData = await getPostData(params.id)
  return {
    props: {
      title: postData.title,
      date: postData.date,
      content: postData.contentHtml
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

type PostProps = {
  title: string,
  content: string,
  date: string
}

export default function Post({ title, date, content } : PostProps) {
  return (
      <>
          <h2 className="font-semibold text-slate-900">{title}</h2>
          <p className="text-lg">{date}</p>
          <div dangerouslySetInnerHTML={{ __html: content }} />
      </>
  )
}
