import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
export const EmptyCart = () => {
  return (
    <section className="min-h-screen px-10 max-sm:mt-[90px] max-sm:px-5 sm:mt-[145px] md:mr-[50%]">
      <Link to="/">
        <span className="mb-3 flex items-center hover:font-semibold">
          <IoIosArrowRoundBack />
          <span> back to menu</span>
        </span>
      </Link>

      <h1 className="upppercase max-sm:md text-xl font-semibold">
        shopping bag
      </h1>
      <div className="upppercase max-sm:text-sm">
        Your shopping bag is empty
      </div>
    </section>
  );
};
