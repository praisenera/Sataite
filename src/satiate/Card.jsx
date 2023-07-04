import React from "react";
import "../css/Card.css";
function Cards() {
  return (
    <>
      <h1 className="card_heading">Cuisine</h1>
      <div className="container">
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
              src={require("../img/jollibee/image4.png")}
              className="card-img-top"
              alt="chicken"
              style={{ width: "200px", margin: "auto" }}
            />
            <div className="card-body">
              <h5 className="card-title">
                Chicken w/ rice, spaghetti, burger steak and drinks
              </h5>
              <p className="card-text-cuisine">₱ 185.00</p>
              <button className="btn text-white">ADD ITEM</button>
            </div>
          </div>

          <div
            className="card col-lg-2 text-center  me-5"
            style={{ borderRadius: 30 }}
          >
            <img
              src={require("../img/jollibee/image12.png")}
              className="card-img-top mt-5"
              alt="chicken"
              style={{ width: "175px", margin: "auto" }}
            />
            <div className="card-body">
              <h5 className="card-title mt-2">Amazing Aloha</h5>
              <p className="card-text-cuisine">₱ 120.00</p>
              <button className="btn text-white mt-5">ADD ITEM</button>
            </div>
          </div>

          <div
            className="card col-lg-2 text-center  me-5"
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
              <p className="card-text-cuisine">₱ 80.00</p>
              <button className="btn text-white mt-5">ADD ITEM</button>
            </div>
          </div>

          <div
            className="card col-lg-2 text-center  me-5"
            style={{ borderRadius: 30 }}
          >
            <img
              src={require("../img/blackscoop/image1.png")}
              className="card-img-top text-center mt-4"
              alt="chicken"
              style={{ width: "100px", margin: "auto" }}
            />
            <div className="card-body">
              <h5 className="card-title">Taro Milktea</h5>
              <p className="card-text-cuisine">₱ 80.00</p>
              <button className="btn text-white mt-5">ADD ITEM</button>
            </div>
          </div>
        </div>
      </div>

      <h1 className="card_heading">Featured Restaurants</h1>
      <div className="container">
        <div
          className="row"
          style={{ marginBottom: "30px", justifyContent: "evenly" }}
        >
          <div
            className="card col-lg-2 me-5"
            style={{
              marginLeft: "100px",
              borderRadius: 30,
            }}
          >
            <img
              src={require("../img/brand_logo/jollibee.webp")}
              className="card-img-top mt-3"
              alt="chicken"
            />
            <div className="card-body">
              <a className="featured-res" href="/restaurants">
                Jollibee
              </a>
              <p className="card-text">
                ₱₱<span className="featured"> chicken, burger, fries</span>
              </p>
              <div className="ratings">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
              </div>
              <a className="btn text-white mt-1" href="/restaurants/jollibee">
                Order
              </a>
            </div>
          </div>

          <div
            className="card col-lg-2 text-center  me-5"
            style={{ borderRadius: 30 }}
          >
            <img
              src={require("../img/brand_logo/mcdo.webp")}
              className="card-img-top mt-3"
              alt="chicken"
              style={{ width: "160px", height: "120px", margin: "auto" }}
            />
            <div className="card-body">
              <a className="featured-res" href="/restaurants/jollibee">
                Mcdonald's
              </a>
              <p className="card-text">
                ₱₱<span className="featured"> chicken, burger, fries</span>
              </p>
              <div className="ratings mt-4">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-half"></i>
              </div>
              <a className="btn text-white" href="/restaurants/mcdo">
                Order
              </a>
            </div>
          </div>

          <div
            className="card col-lg-2 text-center  me-5"
            style={{ borderRadius: 30 }}
          >
            <img
              src={require("../img/brand_logo/greenwich.webp")}
              className="card-img-top text-center mt-3"
              alt="chicken"
              style={{ width: "160px", height: "120px", margin: "auto" }}
            />
            <div className="card-body">
              <a className="featured-res" href="/restaurants/greenwich">
                Greenwich
              </a>
              <p className="card-text">
                ₱₱<span className="featured"> chicken, burger, fries</span>
              </p>
              <div className="ratings">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star"></i>
              </div>
              <a className="btn text-white mt-1" href="/restaurants/greenwich">
                Order
              </a>
            </div>
          </div>

          <div
            className="card col-lg-2 text-center  me-5"
            style={{ borderRadius: 30 }}
          >
            <img
              src={require("../img/brand_logo/blackscoop.jpg")}
              className="card-img-top text-center mt-3"
              alt="chicken"
              style={{ width: "160px", height: "120px", margin: "auto" }}
            />
            <div className="card-body">
              <a className="featured-res" href="/restaurants/blackscoop">
                Blackscoop
              </a>
              <p className="card-text">
                ₱₱<span className="featured"> Pie, Milktea & frappe</span>
              </p>
              <div className="ratings">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star"></i>
              </div>
              <a className="btn text-white mt-1">Order</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Cards;
