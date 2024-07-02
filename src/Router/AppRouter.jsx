import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppLayout } from "../components/AppLayout";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
