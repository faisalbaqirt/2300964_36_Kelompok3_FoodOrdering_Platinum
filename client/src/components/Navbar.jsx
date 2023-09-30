function Navbar() {
  return (
    <nav id="navigation" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav">
            <li>
              <a href="#header" className="page-scroll">
                Home
              </a>
            </li>
            <li>
              <a href="#products" className="page-scroll">
                Menu
              </a>
            </li>
            <li>
              <a href="/order#order">Order</a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li>
            <button type="button" class="btn btn-secondary">
              Sign Up
            </button>
            <button type="button" class="btn btn-light">
              Login
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
