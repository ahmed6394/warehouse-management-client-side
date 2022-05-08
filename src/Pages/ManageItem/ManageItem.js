import React, { useState } from "react";
import useItems from "../../hooks/useItems";

const ManageItem = ({ item }) => {
  const { _id, name, img, description, price, quantity, supplier } = item;
  const [items, setItems] = useItems();
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

  const handleRemove = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `http://localhost:5000/item/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = items.filter((item) => item._id !== id);
          setItems(remaining);
        });
    }
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
      <p className="p-2 m-2">Available quantity: {finalQuantity}</p>
      <button
        onClick={() => handleDelivered(_id)}
        className="btn btn-dark mx-2"
      >
        Delivered
      </button>
      <button onClick={() => handleReStored(_id)} className="btn btn-dark mx-2">
        Restored
      </button>
      <button
        className="btn btn-dark mx-2"
        onClick={() => handleRemove(item._id)}
      >
        Remove Item
      </button>
    </div>
  );
};

export default ManageItem;
