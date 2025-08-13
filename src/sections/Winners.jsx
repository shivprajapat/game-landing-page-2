import { Heading } from "@/components";
import WinnersCard from "@/components/WinnersCard";
import { winnersData } from "@/constants";
import React from "react";

const Winners = () => {
  return (
    <section className="py-5 md:py-8">
      <div className="max-w-7xl px-4 mx-auto">
        <div data-aos="fade-up">
          <Heading className="justify-center">What our user's says </Heading>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {winnersData.map((item, index) => (
            <div key={index}>
              <WinnersCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Winners;
