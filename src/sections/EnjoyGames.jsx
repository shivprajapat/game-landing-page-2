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
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-6">
          {enjoyGamesSliderData.map((item, index) => (
            <div
              class="relative h-52 sm:h-72 md:h-80 bg-[#161926] group overflow-hidden"
              key={index}
              style={{
                clipPath:
                  "polygon(0px 0px, 92% 0px, 100% 15%, 100% 100%, 7% 100%, 0px 85%)",
              }}
            >
              <span class="absolute bottom-0 scale-0 group-hover:scale-105 z-50 w-full h-10 flex items-center justify-center text-white font-medium text-sm bg-primary">
                {item.text}
              </span>
              <img
                src={item.videoPoster}
                className="size-full rounded-xl object-cover group-hover:scale-110 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnjoyGames;
