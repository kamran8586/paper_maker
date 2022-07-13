import React from "react";
import ApplyButton from "./ApplyButton";

const Questions = () => {
  return (
    <div className="col-span-8 col-start-2 divide-y-2 grid items-baseline justify-items-start gap-3 grid-rows-1 ">
      <label
        htmlFor="message"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
      >
        Your message
      </label>

      <textarea
        id="message"
        rows={4}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
        placeholder="Your message..."
        defaultValue={""}
      />

      <ApplyButton ON_CLICK={() => alert("question")} />
    </div>
  );
};

export default Questions;
