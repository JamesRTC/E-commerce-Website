import { Outlet } from "react-router-dom";
import { Nav } from "./Nav";
import { useState } from "react";

export const AppLayout = () => {
  const [mobileNav, setMobileNav] = useState(false);

  function toggleMobileNav() {
    setMobileNav(!mobileNav);
  }

  return (
    <>
      <Nav
        toggleMobileNav={toggleMobileNav}
        mobileNav={mobileNav}
        setMobileNav={setMobileNav}
      />
      {!mobileNav && <Outlet />}
    </>
  );
};
