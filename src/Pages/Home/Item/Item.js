import React from "react";

import "./item.css";

const Item = ({ item }) => {
  const { name, img, description, price } = item;

  return (
    <div className="item">
      <img className="w-100" src={img} alt="" />
      <h2>{name}</h2>
      <p>Price: {price}</p>
      <p>
        <small className="p-2 m-2">{description}</small>
      </p>
    </div>
  );
};

export default Item;
