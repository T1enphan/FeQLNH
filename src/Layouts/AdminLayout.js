import React from "react";
import Header from "../component/Header";
import MenuLeft from "../component/MenuLeft";
import Footer from "../component/Footer";
import "../App.css";
import { useLocation } from "react-router-dom";

function AdminLayout(props) {
  const location = useLocation();
  const { pathname } = location;

  // Ẩn các component admin nếu đường dẫn có chứa "/login", "/register", hoặc có từ "user"
  const hideComponents = pathname === "/login" || pathname === "/register";

  return (
    <div className="wrapper">
      {!hideComponents && <MenuLeft />}
      <div className="main">
        {!hideComponents && <Header />}
        <main className="content">
          <div className="container-fluid p-0">{props.children}</div>
        </main>
        {!hideComponents && <Footer />}
      </div>
    </div>
  );
}

export default AdminLayout;
