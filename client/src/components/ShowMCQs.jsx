import React, { Fragment } from 'react'
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";

const ShowMCQs = () => {
  const { mcqs } = useSelector((state) => state.mcq);
  return (
    <div className="mcqs">
      {mcqs.map((mcq, index) => (
        <Fragment key={uuidv4()}>
          <h2 className="text-md font-bold p-3">{`${index + 1}. ${
            mcq.mcqText
          }`}</h2>
          <ol className="flex gap-5">
            {mcq.mcqs.map((mcqOption, index) => (
              <Fragment key={uuidv4()}>
                <li className="ml-16 text-sm">
                  {`${index + 1}. `}
                  {mcqOption}
                </li>
              </Fragment>
            ))}
          </ol>
        </Fragment>
      ))}
    </div>
  );
};

export default ShowMCQs;
