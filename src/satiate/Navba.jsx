import React from "react";
// import { useState } from "react";
import "../css/Navbar.css";
// import { Button } from "./Button";
function Navbar() {
  // const [isActive, setClick] = useState(!isActive);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/home" id="brand">
          <img
            src={require("../img/logo/logo.png")}
            className="img-fluid"
            id="logo"
            alt="logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-5">
            <li className="nav-item">
              <a className="link text-dark" href="/menu">
                Menu
              </a>
            </li>
            <li className="nav-item">
              <a className="link text-dark" href="/restaurants">
                Restaurants
              </a>
            </li>
            <li className="nav-item">
              <a className="link text-dark" href="/order-processing">
                Order Processing
              </a>
            </li>
            <li className="nav-item">
              <a className="link text-dark" href="order-tracking">
                Order Tracking
              </a>
            </li>
            {/* <li>
              <a href="#" className="contact">
                <img
                  src={require("../img/logo/contact.png")}
                  alt="contact"
                  style={{ width: "40px", height: "30px", marginLeft: "300px" }}
                />
              </a>
            </li>
            <li>
              <a href="#">
                <i class="bi bi-person-fill ms-0"></i>
              </a>
            </li> */}
          </ul>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
