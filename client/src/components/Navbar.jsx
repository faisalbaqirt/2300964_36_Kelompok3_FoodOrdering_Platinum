import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import UserContext from "../context/UserContext";

function Navbar() {
  const user = useContext(UserContext);
  const [isOn, setIsOn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const navHeight = window.innerHeight - 600;
      if (window.scrollY > navHeight && !isOn) {
        setIsOn(true);
      } else if (window.scrollY <= navHeight && isOn) {
        setIsOn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOn]);

  const isAuthenticated = localStorage.getItem("token");
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    window.location.href = "/login";
  };

  const isHomePage = location.pathname === "/";

  return (
    <>
      <nav
        id="navigation"
        className={`navbar fixed-top navbar-expand-md ${isOn ? "on" : ""}`}
      >
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href={isHomePage ? "#header" : "/#header"}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/docs">
                  Docs
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href={isHomePage ? "#products" : "/#products"}
                >
                  Menu
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href={isHomePage ? "/order#order" : "/order#order"}
                >
                  Order
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href={isHomePage ? "#contact" : "/#contact"}
                >
                  Contact
                </a>
              </li>
            </ul>
            {isAuthenticated ? (
              ""
            ) : (
              <div className="btnContainer">
                <a className="btn " href="/register">
                  Sign Up
                </a>
                <a className="btn " href="/login">
                  Login
                </a>
              </div>
            )}
          </div>
        </div>
      </nav>
      {isAuthenticated ? (
        <>
          <div className="navbar-profile">
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
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default Navbar;
