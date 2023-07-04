import React from "react";
import "../css/OrderProcessing.css";
function OrderProcessing() {
  return (
    <>
      <div className="container text-center">
        <div className="row">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15479.739039891054!2d121.1304911404297!3d14.081028502267987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sph!4v1688384659689!5m2!1sen!2sph"
            width="400"
            height="300"
            style={{ border: "0", margin: "auto" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="geo-loc"
          ></iframe>
          <input
            className="input-field"
            type="text"
            size="50"
            name="location"
            id="loc"
            placeholder="location.."
          />
        </div>
      </div>
    </>
  );
}
export default OrderProcessing;
