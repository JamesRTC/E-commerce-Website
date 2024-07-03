import { Outlet } from "react-router-dom";
import { Nav } from "./Nav";

export const AppLayout = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};
