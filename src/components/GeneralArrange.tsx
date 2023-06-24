import React from "react";
import Image from "next/image";

import generalArrange from "../../public/images/generalArrange.jpeg";

export default function GeneralArrange() {
  return (
    <section id="elcDiagram">
      <div className="py-30 bg-slate-200 pb-20">
        <p className="p-10 text-center text-[20px] font-extrabold uppercase tracking-widest md:pb-10 md:text-[30px]">
          General Arrangement
        </p>

        <Image
          src={generalArrange}
          alt="generalArrange img"
          height={1000}
          className="mx-auto rounded-3xl md:w-[800px]"
        />
      </div>
    </section>
  );
}
