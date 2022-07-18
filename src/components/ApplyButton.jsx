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
      className={`px-7 py-2 bg-primary  block text-secondary cursor-pointer hover:shadow-lg hover:shadow-green-300 w-fit mb-2 ${additionalClasses}`}
      onClick={ON_CLICK}
    />
  );
};

export default ApplyButton;
