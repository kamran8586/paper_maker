import React from "react";

function Button ({ onClick, children, variant }) {
    const variants = {
        primary: "bg-primary text-secondary",
        light : "bg-secondary text-black"
    }
  return (
    <button
      className={`px-4 py-3 font-bold hover:opacity-90  transition ease-in-out duration-200 translate-10 ${variants[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
