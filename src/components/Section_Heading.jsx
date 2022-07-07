import React from "react";

const Section_Heading = ({ text, width }) => {
    console.log(width)
    return (
    <>
      <h2 className="col-span-12 text-center mt-20 text-4xl font-serif select-none">
        {text}
      </h2>
      <hr
        className={`col-span-12 w-[${width}px] h-[2px] bg-primary mx-auto -mt-4`}
      />
    </>
  );
};

export default Section_Heading;
