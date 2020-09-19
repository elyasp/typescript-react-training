import React, { createContext, useContext, useReducer, useEffect } from "react";

interface ICartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface IAppStateValue {
  cart: {
    items: ICartItem[];
  };
}

const defaultStateValue: IAppStateValue = {
  cart: {
    items: [],
  },
};

interface IAction<T> {
  type: T;
}

interface IAddToCartAction extends IAction<"ADD_TO_CART"> {
  payload: {
    item: Omit<ICartItem, "quantity">;
  };
}

interface IInitializeCartAction extends IAction<"INITIALIZE_CART"> {
  payload: {
    cart: IAppStateValue["cart"];
  };
}

export const AppStateContext = createContext(defaultStateValue);

export const AppDispatchContext = createContext<
  React.Dispatch<IAddToCartAction> | undefined
>(undefined);

export const useStateDispatch = () => {
  const dispatch = useContext(AppDispatchContext);
  if (!dispatch) {
    throw new Error(
      "useStateDispatch was called outside of the AppDispatchContext provider"
    );
  }
  return dispatch;
};

const reducer = (
  state: IAppStateValue,
  action: IAddToCartAction | IInitializeCartAction
) => {
  if (action.type === "ADD_TO_CART") {
    const itemToAdd = action.payload.item;
    const itemExists = state.cart.items.find(
      (item) => item.id === itemToAdd.id
    );
    return {
      ...state,
      cart: {
        ...state.cart,
        items: itemExists
          ? state.cart.items.map((item) => {
              if (item.id === itemToAdd.id) {
                return { ...item, quantity: item.quantity + 1 };
              }
              return item;
            })
          : [...state.cart.items, { ...itemToAdd, quantity: 1 }],
      },
    };
  } else action.type === "INITIALIZE_CART";
  {
    return {
      ...state,
      cart: action.payload.cart,
    };
  }

  return state;
};

const AppStateProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultStateValue);

  useEffect(() => {
    const cart = window.localStorage.getItem("cart");
    if (cart) {
      dispatch({
        type: "INITIALIZE_CART",
        payload: { cart: JSON.parse(cart) },
      });
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

export default AppStateProvider;
