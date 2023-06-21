import React from "react";
import DivisionItem from "./DivisionItem";
import eprImg from "../../public/images/ep.png";
import mecImg from "../../public/images/mec1.png";
import ntcImg from "../../public/images/ofc.png";

export default function Division() {
  return (
    <section>
      <div className="w-full bg-slate-200">
        <div className="mx-auto max-w-[1240px] px-2 py-16">
          <p className="text-zinc-950 my-5 text-center text-[40px] font-extrabold uppercase tracking-widest md:text-[50px]">
            Our Division
          </p>
          <div className="py-4">
            <p className="my-2 px-2 text-center md:px-52">
              There are three main divisions that play an important role in this
              team. We believe what Michael Jordan has said, “Talent wins games,
              but teamwork and intelligence win championships”.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <DivisionItem
              title="Electro & Programming"
              backgroundImg={eprImg}
              description="-"
              divisionUrl="/"
            />
            <DivisionItem
              title="Mechanical"
              backgroundImg={mecImg}
              description="-"
              divisionUrl="/"
            />
            <DivisionItem
              title="Non-Technical"
              backgroundImg={ntcImg}
              description="-"
              divisionUrl="/"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
