import { Link, useNavigate } from "react-router-dom";

export const StackedImages = ({ heroImages }) => {
  const navigate = useNavigate();
  const handleButtonClick = (index) => {
    navigate(heroImages[index].path);
  };
  return (
    <div>
      {heroImages?.map((image, index) => (
        <Link to={heroImages[index].path} key={index}>
          <div className="relative">
            <img
              src={image.image}
              alt={image.text}
              className="h-[600px] w-full object-cover object-center"
            />
            <div className="absolute bottom-[60px] left-10">
              <p className="pb-3 text-lg font-bold uppercase">
                {image.subtext}
              </p>
              <p className="pb-3 text-4xl font-bold uppercase">{image.text}</p>
              <button
                onClick={() => handleButtonClick(index)}
                className="relative z-10 border border-black px-5 py-2 font-bold uppercase transition-all duration-300 hover:border-gray-500 hover:text-gray-500"
              >
                Shop now
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};