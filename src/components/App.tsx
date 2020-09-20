import React from "react";
import pizzas from "../data/pizzas.json";
import Pizza from "./Pizza";
import { AppContainer, AppHeader, AppSiteTitle } from "./styles";
import PizzaSVG from "../svg/pizza.svg";
import Cart from "./cart/Cart";
import AppStateProvider from "./AppState";
import SpecialOffer from "./SpecialOffer";

const App = () => {
  const specialOfferPizza = pizzas.find((pizza) => pizza.specialOffer);
  return (
    <AppStateProvider>
      <AppContainer>
        <AppHeader>
          <PizzaSVG width={120} height={120} />
          <AppSiteTitle>Delicious Pizza</AppSiteTitle>
          <Cart />
        </AppHeader>
        {specialOfferPizza && <SpecialOffer pizza={specialOfferPizza} />}
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
