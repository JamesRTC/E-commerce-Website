import { Link } from "react-router-dom";
import { products } from "../API/productsAPI";
import { women } from "../assets/Hero Images";
import { ProductCard } from "../components/ProductCard";
import { useEffect } from "react";
export const WomenFashion = () => {
  const category = "women";
  const type = "women's fashion";

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <section className="max-sm:mt-[90px] sm:mt-[145px]">
      <div>
        <img
          src={women}
          className="h-[450px] w-full object-cover object-center max-sm:h-[100px]"
          alt=""
        />
      </div>

      <div className="px-10 max-sm:px-5">
        <div className="pt-5 text-xs uppercase">
          <Link to={`/${category}`}>
            <span className="pr-2 text-gray-400">{`${category}`}</span>/
          </Link>
          <span className="pl-2">{type}</span>
        </div>
        <h1 className="py-5 text-2xl font-semibold uppercase">{type}</h1>
        <div className="grid max-sm:grid-cols-2 max-sm:gap-2 md:grid-cols-3 md:gap-3 lg:gap-5">
          {products.women
            .filter((item) => item.type === type)
            .map((product) => (
              <ProductCard
                category={category}
                key={product.id}
                product={product}
              />
            ))}
        </div>
      </div>
    </section>
  );
};
