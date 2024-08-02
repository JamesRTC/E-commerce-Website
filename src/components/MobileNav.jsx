import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";

export const MobileNav = ({ mobileNav, setMobileNav }) => {
  const closeMobileNav = () => setMobileNav(!mobileNav);

  const [menuState, setMenuState] = useState({
    NEW: false,
    NEW_MEN: false,
    NEW_WOMEN: false,
    MEN: false,
    WOMEN: false,
    GIFTS: false,
  });

  const toggleMenu = (menu) => {
    setMenuState((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  return (
    <div className="nav-content p-5">
      <div onClick={closeMobileNav} className="flex justify-end">
        <IoMdClose className="size-7" />
      </div>
      <nav className="mt-5 flex list-none flex-col space-y-5 font-semibold">
        <li
          onClick={() => toggleMenu("NEW")}
          className="flex items-center justify-between text-xl"
        >
          <span>NEW</span>
          <span>
            {menuState.NEW ? (
              <IoIosArrowUp className="size-7" />
            ) : (
              <IoIosArrowDown className="size-7" />
            )}
          </span>
        </li>
        {menuState.NEW && (
          <ul className="ml-5" onClick={closeMobileNav}>
            <li
              onClick={() => toggleMenu("NEW_MEN")}
              className="flex items-center justify-between text-lg"
            >
              <Link to="/men's fashion/men">
                <span>MEN'S FASHION</span>
              </Link>
            </li>

            <li
              onClick={() => toggleMenu("NEW_WOMEN")}
              className="flex items-center justify-between text-lg"
            >
              <Link to="/women's fashion/men">
                <span>WOMEN'S FASHION</span>
              </Link>
            </li>
          </ul>
        )}
        <li
          onClick={() => toggleMenu("MEN")}
          className="flex items-center justify-between text-xl"
        >
          <span>MEN</span>
          <span>
            {menuState.MEN ? (
              <IoIosArrowUp className="size-7" />
            ) : (
              <IoIosArrowDown className="size-7" />
            )}
          </span>
        </li>
        {menuState.MEN && (
          <ul
            className="ml-5 list-none text-lg uppercase"
            onClick={closeMobileNav}
          >
            <Link to="/men's shoes/men">
              <li>Shoes</li>
            </Link>
            <Link to="/suits/men">
              <li>Suits</li>
            </Link>
            <Link to="/knitwear/men">
              <li>Knitwear</li>
            </Link>
            <Link to="/men's fashion/men">
              <li>Men's Fashion</li>
            </Link>
          </ul>
        )}
        <li
          onClick={() => toggleMenu("WOMEN")}
          className="flex items-center justify-between text-xl"
        >
          <span>WOMEN</span>
          <span>
            {menuState.WOMEN ? (
              <IoIosArrowUp className="size-7" />
            ) : (
              <IoIosArrowDown className="size-7" />
            )}
          </span>
        </li>
        {menuState.WOMEN && (
          <ul
            className="ml-5 list-none text-lg uppercase"
            onClick={closeMobileNav}
          >
            <Link to="/women's shoes/women">
              <li>Shoes</li>
            </Link>
            <Link to="/dresses/women">
              <li>Dresses</li>
            </Link>
            <Link to="/handbags/women">
              <li>handbags</li>
            </Link>
            <Link to="/women's fashion/women">
              <li>Women's Fashion</li>
            </Link>
          </ul>
        )}
        {/* <li
          onClick={() => toggleMenu("GIFTS")}
          className="flex items-center justify-between text-xl"
        >
          <span>GIFTS</span>
          <span>
            {menuState.GIFTS ? (
              <IoIosArrowDown className="size-7" />
            ) : (
              <IoIosArrowUp className="size-7" />
            )}
          </span>
        </li> */}
        {/* {menuState.GIFTS && (
          <ul className="ml-5 list-disc">
            <Link to="/gifts">
              <li>Gifts</li>
            </Link>
          </ul>
        )} */}
      </nav>
    </div>
  );
};
