import { Outlet } from "react-router-dom";
import { Nav } from "./Nav";

import { Footer } from "./Footer";
import { useState } from "react";
export const AppLayout = () => {
  const [mobileNav, setMobileNav] = useState(false);

  function toggleMobileNav() {
    setMobileNav(!mobileNav);
  }

  return (
    <div className="font-roboto flex min-h-screen flex-col">
      <Nav
        toggleMobileNav={toggleMobileNav}
        mobileNav={mobileNav}
        setMobileNav={setMobileNav}
      />
      <section className="mb-10 min-h-screen max-sm:mb-5">
        {!mobileNav && <Outlet />}
      </section>
      {!mobileNav && <Footer />}
    </div>
  );
};
