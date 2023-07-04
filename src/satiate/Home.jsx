import React from "react";
import "../css/Home.css";
function Home() {
  return (
    <>
      <div className="hero-section">
        <h1 className="hero-section-heading col-lg-4">
          Hungry? You're in the right place
        </h1>
        <button className="hero-btn text-white order" href="/restaurants">
          Order Now
        </button>
        <button className="hero-btn text-white explore" href="/menu">
          Explore Restaurants
        </button>
      </div>

      <div className="container-fluid">
        <div className="row col-lg-12">
          <div className="col-lg-6">
            <img
              src={require("../img/logo/food_delivery.png")}
              alt="delivery"
              className="delivery"
            />
          </div>
          <div className="col-lg-6">
            <h1 id="desc">Satiate</h1>
            <p id="means">
              Is an online food delivery services in the Philippines that offers
              a wide selection of restaurants and cuisines to cater to your
              unique taste buds. We provide an extensive restaurant selection,
              ensuring a diverse range of options to satisfy any craving.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
