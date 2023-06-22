import React from "react";
import Image from "next/image";

import diagramImg from "../../public/images/electricalDiagram.jpeg";

export default function ElectricalDiagram() {
  return (
    <section id="elcDiagram">
      <div className="py-30 bg-slate-200 pb-20">
        <p className="p-10 text-center text-[20px] font-extrabold uppercase tracking-widest md:pb-10 md:text-[30px]">
          Electrical System Diagram
        </p>

        <Image
          src={diagramImg}
          alt="diagram img"
          height={1000}
          className="mx-auto rounded-3xl"
        />
      </div>
    </section>
  );
}
