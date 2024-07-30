import { Link } from "react-router-dom";

export const MobileNav = ({ mobileNav, setMobileNav }) => {
  const closeMobileNav = () => setMobileNav(!mobileNav);

  return (
    <div className="nav-content">
      <button onClick={closeMobileNav}>Close Mobile Nav</button>
      <nav className="mt-10 flex flex-col space-y-5">
        <Link to="/new" onClick={closeMobileNav} className="text-xl">
          NEW
        </Link>
        <Link to="/men" onClick={closeMobileNav} className="text-xl">
          MEN
        </Link>
        <Link to="/women" onClick={closeMobileNav} className="text-xl">
          WOMEN
        </Link>
        <Link to="/gifts" onClick={closeMobileNav} className="text-xl">
          GIFTS
        </Link>
      </nav>
    </div>
  );
};
