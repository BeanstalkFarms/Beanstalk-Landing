import { FC } from "react";

import Link from 'next/link';

type PostItemProps = {
  id: string,
  title: string,
  image: string,
  description?: string,
  date: string
}

const PostItem : FC<PostItemProps> = ({ id, title, image, description, date }) => (
  <Link href={`/blog/posts/${id}`}>
    <a
    target="_blank"
    rel="noreferrer"
    className={
      `flex flex-row space-x-12
      w-full sm:px-6 px-4 py-4 rounded-lg
      hover:border-gray-900 hover:scale-[1.01] transition-all cursor-pointer
      border border-gray-400
      sm:space-y-2
      bg-white
    `}>
      <div className="sm:flex sm:flex-row block items-center sm:space-x-3 sm:space-y-0 space-y-2">
        <img src={image} className="h-6 w-6 rounded-full" />
        <div className="text-xl">{title}</div>
      </div>
      <div className="font-light text-gray-600 font-[Futura-PT-Book] text-[17px]">{date}</div>
      <div className="font-light text-gray-600 font-[Futura-PT-Book] text-[17px]">{description}</div>
    </a>
  </Link>
);

export default PostItem;