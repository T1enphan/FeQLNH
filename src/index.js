import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Test from "./Admin/test";
import Blog from "./Blog/Blog";
import Country from "./Country/Country";
import Register from "./Admin/register";
import Login from "./Admin/login";
import User from "./User/User";
import BlogDetail from "./Blog/BlogDetail";
import BlogList from "./Blog/BlogList";
import Brand from "./Brand/brand";
import Category from "./Category/category";
import Product from "./Product/product";
import ClientHome from "./Client_User/Home_page"; // Component giao diện client
import withAuth from "./withAuth"; // Import HOC
import Products_client from "./Client_User/Product_client";
import BlogClient from "./Client_User/Blog_Detail_Client";
import CartPage from "./Client_User/Cart_page";
import AccountClient from "./User_client/Login";

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
          {/* Admin routes */}
          <Route path="/" element={<ProtectedTest />} />
          <Route path="/user" element={<ProtectedUser />} />
          <Route path="/blog" element={<ProtectedBlog />} />
          <Route path="/country" element={<ProtectedCountry />} />

          <Route path="/admin/register" element={<Register />} />
          <Route path="/admin/login" element={<Login />} />

          <Route path="/update-user/:id" element={<ProtectedUser />} />
          <Route path="/blog-detail/:id" element={<ProtectedBlogDetail />} />
          <Route path="/blog-list" element={<ProtectedBlogList />} />
          <Route path="/brand" element={<ProtectedBrand />} />
          <Route path="/category" element={<ProtectedCategory />} />
          <Route path="/product" element={<ProtectedProduct />} />
          {/* Client routes */}
          <Route path="/client/home" element={<ClientHome />} />
          <Route path="/client/products" element={<Products_client />} />
          <Route path="/client/blog-detail/:id" element={<BlogClient />} />
          <Route path="/client/cart" element={<CartPage />} />
          <Route path="/client/account" element={<AccountClient />} />
          {/* Thêm các route khác cho client tại đây */}
        </Routes>
      </App>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
