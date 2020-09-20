import React from "react";
import { ICartItem, useStateDispatch } from "./AppState";

export interface IAddToCartProps {
  addToCart: (item: Omit<ICartItem, "quantity">) => void;
}

export function withAddToCart<OriginalProps extends IAddToCartProps>(
  ChildComponent: React.ComponentType<OriginalProps>
) {
  const AddToCartHOC = (props: Omit<OriginalProps, keyof IAddToCartProps>) => {
    const dispatch = useStateDispatch();
    const handleAddToCartClick: IAddToCartProps["addToCart"] = (item) => {
      dispatch({
        type: "ADD_TO_CART",
        payload: {
          item,
        },
      });
    };
    return (
      <ChildComponent
        {...(props as OriginalProps)}
        addToCart={handleAddToCartClick}
      />
    );
  };
  return AddToCartHOC;
}

export const WithAddToCartProps: React.FC<{
  children: (props: IAddToCartProps) => JSX.Element;
}> = ({ children }) => {
  const dispatch = useStateDispatch();
  const addToCart: IAddToCartProps["addToCart"] = (item) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        item,
      },
    });
  };
  return children({ addToCart });
};
