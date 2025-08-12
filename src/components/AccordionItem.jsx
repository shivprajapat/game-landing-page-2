import { iconCircleDash, iconCirclePlus } from "@/assets/images";
import React, { useState, useRef, useEffect } from "react";

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  useEffect(() => {
    if (isOpen) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setMaxHeight("0px");
    }
  }, [isOpen]);

  return (
    <div className="overflow-hidden">
      <button
        onClick={onClick}
        className="w-full text-left px-4 py-3 sm:py-4 bg-primary flex justify-between items-center transition-colors"
      >
        <span className="font-normal text-black text-base sm:text-lg">
          {title}
        </span>
        <span className=" bg-primary rounded-full size-7 min-w-7">
          <img src={isOpen ? iconCircleDash : iconCirclePlus} alt="" />
        </span>
      </button>

      <div
        ref={contentRef}
        style={{
          maxHeight,
        }}
        className="transition-all duration-500 ease-in-out overflow-hidden px-4 text-base bg-primary text-black"
      >
        <div className="py-3">{content}</div>
      </div>
    </div>
  );
};
export default AccordionItem;
