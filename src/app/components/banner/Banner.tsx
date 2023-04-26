import clsx from 'clsx'
import { FC } from 'react'

type Variants = {
    leftContent:string
    rightContent:string
}

interface Backgrounds {
    darkGreen:string
    pink:string
    maroon:string
    lightGray:string
}

const backgrounds:Backgrounds = {
    darkGreen:"bg-[#254F1A] text-[#D2E823]",
    pink:"bg-[#E9C0E9] text-[#502274]",
    maroon:"bg-[#780016] text-[#E9C0E9]",
    lightGray:"bg-[#F3F3F1] text-[#1E2330]"
}

const variants:Variants = {
    leftContent:"flex flex-col items-center gap-y-6 md:items-start flex-wrap lg:flex-row lg:justify-between py-24 w-full",
    rightContent:"flex flex-col items-center gap-y-6 md:items-start flex-wrap lg:flex-row-reverse lg:justify-between py-24 w-full"
}

interface BannerProps extends React.AllHTMLAttributes<HTMLDivElement> {
  variant:keyof Variants
  background:keyof Backgrounds
}

const Banner: FC<BannerProps> = ({variant,background,className,children,...rest}) => {
    const divClass = clsx(variants[variant],backgrounds[background],className)
  return (<div className={divClass} {...rest}>
  {children}
  </div>)
}

export default Banner