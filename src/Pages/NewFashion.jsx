// import { Link } from "react-router-dom";
import { useEffect } from "react";
import { products } from "../API/productsAPI";
import { ProductCard } from "../components/ProductCard";

export const NewFashion = () => {
  const category = "newArrivals";
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <section className="px-10">
      {/* <div className="pt-5 text-xs uppercase">
        <Link to={`/${category}`}>
          <span className="pr-2 text-gray-400">{`${category}`}</span>/
          <span className="pl-2">New arrivals</span>
        </Link>
      </div> */}
      <h1 className="py-5 text-2xl font-semibold uppercase">New arrivals</h1>
      <div className="grid grid-cols-3 gap-5">
        {products.newArrivals.map((product) => (
          <ProductCard category={category} key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
