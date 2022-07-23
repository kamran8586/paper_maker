import React from "react";
import Section_Heading from "./SectionHeading";

const Cards = () => {
  let arr = ["zoom-in-right", "fade-up", "zoom-in-left"];
  const imagesUrl = [
    "images/notes.svg",
    "images/services2.svg",
    "images/services3.svg",
  ];
  let cardText = [
    "Make papers Easily",
    "Make papers in less time",
    "Imrove Productive",
  ];
  return (
    <>
      <Section_Heading text="Our Services" width={28} />
      <div className="cards col-span-12 grid grid-cols-12 gap-5">
        {arr.map((item, index) => (
          <Card
            data={{ item, index, cardText }}
            key={index}
            imagesUrl={imagesUrl}
          />
        ))}
      </div>
    </>
  );
};
function Card({ data, imagesUrl }) {
  const { item, cardText, index } = data;
  return (
    <>
      <div
        data-aos={item}
        data-aos-duration="1000"
        className="lg:col-span-4 col-span-12 hover:shadow-xl shadow-md transition-all duration-200 shadow-slate-300"
      >
        <img
          className="w-full"
          src={imagesUrl[index]}
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
