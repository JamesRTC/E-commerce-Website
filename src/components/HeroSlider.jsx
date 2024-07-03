import { useState, useEffect, useRef } from "react";
import { HeroDresses, HeroSuite, HeroKnits } from "../assets/hero-slider";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";

export const HeroSlider = () => {
  const HeroData = [
    { image: HeroDresses, text: "women's dresses" },
    { image: HeroKnits, text: "men's knitwear" },
    { image: HeroSuite, text: "men's suits" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const clearExistingInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const setNewInterval = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % HeroData.length);
    }, 5000);
  };

  useEffect(() => {
    setNewInterval();

    // Cleanup function to clear the interval
    return () => clearExistingInterval();
  }, []);

  const handlePrevClick = () => {
    clearExistingInterval();
    setCurrentIndex((currentIndex - 1 + HeroData.length) % HeroData.length);
    setNewInterval();
  };

  const handleNextClick = () => {
    clearExistingInterval();
    setCurrentIndex((currentIndex + 1) % HeroData.length);
    setNewInterval();
  };

  return (
    <section className="mt-5">
      <div className="relative">
        <img
          src={HeroData[currentIndex].image}
          alt="hero image slider"
          className="sliderAnimation"
        />
        <div className="absolute bottom-[60px] left-10">
          <p className="pb-4 text-4xl font-bold uppercase">
            {HeroData[currentIndex].text}
          </p>
          <button className="text border border-black px-5 py-2 font-bold uppercase transition-all duration-300 hover:border-gray-500 hover:text-gray-500">
            Shop now
          </button>
        </div>

        <span
          className="absolute left-5 top-1/2 -translate-y-1/2 transform cursor-pointer"
          onClick={handlePrevClick}
        >
          <FaChevronLeft className="size-6 text-white" />
        </span>

        <span
          className="absolute right-5 top-1/2 -translate-y-1/2 transform cursor-pointer"
          onClick={handleNextClick}
        >
          <FaChevronRight className="size-6 text-white" />
        </span>
      </div>
    </section>
  );
};
