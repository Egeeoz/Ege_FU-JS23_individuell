import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import MenuPage from "./pages/MenuPage";
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/CartPage";
import StatusPage from "./pages/StatusPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/menu" element={<MenuPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/status" element={<StatusPage />} />
    </Routes>
  );
};

export default AppRoutes;
