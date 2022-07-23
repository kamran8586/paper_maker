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
      <div className="inline-flex shadow-sm col-start-6" role="group">
        <NavLink
          className={`py-2 px-4 text-xs font-medium text-gray-900 bg-white border btn-group-active border-gray-200 hover:bg-gray-100 hover:text-primary focus:z-10 focus:ring-1 focus:ring-primary focus:text-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-primary dark:focus:text-white grid place-items-center
          ${({ isActive }) => (isActive ? "btn-group-active" : "")}
          `}
          to={`heading`}
        >
          Heading
        </NavLink>
        <NavLink
          className={`py-2 px-4 text-xs font-medium text-gray-900 bg-white border border-gray-200 btn-group-active hover:bg-gray-100 hover:text-primary focus:z-10 focus:ring-1 focus:ring-primary focus:text-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-primary dark:focus:text-white grid place-items-center
          ${({ isActive }) => (isActive ? "btn-group-active" : "")}`}
          to={"mcqs"}
        >
          MCQ'S
        </NavLink>
        <NavLink
          className={`py-2 px-4 text-xs font-medium text-gray-900 bg-white border-t btn-group-active border-b border-gray-200 hover:bg-gray-100 hover:text-primary focus:z-10 focus:ring-1 focus:ring-primary
           focus:text-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white text-center place-items-center dark:hover:bg-gray-600 dark:focus:ring-primary dark:focus:text-white  ${({
             isActive,
           }) => (isActive ? "btn-group-active" : "")}`}
          to={"questions"}
        >
          Short Questions
        </NavLink>
        <NavLink
          className={`py-2 px-4 text-xs font-medium text-gray-900 bg-white border-t btn-group-active border-b border-gray-200 hover:bg-gray-100 hover:text-primary focus:z-10 focus:ring-1 focus:ring-primary focus:text-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white  grid place-items-center dark:hover:bg-gray-600 dark:focus:ring-primary dark:focus:text-white text-center ${({
            isActive,
          }) => (isActive ? "btn-group-active" : "")}`}
          to={"questions"}
        >
          Long Questions
        </NavLink>
      </div>
    </>
  );
};

export default BuittonGroup;
