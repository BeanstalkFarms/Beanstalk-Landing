import ContentWrapper from '../../../components/ContentWrapper'
import CustomHead from '../../../components/CustomHead'
import { getAllPostIds, getPostData, PostData } from '../../../lib/posts'

export async function getStaticProps({ params } : PostData) {
  const postData = await getPostData(params.id)
  return {
    props: {
      title: postData.title,
      content: postData.contentHtml,
      date: postData.date,
      image: postData.thumbnail
    },
    revalidate: 10
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: 'blocking'
  }
}

type PostProps = {
  title: string,
  content: string,
  date: string,
  image?: string
}

const DESCRIPTION_LENGTH = 50

export default function Post({ title, content, date, image } : PostProps) {
  return (
    <>
      <CustomHead
        title={title}
        description={content.substring(0, DESCRIPTION_LENGTH)}
        image={image}
      />
      <ContentWrapper>
        <h2 className="font-semibold text-slate-900">{title}</h2>
        <p className="text-lg">{date}</p>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </ContentWrapper>
    </>
  )
}
