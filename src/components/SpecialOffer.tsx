import React from "react";
import { Pizza } from "../types";
import { IAddToCartProps, WithAddToCartProps } from "./AddToCart";
import { SpecialOfferContainer } from "./styles";

interface IProps {
  pizza: Pizza;
}

const SpecialOffer: React.FC<IProps> = ({ pizza }) => {
  return (
    <SpecialOfferContainer>
      <h2>{pizza.name}</h2>
      <p>{pizza.description}</p>
      <p>{pizza.price}</p>
      <WithAddToCartProps>
        {({ addToCart }) => {
          return (
            <button
              type="button"
              onClick={() => {
                addToCart({
                  id: pizza.id,
                  name: pizza.name,
                  price: pizza.price,
                });
              }}
            >
              Add to Cart
            </button>
          );
        }}
      </WithAddToCartProps>
    </SpecialOfferContainer>
  );
};

export default SpecialOffer;
