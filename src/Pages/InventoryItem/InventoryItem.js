import React from "react";
import { useNavigate } from "react-router-dom";

const InventoryItem = ({ item }) => {
  const { _id, name, img, description, price, quanitty, supplier } = item;
  const navigate = useNavigate();
  const navigateToItemDetail = (_id) => {
    navigate("/manage");
  };

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
      <button onClick={navigateToItemDetail} className="btn btn-dark mb-0">
        Manage Item
      </button>
    </div>
  );
};

export default InventoryItem;
