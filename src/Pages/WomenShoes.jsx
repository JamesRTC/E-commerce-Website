import { Link } from "react-router-dom";
import { ProductCard } from "../components/ProductCard";
import { products } from "../API/productsAPI";
import { useEffect } from "react";

export const WomenShoes = () => {
  const category = "women";
  const type = "women's shoes";

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <section className="px-10">
      <div>
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
