import { useState, useEffect, useRef } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

export const HeroSlider = ({ HeroData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const navigate = useNavigate();

  const clearExistingInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const setNewInterval = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % HeroData?.length);
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

  const handleButtonClick = (e) => {
    e.stopPropagation();
    navigate(HeroData[currentIndex].path);
  };

  return (
    <section className="relative max-sm:mt-[80px] sm:mt-[145px]">
      {HeroData && (
        <Link to={HeroData[currentIndex]?.path}>
          <div>
            <img
              src={HeroData[currentIndex]?.image}
              alt="hero image slider"
              className="sliderAnimation object-cover object-center max-sm:h-[500px]"
            />

            <div className="absolute bottom-[60px] left-10 max-sm:left-5">
              <p className="pb-4 text-4xl font-bold uppercase max-sm:text-2xl">
                {HeroData[currentIndex].text}
              </p>
              <button
                onClick={handleButtonClick}
                className="relative z-10 border border-black px-5 py-2 font-bold uppercase transition-all duration-300 hover:border-gray-500 hover:text-gray-500"
              >
                Shop now
              </button>
            </div>
          </div>
        </Link>
      )}
      <span
        className="absolute left-5 top-1/2 z-20 -translate-y-1/2 transform cursor-pointer"
        onClick={handlePrevClick}
      >
        <FaChevronLeft className="size-6 text-white" />
      </span>
      <span
        className="absolute right-5 top-1/2 z-20 -translate-y-1/2 transform cursor-pointer"
        onClick={handleNextClick}
      >
        <FaChevronRight className="size-6 text-white" />
      </span>
    </section>
  );
};
