import { ImagePayments } from "@/assets/images";
import { Heading } from "@/components";
import React from "react";

const InstantWithDrawal = () => {
  return (
    <section className="py-5 md:py-8">
      <div className="max-w-5xl px-4 mx-auto">
        <div className="p-7 gradient-bg border border-slate-700 rounded">
          <div data-aos="fade-up"></div>
          <Heading className="justify-center">Withdrawal Modes</Heading>
          <div data-aos="fade-up">
            <img
              src={ImagePayments}
              alt="payments"
              className="max-w-full sm:h-14 mx-auto bg-white p-2 rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstantWithDrawal;
