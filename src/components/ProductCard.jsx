import { Link } from "react-router-dom";

import { products } from "../API/productsAPI";
import { useState } from "react";
export const ProductCard = ({ category, product }) => {
  const [hoveredProductId, setHoveredProductId] = useState(null);
  const [hoveredImageUrl, setHoveredImageUrl] = useState(null);

  const handleMouseEnter = (productId) => {
    const product = products[category].find((p) => p.id === productId);
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
    <div className="max-sm:min-w-[160px] md:min-w-[400px]">
      <Link to={`/viewProduct/${category}/${product.name}/${product.id}`}>
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

        <div className="mt-2 flex flex-wrap font-bold max-sm:text-[12px] sm:max-w-[70%] md:max-w-[90%] md:text-[15px]">
          {product.name}
        </div>
      </Link>
      <div className="mt-1 font-semibold text-gray-600 max-sm:text-sm">
        ${product.price}
      </div>
    </div>
  );
};
