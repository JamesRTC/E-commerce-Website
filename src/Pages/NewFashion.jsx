import { products } from "../API/productsAPI";
import { ProductCard } from "../components/ProductCard";

export const NewFashion = () => {
  const category = "newArrivals";
  return (
    <section className="px-10">
      <div className="grid grid-cols-3 gap-5">
        {products.newArrivals.map((product) => (
          <ProductCard category={category} key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
