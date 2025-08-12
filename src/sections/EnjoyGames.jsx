import { Heading } from "@/components";
import { enjoyGamesSliderData } from "@/constants";
import React from "react";

const EnjoyGames = () => {
  return (
    <section className="py-8 md:py-12 relative">
      <div className="max-w-6xl px-4 mx-auto">
        <div className="text-center mb-5 sm:mb-9">
          <Heading className="!mb-2 justify-center">
            <div
              className="flex justify-center sm:text-3xl items-center gap-2 sm:text-white"
              data-aos="fade-up"
            >
              6+ Game Mode
              <img
                src="https://d3g4wmezrjkwkg.cloudfront.net/website/images/emoji1.webp?w=64&q=80"
                alt=""
                width={50}
                height={50}
              />
            </div>
          </Heading>
        </div>
        <div className="flex flex-wrap justify-center mx-auto lg:w-full md:w-5/6">
          {enjoyGamesSliderData.map((item, index) => (
            <div
              key={index}
              className=" w-1/2 py-4 sm:py-7 text-center border lg:w-1/4 border-white group"
            >
              <div className="block size-32 sm:size-56 mx-auto rounded-full object-cover border-2 border-primary p-2 shadow">
                <img
                  src={item.videoPoster}
                  className="size-full group-hover:scale-110 transition-all duration-300 rounded-full"
                />
              </div>
              <p className="pt-4 text-sm font-medium capitalize font-body text-primary lg:text-lg md:text-base md:pt-6">
                portfolio
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnjoyGames;
