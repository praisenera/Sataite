import React from "react";
import "../css/style.css";

function Jollibee() {
  return (
    <body>
      <img className="logo mt-3" src={require("../img/brand_logo/logo.png")} />
      <ul className="res mt-4">
        <li className="category">
          <a href="#meals">Meals</a>
        </li>
        <li className="category">
          <a href="#burgers">Burgers</a>
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

      <div className="container" id="meals">
        <h1 className="categories ms-5">Rice Meals</h1>
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
              src={require("../img/jollibee/image1.png")}
              className="card-img-top text-center mt-4"
              alt="chicken"
              style={{ width: "150px", margin: "auto" }}
            />
            <div className="card-body">
              <h5 className="card-title mt-3">
                1 pcs. chicken with rice, burger steak and drinks
              </h5>
              <p className="card-text">₱ 175.00</p>
              <button className="btn text-white mt-4">ADD ITEM</button>
            </div>
          </div>

          <div
            className="card col-lg-2 text-center  me-5"
            style={{ borderRadius: 30 }}
          >
            <img
              src={require("../img/jollibee/image2.png")}
              className="card-img-top text-center mt-4"
              alt="chicken"
              style={{ width: "150px", margin: "auto" }}
            />
            <div className="card-body">
              <h5 className="card-title mt-3">
                2pcs burger steak w/ rice and drinks
              </h5>
              <p className="card-text">₱ 90.00</p>
              <button className="btn text-white mt-4">ADD ITEM</button>
            </div>
          </div>

          <div
            className="card col-lg-2 text-center  me-5"
            style={{ borderRadius: 30 }}
          >
            <img
              src={require("../img/jollibee/image3.png")}
              className="card-img-top text-center"
              alt="chicken"
              style={{ width: "150px", margin: "auto" }}
            />
            <div className="card-body">
              <h5 className="card-title">2pcs chicken w/ rice and drinks</h5>
              <p className="card-text">₱ 170.00</p>
              <button className="btn text-white" style={{ marginTop: "35px" }}>
                ADD ITEM
              </button>
            </div>
          </div>

          <div
            className="card col-lg-2 text-center"
            style={{ borderRadius: 30 }}
          >
            <img
              src={require("../img/jollibee/image4.png")}
              className="card-img-top text-center mt-3"
              alt="chicken"
              style={{ width: "150px", margin: "auto" }}
            />
            <div className="card-body">
              <h5 className="card-title">
                Chicken w/ rice, spaghetti, burger steak and drinks
              </h5>
              <p className="card-text">₱ 185.00</p>
              <button className="btn text-white">ADD ITEM</button>
            </div>
          </div>
        </div>

        <h1 className="categories ms-5">Pasta</h1>
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
              src={require("../img/jollibee/image5.png")}
              className="card-img-top text-center mt-4"
              alt="chicken"
              style={{ width: "150px" }}
            />
            <div className="card-body">
              <h5 className="card-title mt-3">
                1 pcs. chicken with palabok and drinks
              </h5>
              <p className="card-text">₱ 198.00</p>
              <button className="btn text-white mt-3">ADD ITEM</button>
            </div>
          </div>

          <div
            className="card col-lg-2 text-center  me-5"
            style={{ borderRadius: 30 }}
          >
            <img
              src={require("../img/jollibee/image6.png")}
              className="card-img-top text-center mt-1"
              alt="chicken"
              style={{ width: "150px" }}
            />
            <div className="card-body">
              <h5 className="card-title mt-2">
                Jolly spaghetti with yumburger
              </h5>
              <p className="card-text"> ₱ 105.00</p>
              <button className="btn text-white mt-4">ADD ITEM</button>
            </div>
          </div>

          <div
            className="card col-lg-2 text-center  me-5"
            style={{ borderRadius: 30 }}
          >
            <img
              src={require("../img/jollibee/image7.png")}
              className="card-img-top text-center mt-2"
              alt="chicken"
              style={{ width: "150px" }}
            />
            <div className="card-body">
              <h5 className="card-title mt-2">Jolly spaghetti with fries</h5>
              <p className="card-text"> ₱ 105.00</p>
              <button className="btn text-white mt-4">ADD ITEM</button>
            </div>
          </div>

          <div
            className="card col-lg-2 text-center"
            style={{ borderRadius: 30 }}
          >
            <img
              src={require("../img/jollibee/image8.png")}
              className="card-img-top text-center mt-3"
              alt="chicken"
              style={{ width: "150px", margin: "auto" }}
            />
            <div className="card-body">
              <h5 className="card-title">Jolly spaghetti with burger steak</h5>
              <p className="card-text"> ₱ 140.00</p>
              <button className="btn text-white">ADD ITEM</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container" id="burgers">
        <h1 className="categories ms-5">Burgers</h1>
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
              src={require("../img/jollibee/image9.png")}
              className="card-img-top text-center mt-4"
              alt="chicken"
              style={{ width: "150px" }}
            />
            <div className="card-body">
              <h5 className="card-title mt-2">Yumburger solo</h5>
              <p className="card-text">₱ 39.00</p>
              <button className="btn text-white mt-4">ADD ITEM</button>
            </div>
          </div>

          <div
            className="card col-lg-2 col-md-2 text-center  me-5"
            style={{ borderRadius: 30 }}
          >
            <img
              src={require("../img/jollibee/image10.png")}
              className="card-img-top text-center mt-4"
              alt="chicken"
              style={{ width: "150px" }}
            />
            <div className="card-body">
              <h5 className="card-title ">Cheese yumburger</h5>
              <p className="card-text"> ₱ 54.00</p>
              <button className="btn text-white mt-2">ADD ITEM</button>
            </div>
          </div>

          <div
            className="card col-lg-2 col-md-2 text-center  me-5"
            style={{ borderRadius: 30 }}
          >
            <img
              src={require("../img/jollibee/image11.png")}
              className="card-img-top text-center mt-4"
              alt="chicken"
              style={{ width: "150px" }}
            />
            <div className="card-body">
              <h5 className="card-title">Bacon cheese yumburger solo</h5>
              <p className="card-text"> ₱ 65.00</p>
              <button className="btn text-white mt-2">ADD ITEM</button>
            </div>
          </div>

          <div
            className="card col-lg-2 col-md-2 text-center"
            style={{ borderRadius: 30 }}
          >
            <img
              src={require("../img/jollibee/image12.png")}
              className="card-img-top text-center mt-5"
              alt="chicken"
              style={{ width: "150px" }}
            />
            <div className="card-body">
              <h5 className="card-title">Amazing aloha</h5>
              <p className="card-text"> ₱ 135.00</p>
              <button className="btn text-white mt-3">ADD ITEM</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container" id="fries">
        <h1 className="categories ms-5">Fries</h1>
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
              src={require("../img/jollibee/image13.png")}
              className="card-img-top text-center mt-4"
              alt="chicken"
              style={{ width: "150px" }}
            />
            <div className="card-body">
              <h5 className="card-title mt-3">Regular Fries</h5>
              <p className="card-text">₱ 47.00</p>
              <button className="btn text-white mt-4">ADD ITEM</button>
            </div>
          </div>

          <div
            className="card col-lg-2 col-md-2 text-center  me-5"
            style={{ borderRadius: 30 }}
          >
            <img
              src={require("../img/jollibee/image14.png")}
              className="card-img-top text-center mt-4"
              alt="chicken"
              style={{ width: "150px" }}
            />
            <div className="card-body">
              <h5 className="card-title ">Medium Fries</h5>
              <p className="card-text"> ₱ 54.00</p>
              <button className="btn text-white mt-4">ADD ITEM</button>
            </div>
          </div>

          <div
            className="card col-lg-2 col-md-2 text-center  me-5"
            style={{ borderRadius: 30 }}
          >
            <img
              src={require("../img/jollibee/image15.png")}
              className="card-img-top text-center mt-4"
              alt="chicken"
              style={{ width: "150px" }}
            />
            <div className="card-body">
              <h5 className="card-title">Large Fries</h5>
              <p className="card-text"> ₱ 72.00</p>
              <button className="btn text-white ">ADD ITEM</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container" id="desserts">
        <h1 className="categories ms-5">Desserts</h1>
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
              src={require("../img/jollibee/image16.png")}
              className="card-img-top text-center mt-4"
              alt="chicken"
              style={{ width: "150px" }}
            />
            <div className="card-body">
              <h5 className="card-title mt-3">Peach mango pie</h5>
              <p className="card-text">₱ 48.00</p>
              <button className="btn text-white">ADD ITEM</button>
            </div>
          </div>

          <div
            className="card col-lg-2 col-md-2 text-center  me-5"
            style={{ borderRadius: 30 }}
          >
            <img
              src={require("../img/jollibee/image17.png")}
              className="card-img-top text-center mt-4"
              alt="chicken"
              style={{ width: "150px" }}
            />
            <div className="card-body">
              <h5 className="card-title ">3pcs. peach mango pie</h5>
              <p className="card-text"> ₱ 138.00</p>
              <button className="btn text-white ">ADD ITEM</button>
            </div>
          </div>

          <div
            className="card col-lg-2 col-md-2 text-center  me-5"
            style={{ borderRadius: 30 }}
          >
            <img
              src={require("../img/jollibee/image18.png")}
              className="card-img-top text-center mt-4"
              alt="chicken"
              style={{ width: "150px" }}
            />
            <div className="card-body">
              <h5 className="card-title">Tuna pie</h5>
              <p className="card-text"> ₱ 48.00</p>
              <button className="btn text-white ">ADD ITEM</button>
            </div>
          </div>

          <div
            className="card col-lg-2 col-md-2 text-center  me-5"
            style={{ borderRadius: 30 }}
          >
            <img
              src={require("../img/jollibee/image19.png")}
              className="card-img-top text-center mt-4"
              alt="chicken"
              style={{ width: "150px" }}
            />
            <div className="card-body">
              <h5 className="card-title">3pcs. tuna pie</h5>
              <p className="card-text"> ₱ 138.00</p>
              <button className="btn text-white mt-1">ADD ITEM</button>
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
              src={require("../img/jollibee/image20.png")}
              className="card-img-top text-center mt-4"
              alt="chicken"
              style={{ width: "150px" }}
            />
            <div className="card-body">
              <h5 className="card-title">Hot choco</h5>
              <p className="card-text">₱ 48.00</p>
              <button className="btn text-white">ADD ITEM</button>
            </div>
          </div>

          <div
            className="card col-lg-2 col-md-2 text-center  me-5"
            style={{ borderRadius: 30 }}
          >
            <img
              src={require("../img/jollibee/image21.png")}
              className="card-img-top text-center mt-2 ms-2"
              alt="chicken"
              style={{ width: "150px" }}
            />
            <div className="card-body">
              <h5 className="card-title mt-2">Coffee</h5>
              <p className="card-text"> ₱ 43.00</p>{" "}
              <button className="btn text-white mt-1">ADD ITEM</button>
            </div>
          </div>

          <div
            className="card col-lg-2 col-md-2 text-center  me-5"
            style={{ borderRadius: 30 }}
          >
            <img
              src={require("../img/jollibee/image22.png")}
              className="card-img-top text-center ms-2 mt-4"
              alt="chicken"
              style={{ width: "125px" }}
            />
            <div className="card-body">
              <h5 className="card-title mt-1">Coke float</h5>
              <p className="card-text"> ₱ 53.00</p>
              <button className="btn text-white ">ADD ITEM</button>
            </div>
          </div>

          <div
            className="card col-lg-2 col-md-2 text-center  me-5"
            style={{ borderRadius: 30 }}
          >
            <img
              src={require("../img/jollibee/image23.png")}
              className="card-img-top text-center mt-3 ms-3"
              alt="chicken"
              style={{ width: "125px" }}
            />
            <div className="card-body">
              <h5 className="card-title">Ice tea</h5>
              <p className="card-text"> ₱ 64.00</p>
              <button className="btn text-white mt-1">ADD ITEM</button>
            </div>
          </div>
        </div>
        <div className="row mt-5 mb-5">
          <div
            className="card col-lg-2 col-md-2 text-center me-5"
            style={{ marginLeft: "100px", borderRadius: 30 }}
          >
            <img
              src={require("../img/jollibee/image24.png")}
              className="card-img-top text-center mt-2 ms-4"
              alt="chicken"
              style={{ width: "100px" }}
            />
            <div className="card-body">
              <h5 className="card-title">Coke</h5>
              <p className="card-text">₱ 53.00</p>
              <button className="btn text-white">ADD ITEM</button>
            </div>
          </div>

          <div
            className="card col-lg-2 col-md-2 text-center  me-5"
            style={{ borderRadius: 30 }}
          >
            <img
              src={require("../img/jollibee/image25.png")}
              className="card-img-top text-center mt-2 ms-3"
              alt="chicken"
              style={{ width: "115px" }}
            />
            <div className="card-body">
              <h5 className="card-title">Sarsi</h5>
              <p className="card-text"> ₱ 53.00</p>{" "}
              <button className="btn text-white mt-1">ADD ITEM</button>
            </div>
          </div>

          <div
            className="card col-lg-2 col-md-2 text-center  me-5"
            style={{ borderRadius: 30 }}
          >
            <img
              src={require("../img/jollibee/image26.png")}
              className="card-img-top text-center ms-2 mt-2"
              alt="chicken"
              style={{ width: "150px" }}
            />
            <div className="card-body">
              <h5 className="card-title mt-1">Royal</h5>
              <p className="card-text"> ₱ 53.00</p>
              <button className="btn text-white ">ADD ITEM</button>
            </div>
          </div>

          <div
            className="card col-lg-2 col-md-2 text-center  me-5"
            style={{ borderRadius: 30 }}
          >
            <img
              src={require("../img/jollibee/image27.png")}
              className="card-img-top text-center mt-3 ms-4"
              alt="chicken"
              style={{ width: "115px" }}
            />
            <div className="card-body">
              <h5 className="card-title">Sprite</h5>
              <p className="card-text"> ₱ 53.00</p>
              <button className="btn text-white">ADD ITEM</button>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}
export default Jollibee;
