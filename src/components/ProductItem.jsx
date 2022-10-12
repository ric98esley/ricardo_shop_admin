import React, { useContext } from 'react';
import Image from 'next/image';

import ShoppingCartContext from '@context/ShoppingCartContext';

import addToCard from '@icons/bt_add_to_cart.svg';
import addedToCard from '@icons/bt_added_to_cart.svg';

const ProductItem = ({ product }) => {
  const { addToCart, removeFromCart, state } = useContext(ShoppingCartContext);

  const handleCheck = () => {
    return state.cart.some((item) => item.id === product.id);
  };

  const handleClick = (item) => {
    handleCheck(item) ? removeFromCart(item) : addToCart(item);
  };

  return (
    <div className="rounded-tl-3xl rounded-br-3xl shadow-card flex flex-col items-center justify-between relative w-full h-80">
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role*/}
      <figure className="absolute top-3.5 right-3.5 m-0 w-10 h-10" onClick={() => handleClick(product)} onKeyPress={() => handleClick(product)} role={'button'}>
        <div>
          <Image src={handleCheck() ? addedToCard : addToCard} alt="" className="z-10"/>
        </div>
      </figure>
      <div className="w-60 h-60 rounded-tl-3xl rounded-br-3xl object-cover overflow-hidden z-0">
        <Image objectFit='cover' loader={() => product.images[0]} unoptimized={true} layout="responsive" src={product.images[0]} alt={product.title} width={'100%'} height={'100%'}/>
      </div>
      <div className="h-20 w-full flex items-center">
          <div className="w-3/5 text-ellipsis h-10 overflow-hidden">
            <p className="block ml-4 leading-5 text-black text-sm font-medium mt-0 mb-1">{product.title}</p>
          </div>
          <div className="bg-hospitalGreen w-2/5 h-12 overflow-hidden relative left-3 rounded-target">
            <p className="font-black block mt-2.5 ml-3 text-ellipsis text-center text-lg leading-6 text-white">{product.price} $</p>
          </div>
      </div>
    </div>
  );
};

export default ProductItem;
