import React from "react";
import { Link } from "react-router-dom";
import SectionHeading from "./SectionHeading";

const Footer = () => {
  const listText = ["Home", "About", "Services", "Contact"];
  return (
    <>
      <div
        data-aos="zoom-in-up"
        className="bg-secondary dark:bg-slate-800 grid mt-8"
      >
        <div className="item__parent grid gap-3 grid-cols-12 grid-rows-6  p-16">
          <ul className="items  col-span-4 row-span-6 flex flex-col gap-3 w-fit">
            {listText.map((item, index) => (
              <Link to={"/"} className="text-lg hover:text-primary" key={index}>
                {item}{" "}
              </Link>
            ))}
          </ul>
        </div>

        <div className="copy__right text-center text-xl select-none ">
          &copy; Copyright 2022
        </div>
      </div>
    </>
  );
};

export default Footer;
