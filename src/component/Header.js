import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useChatContext } from 'stream-chat-react';
import "react-toastify/dist/ReactToastify.css";

function Header() {
  const { client } = useChatContext();
  const [unreadCount, setUnreadCount] = useState(0);
  const [idData, setIdData] = useState({});
  const [dataAdmin, setDataAdmin] = useState([]);
  const navigate = useNavigate();

  const getDataAdmin = async () => {
    const admin = JSON.parse(localStorage.getItem("AdminAccount"));
    setDataAdmin(admin?.admin || {});
  };

  const handleLogout = () => {
    localStorage.removeItem("AdminAccount");
    toast.warning("Đã Đăng Xuất Thành Công!");
    setTimeout(() => {
      navigate("/admin/login");
    }, 2000);
  };

  useEffect(() => {
    const fetchData = () => {
      let userData = localStorage.getItem("accountLogin");
      if (userData) {
        userData = JSON.parse(userData);
        if (userData && userData.user && userData.user.id) {
          setIdData(userData.user.id);
        }
      }
    };
    fetchData();
    getDataAdmin();
  }, []); // Chạy một lần khi component được mount

  useEffect(() => {
    if (!client) {
      return; // Trả về sớm nếu client chưa được khởi tạo
    }

    const handleNewMessage = (event) => {
      if (event.message?.user?.id !== client.userID) {
        setUnreadCount((prevCount) => prevCount + 1);
      }
    };

    client.on('message.new', handleNewMessage);

    return () => {
      client.off('message.new', handleNewMessage);
    };
  }, [client]);

  const LinktoProfile = () => {
    if (idData) {
      return (
        <Link className="dropdown-item" to={`/update-user/${idData}`}>
          <i className="align-middle me-1" data-feather="user" /> Profile
        </Link>
      );
    }
    return null; // Trả về null nếu idData không tồn tại
  };
  return (
    <div>
      <ToastContainer />
      <nav className="navbar navbar-expand navbar-light navbar-bg">
        <a className="sidebar-toggle js-sidebar-toggle">
          <i className="hamburger align-self-center" />
        </a>
        <div className="navbar-collapse collapse">
          <ul className="navbar-nav navbar-align">
            <li className="nav-item dropdown">
              {/* đây r */}
              <a className="nav-icon dropdown-toggle" href="#" id="alertsDropdown" data-bs-toggle="dropdown">
                <div className="position-relative">
                  <i className="fa-regular fa-bell" />
                  {unreadCount > 0 && (
                    <span className="indicator">{unreadCount}</span>
                  )}
                </div>
              </a>
              <div
                className="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0"
                aria-labelledby="alertsDropdown"
              >
                <div className="dropdown-menu-header">4 New Notifications</div>
                <div className="list-group">
                  <a href="#" className="list-group-item">
                    <div className="row g-0 align-items-center">
                      <div className="col-2">
                        <i
                          className="text-danger"
                          data-feather="alert-circle"
                        />
                      </div>
                      <div className="col-10">
                        <div className="text-dark">Update completed</div>
                        <div className="text-muted small mt-1">
                          Restart server 12 to complete the update.
                        </div>
                        <div className="text-muted small mt-1">30m ago</div>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="list-group-item">
                    <div className="row g-0 align-items-center">
                      <div className="col-2">
                        <i className="text-warning" data-feather="bell" />
                      </div>
                      <div className="col-10">
                        <div className="text-dark">Lorem ipsum</div>
                        <div className="text-muted small mt-1">
                          Aliquam ex eros, imperdiet vulputate hendrerit et.
                        </div>
                        <div className="text-muted small mt-1">2h ago</div>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="list-group-item">
                    <div className="row g-0 align-items-center">
                      <div className="col-2">
                        <i className="text-primary" data-feather="home" />
                      </div>
                      <div className="col-10">
                        <div className="text-dark">Login from 192.186.1.8</div>
                        <div className="text-muted small mt-1">5h ago</div>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="list-group-item">
                    <div className="row g-0 align-items-center">
                      <div className="col-2">
                        <i className="text-success" data-feather="user-plus" />
                      </div>
                      <div className="col-10">
                        <div className="text-dark">New connection</div>
                        <div className="text-muted small mt-1">
                          Christina accepted your request.
                        </div>
                        <div className="text-muted small mt-1">14h ago</div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="dropdown-menu-footer">
                  <a href="#" className="text-muted">
                    Show all notifications
                  </a>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-icon dropdown-toggle"
                href="#"
                id="messagesDropdown"
                data-bs-toggle="dropdown"
              >
                <div className="position-relative">
                  <i className="fa-regular fa-message"></i>
                </div>
              </a>
              <div
                className="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0"
                aria-labelledby="messagesDropdown"
              >
                <div className="dropdown-menu-header">
                  <div className="position-relative">4 New Messages</div>
                </div>
                <div className="list-group">
                  <a href="#" className="list-group-item">
                    <div className="row g-0 align-items-center">
                      <div className="col-2">
                        <img
                          src="img/avatars/avatar-5.jpg"
                          className="avatar img-fluid rounded-circle"
                          alt="Vanessa Tucker"
                        />
                      </div>
                      <div className="col-10 ps-2">
                        <div className="text-dark">Vanessa Tucker</div>
                        <div className="text-muted small mt-1">
                          Nam pretium turpis et arcu. Duis arcu tortor.
                        </div>
                        <div className="text-muted small mt-1">15m ago</div>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="list-group-item">
                    <div className="row g-0 align-items-center">
                      <div className="col-2">
                        <img
                          src="img/avatars/avatar-2.jpg"
                          className="avatar img-fluid rounded-circle"
                          alt="William Harris"
                        />
                      </div>
                      <div className="col-10 ps-2">
                        <div className="text-dark">William Harris</div>
                        <div className="text-muted small mt-1">
                          Curabitur ligula sapien euismod vitae.
                        </div>
                        <div className="text-muted small mt-1">2h ago</div>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="list-group-item">
                    <div className="row g-0 align-items-center">
                      <div className="col-2">
                        <img
                          src="img/avatars/avatar-4.jpg"
                          className="avatar img-fluid rounded-circle"
                          alt="Christina Mason"
                        />
                      </div>
                      <div className="col-10 ps-2">
                        <div className="text-dark">Christina Mason</div>
                        <div className="text-muted small mt-1">
                          Pellentesque auctor neque nec urna.
                        </div>
                        <div className="text-muted small mt-1">4h ago</div>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="list-group-item">
                    <div className="row g-0 align-items-center">
                      <div className="col-2">
                        <img
                          src="img/avatars/avatar-3.jpg"
                          className="avatar img-fluid rounded-circle"
                          alt="Sharon Lessman"
                        />
                      </div>
                      <div className="col-10 ps-2">
                        <div className="text-dark">Sharon Lessman</div>
                        <div className="text-muted small mt-1">
                          Aenean tellus metus, bibendum sed, posuere ac, mattis
                          non.
                        </div>
                        <div className="text-muted small mt-1">5h ago</div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="dropdown-menu-footer">
                  <a href="#" className="text-muted">
                    Show all messages
                  </a>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-icon dropdown-toggle d-inline-block d-sm-none"
                href="#"
                data-bs-toggle="dropdown"
              >
                <i className="align-middle" data-feather="settings" />
              </a>
              <a
                className="nav-link dropdown-toggle d-none d-sm-inline-block"
                href="#"
                data-bs-toggle="dropdown"
              >
                {/* <img
                  src="img/avatars/avatar-6.jpg"
                  className="avatar img-fluid rounded me-1"
                  alt="Charles Hall"
                />{" "} */}
                {dataAdmin ? (
                  <span className="text-dark">{dataAdmin.name}</span>
                ) : (
                  <span className="text-dark">Neit</span>
                )}
              </a>
              <div className="dropdown-menu dropdown-menu-end">
                {LinktoProfile()}
                <a className="dropdown-item" href="#">
                  <i className="align-middle me-1" data-feather="pie-chart" />{" "}
                  Analytics
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="index.html">
                  <i className="align-middle me-1" data-feather="settings" />{" "}
                  Settings &amp; Privacy
                </a>
                <a className="dropdown-item" href="#">
                  <i className="align-middle me-1" data-feather="help-circle" />{" "}
                  Help Center
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" onClick={handleLogout} href="#">
                  Log out
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default Header;
