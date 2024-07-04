import { products } from "../API/productsAPI";

export const NewArrivals = () => {
  return (
    <section className="p-10">
      <h1 className="text-2xl font-bold uppercase">New Arrivals</h1>
      <h2 className="text-xl font-semibold uppercase">Shop all</h2>

      {products.newArrivals.map((product) => (
        <div key={product.id}>
          <img src={product.mainImage} alt={product.name} />
        </div>
      ))}
    </section>
  );
};
