import React from "react";
import { Link } from "react-router-dom";
import SectionHeading from "./SectionHeading";

const Footer = () => {
  const listText = ["Home", "About", "Services", "Contact"];
  return (
    <footer className="p-4 md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 mt-8">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        &copy; 2022 
        <a href="https://flowbite.com/" className="hover:underline mx-1">
         Paper Maker
        </a>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6 ">
            About
          </a>
        </li>
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6">
            Licensing
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
