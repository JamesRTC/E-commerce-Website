import { useParams } from "react-router-dom";
import { products } from "../API/productsAPI";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const ViewProduct = () => {
  const { category, name, id } = useParams();

  const [imageOnDislay, setImageOnDisplay] = useState(null);

  useEffect(() => {
    setImageOnDisplay(allImages[0]);
  }, []);

  const item = products[category].find((product) => product.id === Number(id));

  const allImages = [item.mainImage, ...item.subImages];

  console.log(allImages);

  return (
    <section className="p-10">
      {item ? (
        <div className="flex">
          <div className="flex w-3/5 items-start gap-5">
            <div className="">
              {allImages.map((image, index) => (
                <>
                  <div className="flex flex-col">
                    <div
                      key={index}
                      className="relative mb-10 h-[100px] w-[100px]"
                    >
                      <img
                        src={image}
                        alt="product image"
                        className="absolute inset-0 object-cover object-center"
                      />
                    </div>
                  </div>
                </>
              ))}
            </div>
            <div className="relative">
              <img src={imageOnDislay} alt="" />

              <button className="absolute left-5 top-1/2 -translate-y-1/2 rounded-full bg-gray-200 p-2 hover:bg-gray-300">
                <FaChevronLeft className="text-xl text-gray-600" />
              </button>

              <button className="absolute right-5 top-1/2 -translate-y-1/2 rounded-full bg-gray-200 p-2 hover:bg-gray-300">
                <FaChevronRight className="text-xl text-gray-600" />
              </button>
            </div>
          </div>

          <div className="w-2/5">product description</div>
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </section>
  );
};
