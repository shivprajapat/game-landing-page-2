import { ImageAbout } from "@/assets/images";
import { Heading } from "@/components";
import Tilt from "@/components/Tilt";
import { tiltOption } from "@/constants/tiltOption";
import React from "react";

const About = () => {
  return (
    <section className="py-8" id="about">
      <div className="max-w-7xl px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center-safe">
          <div
            data-aos="fade-right"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="2000"
          >
            <Heading className="text-left justify-center sm:justify-start !mb-5">
              About Us
            </Heading>
            <p className="font-extralight mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              animi temporibus necessitatibus blanditiis commodi placeat
              aliquid, debitis praesentium, inventore reiciendis veniam rem modi
              dolorem quae eligendi sed aut autem a sapiente minima voluptates
              asperiores. Accusantium facere sequi explicabo? Atque veritatis
              repellendus blanditiis aperiam voluptatem officia! Nihil,
              incidunt. Deserunt nesciunt, fuga reprehenderit voluptatibus fugit
              ea ullam ipsam rem in quae perspiciatis?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              recusandae sit sunt numquam rem in voluptatem necessitatibus quia
              placeat, inventore labore provident enim rerum incidunt corporis
              dolore nobis eius accusamus facilis reiciendis, qui dignissimos
              repellat dicta amet? Corrupti, natus fuga.
            </p>
          </div>
          <div data-aos="zoom-in-up">
            <Tilt className="box" options={tiltOption}>
              <img
                src="https://demos.codexcoder.com/themeforest/html/casina/casina/assets/images/faq/01.png"
                alt="about"
              />
            </Tilt>
          </div>
        </div>
        <p></p>
      </div>
    </section>
  );
};

export default About;
