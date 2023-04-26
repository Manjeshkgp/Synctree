"use client"

import { FC,useState } from 'react'
import {HiOutlineChevronDown} from "react-icons/hi2"

interface FAQProps {
  question:string
  answer:string
}

const FAQ: FC<FAQProps> = ({question,answer}) => {
    const [open,setOpen] = useState<boolean>(false);
  return (<div className='bg-[#49000D] rounded-3xl w-[90%] max-w-[48rem] py-12 flex flex-col justify-start items-center font-semibold'>
    <div className='flex justify-between items-center text-xl'>
        <div className='w-[calc(100%-3rem)] md:w-[calc(100%-5rem)]'><p className='ml-4 md:ml-8'>{question}</p></div>
        <button onClick={()=>{setOpen(!open)}} className='w-20 h-20 grid place-items-center'><HiOutlineChevronDown className={open?'w-8 h-8 transition-all duration-300 rotate-180':'w-8  h-8 transition-all duration-300'}/></button>
    </div>
    <p className={open?'m-4 md:mx-8 text-base font-semibold':'hidden'}>{answer}</p>
  </div>)
}

export default FAQ