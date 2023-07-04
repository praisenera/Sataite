import React from "react";
import "../css/Menu.css";
function Popular() {
  return (
    <>
      <h1 className="card_heading">Popular</h1>
      <div className="container">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
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
                    src={require("../img/mcdo/image9.png")}
                    className="card-img-top mt-4"
                    alt="chicken"
                    style={{ width: "150px", margin: "auto" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title mt-3">
                      Chicken ala king w/ regular fries & drinks
                    </h5>
                    <p className="card-text-cuisine">₱ 102.00</p>
                    <button className="btn text-white mt-4">ADD ITEM</button>
                  </div>
                </div>

                <div
                  className="card col-lg-2 text-center  me-5"
                  style={{ borderRadius: 30 }}
                >
                  <img
                    src={require("../img/jollibee/image3.png")}
                    className="card-img-top"
                    alt="chicken"
                    style={{ width: "175px", margin: "auto" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      2pcs chicken w/ rice and drink
                    </h5>
                    <p className="card-text-cuisine">₱ 163.00</p>
                    <button className="btn text-white mt-3">ADD ITEM</button>
                  </div>
                </div>

                <div
                  className="card col-lg-2 text-center  me-5"
                  style={{ borderRadius: 30 }}
                >
                  <img
                    src={require("../img/jollibee/image1.png")}
                    className="card-img-top text-center mt-4"
                    alt="chicken"
                    style={{ width: "175px", margin: "auto" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      1 pcs. chicken with rice, burger steak and drinks
                    </h5>
                    <p className="card-text-cuisine">₱ 175.00</p>
                    <button className="btn text-white mt-4">ADD ITEM</button>
                  </div>
                </div>

                <div
                  className="card col-lg-2 text-center  me-5"
                  style={{ borderRadius: 30 }}
                >
                  <img
                    src={require("../img/mcdo/image8.png")}
                    className="card-img-top text-center"
                    alt="chicken"
                    style={{ width: "175px", margin: "auto" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      Chicken fillet w/ large fries and drinks
                    </h5>
                    <p className="card-text-cuisine">₱ 135.00</p>
                    <button className="btn text-white">ADD ITEM</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>

      <h1 className="card_heading">Recent Orders</h1>
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
              src={require("../img/greenwich/image15.png")}
              className="card-img-top mt-4"
              alt="chicken"
              style={{ width: "175px", margin: "auto" }}
            />
            <div className="card-body">
              <h5 className="card-title mt-4">All Beef Overload</h5>
              <p className="card-text-cuisine">₱ 487.00</p>
              <button className="btn text-white mt-4">ADD ITEM</button>
            </div>
          </div>

          <div
            className="card col-lg-2 text-center  me-5"
            style={{ borderRadius: 30 }}
          >
            <img
              src={require("../img/blackscoop/image2.png")}
              className="card-img-top mt-2"
              alt="chicken"
              style={{ width: "150px", margin: "auto" }}
            />
            <div className="card-body">
              <h5 className="card-title">2pcs chicken w/ rice and drink</h5>
              <p className="card-text-cuisine">₱ 163.00</p>
              <button className="btn text-white mt-5">ADD ITEM</button>
            </div>
          </div>

          <div
            className="card col-lg-2 text-center  me-5"
            style={{ borderRadius: 30 }}
          >
            <img
              src={require("../img/jollibee/image1.png")}
              className="card-img-top text-center mt-5"
              alt="chicken"
              style={{ width: "175px", margin: "auto" }}
            />
            <div className="card-body">
              <h5 className="card-title mt-2">
                1 pcs. chicken with rice, burger steak and drinks
              </h5>
              <p className="card-text-cuisine">₱ 175.00</p>
              <button className="btn text-white mt-2">ADD ITEM</button>
            </div>
          </div>

          <div
            className="card col-lg-2 text-center  me-5"
            style={{ borderRadius: 30 }}
          >
            <img
              src={require("../img/mcdo/image8.png")}
              className="card-img-top text-center"
              alt="chicken"
              style={{ width: "175px", margin: "auto" }}
            />
            <div className="card-body">
              <h5 className="card-title mt-2">
                Chicken fillet w/ large fries and drinks
              </h5>
              <p className="card-text-cuisine">₱ 135.00</p>
              <button className="btn text-white">ADD ITEM</button>
            </div>
          </div>
        </div>
      </div>

      <h1 className="card_heading">Recommended for you</h1>
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
              src={require("../img/greenwich/image15.png")}
              className="card-img-top mt-4"
              alt="chicken"
              style={{ width: "175px", margin: "auto" }}
            />
            <div className="card-body">
              <h5 className="card-title mt-4">All Beef Overload</h5>
              <p className="card-text-cuisine">₱ 487.00</p>
              <button className="btn text-white mt-4">ADD ITEM</button>
            </div>
          </div>

          <div
            className="card col-lg-2 text-center  me-5"
            style={{ borderRadius: 30 }}
          >
            <img
              src={require("../img/blackscoop/image2.png")}
              className="card-img-top mt-2"
              alt="chicken"
              style={{ width: "150px", margin: "auto" }}
            />
            <div className="card-body">
              <h5 className="card-title">2pcs chicken w/ rice and drink</h5>
              <p className="card-text-cuisine">₱ 163.00</p>
              <button className="btn text-white mt-5">ADD ITEM</button>
            </div>
          </div>

          <div
            className="card col-lg-2 text-center  me-5"
            style={{ borderRadius: 30 }}
          >
            <img
              src={require("../img/jollibee/image1.png")}
              className="card-img-top text-center mt-5"
              alt="chicken"
              style={{ width: "175px", margin: "auto" }}
            />
            <div className="card-body">
              <h5 className="card-title mt-2">
                1 pcs. chicken with rice, burger steak and drinks
              </h5>
              <p className="card-text-cuisine">₱ 175.00</p>
              <button className="btn text-white mt-2">ADD ITEM</button>
            </div>
          </div>

          <div
            className="card col-lg-2 text-center  me-5"
            style={{ borderRadius: 30 }}
          >
            <img
              src={require("../img/mcdo/image8.png")}
              className="card-img-top text-center"
              alt="chicken"
              style={{ width: "175px", margin: "auto" }}
            />
            <div className="card-body">
              <h5 className="card-title mt-2">
                Chicken fillet w/ large fries and drinks
              </h5>
              <p className="card-text-cuisine">₱ 135.00</p>
              <button className="btn text-white">ADD ITEM</button>
            </div>
          </div>
        </div>
      </div>

      <h1 className="card_heading">Top Brands</h1>
      <div className="top-brand-container">
        <div
          className="row mt-5"
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
              src={require("../img/jollibee/logo.png")}
              className="top-brand"
              style={{ margin: "auto", width: "200px" }}
              alt="jollibee"
            />
          </div>

          <div
            className="card col-lg-2 text-center  me-5"
            style={{ borderRadius: 30 }}
          >
            <img
              src={require("../img/brand_logo/logo.webp")}
              className="top-brand"
              alt="mcdo"
            />
          </div>

          <div
            className="card col-lg-2 text-center  me-5"
            style={{ borderRadius: 30 }}
          >
            <img
              src={require("../img/brand_logo/blackscoop.png")}
              className="top-brand"
              style={{ width: "150px", margin: "auto" }}
              alt="blackscoop"
            />
          </div>

          <div
            className="card col-lg-2 text-center  me-5"
            style={{ borderRadius: 30 }}
          >
            <img
              src={require("../img/brand_logo/tokyo.webp")}
              className="top-brand mt-5"
              alt="tokyo"
              stye={{}}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Popular;
