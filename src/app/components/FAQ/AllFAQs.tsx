import { FC,lazy } from 'react'
// Just Trying the lazy importing of React in Nextjs
import FAQ from './FAQ'
import { FAQS } from '@/app/content/FAQcontent'

interface AllFAQsProps {
  
}

const AllFAQs: FC<AllFAQsProps> = ({}) => {
  return (<div className='bg-[#780016] text-[#E9C0E9] py-24 flex flex-col gap-y-4 items-center w-full h-max'>
    <p className="text-[32px] md:text-[40px] leading-none font-extrabold p-12">Got Questions?</p>
    {FAQS.map((faq,i)=>(
    <FAQ key={i} question={faq.question} answer={faq.answer}/>))}
  </div>)
}

export default AllFAQs