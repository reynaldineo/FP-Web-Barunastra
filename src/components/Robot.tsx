import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./buttons/Button";

import nalaPataka from "../../public/images/nalaPataka.png";
import robotHero from "../../public/images/robotHero.png";
import modularity from "../../public/images/modularity.png";

export default function Robot() {
  return (
    <section id="robotHero">
      <div className="bg-slate-200  pb-20">
        <div className="min-h-screen w-full items-center justify-center">
          <div className="mx-auto w-[70%] rounded-3xl bg-zinc-800">
            <Image
              src={nalaPataka}
              alt="robotHero"
              width={200}
              height={50}
              className="mx-auto mb-2 py-2 pt-3"
            />

            <div>
              <div className="grid px-5 text-white md:grid-cols-2 md:gap-2">
                <div className="m-auto">
                  <Image
                    src={robotHero}
                    alt="robotHero"
                    width={300}
                    height={60}
                  />
                </div>
                <div>
                  <div className="py-2 px-5">
                    <div className="items-start justify-start py-1 text-left ">
                      <h3 className="font-medium ">Nala Pataka</h3>
                    </div>
                    <div className="text-md mt-1  flex flex-col text-justify font-normal">
                      <p className="py-2">
                        An ASV Concept Proposed by Barunastra ITS Team Institut
                        Teknologi Sepuluh Nopember Surabaya, Indonesia
                      </p>
                      <p className="py-2">
                        This design was prepared for the Barunastra competition
                        at the 2023 kkctbn
                      </p>
                      <Link
                        rel="stylesheet"
                        href="/competition"
                        className="py-2"
                      >
                        <Button variant="dark">
                          <p>Technical Design Report</p>
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <hr className="my-20 mx-auto w-[80%] border-4 border-zinc-200" />

              <div className="grid px-5 pb-20 text-white md:grid-cols-2 md:gap-2">
                <div className="m-auto">
                  <Image
                    src={modularity}
                    alt="modularity"
                    width={300}
                    height={60}
                  />
                </div>
                <div>
                  <div className="py-2 px-5">
                    <div className="items-start justify-start py-1 text-left ">
                      <h3 className="font-medium ">Modularity</h3>
                    </div>
                    <div className="text-md mt-1  flex flex-col text-justify font-normal">
                      <p className="py-2">
                        There are some new tasks in this year's roboboat like
                        water blast challenge, so we need more flexibility to do
                        quick design iteration.
                      </p>
                      <p className="py-2">
                        By having a modular design, the quick design iterations
                        can be easily achieved. Modularity allows our ship to be
                        divided into independent parts. These parts could be
                        created, modified, replaced and exchanged independently
                        with other modules or between different systems.
                        Moreover, a modular design allows us to ship the ASV as
                        a flight baggage by splitting the ASV into parts that
                        fit the dimension requirement for baggage.
                      </p>
                      <Link
                        rel="stylesheet"
                        href="/competition"
                        className="py-2"
                      >
                        <Button variant="dark">
                          <p>Design Spesification</p>
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
