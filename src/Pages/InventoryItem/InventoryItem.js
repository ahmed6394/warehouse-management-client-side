import React from "react";

const InventoryItem = ({ item }) => {
  const { name, img, description, price, quanitty, supplier } = item;

  return (
    <div className="item">
      <img className="w-100" src={img} alt="" />
      <h2>{name}</h2>
      <p>Price: {price}</p>
      <p>Supplier: {supplier}</p>
      <p>
        <small className="p-2 m-2">{description}</small>
      </p>
      <p>
        <small className="p-2 m-2">Available quantity: {quanitty}</small>
      </p>
      <button>Update</button>
    </div>
  );
};

export default InventoryItem;
