import React, { useState } from "react";
import "../css/search.css";

function Search() {
  return (
    <>
      <div className="container">
        <div className="row mb-0">
          <div className="search-container col-lg-12">
            <div className="input-search">
              <i class="bi bi-search icon"></i>
              <input
                className="input-field text-center"
                type="text"
                placeholder="Search.."
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row text-center mt-5 promos">
          <h3 className="promo text-dark">First time user promo!!</h3>
          <h3 className="promo text-dark">Save upto 20%</h3>
        </div>
      </div>
    </>
  );
}
export default Search;
