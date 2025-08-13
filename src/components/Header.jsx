import React, { useEffect, useState } from "react";

import { navLinks } from "@/constants";
import { iconClose, iconLogo, iconMenu } from "@/assets/images";
import { Button } from ".";

const Header = () => {
  const [active, setActive] = useState("home");
  const [toggle, setToggle] = useState(false);
  const [show, handleShow] = useState(false);

  useEffect(() => {
    // Define the function to handle scroll events
    const handleScroll = () => {
      if (window.scrollY > 50) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array to only run once on mount and unmount

  return (
    <header
      className={`fixed top-0 w-full z-50 border-b-2 transition-all duration-200 ${
        show ? " bg-black border-primary shadow" : "border-transparent"
      }`}
    >
      <div className="container">
        <nav className="w-full flex py-2 sm:py-3 justify-between items-center">
          <a href="#">
            <img
              src={iconLogo}
              alt="logo"
              className={`transition-all duration-200 ${
                show ? "sm:w-12 w-16" : "sm:w-12 w-16 md:w-20"
              }`}
            />
          </a>
          <ul className="list-none transition-all duration-200 gap-5 lg:gap-10 xl:gap-14 md:flex hidden justify-end items-center">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`font-medium transition-all uppercase duration-150 cursor-pointer text-sm lg:text-base hover:text-primary ${
                  active === nav.title ? "text-primary active" : "text-white"
                }
                `}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`} className="relative">
                  {nav.title}
                  {nav.title && (
                    <svg
                      width="42"
                      height="9"
                      viewBox="0 0 42 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.994141 7C8.66081 3 27.3941 -2.6 40.9941 7"
                        stroke="#a6d719"
                        strokeWidth="3"
                      ></path>
                    </svg>
                  )}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex gap-3 flex-1 md:flex-none justify-end items-center">
            <div className="flex items-center gap-2 sm:gap-3">
              <a href="https://ludoplayers.com/login" target="_blank">
                <Button>Login</Button>
              </a>
            </div>
            <div className="md:hidden flex justify-end items-center">
              <button className="size-10 border border-primary flex-center">
                <img
                  src={toggle ? iconClose : iconMenu}
                  alt="menu"
                  className="object-contain"
                  width={24}
                  height={24}
                  onClick={() => setToggle(!toggle)}
                />
              </button>
              <div
                className={`${
                  !toggle ? "hidden" : "flex"
                } p-6 bg-black absolute top-[70px] right-0 mx-4 min-w-[140px] rounded-xl animation-slide-top z-[9]`}
              >
                <ul className="list-none flex justify-end items-start flex-1 flex-col">
                  {navLinks.map((nav, index) => (
                    <li
                      key={nav.id}
                      className={`font-poppins font-medium font-rubik cursor-pointer text-[16px] transition-all duration-150 ${
                        active === nav.title ? "text-primary" : "text-white"
                      } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                      onClick={() => setActive(nav.title)}
                    >
                      <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
