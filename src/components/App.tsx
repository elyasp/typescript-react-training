import React from "react";
import pizzas from "../data/pizzas.json";
import Pizza from "./Pizza";
import { AppContainer, AppHeader, AppSiteTitle } from "./styles";
import PizzaSVG from "../svg/pizza.svg";
import Cart from "./cart/Cart";
import AppStateProvider from "./AppState";

const App = () => {
  return (
    <AppStateProvider>
      <AppContainer>
        <AppHeader>
          <PizzaSVG width={120} height={120} />
          <AppSiteTitle>Delicious Pizza</AppSiteTitle>
          <Cart />
        </AppHeader>
        <ul>
          {pizzas.map((pizza) => {
            return <Pizza key={pizza.id} pizza={pizza} />;
          })}
        </ul>
      </AppContainer>
    </AppStateProvider>
  );
};

export default App;
