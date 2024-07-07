import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppLayout } from "../components/AppLayout";
import { Hero } from "../Pages/Hero";
import { ViewProduct } from "../components/ViewProduct";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Hero />} />
          <Route
            path="viewProduct/:category/:name/:id"
            element={<ViewProduct />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
