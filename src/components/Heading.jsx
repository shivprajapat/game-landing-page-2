// import { iconStarEmoji } from "@/assets/images";
import React from "react";

const Heading = ({ children, className }) => {
  return (
    <div
      className={`flex items-center gap-3 mb-lg-5 mb-6 md:mb-8 ${className}`}
    >
      <div class="w-10 sm:w-20 h-[2px] bg-gradient-to-r from-primary to-yellow-600" />
      <h2
        className={` text-xl md:text-4xl font-semibold text-white text-center inline-block`}
      >
        {children}
      </h2>
      <div class="w-10 sm:w-20 h-[2px] bg-gradient-to-r from-yellow-600 to-prfrom-primary rounded-[5px]" />{" "}
    </div>
  );
};

export default Heading;
