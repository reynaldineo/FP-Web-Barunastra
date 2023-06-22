import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function DivisionItem({
  title,
  backgroundImg,
  description,
  divisionUrl,
}) {
  return (
    <div className="group relative flex h-auto w-full items-center justify-center rounded-xl from-zinc-800 to-slate-400 p-4 px-3 shadow-xl shadow-slate-400 hover:bg-gradient-to-r">
      <Image
        className="rounded-xl group-hover:opacity-30"
        src={backgroundImg}
        alt="divisionImg"
      />
      <div className="absolute hidden group-hover:block">
        <h3 className="text-center text-2xl tracking-wider text-white">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-center text-white">{description}</p>
        <Link href={divisionUrl} scroll={false}>
          <p className="cursor-pointer rounded-lg bg-white py-3 px-3 text-center text-lg font-bold text-gray-700">
            Member
          </p>
        </Link>
      </div>
    </div>
  );
}
