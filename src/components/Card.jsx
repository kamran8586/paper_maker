import React from "react";
import Section_Heading from "./Section_Heading";

const Cards = () => {
  let arr = ["zoom-in-right", "fade-up", "zoom-in-left"];
  let cardText = [
    "Make papers Easily",
    "Make papers in less time",
    "Imrove Productive",
  ];
  return (
    <>
      <Section_Heading text="Our Services" width={28} />
      <div className="cards col-span-12 grid grid-cols-12 border-2 gap-5">
        {arr.map((item, index) => (
          <Card data={{ item, index, cardText }} key={index} />
        ))}
      </div>
    </>
  );
};
function Card({ data }) {
  const { item, cardText, index } = data;
  return (
    <>
      <div
        data-aos={item}
        data-aos-duration="1000"
        className="col-span-4 hover:shadow-xl shadow-md transition-all duration-200 shadow-slate-300"
      >
        <img
          className="w-full"
          src="images/notes.svg"
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{cardText[index]}</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </>
  );
}
export default Cards;
