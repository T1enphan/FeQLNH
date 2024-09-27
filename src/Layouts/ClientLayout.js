import React from "react";
import Navbar from "../Component_User/Navbar";
import Footer from "../Component_User/Footer";
import { useLocation } from "react-router-dom";
function ClientLayout({ children }) {
  const location = useLocation();
  const { pathname } = location;

  const hideComponents =
    pathname === "/user/login" || pathname === "/user/register";
  return (
    <div>
      {!hideComponents && <Navbar />}
      <section className="topcategory-section centred">
        <div className="auto-container">
          <div className="row clearfix">{children}</div>
        </div>
      </section>
      {!hideComponents && <Footer />}
    </div>
  );
}

export default ClientLayout;
