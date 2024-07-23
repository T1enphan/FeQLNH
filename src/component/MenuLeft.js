export default function MenuLeft() {
  return (
    <>
      <nav id="sidebar" className="sidebar js-sidebar">
        <div className="sidebar-content js-simplebar">
          <a className="sidebar-brand" href="index.html">
            <span className="align-middle">Neit</span>
          </a>
          <ul className="sidebar-nav">
            <li className="sidebar-header">Pages</li>
            <li className="sidebar-item active">
              <a className="sidebar-link" href="index.html">
                <i class="fa-solid fa-user"></i>
                <span className="align-middle">Dashboard</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link" href="/blog">
                <i class="fa-solid fa-right-to-bracket"></i>
                <span className="align-middle">Blog</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link" href="/country">
                <i class="fa-solid fa-right-to-bracket"></i>
                <span className="align-middle">Country</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link" href="/user">
                <i class="fa-solid fa-right-to-bracket"></i>
                <span className="align-middle">User</span>
              </a>
            </li>
            <li className="sidebar-header">Plugins &amp; Addons</li>
            <li className="sidebar-item">
              <a className="sidebar-link" href="maps-google.html">
                <i class="fa-solid fa-bed"></i>
                <span className="align-middle">Maps</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
