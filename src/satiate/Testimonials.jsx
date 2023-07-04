import React from "react";
import "../css/Testimonials.css";
function Testimonials() {
  return (
    <>
      <h1 className="card_heading">Testimonials</h1>
      <div className="container-fluid">
        <div
          className="row"
          style={{ marginBottom: "30px", justifyContent: "evenly" }}
        >
          <div
            className="card-test col-lg-3 text-center me-1"
            style={{
              marginLeft: "100px",
              borderRadius: 30,
            }}
          >
            <img
              src={require("../img/reviews/person1.png")}
              className="card-img mt-4"
              alt="chicken"
              style={{ width: "175px", margin: "auto" }}
            />
            <div className="card-body">
              <p className="card-tes">
                Excellent service, fast and reasonable quotation, delivery boy
                turned up promptly and delivered the goods quickly as promised.
                Will use again and would definitely recommend to others.
              </p>
            </div>
          </div>

          <div
            className="card-test col-lg-3 text-center me-1"
            style={{
              marginLeft: "100px",
              borderRadius: 30,
            }}
          >
            <img
              src={require("../img/reviews/person2.webp")}
              className="card-img mt-4"
              alt="chicken"
              style={{ width: "175px", margin: "auto" }}
            />
            <div className="card-body">
              <p className="card-tes">
                Great service, picked up on time, keep me informed at each stage
                and delivered securely and on time. Great value too.
              </p>
            </div>
          </div>

          <div
            className="card-test col-lg-3 text-center"
            style={{
              marginLeft: "100px",
              borderRadius: 30,
            }}
          >
            <img
              src={require("../img/reviews/person3.jpg")}
              className="card-img mt-4"
              alt="chicken"
              style={{ width: "175px", margin: "auto" }}
            />
            <div className="card-body">
              <p className="card-tes">
                  I got my order here ASAP. Definitely will order from them all
                the time! This is by far the best delivery service. Thank you
                guys for what you do!
              </p>
            </div>
          </div>
        </div>

        <div
          className="row"
          style={{ marginBottom: "30px", justifyContent: "evenly" }}
        >
          <div
            className="card-test col-lg-3 text-center me-1"
            style={{
              marginLeft: "100px",
              borderRadius: 30,
            }}
          >
            <img
              src={require("../img/reviews/person1.png")}
              className="card-img mt-4"
              alt="chicken"
              style={{ width: "175px", margin: "auto" }}
            />
            <div className="card-body">
              <p className="card-tes">
                Excellent service, fast and reasonable quotation, delivery boy
                turned up promptly and delivered the goods quickly as promised.
                Will use again and would definitely recommend to others.
              </p>
            </div>
          </div>

          <div
            className="card-test col-lg-3 text-center me-1"
            style={{
              marginLeft: "100px",
              borderRadius: 30,
            }}
          >
            <img
              src={require("../img/reviews/person2.webp")}
              className="card-img mt-4"
              alt="chicken"
              style={{ width: "175px", margin: "auto" }}
            />
            <div className="card-body">
              <p className="card-tes">
                Great service, picked up on time, keep me informed at each stage
                and delivered securely and on time. Great value too.
              </p>
            </div>
          </div>
          <div
            className="card-test col-lg-3 text-center"
            style={{
              marginLeft: "100px",
              borderRadius: 30,
            }}
          >
            <img
              src={require("../img/reviews/person3.jpg")}
              className="card-img mt-4"
              alt="chicken"
              style={{ width: "175px", margin: "auto" }}
            />
            <div className="card-body">
              <p className="card-tes">
                  I got my order here ASAP. Definitely will order from them all
                the time! This is by far the best delivery service. Thank you
                guys for what you do!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <h1 className="cities">Cities</h1>
        <div className="row">
          <div className="city-group">
            <img
              src={require("../img/cities/makati.jpg")}
              className="city"
              height="170px"
              alt="makati"
            />

            <img
              src={require("../img/cities/mandaluyong.jpg")}
              className="city"
              height="170px"
              alt="makati"
            />

            <img
              src={require("../img/cities/manila.jpg")}
              className="city"
              height="170px"
              alt="makati"
            />
          </div>
        </div>
        <div className="row">
          <div className="city-group mt-5">
            <img
              src={require("../img/cities/marikina.jpg")}
              className="city"
              height="170px;"
              alt="makati"
            />
            <img
              src={require("../img/cities/Muntinlupa.jpg")}
              className="city"
              height="170px;"
              alt="makati"
            />
            <img
              src={require("../img/cities/pasay.jpg")}
              className="city"
              height="170px;"
              alt="makati"
            />
          </div>
        </div>

        <div className="row">
          <div className="city-group mt-5">
            <img
              src={require("../img/cities/pasig.jpg")}
              className="city"
              height="170px"
              alt="makati"
            />
            <img
              src={require("../img/cities/quezon.jpg")}
              className="city"
              height="170px;"
              alt="makati"
            />
            <img
              src={require("../img/cities/taguig.jpg")}
              className="city"
              height="170px"
              alt="makati"
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Testimonials;
