import React, { Component } from "react";
import "../css/style.css";
class Greenwich extends Component {
  render() {
    return (
      <body>
        <img
          className="logo mt-3 ms-3"
          src={require("../img/brand_logo/green.png")}
          style={{ width: "80px" }}
        />
        <ul className="res mt-4">
          <li className="category">
            <a href="#meals" className="active">
              Meals
            </a>
          </li>
          <li className="category">
            <a href="#pasta">Pasta</a>
          </li>
          <li className="category">
            <a href="#pizza">Pizza</a>
          </li>
          <li className="category">
            <a href="#chicken-sides">Chicken and Sides</a>
          </li>
        </ul>

        <div className="container">
          <h1 className="categories ms-5" id="meals">
            Meals
          </h1>
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
                src={require("../img/greenwich/image1.png")}
                className="card-img-top mt-4"
                alt="chicken"
                style={{ width: "150px", margin: "auto" }}
              />
              <div className="card-body">
                <h5 className="card-title">Lasagna Chicken Combo</h5>
                <p className="card-text">₱ 200.00</p>
                <button className="btn text-white">ADD ITEM</button>
              </div>
            </div>

            <div
              className="card col-lg-2 text-center  me-5"
              style={{ borderRadius: 30 }}
            >
              <img
                src={require("../img/greenwich/image2.png")}
                className="card-img-top mt-4 "
                alt="chicken"
                style={{ width: "150px", margin: "auto" }}
              />
              <div className="card-body">
                <h5 className="card-title">Carbonara Chicken Combo</h5>
                <p className="card-text">₱ 200.00</p>
                <button className="btn text-white mt-1">ADD ITEM</button>
              </div>
            </div>

            <div
              className="card col-lg-2 text-center  me-5"
              style={{ borderRadius: 30 }}
            >
              <img
                src={require("../img/greenwich/image3.png")}
                className="card-img-top text-center mt-4"
                alt="chicken"
                style={{ width: "150px", margin: "auto" }}
              />
              <div className="card-body">
                <h5 className="card-title">Overload Meal D</h5>
                <p className="card-text">₱ 178.00</p>
                <button className="btn text-white">ADD ITEM</button>
              </div>
            </div>

            <div
              className="card col-lg-2 text-center"
              style={{ borderRadius: 30 }}
            >
              <img
                src={require("../img/greenwich/image4.png")}
                className="card-img-top text-center mt-4"
                alt="chicken"
                style={{ width: "150px", margin: "auto" }}
              />
              <div className="card-body">
                <h5 className="card-title">Overload Meal E</h5>
                <p className="card-text">₱ 234.00</p>
                <button className="btn text-white mt-4">ADD ITEM</button>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <h1 className="categories ms-5" id="pasta">
            Pasta
          </h1>
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
                src={require("../img/greenwich/image5.png")}
                className="card-img-top text-center mt-2"
                alt="chicken"
                style={{ width: "150px" }}
              />
              <div className="card-body">
                <h5 className="card-title">Lasagna Supreme Solo</h5>
                <p className="card-text">₱ 99.00</p>
                <button className="btn text-white">ADD ITEM</button>
              </div>
            </div>

            <div
              className="card col-lg-2 text-center  me-5"
              style={{ borderRadius: 30, justifyContent: "center" }}
            >
              <img
                src={require("../img/greenwich/image6.png")}
                className="card-img-top mt-2"
                alt="chicken"
                style={{
                  width: "150px",
                  margin: "auto",
                }}
              />
              <div className="card-body">
                <h5 className="card-title ">Creamy Carbonara Solo</h5>
                <p className="card-text"> ₱ 122.00</p>
                <button className="btn text-white">ADD ITEM</button>
              </div>
            </div>

            <div
              className="card col-lg-2 text-center  me-5"
              style={{ borderRadius: 30 }}
            >
              <img
                src={require("../img/greenwich/image7.png")}
                className="card-img-top text-center mt-2"
                alt="chicken"
                style={{ width: "150px", margin: "auto" }}
              />
              <div className="card-body">
                <h5 className="card-title">Meaty Spaghetti Solo</h5>
                <p className="card-text">₱ 77.00</p>
                <button className="btn text-white">ADD ITEM</button>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <h1 className="categories ms-5" id="pasta">
            Family Pasta
          </h1>
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
                src={require("../img/greenwich/image8.png")}
                className="card-img-top text-center mt-2"
                alt="chicken"
                style={{ width: "150px" }}
              />
              <div className="card-body">
                <h5 className="card-title">Lasagna Supreme Pan</h5>
                <p className="card-text">₱ 319.00</p>
                <button className="btn text-white">ADD ITEM</button>
              </div>
            </div>

            <div
              className="card col-lg-2 text-center  me-5"
              style={{ borderRadius: 30, justifyContent: "center" }}
            >
              <img
                src={require("../img/greenwich/image9.png")}
                className="card-img-top mt-2"
                alt="chicken"
                style={{
                  width: "150px",
                  margin: "auto",
                }}
              />
              <div className="card-body">
                <h5 className="card-title mt-2">Creamy Carbonara Pan</h5>
                <p className="card-text"> ₱ 217.00</p>
                <button className="btn text-white">ADD ITEM</button>
              </div>
            </div>

            <div
              className="card col-lg-2 text-center  me-5"
              style={{ borderRadius: 30 }}
            >
              <img
                src={require("../img/greenwich/image10.png")}
                className="card-img-top text-center mt-2"
                alt="chicken"
                style={{ width: "150px", margin: "auto" }}
              />
              <div className="card-body">
                <h5 className="card-title mt-2">Meaty Spaghetti Pan</h5>
                <p className="card-text">₱ 207.00</p>
                <button className="btn text-white">ADD ITEM</button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <h1 className="categories ms-5" id="pizza">
            Pizza
          </h1>
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
                src={require("../img/greenwich/image11.png")}
                className="card-img-top mt-2"
                alt="chicken"
                style={{ width: "150px" }}
              />
              <div className="card-body">
                <h5 className="card-title mt-1">Ham and Cheese Classic</h5>
                <p className="card-text">₱ 129.00</p>
                <button className="btn text-white mt-3">ADD ITEM</button>
              </div>
            </div>

            <div
              className="card col-lg-2 text-center  me-5"
              style={{ borderRadius: 30, justifyContent: "center" }}
            >
              <img
                src={require("../img/greenwich/image12.png")}
                className="card-img-top mt-2 pe-2"
                alt="chicken"
                style={{
                  width: "175px",
                  margin: "auto",
                }}
              />
              <div className="card-body">
                <h5 className="card-title ">Hawaiian Overload</h5>
                <p className="card-text"> ₱ 140.00</p>
                <button className="btn text-white mt-3">ADD ITEM</button>
              </div>
            </div>

            <div
              className="card col-lg-2 text-center  me-5"
              style={{ borderRadius: 30 }}
            >
              <img
                src={require("../img/greenwich/image13.png")}
                className="card-img-top text-center mt-2"
                alt="chicken"
                style={{ width: "150px", margin: "auto" }}
              />
              <div className="card-body">
                <h5 className="card-title mt-1">
                  Cheesy Ham and Bacon Classic
                </h5>
                <p className="card-text">₱ 454.00</p>
                <button className="btn text-white">ADD ITEM</button>
              </div>
            </div>

            <div
              className="card col-lg-2 text-center  me-5"
              style={{ borderRadius: 30 }}
            >
              <img
                src={require("../img/greenwich/image14.png")}
                className="card-img-top text-center mt-2 pe-3"
                alt="chicken"
                style={{ width: "175px", margin: "auto" }}
              />
              <div className="card-body">
                <h5 className="card-title mt-2">Extreme Hawaiian Overload</h5>
                <p className="card-text">₱ 655.00</p>
                <button className="btn text-white">ADD ITEM</button>
              </div>
            </div>
          </div>

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
                src={require("../img/greenwich/image15.png")}
                className="card-img-top mt-2"
                alt="chicken"
                style={{ width: "175px" }}
              />
              <div className="card-body">
                <h5 className="card-title">All Beef Overload</h5>
                <p className="card-text">₱ 487.00</p>
                <button className="btn text-white ">ADD ITEM</button>
              </div>
            </div>

            <div
              className="card col-lg-2 text-center  me-5"
              style={{ borderRadius: 30, justifyContent: "center" }}
            >
              <img
                src={require("../img/greenwich/image16.png")}
                className="card-img-top mt-3 pe-3"
                alt="chicken"
                style={{
                  width: "175px",
                  margin: "auto",
                }}
              />

              <div className="card-body">
                <h5 className="card-title mt-1">All In Overload</h5>
                <p className="card-text">₱ 151.00</p>
                <button className="btn text-white mt-4">ADD ITEM</button>
              </div>
            </div>

            <div
              className="card col-lg-2 text-center  me-5"
              style={{ borderRadius: 30 }}
            >
              <img
                src={require("../img/greenwich/image17.png")}
                className="card-img-top text-center mt-3 pe-2"
                alt="chicken"
                style={{ width: "175px", margin: "auto" }}
              />

              <div className="card-body">
                <h5 className="card-title mt-1">All Meat Overload</h5>
                <p className="card-text">₱ 151.00</p>
                <button className="btn text-white">ADD ITEM</button>
              </div>
            </div>

            <div
              className="card col-lg-2 text-center  me-5"
              style={{ borderRadius: 30 }}
            >
              <img
                src={require("../img/greenwich/image18.png")}
                className="card-img-top text-center mt-2"
                alt="chicken"
                style={{ width: "150px", margin: "auto" }}
              />
              <div className="card-body">
                <h5 className="card-title">Cheesy Vegie Overload</h5>
                <p className="card-text">₱ 151.00</p>
                <button className="btn text-white mt-1">ADD ITEM</button>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <h1 className="categories ms-5" id="chicken-sides">
            Chicken and Sides
          </h1>
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
                src={require("../img/greenwich/image19.png")}
                className="card-img-top mt-4"
                alt="chicken"
                style={{ width: "150px", margin: "auto" }}
              />
              <div className="card-body">
                <h5 className="card-title">
                  3pcs Garlic stick w/ sour cream dip
                </h5>
                <p className="card-text">₱ 50.00</p>
                <button className="btn text-white ">ADD ITEM</button>
              </div>
            </div>

            <div
              className="card col-lg-2 text-center  me-5"
              style={{ borderRadius: 30, justifyContent: "center" }}
            >
              <img
                src={require("../img/greenwich/image20.png")}
                className="card-img-top mt-2 ms-3"
                alt="chicken"
                style={{
                  width: "150px",
                  margin: "auto",
                }}
              />

              <div className="card-body">
                <h5 className="card-title">Potato and Waves</h5>
                <p className="card-text">₱ 77.00</p>
                <button className="btn text-white mt-1">ADD ITEM</button>
              </div>
            </div>

            <div
              className="card col-lg-2 text-center  me-5"
              style={{ borderRadius: 30 }}
            >
              <img
                src={require("../img/greenwich/crunchy_chicken.png")}
                className="card-img-top text-center mt-4"
                alt="chicken"
                style={{ width: "150px", margin: "auto" }}
              />

              <div className="card-body">
                <h5 className="card-title">Crunchy Chicken</h5>
                <p className="card-text">₱ 391.00</p>
                <button className="btn text-white mt-3">ADD ITEM</button>
              </div>
            </div>

            <div
              className="card col-lg-2 text-center  me-5"
              style={{ borderRadius: 30 }}
            >
              <img
                src={require("../img/greenwich/image22.png")}
                className="card-img-top text-center mt-4 me-3"
                alt="chicken"
                style={{ width: "175px", margin: "auto" }}
              />
              <div className="card-body">
                <h5 className="card-title">Chicken and Waves</h5>
                <p className="card-text">₱ 308.00</p>
                <button className="btn text-white">ADD ITEM</button>
              </div>
            </div>
          </div>
        </div>
      </body>
    );
  }
}
export default Greenwich;
