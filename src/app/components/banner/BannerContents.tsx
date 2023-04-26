"use client"

import clsx from "clsx";
import Link from "next/link";
import { FC,useState } from "react";

interface BannerContentsProps extends React.AllHTMLAttributes<HTMLDivElement> {
  heading: string;
  paragraph: string;
  buttonColor?: string;
  buttonTextColor?: string;
  buttonText?: string;
  input: boolean;
  submitFunction?:Function;
  inputPlaceholder?:string;
  h1?:boolean;
}

const BannerContents: FC<BannerContentsProps> = ({
  heading,
  paragraph,
  buttonColor,
  buttonTextColor,
  buttonText,
  input,
  className,
  children,
  inputPlaceholder,
  submitFunction,
  h1,
  ...rest
}) => {
    const divClass = clsx("w-full flex flex-col items-start md:ml-4 gap-y-4 p-4 lg:w-[49%]",className);
    const [inputVal,setInputVal] = useState<string>("");
  return (
    <div className={divClass} {...rest} >
      <p className={h1?"text-[40px] md:text-[64px] leading-none font-extrabold w-full":"text-[40px] md:text-[48px] leading-none font-extrabold w-full"}>{heading}</p>
      <p className="text-[16px] font-[500] w-full md:w-[60%] lg:w-full">{paragraph}</p>
      <form onSubmit={(e)=>{e.preventDefault();}} className="flex justify-start flex-wrap items-center gap-4">
        {input ? (
          <>
            <input
              type="text"
              value={inputVal}
              onChange={(e)=>{setInputVal(e.target.value)}}
              placeholder={inputPlaceholder||"Synctree"}
              className="bg-gray-50 text-gray-700 rounded-md p-4 focus:outline focus:outline-offset-2 focus:outline-2 focus:outline-gray-50"
            />
        <button onClick={()=>{if(submitFunction){
            submitFunction(inputVal);
            setInputVal("");
        }else{alert(inputVal);setInputVal("")}}} style={{backgroundColor:buttonColor?buttonColor:"",color:buttonTextColor?buttonTextColor:""}} className="bg-[#E9C0E9] hover:bg-[#c094c0] text-gray-950 p-4 rounded-full text-center min-w-[12rem]">
            {buttonText||"Get Started for Free"}
        </button>
          </>
        ) : (<>
        <Link href="/signup" style={{backgroundColor:buttonColor?buttonColor:"",color:buttonTextColor?buttonTextColor:""}} className="bg-[#E9C0E9] hover:bg-[#c094c0] text-gray-950 p-4 rounded-full text-center min-w-[12rem]">
            {buttonText||"Get Started for Free"}
        </Link>
        </>)}
      </form>
    </div>
  );
};

export default BannerContents;
