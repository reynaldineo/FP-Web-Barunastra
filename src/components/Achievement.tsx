import React from "react";
import Image from "next/image";
import Link from "next/link";

import roboBoatImg from "../../public/images/roboboat.png";
import kkcImg from "../../public/images/kkctbn.png";

export default function Achievement() {
  return (
    <section id="achievement">
      <div className="bg-slate-200  pb-20">
        <div className="min-h-screen w-full items-center justify-center">
          <p className="p-10 pt-20 pb-10 text-center text-[30px] font-extrabold uppercase tracking-widest md:text-[50px]"></p>

          <div className="mx-auto w-[70%] rounded-3xl bg-zinc-800">
            <p className="p-5 pt-10 pb-10 text-center text-[20px] font-extrabold uppercase tracking-widest text-slate-50 md:pb-12 md:text-[50px]">
              Achievement
            </p>

            <div>
              <div className="grid px-5 text-white md:grid-cols-2 md:gap-2">
                <div className="m-auto">
                  <Image
                    src={roboBoatImg}
                    alt="roboBoat"
                    width={300}
                    height={60}
                  />
                </div>
                <div>
                  <div className="py-2">
                    <div className="items-start justify-start py-1 text-left ">
                      <h3 className="font-medium ">2021</h3>
                    </div>
                    <div className="text-md mt-1 flex flex-col text-justify font-normal">
                      <p className="pb-1">1st Place Skills Video & Website</p>
                      <p className="pb-1">2nd Place Technical Design Report</p>
                      <p className="pb-1">
                        AUVSI 14th International Roboboat Competition
                      </p>
                      <p className="pb-1">(Conducted Online)</p>
                    </div>
                  </div>

                  <div className="py-2">
                    <div className="items-start justify-start py-1 text-left ">
                      <h3 className="font-medium">2019</h3>
                    </div>
                    <div className="text-md mt-1 flex flex-col text-justify font-normal">
                      <p className="pb-1">
                        1st Place AUVSI 12th International Roboboat
                      </p>
                      <p className="pb-1">Competition, 2019, Florida, USA</p>
                    </div>
                  </div>

                  <div className="py-2">
                    <div className="items-start justify-start py-1 text-left ">
                      <h3 className="font-medium">2018</h3>
                    </div>
                    <div className="text-md mt-1 flex flex-col text-justify font-normal">
                      <p className="pb-1">
                        1st Place AUVSI 11th International Roboboat
                      </p>
                      <p className="pb-1">Competition, 2018, Florida, USA</p>
                    </div>
                  </div>

                  <div className="py-2">
                    <div className="items-start justify-start py-1 text-left ">
                      <h3 className="font-medium">2017</h3>
                    </div>
                    <div className="text-md mt-1 flex flex-col text-justify font-normal">
                      <p className="pb-1">
                        4th Place AUVSI 10th International Roboboat
                      </p>
                      <p className="pb-1">Competition, 2017, Florida, USA</p>
                    </div>
                  </div>
                </div>
              </div>

              <hr className="my-20 mx-auto w-[80%] border-4 border-zinc-200" />

              <div>
                <div className="flex flex-col px-5 text-white  md:flex-row-reverse md:gap-2">
                  <div className="m-auto">
                    <Image
                      src={kkcImg}
                      alt="roboBoat"
                      width={300}
                      height={60}
                    />
                  </div>
                  <div className="mx-auto">
                    <div className="py-2">
                      <div className="items-start justify-start py-1 text-left ">
                        <h3 className="font-medium ">2021</h3>
                      </div>
                      <div className="text-md mt-1 flex flex-col text-justify font-normal">
                        <p className="pb-1">
                          3rd Kompetisi Kapal Cepat Tak Berawak Nasional
                        </p>
                        <p className="pb-1">(KKCTBN) 2020, Malang, Indonesia</p>
                      </div>
                    </div>

                    <div className="py-2">
                      <div className="items-start justify-start py-1 text-left ">
                        <h3 className="font-medium">2020</h3>
                      </div>
                      <div className="text-md mt-1 flex flex-col text-justify font-normal">
                        <p className="pb-1">
                          1st Place Kompetisi Kapal Cepat Tak Berawak Nasional
                        </p>
                        <p className="pb-1">(KKCTBN) 2020, Malang, Indonesia</p>
                      </div>
                    </div>

                    <div className="py-2">
                      <div className="items-start justify-start py-1 text-left ">
                        <h3 className="font-medium">2019</h3>
                      </div>
                      <div className="text-md mt-1 flex flex-col text-justify font-normal">
                        <p className="pb-1">
                          2nd Place & Best Design Award, KKCTBN 2019,
                        </p>
                        <p className="pb-1">Malang, Indonesia</p>
                      </div>
                    </div>

                    <div className="py-2">
                      <div className="items-start justify-start py-1 text-left ">
                        <h3 className="font-medium">2017</h3>
                      </div>
                      <div className="text-md mt-1 flex flex-col text-justify font-normal">
                        <p className="pb-1">
                          4th Place AUVSI 10th International Roboboat
                        </p>
                        <p className="pb-3 md:pb-5">
                          Competition, 2017, Florida, USA
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end p-5 md:p-10">
              <div className="position rounded-xl bg-white px-2 py-2 text-center text-[14px] font-medium md:px-5 md:text-[17px]">
                <Link href="/">See More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
