import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
  const [nav, setNav] = useState<boolean>(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header>
      <div className="fixed z-[100] h-20 w-full bg-zinc-900 shadow-xl ">
        <div className="flex h-full w-full items-center justify-between px-5 2xl:px-16">
          <Link href="/">
            <Image
              src="/../public/images/Logo_Barunastra_Putih.png"
              alt="logo"
              width={125}
              height={50}
            />
          </Link>
          <div>
            <ul className="hidden font-medium text-white md:flex">
              <Link href="/">
                <li className="ml-10 text-sm uppercase hover:border-b hover:text-slate-300">
                  Home
                </li>
              </Link>
              <Link href="/">
                <li className="ml-10 text-sm uppercase hover:border-b hover:text-slate-300">
                  About Us
                </li>
              </Link>
              <Link href="/">
                <li className="ml-10 text-sm uppercase hover:border-b hover:text-slate-300">
                  Team
                </li>
              </Link>
              <Link href="/">
                <li className="ml-10 text-sm uppercase hover:border-b hover:text-slate-300">
                  Achievement
                </li>
              </Link>
              <Link href="/">
                <li className="ml-10 text-sm uppercase hover:border-b hover:text-slate-300">
                  Competition
                </li>
              </Link>
              <Link href="/">
                <li className="ml-10 text-sm uppercase hover:border-b hover:text-slate-300">
                  Contact
                </li>
              </Link>
            </ul>
            <div onClick={handleNav} className="text-white md:hidden">
              <AiOutlineMenu size={25} />
            </div>
          </div>
        </div>
        {/* Mobile Version */}
        <div
          className={
            nav
              ? "fixed left-0 top-0 h-screen w-full bg-black/60 text-white md:hidden"
              : ""
          }
        >
          <div
            className={
              nav
                ? "fixed left-0 top-0 h-screen w-[75%] bg-zinc-900 p-10 duration-500 ease-in sm:w-[60%] md:w-[45%]"
                : "fixed left-[-100%] top-0 h-screen p-10 duration-500 ease-in"
            }
          >
            <div>
              <div className="flex items-center justify-between">
                <Link href="/">
                  <Image
                    src="/../public/images/Logo_Barunastra_Putih.png"
                    alt="logo"
                    width={87}
                    height={35}
                  />
                </Link>
                <div
                  onClick={handleNav}
                  className="cursor-pointer rounded-full bg-slate-300 p-2 text-black shadow-md shadow-gray-400"
                >
                  <AiOutlineClose />
                </div>
              </div>
              <div className="my-5 border-b border-gray-300"></div>
            </div>
            <div className="flex-col py-4 font-[400]">
              <ul className="uppercase">
                <Link href="/">
                  <li className="py-4 text-sm hover:text-slate-300">Home</li>
                </Link>
                <Link href="/">
                  <li className="py-4 text-sm hover:text-slate-300">
                    About Us
                  </li>
                </Link>
                <Link href="/">
                  <li className="py-4 text-sm hover:text-slate-300">Team</li>
                </Link>
                <Link href="/">
                  <li className="py-4 text-sm hover:text-slate-300">
                    Achievement
                  </li>
                </Link>
                <Link href="/">
                  <li className="py-4 text-sm hover:text-slate-300">
                    Competition
                  </li>
                </Link>
                <Link href="/">
                  <li className="py-4 text-sm hover:text-slate-300">Contact</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
