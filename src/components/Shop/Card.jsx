import React from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

const Cards = ({ product, handleClick }) => {
  const { name, price, imageSrc } = product;
  return (
    <div className="cards">
      <div className="image_box">
        <img className="hover:grow hover:shadow-lg" src={imageSrc} alt="napsterke" />
      </div>
      <div className="pt-3 flex items-center justify-between">
        <p className="pt-1 text-gray-900">{name}</p>
        <p>Kshs {price}</p>
        <button onClick={() => handleClick(product)}><ShoppingBagIcon class="h-6 w-6 text-gray-900" /></button>
      </div>
    </div>
  );
};

export default Cards;
