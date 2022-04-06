import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import moment from 'moment'
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import Post from '../pages/blog/[id]';

const BLOG_POSTS_PATH = path.join(process.cwd(), 'content/posts')
const BIP_POSTS_PATH = path.join(process.cwd(), 'content/bips')

export type PostData = {
  id: string,
  date?: string,
  contentHtml?: string,
  [key: string]: any;
}

export enum PostType {
  Blog,
  BIP
}

function getPostFileNames(postType: PostType) : string[] {
  let fileNames: string[] | undefined;
  if (postType === PostType.Blog) fileNames = fs.readdirSync(BLOG_POSTS_PATH) 
  if (postType === PostType.BIP) fileNames = fs.readdirSync(BIP_POSTS_PATH)

  if (fileNames === undefined) fileNames = []
  return fileNames
}

function getPostFullPath(postType: PostType, id: string) : string {
  let fullPath: string | undefined

  if (postType === PostType.Blog) fullPath = path.join(BLOG_POSTS_PATH, `${id}.md`)
  if (postType === PostType.BIP) fullPath = path.join(BIP_POSTS_PATH, `${id}.md`)

  if (fullPath === undefined) fullPath = ''
  return fullPath
}

// credit: https://nextjs.org/learn/basics/data-fetching/implement-getstaticprops
export function getSortedPostsData(postType: PostType, limit?: number) : PostData[] {
  // Get file names under /posts
  const fileNames = getPostFileNames(postType)

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
export function getAllPostIds(postType: PostType) {
  const fileNames = getPostFileNames(postType)

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

export async function getPostData(postType: PostType, id: string) : Promise<PostData> {
  const fullPath = getPostFullPath(postType, id)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // https://github.com/remarkjs/remark/discussions/858#discussioncomment-1366990

  let processedContent
  switch(postType) {
    case PostType.Blog:
      processedContent = await unified()
        .use(remarkParse)
        .use(remarkRehype, { allowDangerousHtml: true })
        .use(rehypeRaw)
        .use(rehypeStringify)
        .process(matterResult.content)
      break

    case PostType.BIP:
      processedContent = await unified()
        .use(remarkParse)
        .use(remarkMath)
        .use(remarkRehype)
        .use(rehypeKatex)
        .use(rehypeStringify)
        .process(matterResult.content)
      break

      default:
        const exhaustiveCheck: never = postType;
        throw new Error(`Unhandled postType: ${exhaustiveCheck}`);
  }

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
