import React from "react";

function CardItem(props) {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="card_item">
            <a className="card_item_link" href={props.path}>
              <figure
                className="card_item_pic-wrap"
                data-category={props.label}
              >
                <img src={props.src} alt="food_img" className="card_item_img" />
              </figure>
              <div className="card_item_info">
                <h5 className="card_item_text">{props.text}</h5>
                <h5 className="card_item_text">{props.price}</h5>
              </div>
              <button className="btn">Add Item</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default CardItem;
