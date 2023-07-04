import React from "react";
import "../css/Footer.css";
function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-4  pt-5">
              <h4 className="brand">SATIATE</h4>
              <p>
                Is an online food delivery services in the Philippines that
                offers a wide selection of restaurants and cuisines to cater to
                your unique taste buds. We provide an extensive restaurant
                selection, ensuring a diverse range of options to satisfy any
                craving.
              </p>
            </div>
            <div className=" links col-lg-4  pt-5 ps-5">
              <p>
                <a className="link" href="#">
                  About Us
                </a>
              </p>
              <p>
                <a className="link" href="#">
                  Help Center
                </a>
              </p>
              <p>
                <a className="link" href="#">
                  Contact
                </a>
              </p>
              <p>
                <a className="link" href="#">
                  Terms & Condition
                </a>
              </p>
              <p>
                <a className="link" href="#">
                  Privacy Policy
                </a>
              </p>
            </div>
            <div className=" links col-lg-4  pt-5">
              <p>
                <a className="link" href="#">
                  Merchants
                </a>
              </p>
              <p>
                <a className="link" href="#">
                  Guides
                </a>
              </p>
              <p>
                <a className="link" href="#">
                  Blog
                </a>
              </p>
              <p>
                <a className="link" href="#">
                  Financial Services
                </a>
              </p>
              <p>
                <a className="link" href="#">
                  Financial Resources
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="text-center mt-5">
              <img
                className="socials img-fluid me-0"
                src={require("../img/logo/facebook.png")}
                alt="facebook"
                style={{ width: "30px", display: "inline" }}
              />
              <img
                className="socials img-fluid me-0"
                src={require("../img/logo/insta.jpg")}
                alt="insta"
                style={{ width: "30px", display: "inline" }}
              />
              <img
                className="socials img-fluid ms-0"
                src={require("../img/logo/twitter.png")}
                alt="twitter"
                style={{ width: "30px", display: "inline" }}
              />
            </div>
            <p style={{ marginLeft: "400px" }}>2023 @Copy Right Reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
