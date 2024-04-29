import React, { useEffect } from "react";
import { useState } from "react";
import { slideShow } from "../../data/data"; 
import { LazyLoadImage } from "react-lazy-load-image-component";

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const length = slideShow.length;
  
    const nextSlide = () => {
      setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
    };
  
    useEffect(() => {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000);
      return () => clearInterval(interval);
    }, [currentSlide]);
  
    return (
      <div className="slideshowContainer w-full">
        {slideShow.map((slide, index) => {
          const { img, text } = slide;
          return (
            <div
              id={index}
              className={`${
                index === currentSlide ? "slide current" : "slide"
              } transition-all ease-in-out duration-1000`}
            >
              {index === currentSlide && (
                <div className="bg-black relative transition-all ease-linear duration-500">
                  <LazyLoadImage
                    src={img}
                    alt="slider image"
                    className="sliderImg w-full h-[600px] object-cover opacity-95"
                  />
  
                  <div className="absolute max-w-xl top-1/3 lg:right-32 text-white font-semibold flex flex-col ml-8 bg-black bg-opacity-50 p-5">
                    <span className=" text-3xl lg:text-5xl">{text}</span>
  
                    <button className="border-none w-2/4 h-14 text-lg lg:w-56 lg:h-11 mt-5 bg-[#967F57]"
                    onClick={() => window.location.href = "/reservationView"}
                    >
                      Book Your Stay
                    </button>
                  </div>
  
                  <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-white flex shadow-2xl ">
                    {slideShow.map((slide, index) => {
                      return (
                        <div>
                          <div
                            id={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`${
                              index === currentSlide
                                ? "bg-white"
                                : "bg-transparent"
                            } w-4 mr-4 rounded-full h-4 border-2 border-white cursor-pointer`}
                          ></div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  };
  
  export default Slider;