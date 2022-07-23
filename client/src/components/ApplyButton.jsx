import React from "react";

const ApplyButton = ({
  ON_CLICK,
  isInputSubmit,
  btnText,
  additionalClasses,
}) => {
  return (
    <input
      type={isInputSubmit ? "submit" : "button"}
      value={btnText || "Apply"}
      className={` hover:bg-primary w-fit px-7 py-2 hover:opacity-90 bg-primary  block text-secondary cursor-pointer  mb-2`}
      onClick={ON_CLICK}
    />
  );
};
//
export default ApplyButton;
