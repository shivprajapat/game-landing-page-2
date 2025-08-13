import React from "react";

const DownloadCashApp = () => {
  return (
    <div className="container">
      <div className="flex gap-3 items-center pr-2 sm:pr-4">
        <marquee behavior="scroll" direction="left" loop="infinite">
          <h2 className="text-4xl marquee-text font-poppins md:text-5xl lg:text-6xl text-left font-bold w-full sm:w-fit">
            Scan Code to Download Ludo Cash App Now!
          </h2>
        </marquee>
        <div className="bg-primary p-1 rounded-md hidden sm:block">
          <img
            src="https://d3g4wmezrjkwkg.cloudfront.net/website/images/winzo-games-qr-code-india.png?w=256&q=80"
            alt="qr"
            className="max-w-full rounded-md h-20 sm:h-24 sm:min-w-24 mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default DownloadCashApp;
