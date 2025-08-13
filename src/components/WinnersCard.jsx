import React, { useState } from "react";

const WinnersCard = ({ title, imageUrl, description, location }) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!active);
  };
  return (
    <div
      data-aos="fade-up"
      onClick={handleToggle}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <div className="relative overflow-hidden gradient-bg shadow-md rounded-lg">
        <div
          className={`absolute rounded-full transition-all duration-300 ease-in-out font-bold text-black flex text-center
               ${
                 active
                   ? "right-0 bg-primary bottom-0 items-center justify-center w-full h-full rounded-b-none"
                   : "-bottom-32 bg-primary -right-16 w-36 items-end justify-end"
               }
            `}
        />
        <div className="flex flex-col gap-4 items-start p-4 z-10 relative">
          <img
            src={imageUrl}
            alt="Team Member 1"
            className="size-24 border-2 shadow border-primary p-1 rounded-full"
          />
          <div>
            <h3
              className={`text-xl font-medium ${
                active ? "text-white" : "text-gray-200"
              } mb-2`}
            >
              {title}
            </h3>
            <span
              className={`${active ? "text-white" : "text-gray-200"} text-sm`}
            >
              {description}
            </span>
          </div>
        </div>

        <div className="bg-primary flex items-center gap-2 shadow p-3 !text-white relative z-10 border-t border-slate-700">
          <span className="text-sm font-medium">Location : </span>
          <span className="text-sm">{location}</span>
        </div>
      </div>
    </div>
  );
};

export default WinnersCard;
