import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

export default function MenuLeft() {
  const location = useLocation();
  const [dataAdmin, setDataAdmin] = useState([]);
  const adminData = JSON.parse(localStorage.getItem("AdminAccount"));
  const admin = adminData?.admin;
  const role = admin?.role;

  useEffect(() => {
    async function getData() {
      const admin1 = JSON.parse(localStorage.getItem("AdminAccount"));
      setDataAdmin(admin1.admin);
    }
    getData();
  }, []);

  return (
    <>
      <nav id="sidebar" className="sidebar js-sidebar">
        <div className="sidebar-content js-simplebar">
          {dataAdmin ? (
            <a className="sidebar-brand" href="index.html">
              <span className="align-middle">{dataAdmin.name}</span>
            </a>
          ) : (
            <a className="sidebar-brand" href="index.html">
              <span className="align-middle">Account Admin</span>
            </a>
          )}

          <ul className="sidebar-nav">
            <li className="sidebar-header">Pages</li>
            <li
              className={`sidebar-item ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              <Link className="sidebar-link" to="/">
                <i className="fa-solid fa-user"></i>
                <span className="align-middle">Dashboard</span>
              </Link>
            </li>

            {/* Chỉ SUPER_ADMIN và MODERATOR mới thấy các mục này */}
            {(role === "SUPER_ADMIN" ||
              role === "MODERATOR" ||
              role === "ADMIN") && (
              <>
                <li
                  className={`sidebar-item ${
                    location.pathname === "/blog" ? "active" : ""
                  }`}
                >
                  <Link className="sidebar-link" to="/blog">
                    <i className="fa-solid fa-right-to-bracket"></i>
                    <span className="align-middle">Blog</span>
                  </Link>
                </li>

                <li
                  className={`sidebar-item ${
                    location.pathname === "/chat-member" ? "active" : ""
                  }`}
                >
                  <Link className="sidebar-link" to="/chat-member">
                    <i class="fa-regular fa-message"></i>
                    <span className="align-middle">Chat</span>
                  </Link>
                </li>

                <li
                  className={`sidebar-item ${
                    location.pathname === "/blog-list" ? "active" : ""
                  }`}
                >
                  <Link className="sidebar-link" to="/blog-list">
                    <i className="fa-solid fa-right-to-bracket"></i>
                    <span className="align-middle">Blog List</span>
                  </Link>
                </li>

                <li
                  className={`sidebar-item ${
                    location.pathname === "/brand" ? "active" : ""
                  }`}
                >
                  <Link className="sidebar-link" to="/brand">
                    <i className="fa-solid fa-right-to-bracket"></i>
                    <span className="align-middle">Brand</span>
                  </Link>
                </li>

                <li
                  className={`sidebar-item ${
                    location.pathname === "/category" ? "active" : ""
                  }`}
                >
                  <Link className="sidebar-link" to="/category">
                    <i className="fa-solid fa-right-to-bracket"></i>
                    <span className="align-middle">Category</span>
                  </Link>
                </li>

                <li
                  className={`sidebar-item ${
                    location.pathname === "/product" ? "active" : ""
                  }`}
                >
                  <Link className="sidebar-link" to="/product">
                    <i className="fa-solid fa-right-to-bracket"></i>
                    <span className="align-middle">Product</span>
                  </Link>
                </li>
                <li
                  className={`sidebar-item ${
                    location.pathname === "/todo-list" ? "active" : ""
                  }`}
                >
                  <Link className="sidebar-link" to="/admin/todo-list">
                    <i class="fa-solid fa-list-check"></i>
                    <span className="align-middle">Todo List</span>
                  </Link>
                </li>
              </>
            )}

            {/* Chỉ SUPER_ADMIN mới thấy các mục này */}
            {(role === "SUPER_ADMIN" || role === "ADMIN") && (
              <>
                <li
                  className={`sidebar-item ${
                    location.pathname === "/country" ? "active" : ""
                  }`}
                >
                  <Link className="sidebar-link" to="/country">
                    <i className="fa-solid fa-right-to-bracket"></i>
                    <span className="align-middle">Country</span>
                  </Link>
                </li>
                {/* <li
                  className={`sidebar-item ${
                    location.pathname === "/user" ? "active" : ""
                  }`}
                >
                  <Link className="sidebar-link" to="/user">
                    <i className="fa-solid fa-right-to-bracket"></i>
                    <span className="align-middle">User</span>
                  </Link>
                </li> */}
              </>
            )}
            <li className="sidebar-header">Plugins &amp; Addons</li>
            <li
              className={`sidebar-item ${
                location.pathname === "/maps-google.html" ? "active" : ""
              }`}
            >
              <Link className="sidebar-link" to="/maps-google.html">
                <i className="fa-solid fa-bed"></i>
                <span className="align-middle">Maps</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
