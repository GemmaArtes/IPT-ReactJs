import React from "react";

import { Routes, Route } from "react-router-dom";
import Blackboard from "./Blackboard";
import Products from "../Screens/Products";
import AddProducts from "../Screens/AddProducts";
import Category from "../Screens/Category";
import AddCategory from "../Screens/AddCategory";
import Sidebar from './Sidebar';

function Dashboard() {
  return (
    <>
      <Sidebar />
      <div className="dashcontainer">
        <div className="dashboard">
          <h1> </h1>

          <Routes>
            <Route path="" element={<Blackboard />} />
            <Route path="products" element={<Products />} />
            <Route path="add_products" element={<AddProducts />} />
            <Route path="category" element={<Category />} />
            <Route path="add_category" element={<AddCategory />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default Dashboard;