import { Link } from "react-router-dom";
import { products } from "../API/productsAPI";
import { ProductCard } from "../components/ProductCard";

export const MenFashion = () => {
  const category = "men";
  const type = "men fashion";
  return (
    <section className="px-10">
      <div className="pt-5 text-xs uppercase">
        <Link to={`/${category}`}>
          <span className="pr-2 text-gray-400">{`${category}`}</span>/
        </Link>
        <span className="pl-2">MEN'S FASHION</span>
      </div>
      <h1 className="py-5 text-2xl font-semibold uppercase">MEN'S FASHION</h1>
      <div className="grid grid-cols-3 gap-5">
        {products.men
          .filter((item) => item.type === type)
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
