import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import moment from 'moment'
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";

const BLOG_POSTS_PATH = path.join(process.cwd(), 'content/posts')

export type PostData = {
  id: string,
  date?: string,
  contentHtml?: string,
  [key: string]: any;
}

// credit: https://nextjs.org/learn/basics/data-fetching/implement-getstaticprops
export function getSortedPostsData(limit?: number) : PostData[] {
  // Get file names under /posts
  const fileNames = fs.readdirSync(BLOG_POSTS_PATH)

  const allPostsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(BLOG_POSTS_PATH, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      date: matterResult.data.date,
      ...matterResult.data
    }
  })

  // Sort posts by date
  const sortedData = allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1
    } else if (a > b) {
      return -1
    } else {
      return 0
    }
  })
  const friendlySortedData = sortedData.map((postData) : PostData => {
    // replace datetime with "friendly" date
    // we do this after the sort so that the dates are properly sorted
    postData.date = moment(new Date(postData.date)).format("MMMM Do, YYYY")
    return postData
  })
  return (limit === null) ? friendlySortedData : friendlySortedData.slice(0, limit);
}

// credit: https://nextjs.org/learn/basics/dynamic-routes/implement-getstaticpaths
export function getAllPostIds() {
  const fileNames = fs.readdirSync(BLOG_POSTS_PATH)

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       slug: 'test1'
  //     }
  //   },
  //   {
  //     params: {
  //       slug: 'test2'
  //     }
  //   }
  // ]
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export async function getPostData(id: string) : Promise<PostData> {
  const fullPath = path.join(BLOG_POSTS_PATH, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // https://github.com/remarkjs/remark/discussions/858#discussioncomment-1366990

  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeStringify)
    .process(matterResult.content)

  const contentHtml = processedContent.toString()

  // replace datetime with "friendly" date
  const postData = { ...matterResult.data }

  postData.date = moment(postData.date).format("MMMM Do, YYYY")

  // Combine the data with the id
  return {
    id,
    contentHtml,
    date: postData.date,
    ...postData
  }
}
