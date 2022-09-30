import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import Category from "../Components/PackageCompo/Category"
import Cart from "../Pages/Cart";
import Electronics from "../Category/Electronics/Electronics";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/packages" element={<Category />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/electronics" element={<Electronics />} />

        </Routes>
    </>
  );
};
// Category


export default AllRoutes;