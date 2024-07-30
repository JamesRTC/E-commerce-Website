import { useState, useRef, useEffect } from "react";
import { products } from "../API/productsAPI";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ProductCard } from "./ProductCard";

export const NewArrivals = () => {
  const containerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const category = "newArrivals";

  const updateArrowsVisibility = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth);
    }
  };

  useEffect(() => {
    updateArrowsVisibility();
    const handleResize = () => updateArrowsVisibility();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 380; // Adjust scroll amount as needed
      updateArrowsVisibility();
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 380; // Adjust scroll amount as needed
      updateArrowsVisibility();
    }
  };

  return (
    <section className="p-10 max-sm:p-5">
      <h1 className="text-2xl font-bold uppercase max-sm:text-lg">
        New Arrivals
      </h1>
      <Link
        to="/newArrivals"
        className="text-md font-bold uppercase hover:underline hover:underline-offset-4 max-sm:text-sm"
      >
        <h2 className="mb-5">Shop all</h2>
      </Link>
      <div className="relative mt-2">
        <div
          ref={containerRef}
          onScroll={updateArrowsVisibility}
          className="no-scrollbar grid grid-flow-col gap-5 overflow-x-scroll"
          style={{ scrollBehavior: "smooth" }}
        >
          {products[category].slice(0, 8).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              category={category}
            />
          ))}
        </div>
        {showLeftArrow && (
          <button
            className="absolute top-1/2 -translate-y-1/2 rounded-full bg-gray-200 p-2 hover:bg-gray-300 max-sm:-top-5 max-sm:right-10 sm:-left-5"
            onClick={scrollLeft}
          >
            <FaChevronLeft className="text-xl text-gray-600 max-sm:text-xs" />
          </button>
        )}
        {showRightArrow && (
          <button
            className="absolute -right-5 top-1/2 -translate-y-1/2 rounded-full bg-gray-200 p-2 hover:bg-gray-300 max-sm:-right-0 max-sm:-top-5"
            onClick={scrollRight}
          >
            <FaChevronRight className="text-xl text-gray-600 max-sm:text-xs" />
          </button>
        )}
      </div>
    </section>
  );
};
