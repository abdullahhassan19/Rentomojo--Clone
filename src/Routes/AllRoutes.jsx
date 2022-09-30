import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import Category from "../Components/PackageCompo/Category"
import Cart from "../Pages/Cart";
import Electronics from "../Category/Electronics/Electronics";

import CreditCard from "../Pages/CreditCard";
import PaymentSucc from "../Pages/PaymentSucc";
import Fitness from "../Category/Fitness/Fitness";
// import card from "../Pages/Cardcheck";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/packages" element={<Category />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/fitness" element={<Fitness/>} />
        {/* <Route path="/debetcard" element={<DebetCard/>} /> */}
        <Route path="/debetcard" element={<CreditCard/>} />
        <Route path="/paymentsuccess" element={<PaymentSucc/>} />
        
        </Routes>
    </>
  );
};
// Category


export default AllRoutes;