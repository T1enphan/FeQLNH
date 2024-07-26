import { useLocation, Link } from 'react-router-dom';

export default function MenuLeft() {
  const location = useLocation();

  return (
    <>
      <nav id="sidebar" className="sidebar js-sidebar">
        <div className="sidebar-content js-simplebar">
          <a className="sidebar-brand" href="index.html">
            <span className="align-middle">Neit</span>
          </a>
          <ul className="sidebar-nav">
            <li className="sidebar-header">Pages</li>
            <li className={`sidebar-item ${location.pathname === '/' ? 'active' : ''}`}>
              <Link className="sidebar-link" to="/">
                <i className="fa-solid fa-user"></i>
                <span className="align-middle">Dashboard</span>
              </Link>
            </li>
            <li className={`sidebar-item ${location.pathname === '/blog' ? 'active' : ''}`}>
              <Link className="sidebar-link" to="/blog">
                <i className="fa-solid fa-right-to-bracket"></i>
                <span className="align-middle">Blog</span>
              </Link>
            </li>
            <li className={`sidebar-item ${location.pathname === '/country' ? 'active' : ''}`}>
              <Link className="sidebar-link" to="/country">
                <i className="fa-solid fa-right-to-bracket"></i>
                <span className="align-middle">Country</span>
              </Link>
            </li>
            <li className={`sidebar-item ${location.pathname === '/user' ? 'active' : ''}`}>
              <Link className="sidebar-link" to="/user">
                <i className="fa-solid fa-right-to-bracket"></i>
                <span className="align-middle">User</span>
              </Link>
            </li>
            <li className={`sidebar-item ${location.pathname === '/update-user' ? 'active' : ''}`}>
              <Link className="sidebar-link" to="/update-user">
                <i className="fa-solid fa-right-to-bracket"></i>
                <span className="align-middle">Update Profile</span>
              </Link>
            </li>
            {/* <li className="sidebar-item">
              <a className="sidebar-link" href="/update-user">
                <i class="fa-solid fa-right-to-bracket"></i>
                <span className="align-middle">Update Profile</span>
              </a>
            </li> */}
            <li className="sidebar-header">Plugins &amp; Addons</li>
            <li className={`sidebar-item ${location.pathname === '/maps-google.html' ? 'active' : ''}`}>
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
