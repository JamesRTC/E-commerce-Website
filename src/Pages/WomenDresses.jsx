import { Link } from "react-router-dom";
import { products } from "../API/productsAPI";
import { ProductCard } from "../components/ProductCard";

export const WomenDresses = () => {
  const category = "women";
  return (
    <section className="px-10 max-sm:mt-[80px] max-sm:px-5 sm:mt-[145px]">
      <div className="pt-5 text-xs uppercase">
        <Link to={`/${category}`}>
          <span className="pr-2 text-gray-400">{`${category}`}</span>/
        </Link>
        <span className="pl-2">dresses</span>
      </div>
      <h1 className="py-5 text-2xl font-semibold uppercase">Dresses</h1>
      <div className="grid max-sm:grid-cols-2 max-sm:gap-2 md:grid-cols-3 md:gap-3 lg:gap-5">
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
