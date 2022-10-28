import Link from "next/link";
import { FC } from "react";

const PostButton : FC<{
  title: string;
  subtitle: string;
  href: string;
  date?: string;
  tag?: string;
  image?: string;
}> = ({
  title,
  subtitle,
  href,
  date,
  image,
  tag,
  ...props
}) => (
  <Link href={href}>
    <a {...props}
    className={
      `w-full sm:px-6 px-4 py-4 rounded-[10px]
      hover:border-[#C1DEF2] border border-[#C1DEF2]
      hover:scale-[1.01] transition-all cursor-pointer
      sm:space-y-1
      bg-white
    `}>
      <div className="sm:flex sm:flex-row block items-center justify-between sm:space-x-3 sm:space-y-0 space-y-2">
        <div className="text-xl">{title}</div>
        {tag && <div className="">
          <div className="text-gray-400 text-sm">
            {tag}
          </div>
        </div>}
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