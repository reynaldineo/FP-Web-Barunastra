import React from "react";
import MemberItem from "./MemberItem";

import fellyImg from "../../public/images/member/felly.jpg";
import arunImg from "../../public/images/member/arun.jpg";
import reyImg from "../../public/images/member/reynaldi.jpg";
import jiryanImg from "../../public/images/member/jiryan.jpg";
import anisImg from "../../public/images/member/anis.jpg";
import alfaImg from "../../public/images/member/alfa.jpeg";
import farrasImg from "../../public/images/member/farras.jpg";
import suryaImg from "../../public/images/member/surya.jpg";
import dhinakaraImg from "../../public/images/member/dhinakara.jpg";
import agungImg from "../../public/images/member/agung.jpeg";

export default function Member() {
  return (
    <section id="member">
      <div className="min-h-screen items-center justify-center bg-slate-100 pb-24">
        <p className="p-10 pt-20 pb-10 text-center text-[29px] font-extrabold uppercase tracking-widest md:text-[50px]">
          Team Leader
        </p>
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 gap-5 p-10">
            <MemberItem
              memberName="Fellyla F. W."
              memberImg={fellyImg}
              memberDivision="Finad"
              memberJurusan="Infromatika 22"
            />
          </div>
        </div>

        <p
          id="epr"
          className="mt-10 p-10 pt-20 pb-10 text-center text-[24px] font-extrabold uppercase tracking-widest md:text-[50px]"
        >
          Electro & Programming
        </p>
        <div className="flex items-center justify-center py-5">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
            <MemberItem
              memberName="Arundaya P. N."
              memberImg={arunImg}
              memberDivision="Progamming"
              memberJurusan="Informatika 22"
            />
            <MemberItem
              memberName="Reynaldi N. R."
              memberImg={reyImg}
              memberDivision="Progamming"
              memberJurusan="Informatika 22"
            />
            <MemberItem
              memberName="Jiryan Farokhi"
              memberImg={jiryanImg}
              memberDivision="Progamming"
              memberJurusan="Matematika 22"
            />
            <MemberItem
              memberName="Anis Rahman"
              memberImg={anisImg}
              memberDivision="Electrical"
              memberJurusan="Teknik Elektro 22"
            />
          </div>
        </div>

        <p
          id="mech"
          className="mt-10 p-10 pt-20 pb-10 text-center text-[30px] font-extrabold uppercase tracking-widest md:text-[50px]"
        >
          Mechanical
        </p>
        <div className="flex items-center justify-center py-5">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <MemberItem
              memberName="M. R. Alfa T."
              memberImg={alfaImg}
              memberDivision="Production"
              memberJurusan="Sistem Perkapalan 22"
            />
            <MemberItem
              memberName="M. Farras R. F."
              memberImg={farrasImg}
              memberDivision="Production"
              memberJurusan="Sistem Perkapalan 22"
            />
          </div>
        </div>

        <p
          id="ntc"
          className="mt-10 p-10 pt-20 pb-10 text-center text-[25px] font-extrabold uppercase tracking-widest md:text-[50px]"
        >
          Non Technical
        </p>
        <div className="flex items-center justify-center py-5 ">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            <MemberItem
              memberName="Surya Pebrianto"
              memberImg={suryaImg}
              memberDivision="Sponsor External"
              memberJurusan="Teknik Komputer 22"
            />
            <MemberItem
              memberName="Dhinakara Yumna W."
              memberImg={dhinakaraImg}
              memberDivision="Sponsor External"
              memberJurusan="Sistem Perkapalan 22"
            />
            <MemberItem
              memberName="Agung Dwi O."
              memberImg={agungImg}
              memberDivision="Sosial Branding"
              memberJurusan="Sistem Informasi 22"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
