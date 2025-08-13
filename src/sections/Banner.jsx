import {
  iconISO,
  iconCertified,
  iconInstant,
  iconAIGF,
  iconDownload,
} from "@/assets/images";
import Typewriter from "typewriter-effect";
import React from "react";
import { tiltOption } from "@/constants/tiltOption";
import Tilt from "@/components/Tilt";
import { Button } from "@/components";

const Banner = () => {
  return (
    <section id="home" className="md:pb-10">
      <div className="max-w-7xl px-4 mx-auto">
        <div className="flex flex-col-reverse md:flex-row">
          <div className="flex-auto md:flex-1/2">
            <div className="mt-8 md:mt-0">
              <div
                className="bg-black border border-primary shadow px-4 py-2 w-fit rounded-full p-[1px] mb-5"
                data-aos="fade-up"
              >
                <p className="text-white uppercase text-base sm:text-lg font-semibold">
                  PLAY GAMES
                </p>
              </div>
              <div className="mb-5 md:mb-10">
                <h1 className="text-5xl md:leading-normal xl:text-6xl italic text-primary font-extrabold mb-5 heading">
                  WIN REAL CASH
                </h1>
              </div>
              <div>
                <ul className="flex flex-wrap sm:flex-row sm:gap-[8px] gap-4 justify-start items-stretch">
                  <li className="text-center flex items-center">
                    <div>
                      <span className="text-xs sm:text-lg font-bold text-primary block">
                        80M+
                      </span>
                      <span className="text-[10px] sm:text-base font-normal text-white">
                        DOWNLOADS
                      </span>
                    </div>
                    <svg
                      className="mx-2.5 sm:mx-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="2"
                      height="45"
                      viewBox="0 0 2 45"
                      fill="none"
                    >
                      <path
                        d="M1.33105 0.771484L1.33105 43.6905"
                        stroke="#A8A8A8"
                        strokeWidth="0.841549"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                  </li>

                  <li className="text-center flex items-center">
                    <div>
                      <span className="text-xs sm:text-lg font-bold text-primary block">
                        80M+
                      </span>
                      <span className="text-[10px] sm:text-base font-normal text-white">
                        DOWNLOADS
                      </span>
                    </div>
                    <svg
                      className="mx-2.5 sm:mx-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="2"
                      height="45"
                      viewBox="0 0 2 45"
                      fill="none"
                    >
                      <path
                        d="M1.33105 0.771484L1.33105 43.6905"
                        stroke="#A8A8A8"
                        strokeWidth="0.841549"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                  </li>

                  <li className="text-center">
                    <div>
                      <span className="text-xs sm:text-lg font-bold text-primary block">
                        80M+
                      </span>
                      <span className="text-[10px] sm:text-base font-normal text-white">
                        DOWNLOADS
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className=" mt-10">
                <Button className="px-5 py-2.5 sm:px-7 sm:py-4 flex items-center gap-2">
                  <img
                    src={iconDownload}
                    className="brightness-0 size-7"
                    alt=""
                  />
                  Download App
                </Button>
              </div>
              <div className="w-fit shadow rounded-xl grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-5 mt-10">
                <img
                  src={iconAIGF}
                  alt=""
                  className="size-full md:size-36 p-3 rounded gradient-bg object-contain"
                />
                <img
                  src={iconCertified}
                  alt=""
                  className="size-full md:size-36 p-3 rounded gradient-bg object-contain"
                />
                <img
                  src={iconInstant}
                  alt=""
                  className="size-full md:size-36 p-3 rounded gradient-bg object-contain"
                />
                <img
                  src={iconISO}
                  alt=""
                  className="size-full md:size-36 p-3 rounded gradient-bg object-contain"
                />
              </div>
            </div>
          </div>
          <div
            className="h-full flex-auto md:flex-1/2 max-w-6xl mx-auto w-full"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <Tilt className="box" options={tiltOption}>
              <img
                src="https://html.vecurosoft.com/roda/demo/assets/img/hero/hero-img-1-1.png"
                alt="banner"
                // width={438}
                // height={350}
                className="ml-auto md:h-80 lg:h-96 xl:h-[550px] object-contain"
              />
            </Tilt>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
