import React ,{Fragment} from "react";
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
const ShowQuestion = () => {

  const { questions } = useSelector(state => state.question);
  return (
    <div className="questions p-8">
      {questions.map((q, index) => {
        return (
          <Fragment key={uuidv4()}>
            <h2 className="text-md font-semibold" key={uuidv4()}>
              Q:{index + 2 + " " + q.heading}
            </h2>
            <ol className="list-[lower-roman]" key={uuidv4()}>
              {q.questions.map((ques, index) => {
                return (
                  <Fragment key={uuidv4()}>
                    <li className="text-xs ml-16" key={uuidv4()}>
                      {ques}
                    </li>
                  </Fragment>
                );
              })}
            </ol>
          </Fragment>
        );
      })}
    </div>
  );
};

export default ShowQuestion;
