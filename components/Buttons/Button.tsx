import { FC, ReactElement } from "react";

const Button : FC<{
  target?: string,
  rel?: string,
  href?: string,
  primary?: boolean,
  icon?: string | ReactElement,
  desc?: string | ReactElement,
  iconStyle?: any,
  className?: string
}> = ({
  children,
  primary = false,
  icon = undefined,
  desc = undefined,
  ...props
}) => (
  <a {...props}
  className={
    `${props.className}
    w-full sm:px-6 px-4 py-4 rounded-[10px]
    hover:scale-[1.01] transition-all cursor-pointer
    text-xl
    ${icon
      ? 'sm:flex sm:flex-row items-center text-left sm:space-x-4 block'
      : 'block text-center'}
    ${primary
      ? `bg-[#3EB94E] text-white`
      : `bg-white hover:border-[#C1DEF2] border border-[#C1DEF2]`}
  `}>
    {typeof icon === 'string' && <img src={icon} className="sm:h-10 sm:w-10 w-8 h-8 p-1" style={props.iconStyle} />}
    <span className="">{children}</span>
    {desc && <div className="flex-1 sm:text-right text-[17px] text-gray-600">{desc}</div>}
  </a>
);

export default Button;