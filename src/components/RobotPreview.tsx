import React from "react";
import Image from "next/image";

import roboPreview from "../../public/images/robotPreview.png";

export default function RobotPreview() {
  return (
    <section id="robotPreview">
      <div className="bg-slate-200 pb-14">
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
