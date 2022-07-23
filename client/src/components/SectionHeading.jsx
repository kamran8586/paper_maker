import React from "react";

const Section_Heading = ({ text, width }) => {
  return (
    <>
      <style jsx="true">
        {`
         .section__heading::after {
            content: "";
            transform: translateX(-50%);
          }
        `}
      </style>
      <h2 className="col-span-12 text-center mt-20 text-4xl font-normal select-none section__heading">
        {text}
      </h2>
    </>
  );
};

export default Section_Heading;
