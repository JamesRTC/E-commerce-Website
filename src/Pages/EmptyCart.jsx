import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
export const EmptyCart = () => {
  return (
    <section>
      <Link to="/">
        <span className="flex items-center hover:font-semibold">
          <span>
            <IoIosArrowRoundBack />
          </span>
          <span> back to menu</span>
        </span>
      </Link>
      <h1 className="upperacase font-semibold">shopping bag</h1>
      <div>Your cart is empty. Do some shopping to populate the cart</div>
    </section>
  );
};
