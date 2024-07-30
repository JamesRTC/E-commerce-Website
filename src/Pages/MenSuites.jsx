import { Link } from "react-router-dom";
import { products } from "../API/productsAPI";
import { ProductCard } from "../components/ProductCard";
import { useEffect } from "react";

export const MenSuites = () => {
  const category = "men";
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <section className="mt-10 px-10">
      <div className="pt-5 text-xs uppercase">
        <Link to={`/${category}`}>
          <span className="pr-2 text-gray-400">{`${category}`}</span>/
        </Link>
        <span className="pl-2">Suits</span>
      </div>
      <h1 className="py-5 text-2xl font-semibold uppercase">Suits</h1>
      <div className="grid grid-cols-3 gap-5">
        {products.men
          .filter((item) => item.type === "suits")
          .map((product) => (
            <ProductCard
              category={category}
              key={product.id}
              product={product}
            />
          ))}
      </div>
    </section>
  );
};
