import React, { useState , useEffect } from "react";
import ApplyButton from "./ApplyButton";
import { useDispatch } from "react-redux/es/exports";
import { addquestion } from "../redux/reducers/questionsAndHeading";
import combineHeadingAndQuestion from "../helper_functions/combineHeadingAndQuestion";
const Questions = () => {
  const dispatch = useDispatch();
  const [question, setQuestion] = useState("");
  const [questionHeading, setQuestionHeading] = useState("");
  // const [count, setCount] = useState(0);
  let headingAndQuestion;


  function addQuestion() {
    let questions = question.split("\n");
    headingAndQuestion = combineHeadingAndQuestion(questionHeading, questions);
    console.log(headingAndQuestion);
    dispatch(addquestion(headingAndQuestion));
    // setCount(1);
    setQuestion("");
  }
  return (
    <div className="col-span-8 col-start-2 divide-y-2 grid items-baseline justify-items-start gap-3 grid-rows-1 ">
      <label
        htmlFor="base-input"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
      >
        Question Heading
      </label>
      <input
        type="text"
        id="base-input"
        className="bg-secondary border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
        placeholder="Enter Heading"
        value={questionHeading}
        onChange={(e) => setQuestionHeading(e.target.value)}
        // disabled={count > 0}
      />

      <label
        htmlFor="message"
        className="block  text-sm font-medium text-gray-900 dark:text-gray-400"
      >
        Your message
      </label>

      <textarea
        id="message"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        rows={4}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
        placeholder="Your message..."
      />

      <ApplyButton ON_CLICK={addQuestion} />
    </div>
  );
};

export default Questions;
