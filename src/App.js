import React from "react";
import { useLocation } from "react-router-dom";
import AdminLayout from "./Layouts/AdminLayout";
import ClientLayout from "./Layouts/ClientLayout";
import { CartProvider } from "./Client_User/CartContext";

function App(props) {
  const location = useLocation();
  const { pathname } = location;

  // Kiểm tra nếu đường dẫn chứa từ "client", sử dụng layout client
  const isClient = pathname.includes("/client");

  return isClient ? (
    <CartProvider>
      <ClientLayout>{props.children}</ClientLayout>
    </CartProvider>
  ) : (
    <AdminLayout>{props.children}</AdminLayout>
  );
}

export default App;
