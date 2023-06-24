import React from "react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <section>
      <div className="bg-LP h-screen  w-full bg-cover bg-fixed bg-no-repeat text-slate-50">
        <div className="pt-72 md:pr-40 md:pt-40">
          <h2 className="mr-5 mt-1 text-right text-[30px] font-semibold md:pb-4 md:text-[50px]">
            Hi Fellas!
          </h2>
          <h2 className="mr-5 mt-2 text-right text-[30px] md:pb-8 md:text-[50px]">
            Welcome To
          </h2>
          <h1 className="mr-5 mt-3 text-right text-[40px] font-bold md:pb-4 md:text-[75px]">
            BARUNASTRA ITS
          </h1>
          <p className="ml-5 mr-5 mt-7 text-right text-[15px] md:pb-2 md:text-[16px]">
            “We are developing unmanned vessels to foster the world’s maritime
            technology advancement.”
          </p>
          <div className="mr-5 mt-5 text-right font-semibold md:pb-2 md:font-medium">
            <Link
              href="https://drive.google.com/file/d/12qAYUISKwu527bml5H0yArWGOgGtkPr6/view?usp=drivesdk"
              className=" rounded-2xl bg-white p-2 px-5 text-slate-900 hover:bg-zinc-800 hover:text-white"
            >
              Our Intro
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
