import React from "react";
import "../css/Partners.css";

function Partner() {
  return (
    <>
      <h1 className="partners">Partners</h1>
      <div className="container">
        <div className="row">
          <div className="brand-logo text-center">
            <img
              src={require("../img/jollibee/logo.png")}
              className="logo"
              style={{ width: "300px" }}
              alt="jollibee"
            />

            <img
              src={require("../img/brand_logo/blackscoop.png")}
              className="logo1"
              alt="blackscoop"
            />

            <img
              src={require("../img/brand_logo/tokyo.webp")}
              className="logo2"
              alt="tokyo"
            />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div class="row">
          <div className="brand-logo">
            <img
              src={require("../img/brand_logo/logo.webp")}
              className="logo3"
              alt="mcdo"
            />
            <img
              src={require("../img/brand_logo/koomi.png")}
              className="logo4"
              alt="koomi"
            />
            <img
              src={require("../img/brand_logo/green.png")}
              className="logo5"
              alt="green"
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Partner;
