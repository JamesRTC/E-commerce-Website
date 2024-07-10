import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppLayout } from "../components/AppLayout";
import { Hero } from "../Pages/Hero";
import { ViewProduct } from "../components/ViewProduct";
import { Men } from "../Pages/Men";
import { Women } from "../Pages/Women";
import { WomenShoes } from "../Pages/WomenShoes";
import { MenShoes } from "../Pages/MenShoes";
import { WomenDresses } from "../Pages/WomenDresses";
import { MenClothes } from "../Pages/MenClothes";
import { NewFashion } from "../Pages/NewFashion";
import { MenSuites } from "../Pages/MenSuites";

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
          <Route path="newArrivals" element={<NewFashion />} />
          <Route path="women" element={<Women />} />
          <Route path="men" element={<Men />} />
          <Route path="suits/:men" element={<MenSuites />} />
          <Route path="shoes/:men" element={<MenShoes />} />
          <Route path="shoes/:women" element={<WomenShoes />} />
          <Route path="dresses/:women" element={<WomenDresses />} />
          <Route path="/menfashion/:men" element={<MenClothes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
