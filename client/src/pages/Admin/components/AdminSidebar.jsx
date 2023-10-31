import { useContext } from "react";
import UserContext from "../../../context/UserContext";

const AdminSidebar = ({ routes }) => {
  const user = useContext(UserContext);
  const activeRoute = (routeName) => {
    return window.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    window.location.href = "/login";
  };

  return (
    <>
      <div className="admin-sidebar">
        <div className="navbar navbar-expand-lg" id="sidebar">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse text-center" id="navbarNav">
            <ul className="navbar-nav flex-column">
              <a className="navbar-brand text-uppercase text-light" href="/">
                Home
              </a>
              {routes.map((prop, key) => (
                <li
                  className={`nav-item mt-3 ${activeRoute(
                    prop.layout + prop.path
                  )}`}
                  key={key}
                >
                  <a
                    href={prop.layout + prop.path}
                    className={`nav-link fs-5 ${
                      activeRoute(prop.layout + prop.path) === "active"
                        ? "link-active"
                        : ""
                    }`}
                  >
                    <i className={prop.icon}></i>
                    <span className="ms-2">{prop.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="sidebar-footer">
          <div className="dropdown">
            <button
              className="btn drop-btn text-light fs-5"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              aria-haspopup="true"
            >
              <i className="bi bi-person-circle"></i>
              <span className="ms-2 text-uppercase">{user.username}</span>
            </button>
            <div className="dropdown-menu">
              <a href="/profile" className="dropdown-item">
                <i className="bi bi-person"></i>
                <span className="ms-2">Profile</span>
              </a>
              <button onClick={handleLogout} className="dropdown-item">
                <i className="bi bi-box-arrow-left"></i>
                <span className="ms-2">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;
