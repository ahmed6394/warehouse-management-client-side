import React from "react";

const ManageItem = ({ item }) => {
  const { id, name, img, description, price, quantity, supplier } = item;

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
        <small className="p-2 m-2">{id}</small>
      </p>
      <p>
        <small className="p-2 m-2">Available quantity: {quantity}</small>
      </p>
      <button className="btn btn-dark mx-2">Delivered</button>

      <button className="btn btn-dark mx-2">Restored</button>
    </div>
  );
};

export default ManageItem;
