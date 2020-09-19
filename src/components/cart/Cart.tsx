import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { CartContainer, CartDropDown, Button } from "./styles";

import { AppStateContext } from "../AppState";

interface Props {}

interface State {
  isOpen: boolean;
}

class Cart extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    return (
      <AppStateContext.Consumer>
        {(state) => {
          const itemCount = state.cart.items.reduce((acc, val) => {
            return acc + val.quantity;
          }, 0);
          return (
            <CartContainer>
              <Button type="button" onClick={this.handleClick}>
                <FiShoppingCart />
                <span>{itemCount} Pizzas</span>
              </Button>
              <CartDropDown isOpen={this.state.isOpen}>
                <ul>
                  {state.cart.items.map((item) => {
                    return (
                      <li key={item.id}>
                        {item.name} &times; {item.quantity}
                      </li>
                    );
                  })}
                </ul>
              </CartDropDown>
            </CartContainer>
          );
        }}
      </AppStateContext.Consumer>
    );
  }
}

export default Cart;
