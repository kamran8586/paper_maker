import React from "react";

const Testimonial = (props) => {
  return (
    <>
      <div className="max-w-3xl p-4 text-gray-800 bg-white rounded-lg shadow" data-aos={props.animation}>
        <div className="mb-2">
          <div className="h-3 text-3xl text-left text-indigo-600">“</div>
          <p className="px-4 text-center text-gray-600">
            The Landscaping Professionals were quick, courteous and very
            helpful. They helped me restore my lawn and gardens completely after
            putting in my deck. I was worried it wouldn’t be done in time for my
            garden party, but they finished the job with time to spare!”
          </p>
          <div className="h-3 text-3xl text-right text-indigo-600">”</div>
          <div className="text-center">
            <h5 className="font-bold text-indigo-600">{props.name}</h5>
            <p className="text-sm text-gray-600">CEO / Founder</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
