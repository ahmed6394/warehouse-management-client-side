import React from "react";
import { useParams } from "react-router-dom";

const ItemDetail = () => {
  const { itemId } = useParams();
  return (
    <div>
      <h2>I im form item details of: {itemId}</h2>
    </div>
  );
};

export default ItemDetail;
