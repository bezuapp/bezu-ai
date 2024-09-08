import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { cn } from "@/lib/utils";

const Carousel = () => {
  const sliderRef = useRef(null);
  const [centerIndex, setCenterIndex] = useState(0);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
    beforeChange: (current, next) => setCenterIndex(next),
  };

  // Updated array with image and name
  const items = [
    { img: "./3.svg", name: "Image 1" },
    { img: "./4.svg", name: "Image 2" },
    { img: "./6.svg", name: "Image 3" },
    { img: "./4.svg", name: "Image 4" },
    { img: "./3.svg", name: "Image 5" },
    { img: "./4.svg", name: "Image 6" },
    { img: "./6.svg", name: "Image 7" },
    { img: "./4.svg", name: "Image 8" },
  ];

  useEffect(() => {
    if (sliderRef.current) {
      setCenterIndex(sliderRef.current.innerSlider.state.currentSlide);
    }
  }, []);

  const getNormalisedIdx = (idx) => {
    const normalizedIdx = (idx - centerIndex + items.length) % items.length;
    return normalizedIdx;
  };

  const getMarginClass = (idx) => {
    const normalizedIdx = (idx - centerIndex + items.length) % items.length;
    if (normalizedIdx === 0) return "mt-28";
    if (normalizedIdx === 1 || normalizedIdx === items.length - 1)
      return "mt-14";
    return "";
  };

  return (
    <div className="w-full max-w-[100vw] lg:-mt-28 -mt-16 max-lg:mb-14 ">
      <Slider ref={sliderRef} {...settings} className="flex gap-5">
        {items.map((item, idx) => (
          <div
            key={idx}
            className={`relative  transition-transform !flex items-center flex-col justify-center duration-500 ease-in-out ${getMarginClass(
              idx
            )}`}
          >
            <img
              src={item.img}
              alt={item.name}
              className={cn(
                "lg:w-60 w-40  lg:rounded-[80px] rounded-[60px] z-10"
              )}
            />
            {getNormalisedIdx(idx) === 0 && (
              <div className="bg-white lg:-mt-10 -mt-5 z-[500] flex items-center justify-center rounded-full gap-3 text-xl py-2 w-max px-5 ml-[4%] relative">
                {" "}
                <img
                  src={item.img}
                  alt={item.name}
                  className={cn("lg:w-10 lg:h-10 w-7 h-7 rounded-[80px]")}
                />
                <span className="lg:text-base text-sm "> {item.name}</span>
              </div>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
