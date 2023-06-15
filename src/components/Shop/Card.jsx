import React from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

const Cards = ({ product, handleClick }) => {
  const { name, price, imageSrc } = product;
  return (
    <div className="cards">
      <a href="#" >
        <img className="hover:grow hover:shadow-lg" src={imageSrc} alt="napsterke" />
      </a>
      <div className="pt-3 flex items-center justify-between">
        <a href="" className="pt-1 text-gray-900 hover:text-red-600">{name}</a>
        <p>Kshs {price}</p>
        <button onClick={() => handleClick(product)}><ShoppingBagIcon class="h-6 w-6 text-gray-900 hover:text-red-600" /></button>
      </div>
    </div>
  );
};

export default Cards;
