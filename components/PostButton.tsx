import { FC } from "react";

const PostButton : FC<{
  href: string,
  title: string,
  subtitle: string;
}> = ({
  title,
  subtitle,
  ...props
}) => (
  <a {...props}
  target="_blank"
  rel="noreferrer"
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
    <div className="font-light text-gray-600 font-[Futura-PT-Book] text-[17px]">
      {subtitle}
    </div>
  </a>
);

export default PostButton;