import { Link, useParams } from "react-router-dom";
import { products } from "../API/productsAPI";
import { useEffect, useState, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const ViewProduct = () => {
  const { category, name, id } = useParams();
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [media, setMedia] = useState([]);
  const [videoPlaybackTime, setVideoPlaybackTime] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const videoRef = useRef(null);

  console.log(quantity);
  useEffect(() => {
    const item = products[category]?.find(
      (product) => product.id === Number(id),
    );
    if (item) {
      setMedia([
        { type: "image", src: item.mainImage },
        ...item.subImages.map((src) => ({ type: "image", src })),
        ...item.subVideos.map((src) => ({ type: "video", src })),
      ]);
      setCurrentMediaIndex(0);
    }
  }, [category, id]);

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

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  if (!media.length) {
    return <p>Product not found</p>;
  }

  const currentMedia = media[currentMediaIndex];
  const item = products[category]?.find((product) => product.id === Number(id));
  return (
    <section className="px-10">
      <div className="py-5 text-xs">
        <Link to={`/${item.category}`}>
          <span className="px-1 uppercase text-gray-400">{item.category} </span>
          /
        </Link>
        <Link to={`/${item.type}/${item.category}`}>
          <span className="px-1 uppercase text-gray-400">{item.type} </span> /
        </Link>
        <span className="px-1 uppercase">{name}</span>
      </div>
      <div className="flex gap-10">
        <div className="flex w-3/5 items-start gap-5">
          <div>
            {media.map((mediaItem, index) => (
              <div
                key={index}
                className={`relative mb-2 h-[100px] w-[100px] cursor-pointer ${
                  index === currentMediaIndex ? "border border-black" : ""
                }`}
                onClick={() => setCurrentMediaIndex(index)}
              >
                {mediaItem.type === "image" ? (
                  <img
                    src={mediaItem.src}
                    alt="product media"
                    className="h-full w-full object-cover object-center"
                  />
                ) : (
                  <video
                    src={mediaItem.src}
                    className="h-full w-full object-cover"
                    muted
                  >
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            ))}
          </div>

          <div
            className="relative h-full w-full"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {currentMedia.type === "image" ? (
              <img
                src={currentMedia.src}
                alt="current product media"
                className="h-full w-full object-cover"
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
        <div className="w-2/5">
          <div className="mb-1 font-bold"> {item.name} </div>
          <div className="mb-5 font-semibold"> ${item.price} </div>
          <div className="mb-1 flex text-xs uppercase text-gray-400">
            {" "}
            size:{" "}
          </div>
          <div className="mb-5 flex gap-2">
            {item.sizes?.map((size, index) => (
              <div key={index} className="border border-black px-6 py-2">
                {size}
              </div>
            ))}
          </div>

          <div className="mb-1 text-xs uppercase">Quantity</div>
          <div className="mb-5 w-[100px]">
            <select
              name="quantity"
              id="quantity"
              className="w-full border border-gray-400 p-2 focus:outline-none"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
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

          <button className="mb-10 w-full bg-black py-3 font-bold uppercase text-white">
            Add to bag
          </button>

          {item.description && (
            <>
              <div className="mb-1 font-semibold uppercase">details</div>
              <div>{item.description}</div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
