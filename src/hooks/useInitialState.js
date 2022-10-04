import { useState } from "react";

const initialState = {
  cart: [],
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);
  const [toggleOrders, setToggleOrders] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleMenuMobile, setToggleMenuMobile] = useState(false);
  const changeToggle = toggle => {
    if(toggle === "menu"){
      setToggleMenu(!toggleMenu);
      setToggleMenuMobile(false);
      setToggleOrders(false);
    } else if(toggle === "cart"){
      setToggleOrders(!toggleOrders);
      setToggleMenuMobile(false);
      setToggleMenu(false);
    } else if (toggle === "menu-mobile"){
      setToggleMenuMobile(!toggleMenuMobile);
      setToggleOrders(false);
      setToggleMenu(false);
    }
  };

  const addToCart = (product) => {
    setState({
      ...state,
      cart: [...state.cart, product],
    });
  };

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((items) => items.id !== payload.id),
    });
  };

  return {
    state,
    toggleOrders,
    toggleMenu,
    toggleMenuMobile,
    addToCart,
    removeFromCart,
    changeToggle,
  };
};

export default useInitialState;
