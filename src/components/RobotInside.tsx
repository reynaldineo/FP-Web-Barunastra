import React from "react";
import Image from "next/image";

import robotInside from "../../public/images/robotInside.jpeg";

export default function RobotInside() {
  return (
    <section id="elcDiagram">
      <div className="py-30 bg-slate-200 pb-20">
        <p className="p-10 text-center text-[20px] font-extrabold uppercase tracking-widest md:pb-10 md:text-[30px]">
          Ship Inside
        </p>

        <Image
          src={robotInside}
          alt="robot"
          height={1000}
          className="mx-auto rounded-3xl md:w-[800px]"
        />
      </div>
    </section>
  );
}
