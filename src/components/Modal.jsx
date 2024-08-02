import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { editItem } from "../Redux/cartSlice";

export const Modal = ({ item, product, onClose }) => {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [media, setMedia] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const [quantity, setQuantity] = useState(item.quantity);
  const [itemSize, setItemSize] = useState(item.size);
  const [showSizeError, setShowSizeError] = useState(false);
  const [videoPlaybackTime, setVideoPlaybackTime] = useState(0);
  const videoRef = useRef(null);
  const dispatch = useDispatch();
  const buttonRef = useRef(null);
  const [isSticky, setIsSticky] = useState(true);

  useEffect(() => {
    if (product) {
      setMedia([
        { type: "image", src: product.mainImage },
        ...product.subImages.map((src) => ({ type: "image", src })),
        ...product.subVideos.map((src) => ({ type: "video", src })),
      ]);
      setCurrentMediaIndex(0);
    }
  }, [product]);

  useEffect(() => {
    if (
      media.length &&
      media[currentMediaIndex].type === "video" &&
      videoRef.current
    ) {
      videoRef.current.currentTime = videoPlaybackTime;
      videoRef.current.play();
    }
  }, [currentMediaIndex, media, videoPlaybackTime]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(entry.isIntersecting);
      },
      { threshold: 1.0 },
    );

    if (buttonRef.current) {
      observer.observe(buttonRef.current);
    }

    return () => {
      if (buttonRef.current) {
        observer.unobserve(buttonRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handlePrevious = () => {
    if (media[currentMediaIndex].type === "video" && videoRef.current) {
      setVideoPlaybackTime(videoRef.current.currentTime);
    }
    setCurrentMediaIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : media.length - 1,
    );
  };

  const handleNext = () => {
    if (media[currentMediaIndex].type === "video" && videoRef.current) {
      setVideoPlaybackTime(videoRef.current.currentTime);
    }
    setCurrentMediaIndex((prevIndex) =>
      prevIndex < media.length - 1 ? prevIndex + 1 : 0,
    );
  };

  const handleEditCart = () => {
    if (product.sizes.length > 0 && !itemSize) {
      setShowSizeError(true);
      return;
    }

    const editedItem = {
      productId: product.id,
      name: product.name,
      category: product.category,
      size: itemSize,
      quantity: quantity,
      unitPrice: product.price,
      totalPrice: product.price * quantity,
    };

    dispatch(editItem(editedItem));
    setShowSizeError(false);
    onClose(); // Close the modal after adding to cart
  };

  const handleSelectSize = (size) => {
    setItemSize(size);
    setShowSizeError(false);
  };

  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  const currentMedia = media[currentMediaIndex];
  if (!media.length) {
    return <p>Product media not found</p>;
  }

  return (
    <section className="max-w-[800px] py-5">
      <div className="flex gap-10 max-sm:grid max-sm:gap-5">
        <div className="relative flex w-2/4 items-start gap-5 max-sm:w-full">
          <div
            className="h-full w-full max-sm:relative max-sm:h-0 max-sm:w-full max-sm:pb-[110%]"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {currentMedia.type === "image" ? (
              <img
                src={currentMedia.src}
                alt="current product media"
                className="h-full w-full object-cover max-sm:absolute max-sm:inset-0"
              />
            ) : (
              <video
                ref={videoRef}
                src={currentMedia.src}
                controls
                className="h-full w-full object-cover"
                onEnded={handleVideoEnd}
              >
                Your browser does not support the video tag.
              </video>
            )}

            {isHovered && (
              <>
                <button
                  onClick={handlePrevious}
                  className="absolute left-5 top-1/2 -translate-y-1/2 transform rounded-full p-2"
                >
                  <FaChevronLeft className="text-xl" />
                </button>

                <button
                  onClick={handleNext}
                  className="absolute right-5 top-1/2 -translate-y-1/2 transform rounded-full p-2"
                >
                  <FaChevronRight className="text-xl" />
                </button>
              </>
            )}
          </div>
        </div>
        <div className="w-2/4 max-sm:w-full">
          <div className="mb-1 font-bold">{product.name}</div>
          <div className="mb-5 font-semibold">${product.price}</div>
          {product.stock && (
            <div className="mb-5 text-xs uppercase text-gray-400">
              stock: <span className="px-1 text-black">{product.stock}</span>
            </div>
          )}
          {product.sizes.length > 0 && (
            <div className="mb-1 text-xs uppercase text-gray-400">
              size: <span className="px-1 text-black">{itemSize}</span>
            </div>
          )}
          {showSizeError && (
            <div className="text-xs font-semibold text-red-600">
              Please select a size
            </div>
          )}
          <div className="mb-5 flex flex-wrap gap-2">
            {product.sizes?.map((size, index) => (
              <div
                key={index}
                onClick={() => handleSelectSize(size)}
                className={`cursor-pointer border ${
                  itemSize === size ? "border-black" : "border-gray-300"
                } px-6 py-2 hover:border-black`}
              >
                {size}
              </div>
            ))}
          </div>
          <div className="mb-5">
            <span className="pr-1 text-xs uppercase text-gray-400">Color:</span>
            <span className="text-xs uppercase">As in picture</span>
          </div>
          <div className="mb-1 text-xs uppercase">Quantity</div>
          <div className="mb-5 w-[100px]">
            <select
              name="quantity"
              id="quantity"
              className="w-full border border-gray-400 p-2 focus:outline-none"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
          <div
            className={`w-full transition-all duration-300 ${isSticky ? "sticky -bottom-[20px]" : ""}`}
            ref={buttonRef}
          >
            <button
              onClick={handleEditCart}
              className={`w-full ${
                product.sizes.length > 0 && !itemSize
                  ? "bg-stone-300 text-black/30"
                  : "cursor-pointer bg-black text-white"
              } py-3 font-bold uppercase transition-all duration-300 hover:bg-black/50`}
            >
              update bag
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
