import { useState, useRef, useEffect } from "react";
import { products } from "../API/productsAPI";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export const NewArrivals = () => {
  const containerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [hoveredProductId, setHoveredProductId] = useState(null);
  const [hoveredImageUrl, setHoveredImageUrl] = useState(null);
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

  const handleMouseEnter = (productId) => {
    const product = products.newArrivals.find((p) => p.id === productId);
    if (product && product.subImages.length > 0) {
      setHoveredProductId(productId);
      setHoveredImageUrl(product.subImages[0]); // Use the first subimage as the hovered image
    }
  };

  const handleMouseLeave = () => {
    setHoveredProductId(null);
    setHoveredImageUrl(null);
  };

  return (
    <section className="p-10">
      <h1 className="text-2xl font-bold uppercase">New Arrivals</h1>
      <h2 className="text-xl font-semibold uppercase">Shop all</h2>
      <div className="relative">
        <div
          ref={containerRef}
          onScroll={updateArrowsVisibility}
          className="no-scrollbar grid grid-flow-col gap-5 overflow-x-scroll"
          style={{ scrollBehavior: "smooth" }}
        >
          {products[category].slice(0, 8).map((product) => (
            <div key={product.id} className="min-w-[360px]">
              <Link
                to={`/viewProduct/${category}/${product.name}/${product.id}`}
              >
                <div
                  className="relative pb-[110%]"
                  onMouseEnter={() => handleMouseEnter(product.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <img
                    src={
                      hoveredProductId === product.id && hoveredImageUrl
                        ? hoveredImageUrl
                        : product.mainImage
                    }
                    alt={product.name}
                    className="absolute inset-0 h-full w-full object-cover object-center"
                  />
                </div>

                <div className="mt-2 font-bold">{product.name}</div>
              </Link>
              <div className="mt-1 font-semibold text-gray-600">
                ${product.price}
              </div>
            </div>
          ))}
        </div>
        {showLeftArrow && (
          <button
            className="absolute -left-5 top-1/2 -translate-y-1/2 rounded-full bg-gray-200 p-2 hover:bg-gray-300"
            onClick={scrollLeft}
          >
            <FaChevronLeft className="text-xl text-gray-600" />
          </button>
        )}
        {showRightArrow && (
          <button
            className="absolute -right-5 top-1/2 -translate-y-1/2 rounded-full bg-gray-200 p-2 hover:bg-gray-300"
            onClick={scrollRight}
          >
            <FaChevronRight className="text-xl text-gray-600" />
          </button>
        )}
      </div>
    </section>
  );
};
