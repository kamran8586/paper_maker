import React from "react";
import { NavLink } from "react-router-dom";
// import { useRouteMatch } from "react-router";
const BuittonGroup = () => {
  <style jsx>
    {`
      .active {
        ouline: 1px solid #2bae66ff;
      }
    `}
  </style>;
  // const {path} = useRouteMatch();
  return (
    <>
      <div className="inline-flex shadow-sm col-start-8" role="group">
        <NavLink
          className={`py-2 px-4 text-sm font-medium text-gray-900 bg-white border btn-group-active border-gray-200 hover:bg-gray-100 hover:text-primary focus:z-10 focus:ring-2 focus:ring-primary focus:text-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-primary dark:focus:text-white 
          ${({ isActive }) => (isActive ? "btn-group-active" : "")}
          `}
          to={`heading`}
        >
          Heading
        </NavLink>
        <NavLink
          className={`py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t btn-group-active border-b border-gray-200 hover:bg-gray-100 hover:text-primary focus:z-10 focus:ring-2 focus:ring-primary focus:text-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-primary dark:focus:text-white  ${({
            isActive,
          }) => (isActive ? "btn-group-active" : "")}`}
          to={"questions"}

        >
          Questions
        </NavLink>
        <NavLink
          className={`py-2 px-4 text-sm font-medium text-gray-900 bg-white border border-gray-200 btn-group-active hover:bg-gray-100 hover:text-primary focus:z-10 focus:ring-2 focus:ring-primary focus:text-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-primary dark:focus:text-white
          ${({isActive}) => (isActive) ? "btn-group-active":""}`}
          to={"mcqs"}

        >
          MCQ'S
        </NavLink>
      </div>
    </>
  );
};

export default BuittonGroup;
