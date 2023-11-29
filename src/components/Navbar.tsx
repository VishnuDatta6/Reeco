import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg  bg-success" data-bs-theme="dark">
      <div className="container-fluid mx-5">
        <a className="navbar-brand" href="/">
          Reeco
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item px-3">
              <a className="nav-link" aria-current="page" href="/">
                Store
              </a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link active" href="/">
                Orders
              </a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link" href="/">
                Analytics
              </a>
            </li>
          </ul>
          <ul className="navbar-nav mb-2 mb-lg-0">
          <li className="nav-item px-3">
              <a className="nav-link" href="/">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  flip="horizontal"
                  size="xl"
                  style={{ color: "#ffffff" }}
                />
              </a>
            </li>
            <li className="nav-item px-3 dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Hello, James
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/">
                    Profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Logout
                  </a>
                </li>
              </ul>
            </li>
            </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
