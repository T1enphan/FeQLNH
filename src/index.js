import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes, Form } from "react-router-dom";

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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App>
        <Routes>
          <Route path="/user" element={<Test></Test>} />
          <Route path="/blog" element={<Blog></Blog>} />
          <Route path="/country" element={<Country></Country>} />
          <Route path="/register" element={<Register></Register>} />
          <Route path="/login" element={<Login></Login>} />
          <Route path="/update-user" element={<User></User>} />
          <Route path="/blog-detail/:id" element={<BlogDetail></BlogDetail>} />
          <Route path="/blog-list" element={<BlogList></BlogList>} />
        </Routes>
      </App>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
