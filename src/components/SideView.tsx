import React from "react";
import Image from "next/image";

import sideView from "../../public/images/generalArrange2.jpeg";

export default function SideView() {
  return (
    <section id="elcDiagram">
      <div className="py-30 bg-slate-200 pb-20">
        <p className="p-10 text-center text-[20px] font-extrabold uppercase tracking-widest md:pb-10 md:text-[30px]">
          Side View
        </p>

        <Image
          src={sideView}
          alt="sideView"
          height={1000}
          className="mx-auto rounded-3xl md:w-[800px]"
        />
      </div>
    </section>
  );
}
