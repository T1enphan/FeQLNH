import React from "react";
import Navbar from "../Component_User/Navbar";
import Footer from "../Component_User/Footer";

function ClientLayout({ children }) {
  return (
    <div>
      <Navbar />
      <section className="topcategory-section centred">
        <div className="auto-container">
          <div className="row clearfix">{children}</div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default ClientLayout;
