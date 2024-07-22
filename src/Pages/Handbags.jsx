import { Link } from "react-router-dom";
import { products } from "../API/productsAPI";
import { ProductCard } from "../components/ProductCard";
import { handbags } from "../assets/Hero Images";
import { useEffect } from "react";

export const Handbags = () => {
  const category = "women";
  const type = "handbags";
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <section className="">
      <div>
        <img src={handbags} alt="" />
      </div>

      <div className="px-10">
        <div className="pt-5 text-xs uppercase">
          <Link to={`/${category}`}>
            <span className="pr-2 text-gray-400">{`${category}`}</span>/
          </Link>
          <span className="pl-2">{type}</span>
        </div>
        <h1 className="py-5 text-2xl font-semibold uppercase">{type}</h1>
        <div className="grid grid-cols-3 gap-5">
          {products[category]
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
