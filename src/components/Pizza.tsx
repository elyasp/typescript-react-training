import React from "react";
import { PizzaContainer } from "./styles";
import { useStateDispatch } from "./AppState";
import { Pizza } from "../types";
import { IAddToCartProps, withAddToCart } from "./AddToCart";

interface Props extends IAddToCartProps {
  pizza: Pizza;
}

const PizzaItem: React.FC<Props> = ({ pizza, addToCart }) => {
  const handleAddToCartClick = () => {
    addToCart({
      id: pizza.id,
      name: pizza.name,
      price: pizza.price,
    });
  };
  return (
    <PizzaContainer>
      <li>
        <h2>{pizza.name}</h2>
        <p>{pizza.description}</p>
        <p>{pizza.price}</p>
        <button type="button" onClick={handleAddToCartClick}>
          Add to Cart
        </button>
      </li>
    </PizzaContainer>
  );
};

export default withAddToCart(PizzaItem);
