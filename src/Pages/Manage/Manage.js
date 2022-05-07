import React from "react";
import useItems from "../../hooks/useItems";
import ManageItem from "../ManageItem/ManageItem";

const Manage = () => {
  const [items, setItems] = useItems([]);
  return (
    <div id="items" className="container">
      <div className="row">
        <h1 className="text-dark text-center mt-5">Items Available</h1>
        <div className="items-container">
          {items.map((item) => (
            <ManageItem key={item.id} item={item}></ManageItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Manage;
