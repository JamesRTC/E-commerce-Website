import { GoPerson } from "react-icons/go";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { getTotalCartQuantity } from "../Redux/cartSlice";

export const Nav = () => {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  return (
    <section className="border-b-[1px] px-10 pb-5">
      <nav>
        <ul className="flex items-center justify-end gap-5 py-10">
          <li>
            <div className="relative flex items-center justify-center">
              <input
                type="text"
                placeholder="search"
                className="input border-b-2 placeholder:text-xs placeholder:font-bold placeholder:uppercase focus:border-black focus:outline-none"
              />

              <IoSearchOutline className="size-5 cursor-pointer transition-all duration-300 hover:text-slate-500" />
            </div>
          </li>
          <ul className="cursor-pointer">
            <GoPerson className="size-5 cursor-pointer transition-all duration-300 hover:text-slate-500" />
          </ul>
          <li className="relative cursor-pointer">
            <HiOutlineShoppingBag className="size-5 cursor-pointer transition-all duration-300 hover:text-slate-500" />
            {totalCartQuantity > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-black p-1 text-[10px] text-white">
                {totalCartQuantity}
              </span>
            )}
          </li>
        </ul>
      </nav>

      <nav>
        <ul className="flex items-end gap-5 tracking-tighter">
          <li className="cursor-pointer text-4xl font-semibold uppercase">
            JAMES & CO.
          </li>
          <li className="cursor-pointer text-2xl font-semibold uppercase transition-all duration-300 hover:text-slate-500">
            NEW
          </li>
          <li className="cursor-pointer text-2xl font-semibold uppercase transition-all duration-300 hover:text-slate-500">
            MEN
          </li>
          <li className="cursor-pointer text-2xl font-semibold uppercase transition-all duration-300 hover:text-slate-500">
            WOMEN
          </li>
          <li className="cursor-pointer text-2xl font-semibold uppercase transition-all duration-300 hover:text-slate-500">
            EYEWEAR
          </li>
          <li className="cursor-pointer text-2xl font-semibold uppercase transition-all duration-300 hover:text-slate-500">
            GIFTS
          </li>
        </ul>
      </nav>
    </section>
  );
};
