import React, { useState } from "react";
import ApplyButton from "./ApplyButton";
import { useDispatch } from "react-redux/es/exports";
import { addheading } from "../redux/reducers/heading";
const Heading = () => {
  const dispatch = useDispatch();
  const [heading, setHeading] = useState("");
  function addHeading() {
    dispatch(addheading(heading));
    setHeading("");
  }
  return (
    // <div classname="col-span-8 col-start-2 divide-y-2">
    <div className="mb-6 col-span-8 col-start-2 divide-y-2 grid grid-rows-2 items-baseline justify-items-start gap-3 input-field">
      <label htmlFor="base-input">Enter Heading</label>
      <input
        type="text"
        value={heading}
        onChange={(e) => setHeading(e.target.value)}
        id="base-input"
        className="bg-secondary  text-gray-900 text-sm border-none ring-1 ring-gray-400 focus:ring-primary block w-full p-2.5 dark:bg-gray-700dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary"
        placeholder=""
      />

      {/* bg-secondary border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary */}
      <ApplyButton ON_CLICK={addHeading} />
    </div>

    // </div>
  );
};

export default Heading;
