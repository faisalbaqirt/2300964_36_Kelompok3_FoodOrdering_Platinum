import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function Navbar() {
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

  const isOrderPage = location.pathname === "/order";

  return (
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
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link"
                href={isOrderPage ? "/#header" : "#header"}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href={isOrderPage ? "/#products" : "#products"}
              >
                Menu
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href={isOrderPage ? "#order" : "/order#order"}
              >
                Order
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href={isOrderPage ? "/#contact" : "#contact"}
              >
                Contact
              </a>
            </li>
            <div className="btnContainer">
              <a className="btn " href="/register">
                Sign Up
              </a>
              <a className="btn " href="/login">
                Login
              </a>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
