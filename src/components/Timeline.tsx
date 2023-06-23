import React from "react";
import Image from "next/image";

import ngumpulImg from "../../public/images/ngumpulBareng.jpeg";
import shipDesianImg from "../../public/images/shipDesign.jpeg";
import hullImg from "../../public/images/hull.jpeg";
import finishingImg from "../../public/images/shipFinishing.jpeg";

export default function Timeline() {
  return (
    <section id="buildProgress">
      <div className=" min-h-screen justify-center bg-zinc-900 pt-20 pb-20 text-white">
        <h2 className="mx-auto mb-7 text-center text-[20px] font-extrabold uppercase tracking-widest text-slate-50 md:pb-12 md:text-[50px]">
          Build Progress
        </h2>
        <div className="flex px-4 text-justify md:px-40">
          <div className="mx-auto">
            <ul>
              <li className="relative flex items-baseline gap-6 pb-5">
                <div className="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    className="bi bi-circle-fill fill-gray-400"
                    viewBox="0 0 16 16"
                  >
                    <circle cx="8" cy="8" r="8" />
                  </svg>
                </div>

                <div>
                  <div className="flex flex-col gap-5 md:flex-row-reverse">
                    <Image
                      src={ngumpulImg}
                      alt=""
                      width={500}
                      className="px-3 "
                    />
                    <div>
                      <p className="text-[18px] font-semibold md:text-[30px]">
                        Planning and Strategy
                      </p>
                      <p className="py-5">
                        At this stage, all team members gathered to discuss
                        plans for the 2023 KKCTBN competition, both from a
                        technical and non-technical side.
                      </p>
                      <p className="pb-5">
                        Apart from that, we also discussed the evaluation
                        results of the previous competitions. This activity is
                        very crucial in order to unify the views of all team
                        members regarding what strategies will be carried out in
                        this competition.
                      </p>
                    </div>
                  </div>
                </div>
              </li>

              <li className="relative flex items-baseline gap-6 pb-5">
                <div className="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    className="bi bi-circle-fill fill-gray-400"
                    viewBox="0 0 16 16"
                  >
                    <circle cx="8" cy="8" r="8" />
                  </svg>
                </div>

                <div>
                  <div className="flex flex-col gap-5 md:flex-row-reverse">
                    <Image
                      src={shipDesianImg}
                      alt=""
                      width={500}
                      className="px-3 "
                    />
                    <div>
                      <p className="text-[18px] font-semibold md:text-[30px]">
                        Ship Design Process
                      </p>
                      <p className="py-5">
                        After the overall planning has been agreed upon, the
                        mechanical team will immediately underline the details
                        of the problems that were found from the previous years
                        in terms of the hull of the shipe.
                      </p>
                      <p className="pb-5">
                        From this evaluation, we finally decided to use a
                        Catamaran type hull with modular system.
                      </p>
                    </div>
                  </div>
                </div>
              </li>

              <li className="relative flex items-baseline gap-6 pb-5">
                <div className="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    className="bi bi-circle-fill fill-gray-400"
                    viewBox="0 0 16 16"
                  >
                    <circle cx="8" cy="8" r="8" />
                  </svg>
                </div>

                <div>
                  <div className="flex flex-col gap-5 md:flex-row-reverse">
                    <Image src={hullImg} alt="" width={500} className="px-3 " />
                    <div>
                      <p className="text-[18px] font-semibold md:text-[30px]">
                        Hull Production
                      </p>
                      <p className="py-5">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Aliquam delectus, sapiente mollitia aperiam amet
                        voluptatibus hic. Eum ab qui, modi fuga ipsum odit,
                        optio vitae cum odio eos impedit? Dicta.
                      </p>
                      <p className="pb-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Commodi velit aliquam sequi ipsa iure obcaecati
                        praesentium, expedita eligendi veniam itaque!
                      </p>
                    </div>
                  </div>
                </div>
              </li>

              <li className="relative flex items-baseline gap-6 pb-5">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    className="bi bi-circle-fill fill-gray-400"
                    viewBox="0 0 16 16"
                  >
                    <circle cx="8" cy="8" r="8" />
                  </svg>
                </div>

                <div>
                  <div className="flex flex-col gap-5 md:flex-row-reverse">
                    <Image
                      src={finishingImg}
                      alt=""
                      width={500}
                      className="px-3 "
                    />
                    <div>
                      <p className="text-[18px] font-semibold md:text-[30px]">
                        Finishing Time!!
                      </p>
                      <p className="py-5">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Aliquam delectus, sapiente mollitia aperiam amet
                        voluptatibus hic. Eum ab qui, modi fuga ipsum odit,
                        optio vitae cum odio eos impedit? Dicta.
                      </p>
                      <p className="pb-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Commodi velit aliquam sequi ipsa iure obcaecati
                        praesentium, expedita eligendi veniam itaque!
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
