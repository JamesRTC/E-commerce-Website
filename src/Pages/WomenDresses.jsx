import { Link } from "react-router-dom";
import { products } from "../API/productsAPI";
import { ProductCard } from "../components/ProductCard";

export const WomenDresses = () => {
  const category = "women";
  return (
    <section className="px-10">
      <div className="pt-5 text-xs uppercase">
        <Link to={`/${category}`}>
          <span className="pr-2 text-gray-400">{`${category}`}</span>/
          <span className="pl-2">dresses</span>
        </Link>
      </div>
      <h1 className="py-5 text-2xl font-semibold uppercase">Dresses</h1>
      <div className="grid grid-cols-3 gap-5">
        {products.women
          .filter((item) => item.type === "dresses")
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
