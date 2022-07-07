import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { Pagination } from "swiper";
import Testimonial from "./Testimonial";
import Section_Heading from "./Section_Heading";
export default function App() {
  const names = ["Kamran", "John", "Jane", "Jack", "Jill"];
  let arr = ["zoom-in-right", "fade-up", "zoom-in-left"];
  return (
    <>
      <Section_Heading text="Testimonial" width={44} />
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper col-span-12 mx-auto h-96"
      >
        {names.map((name, index) => {
          return (
            <SwiperSlide key={index}>
              <Testimonial name={name} animation={arr[index]} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
