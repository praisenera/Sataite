import React from "react";
import "../css/Ratings.css";

function Rating() {
  return (
    <>
      <div className="container" style={{ marginTop: "100px" }}>
        <h1>Soon available ...</h1>
        <a href="https://play.google.com/store/games?device=phone">
          <img
            src={require("../img/reviews/google.png")}
            alt="app-store"
            style={{ width: "150px" }}
          />
        </a>
        <a href="https://apps.apple.com/us/app">
          <img
            src={require("../img/reviews/app-store.png")}
            alt="app-store"
            style={{ width: "150px" }}
          />
        </a>
      </div>

      <div className="container">
        <h3 id="rate-heading">Ratings</h3>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-half"></i>
        <span>
          <i> 4.5 out of 5</i>
        </span>
      </div>
      <div className="container mt-3">
        <div className="rate">
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <span> Excellent</span>
        </div>
        <div className="rate">
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <span> Very Good</span>
        </div>
        <div className="rate">
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <span> Good</span>
        </div>
        <div className="rate">
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <span> Fair</span>
        </div>
        <div className="rate">
          <i class="bi bi-star-fill"></i>
          <span> Poor</span>
        </div>
      </div>
    </>
  );
}
export default Rating;
