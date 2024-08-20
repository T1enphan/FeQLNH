import React from "react";
import { useLocation } from "react-router-dom";
import AdminLayout from "./Layouts/AdminLayout";
import ClientLayout from "./Layouts/ClientLayout";

function App(props) {
  const location = useLocation();
  const { pathname } = location;

  // Kiểm tra nếu đường dẫn chứa từ "client", sử dụng layout client
  const isClient = pathname.includes("/client");

  return isClient ? (
    <ClientLayout>{props.children}</ClientLayout>
  ) : (
    <AdminLayout>{props.children}</AdminLayout>
  );
}

export default App;
