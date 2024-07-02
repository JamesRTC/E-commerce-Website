import { HiOutlineShoppingBag } from "react-icons/hi2";
import { GoPerson } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";

export const AppLayout = () => {
  return (
    <section className="px-10">
      <nav>
        <ul className="flex items-center justify-end gap-5 py-10">
          <li>
            <div className="search-container relative flex items-center justify-center">
              <input
                type="text"
                placeholder="search"
                className="input border-b-2 placeholder:text-xs placeholder:font-bold placeholder:uppercase focus:border-black focus:outline-none"
              />

              <IoSearchOutline className="size-6 cursor-pointer" />
            </div>
          </li>
          <ul className="cursor-pointer">
            <GoPerson className="size-6 cursor-pointer" />
          </ul>
          <li className="cursor-pointer">
            <HiOutlineShoppingBag className="size-6 cursor-pointer" />
          </li>
        </ul>
      </nav>

      <nav>
        <ul className="flex items-end gap-5 tracking-tighter">
          <li className="cursor-pointer text-4xl font-semibold uppercase">
            JAMES & CO.
          </li>
          <li className="cursor-pointer text-2xl font-semibold uppercase">
            NEW
          </li>
          <li className="cursor-pointer text-2xl font-semibold uppercase">
            MEN
          </li>
          <li className="cursor-pointer text-2xl font-semibold uppercase">
            WOMEN
          </li>
          <li className="cursor-pointer text-2xl font-semibold uppercase">
            EYEWEAR
          </li>
          <li className="cursor-pointer text-2xl font-semibold uppercase">
            GIFTS
          </li>
        </ul>
      </nav>
    </section>
  );
};
