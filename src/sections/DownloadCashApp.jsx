import React from "react";

const DownloadCashApp = () => {
  return (
    <div className="bg-primary py-5 sm:py-9 text-center">
      <marquee behavior="scroll" direction="left" loop="infinite">
        <div className="flex gap-3 items-center">
          <h2 className="text-4xl marqueeOne__text-style1 font-poppins md:text-5xl lg:text-6xl text-black text-left font-bold w-full sm:w-fit">
            Scan Code to Download Ludo Cash App Now!
          </h2>
          <div className="bg-green-200 p-1 rounded-md hidden sm:block">
            <img
              src="https://d3g4wmezrjkwkg.cloudfront.net/website/images/winzo-games-qr-code-india.png?w=256&q=80"
              alt="qr"
              className="max-w-full rounded-md h-20 sm:h-24 sm:min-w-24 mx-auto"
            />
          </div>
        </div>
      </marquee>
    </div>
  );
};

export default DownloadCashApp;
