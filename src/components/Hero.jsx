import React from "react";
import { useNavigate } from "react-router";
const Hero = () => {
  const history = useNavigate();
  return (
    <>
      <style jsx="true">
        {`
          .hero-image {
            background-image: linear-gradient(
                rgba(0, 0, 0, 0.5),
                rgba(0, 0, 0, 0.6)
              ),
              url("images/background_image.jpg");
          }
        `}
      </style>

      <div data-aos="zoom-in-left" className="col-span-12">
        <div className="hero-image rounded">
          <div className="hero__content h-[89vh] border-2 flex flex-col justify-center px-3 lg:px-20">
            <h3 className="heading text-2xl lg:text-4xl text-primary ">
              Generate Papers in Less time
            </h3>
            <p className="heading text-lg text-secondary mt-4">
              Generates your papers. You don't need to formet papers. We <br />
              automatically formet papers for you.
            </p>

            <div className="btn-group flex space-x-3">
              <button
                className="block bg-secondary w-fit py-2 px-4 mt-4 hover:shadow-lg text-lg text-slate-700 focus:shadow-slate-300 focus:shadow-lg hover:shadow-slate-300 transition-all duration-200"
                onClick={() => history("/c_p_home")}
              >
                Genrate Papers
              </button>
              <button
                className="block bg-primary w-fit py-2 px-4 mt-4 hover:shadow-lg text-secondary text-lg focus:shadow-green-300 focus:shadow-lg hover:shadow-green-300 transition-all duration-200"
                onClick={() => history("/c_p_documentation")}
              >
                Read Docs
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
