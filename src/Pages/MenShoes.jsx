import { products } from "../API/productsAPI";
import { ProductCard } from "../components/ProductCard";
export const MenShoes = () => {
  const category = "men";
  return (
    <section className="px-10">
      <div className="grid grid-cols-3 gap-5">
        {products.men
          .filter((item) => item.type === "shoes")
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
