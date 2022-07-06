import React from "react";

const Hero = () => {
  return (
    <>
      <style jsx="true">
        {`
          .hero-image {
            background-image: linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0 82),
                rgba(0, 0, 0, 0.73)
              ),
              url("images/background_image.jpg");
          }
        `}
      </style>

      <div className="container">
        <div className="hero-image">
          <p>Hello</p>
        </div>
      </div>
    </>
  );
};

export default Hero;
