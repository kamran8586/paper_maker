import React from "react";

const ApplyButton = ({ ON_CLICK , isInputSubmit }) => {
  return (
    <input
      type={isInputSubmit ? "submit" : "button"}
      value="Apply"
      className="px-7 py-2 bg-primary block text-secondary cursor-pointer hover:shadow-lg hover:shadow-green-300 w-fit"
      onClick={ON_CLICK}
    />
  );
};

export default ApplyButton;
