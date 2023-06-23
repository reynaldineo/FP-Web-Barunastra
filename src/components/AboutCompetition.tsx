import React from "react";
import Image from "next/image";
import Link from "next/link";

import kktcbnLogo from "../../public/images/kkctbn.png";

export default function AboutCompetition() {
  return (
    <section id="kktcbn">
      <div className="bg-slate-200 ">
        <p className="p-10 pt-20 text-center text-[25px] font-extrabold uppercase tracking-widest md:pb-10 md:text-[50px]">
          About KKCTBN
        </p>

        <div className="grid grid-cols-1 pt-1 pb-32 md:grid-cols-2 md:px-40 md:pt-14">
          <div className="mx-auto py-5">
            <Image src={kktcbnLogo} alt="logoKKTCBN" width={200} height={40} />
          </div>
          <div className="mx-auto">
            <p className="p-5 text-justify md:text-[16px]">
              Unmanned Fast Ship Contest (KKCTBN): is one of the competition
              agendas for design technological innovation, prototype
              manufacturing, and prototype performance in the field of
              maritime-shipping technology.
            </p>
            <p className="px-5 pb-5 text-justify md:text-[16px]">
              This competition is aimed at students, which is held annually by:
              Indonesian Talent Development Center-National Achievement
              Center-Kemendikbud RI.
            </p>
            <div className="mx-14 pt-5 pb-10 md:mx-28">
              <div className=" rounded-xl bg-zinc-800 px-2 py-2 text-center text-[14px] font-medium text-slate-50 md:px-5 md:text-[17px]">
                <Link href="/">More About KKCTBN</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
