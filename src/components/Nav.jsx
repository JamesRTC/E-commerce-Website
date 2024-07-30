import { GoPerson } from "react-icons/go";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { getTotalCartQuantity } from "../Redux/cartSlice";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { MobileNav } from "./MobileNav";

export const Nav = ({ toggleMobileNav, mobileNav, setMobileNav }) => {
  const totalCartQuantity = useSelector(getTotalCartQuantity);

  return (
    <section className="border-b-[1px] pb-5">
      <div className="fixed left-0 right-0 top-0 z-50 bg-white">
        <nav className="px-10 max-sm:hidden">
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
            <Link to="/viewcart">
              <li className="relative cursor-pointer">
                <HiOutlineShoppingBag className="size-5 cursor-pointer transition-all duration-300 hover:text-slate-500" />
                {totalCartQuantity > 0 && (
                  <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-black p-1 text-[10px] text-white">
                    {totalCartQuantity}
                  </span>
                )}
              </li>
            </Link>
          </ul>
        </nav>

        <nav>
          <div className="mb-5 px-10 max-sm:hidden">
            <ul className="flex items-end gap-7 tracking-tighter">
              <Link to="/">
                <li className="cursor-pointer text-4xl font-bold uppercase">
                  JAMES & CO.
                </li>
              </Link>
              <Link to="/new">
                <li className="cursor-pointer text-xl font-bold uppercase transition-all duration-300 hover:text-slate-500">
                  NEW
                </li>
              </Link>
              <Link to="/men">
                <li className="cursor-pointer text-xl font-bold uppercase transition-all duration-300 hover:text-slate-500">
                  MEN
                </li>
              </Link>
              <Link to="/women">
                <li className="cursor-pointer text-xl font-bold uppercase transition-all duration-300 hover:text-slate-500">
                  WOMEN
                </li>
              </Link>
              <li className="cursor-pointer text-xl font-bold uppercase transition-all duration-300 hover:text-slate-500">
                GIFTS
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {/* mobile nav */}
      <>
        {!mobileNav && (
          <nav className="fixed left-0 right-0 top-0 z-50 hidden bg-white px-5 pb-5 pt-3 max-sm:block">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <RxHamburgerMenu
                  className="size-4 cursor-pointer text-black transition-all duration-300"
                  onClick={toggleMobileNav}
                />
              </div>
              <div className="text-2xl font-semibold">
                {" "}
                <Link to="/">
                  <span className="cursor-pointer uppercase">JAMES & CO.</span>
                </Link>
              </div>

              <div>
                <Link to="/viewcart">
                  <div className="relative cursor-pointer">
                    <HiOutlineShoppingBag className="size-4 cursor-pointer transition-all duration-300 hover:text-slate-500" />
                    {totalCartQuantity > 0 && (
                      <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-black p-1 text-[10px] text-white">
                        {totalCartQuantity}
                      </span>
                    )}
                  </div>
                </Link>
              </div>
            </div>
            <div className="relative flex items-center">
              <IoSearchOutline className="mr-3 size-4 cursor-pointer transition-all duration-300 hover:text-slate-500" />
              <input
                type="text"
                placeholder="search"
                className="input border-b-2 placeholder:text-xs placeholder:font-bold placeholder:uppercase focus:border-black focus:outline-none"
              />
            </div>
          </nav>
        )}
      </>
      {mobileNav && (
        <MobileNav mobileNav={mobileNav} setMobileNav={setMobileNav} />
      )}
    </section>
  );
};
