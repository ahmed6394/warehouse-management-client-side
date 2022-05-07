import React, { useState } from "react";

const ManageItem = ({ item }) => {
  const { id, name, img, description, price, quantity, supplier } = item;
  const [delivered, setDelivered] = useState(0);
  const [reStored, setReStored] = useState(0);
  //   const [newQuantity, setNewQuantity] = useState(quantity);
  const handleDelivered = (id) => {
    const newDelivered = delivered + 1;
    setDelivered(newDelivered);
  };
  const handleReStored = (id) => {
    const newReStored = reStored + 1;
    setReStored(newReStored);
  };

  const newQuantity = quantity - delivered + reStored;
  let finalQuantity;
  if (newQuantity <= 0) {
    alert("Your Stock is empty");
    finalQuantity = 0;
  } else {
    finalQuantity = newQuantity;
  }
  return (
    <div className="item">
      <img className="w-100" src={img} alt="" />
      <h2>{name}</h2>
      <p>Price: {price}</p>
      <p>Supplier: {supplier}</p>
      <p>
        <small className="p-2 m-2">{description}</small>
      </p>
      <p className="p-2 m-2">Available quantity: {finalQuantity}</p>
      <button onClick={() => handleDelivered(id)} className="btn btn-dark mx-2">
        Delivered
      </button>
      <button onClick={() => handleReStored(id)} className="btn btn-dark mx-2">
        Restored
      </button>
      <button className="btn btn-dark mx-2">Remove Item</button>
    </div>
  );
};

export default ManageItem;
