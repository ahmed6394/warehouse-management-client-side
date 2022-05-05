import React from "react";
import useItems from "../../../hooks/useItems";
import Item from "../Item/Item";
import "./items.css";

const Items = () => {
  const [items, setItems] = useItems([]);
  return (
    <div id="items" className="container">
      <div className="row">
        <h1 className="text-primary text-center mt-5">Items Available</h1>
        <div className="items-container">
          {items.map((item) => (
            <Item key={item.id} item={item}></Item>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Items;
