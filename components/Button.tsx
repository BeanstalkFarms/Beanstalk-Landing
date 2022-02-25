import { FC } from "react";

const Button : FC<{
  target?: string,
  rel?: string,
  href?: string,
  primary?: boolean,
  icon?: string,
  desc?: string,
}> = ({
  children,
  primary = false,
  icon = undefined,
  desc = undefined,
  ...props
}) => (
  <a {...props}
  className={
    `w-full sm:px-6 px-4 py-4 rounded-lg
    hover:border-gray-900 hover:scale-[1.01] transition-all cursor-pointer
    border border-gray-400
    ${icon
      ? 'flex flex-row items-center text-left space-x-4'
      : 'block text-center'}
    ${primary
      ? `bg-[#3EB94E] text-white`
      : `bg-white`}
  `}>
    {icon && <img src={icon} className="h-10 w-10 p-1 rounded-full" />}
    <span className="text-xl">{children}</span>
    {desc && <div className="flex-1 text-right font-[Futura-PT-Book] text-[17px] text-gray-600">{desc}</div>}
  </a>
);

export default Button;