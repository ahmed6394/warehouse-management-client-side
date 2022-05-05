import React from "react";
import useItems from "../../hooks/useItems";
import InventoryItem from "../InventoryItem/InventoryItem";

const Inventory = () => {
  const [items, setItems] = useItems([]);

  return (
    <div id="items" className="container">
      <div className="row">
        <h1 className="text-primary text-center mt-5">Items Available</h1>
        <div className="items-container">
          {items.map((item) => (
            <InventoryItem key={item.id} item={item}></InventoryItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Inventory;
