import Link from "next/link";
import { FC } from "react";

const PostButton : FC<{
  title: string;
  subtitle: string;
  href: string;
  date?: string;
  image?: string;
}> = ({
  title,
  subtitle,
  href,
  date,
  image,
  ...props
}) => (
  <Link href={href}>
    <a {...props}
    className={
      `w-full sm:px-6 px-4 py-4 rounded-lg
      hover:border-gray-900 hover:scale-[1.01] transition-all cursor-pointer
      border border-gray-400
      sm:space-y-1
      bg-white
    `}>
      <div className="sm:flex sm:flex-row block items-center sm:space-x-3 sm:space-y-0 space-y-2">
        <div className="text-xl">{title}</div>
      </div>
      <div className="font-400 text-gray-600 text-[17px]">
        {subtitle}
      </div>
      {date && <div className="pt-2">
        <div className="text-gray-400 text-sm">
          {date}
        </div>
      </div>}
    </a>
  </Link>
);

export default PostButton;