import React from "react";

const Hero = () => {
  return (
    <>
      <style jsx="true">
        {`
          .hero-image {
            background-image: linear-gradient(
                rgba(0, 0, 0, 0.9),
                rgba(0, 0, 0, 0.5)
              ),
              url("images/background_image.jpg");
          }
        `}
      </style>

      <div data-aos="zoom-in-left" className="col-span-12">
        <div className="hero-image rounded">
          <div className="hero__content h-[89vh] border-2 flex flex-col justify-center px-20">
            <h2 className="heading text-4xl text-primary ">
              Generate Papers in Less time
            </h2>
            <p className="heading text-md text-secondary mt-4">
              Generates your papers. You don't need to formet papers. We <br/>
              automatically formet papers for you.
            </p>
            <button className="block bg-primary w-fit py-2 px-4 mt-4 hover:shadow-lg text-secondary  hover:shadow-green-500 transition-all duration-200">Genrate Papers</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
