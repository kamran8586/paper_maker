import React from "react";

import ApplyButton from "./ApplyButton";
import { useDispatch } from "react-redux/es/exports";
import { addmcqs } from "../redux/reducers/mcqs";
import combineMcqs from "../helper_functions/combineMcqs";
const MCQS = () => {
  const dispatch = useDispatch();

  function handleSubmit(e) {
    const { mcqsText, firstInput, secondInput, thirdInput, fourthInput } =
      e.target.elements;
    dispatch(
      addmcqs(
        combineMcqs(
          mcqsText.value,
          firstInput.value,
          secondInput.value,
          thirdInput.value,
          fourthInput.value
        )
      )
    );

    mcqsText.value = "";
    firstInput.value = "";
    secondInput.value = "";
    thirdInput.value = "";
    fourthInput.value = "";
    e.preventDefault();
  }
  return (
    <>
      <form
        className="col-span-8 col-start-2 divide-y-2"
        onSubmit={handleSubmit}
      >
        <label
          htmlFor="mcqsText"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          MCQ's Text Here
        </label>
        <textarea
          id="mcqsText"
          rows={4}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
          placeholder="MCQ's Text Here"
          defaultValue={""}
        />
        <div className="inline-grid grid-cols-12 grid-rows-2 items-baseline mt-7 gap-5">
          <input
            type="text"
            name="firstInput"
            className="col-span-6 focus:ring-primary "
            placeholder="FirstChoice"
          />
          <input
            type="text"
            name="secondInput"
            className="col-span-6 focus:ring-primary "
            placeholder="SecondChoice"
          />
          <input
            type="text"
            name="thirdInput"
            className="col-span-6 focus:ring-primary "
            placeholder="ThirdChoice"
          />
          <input
            type="text"
            name="fourthInput"
            className="col-span-6 focus:ring-primary"
            placeholder="FourthChoice"
          />
          <ApplyButton isInputSubmit={true} />
        </div>
      </form>
    </>
  );
};

export default MCQS;
