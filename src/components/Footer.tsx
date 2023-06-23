import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BsInstagram,
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsYoutube,
} from "react-icons/bs";

import logoBarun from "../../public/images/Logo_Barunastra_Putih.png";

export default function Footer() {
  return (
    <footer id="contact">
      <div className="grid grid-cols-1 bg-zinc-800 p-5 sm:px-20 md:grid-cols-2 md:px-36">
        <div className="py-5 text-white  md:ml-14 md:p-10">
          <Image src={logoBarun} alt="logoBarunastra" width={120} height={40} />
          <p className="py-3 font-extrabold uppercase tracking-widest ">
            Barunastra ITS
          </p>
          <div className="flex pb-2">
            <Link
              href="https://www.instagram.com/barunastra_its/"
              className="pr-3"
            >
              <BsInstagram />
            </Link>
            <Link href="/" className="pr-3">
              <BsFacebook />
            </Link>
            <Link href="/" className="pr-3">
              <BsTwitter />
            </Link>
            <Link
              href="https://www.linkedin.com/company/team-barunastra-its/mycompany/"
              className="pr-3"
            >
              <BsLinkedin />
            </Link>
            <Link
              href="https://www.youtube.com/@barunastraits9743"
              className="pr-3"
            >
              <BsYoutube />
            </Link>
          </div>

          <p>
            © 2023 By{" "}
            <span className="font-semibold tracking-wide">Barunastra</span> ITS
          </p>
        </div>

        <div className="text-white md:p-10">
          <div>
            <p className="font-bold">Our Address</p>
            <p>
              Sekretariat Robotika ITS, Pusat Robotika ITS, Jl. Teknik Kimia,
              Kampus ITS Sukolilo, Surabaya, 60111
            </p>
          </div>

          <div className="py-3">
            <p className="font-bold">Contact</p>
            <p>Mobile: +62 895805263010</p>
            <p>Email: barunastra.its@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
