import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navbar = {
    backgroundColor: "#fbc531",
    color: "#fbc531",
  };
  return (
    <div className="container-fluid nav-bg">
      <div className="row">
        <div className="col-10 mx-auto">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">
                Trend-Travels
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li class="nav-item" style={{ marginRight: "5px" }}>
                    <Link class="nav-link active" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item" style={{ marginRight: "5px" }}>
                    <Link className="nav-link" to="/service">
                      Service
                    </Link>
                  </li>
                  <li className="nav-item" style={{ marginRight: "5px" }}>
                    <Link className="nav-link" to="/about">
                      About
                    </Link>
                  </li>
                  <li className="nav-item" style={{ marginRight: "5px" }}>
                    <Link className="nav-link" to="/contact">
                      Contact
                    </Link>
                  </li>
                  <li className="nav-item" style={{ marginRight: "5px" }}>
                    <Link className="nav-link" to="/packages">
                      User Reviews
                    </Link>
                  </li>
                  <li className="nav-item" style={{ marginRight: "5px" }}>
                    <Link className="nav-link" to="/reviews">
                      Add Review
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
