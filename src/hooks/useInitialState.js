import { useState } from 'react';

const initialState = {
  cart: [],
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);
  const [categoryHeader, setCategoryHeader] = useState({ id: 0, name: 'All', image: 'https://api.lorem.space/image/watch?w=640&h=480&r=2848' });

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
    addToCart,
    removeFromCart,
    categoryHeader,
    setCategoryHeader,
  };
};

export default useInitialState;
