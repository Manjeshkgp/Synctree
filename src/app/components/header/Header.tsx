"use client";

import { FC, useEffect } from "react";
import Link from "next/link";
import { SiLinktree } from "react-icons/si";
import Button from "../button/Button";
import { useState } from "react";
import { usePathname } from "next/navigation";
import {BiChevronDown} from "react-icons/bi"

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  const [open, setOpen] = useState<boolean>(false);
  const path = usePathname();
  const mobileDropdown = (e:any) => {
    const currentTarget = e.currentTarget as HTMLElement;
    currentTarget.nextElementSibling?.classList.toggle("hidden");
    currentTarget.firstElementChild?.firstElementChild?.classList.toggle("rotate-180");
    currentTarget.parentElement?.classList.toggle("pb-0")
    }
    useEffect(()=>{setOpen(false)},[path]);
  return (
    <>
      <div className="p-4 rounded-full min-w-[16rem] backdrop-blur-md z-50 fixed top-5 left-5 right-5 dark:bg-[#0000009c] dark:text-gray-50 bg-[#ffffff8e] text-gray-950 flex justify-between items-center">
        <div className="flex items-center gap-x-2 md:gap-x-4">
          <div className="flex items-center md:ml-6">
            <Link href="/">
              <SiLinktree
                className="z-40 text-gray-900 hover:text-gray-950 dark:text-gray-200 dark:hover:text-gray-50"
                size={30}
              />
            </Link>
          </div>
          <div className="hidden lg:flex items-center gap-x-4 lg:bg-transparent">
            <Link
              className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md"
              href="/templates"
            >
              Templates
            </Link>
            <Link
              className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md"
              href="/marketplace"
            >
              Marketplace
            </Link>
            <Link
              className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md"
              href="/discover"
            >
              Discover
            </Link>
            <div className="relative cursor-pointer group hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded-md">
              Learn{" "}
              <div className="absolute group hidden top-0 left-0 group-hover:flex flex-col w-60 rounded-md p-1">
                <div className="h-16 w-8"></div>
                <div className="flex flex-col rounded-md bg-gray-50 dark:bg-gray-950 ">
                  <Link
                    className="m-1 p-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
                    href="/blog"
                  >
                    Blog
                  </Link>
                  <Link
                    className="m-1 p-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
                    href="/careers"
                  >
                    Careers
                  </Link>
                  <Link
                    className="m-1 p-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
                    href="/careers"
                  >
                    Creators
                  </Link>
                  <Link
                    className="m-1 p-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
                    href="/company"
                  >
                    Company
                  </Link>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-x-2 md:gap-x-4">
         <Link href="/login"><Button className="md:px-6 z-40" variant="primary">
            Log In
          </Button></Link>
          <Link href="/signup"><Button className="md:px-6 z-40" variant="secondary">
            Sign Up
          </Button></Link>
          <Button
            onClick={() => {
              setOpen(!open);
            }}
            style={{ borderRadius: "50%" }}
            className="p-6 h-12 relative z-40 lg:hidden"
            variant="primary"
          >
            <div
              className={
                open
                  ? "absolute w-6 rounded top-6 left-3 right-3 h-[3px] bg-gray-950 dark:bg-gray-50 rotate-[135deg] transition-all"
                  : "transition-all absolute w-6 rounded top-4 left-3 right-3 h-[3px] bg-gray-950 dark:bg-gray-50"
              }
            ></div>
            <div
              className={
                open
                  ? "hidden"
                  : "absolute w-6 rounded top-6 left-3 right-3 h-[3px] bg-gray-950 dark:bg-gray-50"
              }
            ></div>
            <div
              className={
                open
                  ? "absolute w-6 rounded top-6 left-3 right-3 h-[3px] bg-gray-950 dark:bg-gray-50 -rotate-[135deg] transition-all"
                  : "transition-all absolute w-6 rounded top-8 left-3 right-3 h-[3px] bg-gray-950 dark:bg-gray-50"
              }
            ></div>
          </Button>
        </div>
      </div>
      <div
        className={
          open
            ? "fixed inset-0 z-20 w-full bg-[#43E660] text-[#254F1A] transition-all duration-300 flex flex-col lg:hidden"
            : "fixed right-0 top-0 bottom-0 z-20 w-0 bg-green-400 transition-all duration-300 lg:hidden"
        }
      >
        <div className="mt-32 flex flex-col overflow-y-scroll lg:hidden font-bold text-3xl">
          <Link
            className="p-2 py-6 border-b border-[#254F1A] hover:bg-gray-200"
            href="/templates"
          >
            Templates
          </Link>
          <Link
            className="p-2 py-6 border-b border-[#254F1A] hover:bg-gray-200"
            href="/marketplace"
          >
            Marketplace
          </Link>
          <Link
            className="p-2 py-6 border-b border-[#254F1A] hover:bg-gray-200"
            href="/discover"
          >
            Discover
          </Link>
          <div className="relative cursor-pointer border-b border-[#254F1A] hover:bg-gray-200 py-6">
           <div onClick={(e)=>{mobileDropdown(e)}} className="flex justify-between items-center ml-2">Learn{" "} <span ><BiChevronDown className="mr-2 group"/></span></div> 
            <div className="hidden mt-4 flex-col rounded-md">
              <div className="flex flex-col w-full font-semibold rounded-md bg-[#43E660]">
                <Link
                  className="m-1 p-3 border-[#254F1A] hover:bg-gray-200"
                  href="/blog"
                >
                  Blog
                </Link>
                <Link
                  className="m-1 p-3 border-[#254F1A] hover:bg-gray-200"
                  href="/careers"
                >
                  Careers
                </Link>
                <Link
                  className="m-1 p-3 border-[#254F1A] hover:bg-gray-200"
                  href="/careers"
                >
                  Creators
                </Link>
                <Link
                  className="m-1 p-3 border-[#254F1A] hover:bg-gray-200"
                  href="/company"
                >
                  Company
                </Link>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
