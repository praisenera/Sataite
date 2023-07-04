import React, { Component } from "react";
import "../css/style.css";
class Mcdo extends Component {
  render() {
    return (
      <body>
        <img
          className="logo mt-3 ms-3"
          src={require("../img/brand_logo/logo.webp")}
        />
        <ul className="res mt-4">
          <li className="category">
            <a href="#breakfast" className="active">
              Breakfast
            </a>
          </li>
          <li className="category">
            <a href="#rice-meals">Rice Meals</a>
          </li>
          <li className="category">
            <a href="#fries">Fries</a>
          </li>
          <li className="category">
            <a href="#desserts">Desserts</a>
          </li>
          <li className="category">
            <a href="#drinks">Drinks</a>
          </li>
        </ul>

        <div className="container" id="breakfast">
          <h1 className="categories ms-5">Breakfast</h1>
          <div
            className="row"
            style={{ marginBottom: "30px", justifyContent: "evenly" }}
          >
            <div
              className="card col-lg-2 text-center me-5"
              style={{
                marginLeft: "100px",
                borderRadius: 30,
              }}
            >
              <img
                src={require("../img/mcdo/image1.png")}
                className="card-img-top text-center mt-4 ms-3"
                alt="chicken"
                style={{ width: "150px" }}
              />
              <div className="card-body">
                <h5 className="card-title mt-3">
                  1pc mushroom pepper steak large
                </h5>
                <p className="card-text">₱ 91.00</p>
                <button className="btn text-white mt-2">ADD ITEM</button>
              </div>
            </div>

            <div
              className="card col-lg-2 text-center  me-5"
              style={{ borderRadius: 30 }}
            >
              <img
                src={require("../img/mcdo/image2.png")}
                className="card-img-top text-center "
                alt="chicken"
                style={{ width: "150px" }}
              />
              <div className="card-body">
                <h5 className="card-title">2pc mushroom pepper steak large</h5>
                <p className="card-text">₱ 112.00</p>
                <button className="btn text-white mt-2">ADD ITEM</button>
              </div>
            </div>

            <div
              className="card col-lg-2 text-center  me-5"
              style={{ borderRadius: 30 }}
            >
              <img
                src={require("../img/mcdo/image3.png")}
                className="card-img-top text-center mt-3 pe-5"
                alt="chicken"
                style={{ width: "250px" }}
              />
              <div className="card-body">
                <h5 className="card-title">
                  1pc mushroom pepper steak & egg medium
                </h5>
                <p className="card-text">₱ 107.00</p>
                <button className="btn text-white ">ADD ITEM</button>
              </div>
            </div>

            <div
              className="card col-lg-2 text-center"
              style={{ borderRadius: 30 }}
            >
              <img
                src={require("../img/mcdo/image4.png")}
                className="card-img-top text-center mt-4"
                alt="chicken"
                style={{ width: "150px" }}
              />
              <div className="card-body">
                <h5 className="card-title mt-4">2pcs pancake w/ coffee</h5>
                <p className="card-text">₱ 102.00</p>
                <button className="btn text-white mt-3">ADD ITEM</button>
              </div>
            </div>
          </div>
        </div>

        <div className="container" id="rice-meals">
          <h1 className="categories ms-5">Rice Meals</h1>
          <div
            className="row"
            style={{
              marginBottom: "30px",
              justifyContent: "evenly",
            }}
          >
            <div
              className="card col-lg-2 text-center me-5"
              style={{ marginLeft: "100px", borderRadius: 30 }}
            >
              <img
                src={require("../img/mcdo/image5.png")}
                className="card-img-top text-center mt-2"
                alt="chicken"
                style={{ width: "175px" }}
              />
              <div className="card-body">
                <h5 className="card-title">Chicken fillet solo</h5>
                <p className="card-text">₱ 60.00</p>
                <button className="btn text-white ">ADD ITEM</button>
              </div>
            </div>

            <div
              className="card col-lg-2 text-center  me-5"
              style={{ borderRadius: 30, justifyContent: "center" }}
            >
              <img
                src={require("../img/mcdo/image6.png")}
                className="card-img-top mt-5"
                alt="chicken"
                style={{
                  width: "150px",
                  margin: "auto",
                }}
              />
              <div className="card-body">
                <h5 className="card-title ">Chicken ala king solo</h5>
                <p className="card-text"> ₱ 62.00</p>
                <button className="btn text-white mt-2">ADD ITEM</button>
              </div>
            </div>

            <div
              className="card col-lg-2 text-center  me-5"
              style={{ borderRadius: 30 }}
            >
              <img
                src={require("../img/mcdo/image7.png")}
                className="card-img-top text-center mt-3 ms-3"
                alt="chicken"
                style={{ width: "150px" }}
              />
              <div className="card-body">
                <h5 className="card-title">1-Pc Chicken McDo Solo</h5>
                <p className="card-text">₱ 120.00</p>
                <button className="btn text-white mt-2">ADD ITEM</button>
              </div>
            </div>

            <div
              className="card col-lg-2 text-center"
              style={{ borderRadius: 30 }}
            >
              <img
                src={require("../img/mcdo/image8.png")}
                className="card-img-top text-center ms-3"
                alt="chicken"
                style={{ width: "125px" }}
              />
              <div className="card-body">
                <h5 className="card-title">
                  Chicken fillet w/ large fries and drinks
                </h5>
                <p className="card-text">₱ 135.00</p>
                <button className="btn text-white">ADD ITEM</button>
              </div>
            </div>
          </div>
        </div>

        <div className="container" id="rice-meals">
          <div
            className="row mt-3"
            style={{
              marginBottom: "30px",
              justifyContent: "evenly",
            }}
          >
            <div
              className="card col-lg-2 col-md-2 text-center me-5"
              style={{ marginLeft: "100px", borderRadius: 30 }}
            >
              <img
                src={require("../img/mcdo/image9.png")}
                className="card-img-top text-center mt-4 ms-3"
                alt="chicken"
                style={{ width: "125px" }}
              />
              <div className="card-body">
                <h5 className="card-title mt-4">
                  Chicken ala king w/ regular fries and drinks
                </h5>
                <p className="card-text">₱ 102.00</p>
                <button className="btn text-white">ADD ITEM</button>
              </div>
            </div>

            <div
              className="card col-lg-2 col-md-2 text-center  me-5"
              style={{ borderRadius: 30 }}
            >
              <img
                src={require("../img/mcdo/image10.png")}
                className="card-img-top text-center mt-4"
                alt="chicken"
                style={{ width: "150px" }}
              />
              <div className="card-body">
                <h5 className="card-title mt-3">Chicken McDo w/ drinks</h5>
                <p className="card-text">₱ 100.00</p>
                <button className="btn text-white mt-3">ADD ITEM</button>
              </div>
            </div>

            <div
              className="card col-lg-2 col-md-2 text-center  me-5"
              style={{ borderRadius: 30 }}
            >
              <img
                src={require("../img/mcdo/image11.png")}
                className="card-img-top text-center mt-4"
                alt="chicken"
                style={{ width: "150px" }}
              />
              <div className="card-body">
                <h5 className="card-title">
                  1-Pc Chicken McDo w/ large fries and drinks
                </h5>
                <p className="card-text">₱ 152.00</p>
                <button className="btn text-white mt-1">ADD ITEM</button>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <h1 className="categories ms-5" id="fries">
            Fries
          </h1>
          <div
            className="row"
            style={{
              marginBottom: "30px",
              justifyContent: "evenly",
            }}
          >
            <div
              className="card col-lg-2 col-md-2 text-center me-5"
              style={{ marginLeft: "100px", borderRadius: 30 }}
            >
              <img
                src={require("../img/mcdo/image12.png")}
                className="card-img-top text-center ms-2"
                alt="chicken"
                style={{ width: "150px" }}
              />
              <div className="card-body">
                <h5 className="card-title">Regular Fries</h5>
                <p className="card-text">₱ 50.00</p>
                <button className="btn text-white mt-3">ADD ITEM</button>
              </div>
            </div>

            <div
              className="card col-lg-2 col-md-2 text-center  me-5"
              style={{ borderRadius: 30 }}
            >
              <img
                src={require("../img/mcdo/image13.png")}
                className="card-img-top text-center mt-4"
                alt="chicken"
                style={{ width: "125px", margin: "auto" }}
              />
              <div className="card-body">
                <h5 className="card-title ">Medium Fries</h5>
                <p className="card-text"> ₱ 60.00</p>
                <button className="btn text-white mt-3">ADD ITEM</button>
              </div>
            </div>

            <div
              className="card col-lg-2 col-md-2 text-center  me-5"
              style={{ borderRadius: 30 }}
            >
              <img
                src={require("../img/mcdo/image14.png")}
                className="card-img-top text-center mt-4"
                alt="chicken"
                style={{ width: "100px", margin: "auto" }}
              />
              <div className="card-body">
                <h5 className="card-title">Large Fries</h5>
                <p className="card-text"> ₱ 80.00</p>
                <button className="btn text-white ">ADD ITEM</button>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <h1 className="categories ms-5" id="desserts">
            Desserts
          </h1>
          <div
            className="row"
            style={{
              marginBottom: "30px",
              justifyContent: "evenly",
            }}
          >
            <div
              className="card col-lg-2 col-md-2 text-center me-5"
              style={{ marginLeft: "100px", borderRadius: 30 }}
            >
              <img
                src={require("../img/mcdo/image15.png")}
                className="card-img-top text-center mt-4"
                alt="chicken"
                style={{ width: "150px" }}
              />
              <div className="card-body">
                <h5 className="card-title mt-1">Ice cream</h5>
                <p className="card-text">₱ 30.00</p>
                <button className="btn text-white mt-3">ADD ITEM</button>
              </div>
            </div>

            <div
              className="card col-lg-2 col-md-2 text-center  me-5"
              style={{ borderRadius: 30 }}
            >
              <img
                src={require("../img/mcdo/image16.png")}
                className="card-img-top"
                alt="chicken"
                style={{ width: "100px", margin: "auto" }}
              />
              <div className="card-body">
                <h5 className="card-title ">Mcflurry</h5>
                <p className="card-text"> ₱ 53.00</p>
                <button className="btn text-white mt-3">ADD ITEM</button>
              </div>
            </div>

            <div
              className="card col-lg-2 col-md-2 text-center  me-5"
              style={{ borderRadius: 30 }}
            >
              <img
                src={require("../img/mcdo/image17.png")}
                className="card-img-top mt-4"
                alt="chicken"
                style={{ width: "115px", margin: "auto" }}
              />
              <div className="card-body">
                <h5 className="card-title">Hot caramel sundae</h5>
                <p className="card-text"> ₱ 32.00</p>
                <button className="btn text-white ">ADD ITEM</button>
              </div>
            </div>

            <div
              className="card col-lg-2 col-md-2 text-center  me-5"
              style={{ borderRadius: 30 }}
            >
              <img
                src={require("../img/mcdo/image18.png")}
                className="card-img-top mt-3"
                alt="chicken"
                style={{ width: "125px", margin: "auto" }}
              />
              <div className="card-body">
                <h5 className="card-title">Hot fudge sundae</h5>
                <p className="card-text"> ₱ 32.00</p>
                <button className="btn text-white">ADD ITEM</button>
              </div>
            </div>
          </div>
        </div>

        <div className="container" id="drinks">
          <h1 className="categories ms-5">Drinks</h1>
          <div
            className="row"
            style={{
              marginBottom: "30px",
              justifyContent: "evenly",
            }}
          >
            <div
              className="card col-lg-2 col-md-2 text-center me-5"
              style={{ marginLeft: "100px", borderRadius: 30 }}
            >
              <img
                src={require("../img/mcdo/image19.png")}
                className="card-img-top"
                alt="chicken"
                style={{ width: "125px", margin: "auto" }}
              />
              <div className="card-body">
                <h5 className="card-title">Coke</h5>
                <p className="card-text">₱ 66.00</p>
                <button className="btn text-white">ADD ITEM</button>
              </div>
            </div>

            <div
              className="card col-lg-2 col-md-2 text-center  me-5"
              style={{ borderRadius: 30 }}
            >
              <img
                src={require("../img/mcdo/image20.png")}
                className="card-img-top text-center"
                alt="chicken"
                style={{ width: "150px", margin: "auto" }}
              />
              <div className="card-body">
                <h5 className="card-title">Sprite</h5>
                <p className="card-text"> ₱ 66.00</p>{" "}
                <button className="btn text-white">ADD ITEM</button>
              </div>
            </div>

            <div
              className="card col-lg-2 col-md-2 text-center  me-5"
              style={{ borderRadius: 30 }}
            >
              <img
                src={require("../img/mcdo/image21.png")}
                className="card-img-top mt-2"
                alt="chicken"
                style={{ width: "140px", margin: "auto" }}
              />
              <div className="card-body">
                <h5 className="card-title">Pineapple</h5>
                <p className="card-text"> ₱ 65.00</p>
                <button className="btn text-white ">ADD ITEM</button>
              </div>
            </div>

            <div
              className="card col-lg-2 col-md-2 text-center  me-5"
              style={{ borderRadius: 30 }}
            >
              <img
                src={require("../img/mcdo/image22.png")}
                className="card-img-top mt-2"
                alt="chicken"
                style={{ width: "125px", margin: "auto" }}
              />
              <div className="card-body">
                <h5 className="card-title">Lipton Ice tea</h5>
                <p className="card-text"> ₱ 65.00</p>
                <button className="btn text-white">ADD ITEM</button>
              </div>
            </div>
          </div>
        </div>
      </body>
    );
  }
}
export default Mcdo;
