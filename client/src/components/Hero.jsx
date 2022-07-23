import React from "react";
import { useNavigate } from "react-router";

import Button from "./Button";
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
              url("images/background.jpg");
          }
        `}
      </style>

      <div data-aos="zoom-in-left" className="col-span-12">
        <div className="hero-image rounded">
          <div className="hero__content h-[89vh] border-2 flex flex-col justify-center px-3 lg:px-20">
            <h3 className=" text-xl lg:text-2xl capitalize text-primary ">
              Generate Papers in Less time
            </h3>
            <p className=" text-lg text-secondary my-4 capitalize">
              Generates your papers. You don't need to formet papers. We <br />
              automatically formet papers for you.
            </p>

            <div className="btn-group flex space-x-3">

              <Button onClick={() => history("/c_p_home")} variant="primary">
                Genrates papers
              </Button>

              <Button onClick={() => history("/c_p_documentation")} variant="light">
                User Guide
             </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
