import Image from "next/image";
import React from "react";

import AboutImg from "../../public/images/about-1.jpg";

export default function About() {
  return (
    <section id="about">
      <div className="w-full items-center bg-gray-100 px-6 py-28">
        <p className="text-zinc-950 py-5 text-center text-[35px] font-extrabold uppercase tracking-widest md:text-[50px]">
          About Us
        </p>
        <div className="flex">
          <div className="m-auto max-w-[1240px] grid-cols-2 gap-8 md:grid">
            <div className="col-span-1">
              <h2 className="py-4">What is Barunastra?</h2>
              <p className="py-2 text-justify leading-6 text-gray-800 md:mr-5 md:leading-8 ">
                Barunastra is leading research company specializing in the
                development of Autonomous Surface Vehicles (ASVs) at ITS
                Indonesia. With a strong commitment to driving advancements in
                maritime technology, our company has emerged as a formidable
                force in the field. Our relentless pursuit of excellence has
                resulted in numerous accolade, including international
                championship victories, solidifying our reputation as pioneers
                in the industry. In acknowledgment of the vast potential in
                Indonesia's maritime sector, remains committed to continuous
                research and innovation in marine technology. Given the
                country's abundant marine resources, there is a strong desire
                for the development of the sea.
              </p>
            </div>
            <div className="m-auto flex h-auto w-full items-center justify-center rounded-xl p-4 shadow-xl shadow-gray-400 duration-300 ease-in hover:scale-105">
              <Image src={AboutImg} className="rounded-xl" alt="/" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
