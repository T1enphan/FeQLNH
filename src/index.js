import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Test from "./TestDame/test";
import Blog from "./Blog/Blog";
import Country from "./Country/Country";
import Register from "./TestDame/register";
import Login from "./TestDame/login";
import User from "./User/User";
import BlogDetail from "./Blog/BlogDetail";
import BlogList from "./Blog/BlogList";
import Brand from "./Brand/brand";
import Category from "./Category/category";
import Product from "./Product/product";
import withAuth from "./withAuth"; // Import HOC

const ProtectedTest = withAuth(Test);
const ProtectedBlog = withAuth(Blog);
const ProtectedCountry = withAuth(Country);
const ProtectedUser = withAuth(User);
const ProtectedBlogDetail = withAuth(BlogDetail);
const ProtectedBlogList = withAuth(BlogList);
const ProtectedBrand = withAuth(Brand);
const ProtectedCategory = withAuth(Category);
const ProtectedProduct = withAuth(Product);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App>
        <Routes>
          <Route path="/" element={<ProtectedTest />} />
          <Route path="/user" element={<ProtectedUser />} />
          <Route path="/blog" element={<ProtectedBlog />} />
          <Route path="/country" element={<ProtectedCountry />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/update-user/:id" element={<ProtectedUser />} />
          <Route path="/blog-detail/:id" element={<ProtectedBlogDetail />} />
          <Route path="/blog-list" element={<ProtectedBlogList />} />
          <Route path="/brand" element={<ProtectedBrand />} />
          <Route path="/category" element={<ProtectedCategory />} />
          <Route path="/product" element={<ProtectedProduct />} />
        </Routes>
      </App>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
