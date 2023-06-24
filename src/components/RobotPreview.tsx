import React from "react";
import Image from "next/image";

import roboPreview from "../../public/images/robotPreview.png";

export default function RobotPreview() {
  return (
    <section id="robotPreview">
      <div className="bg-slate-200 pb-14">
        <p className="px-10 pt-10 text-center text-[20px] font-extrabold uppercase tracking-widest md:text-[30px]">
          Full View
        </p>
        <Image
          src={roboPreview}
          alt="roboPreview img"
          height={1000}
          className="mx-auto rounded-3xl"
        />
      </div>
    </section>
  );
}
