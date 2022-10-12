import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import OrderItem from '@components/OrderItem';
import ShoppingCartContext from '@context/ShoppingCartContext';
import arrow from '@icons/flechita.svg';

const MyOrders = () => {
  const { state, changeToggle } = useContext(ShoppingCartContext);

  const sumTotal = () => {
    const reducer = (accumator, currenteValue) => accumator + currenteValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };
  return (
    <aside className="w-[360px] p-6 absolute right-0 bg-white top-[65px] bottom-auto rounded-lg">
      <div className="flex">
        <div className="w-5 h-5 rotate-180 my-auto mr-4 ml-0 cursor-pointer flex items-center">
          <Image src={arrow} alt="arrow" onClick={() => changeToggle('cart')} />
        </div>
        <p className="text-lg font-bold my-4">My order</p>
      </div>
      <div className="overflow-y-auto max-h-1/2">
        {state.cart.map((item) => (
          <OrderItem product={item} key={`orderItem-${item.id}`} />
        ))}
      </div>
      <div className="py-4 font-bold text-md grid grid-cols-[auto_1fr] gap-4 items-center bg-textInputField mb-6 rounded-lg px-6">
        <p>
          <span>Total</span>
        </p>
        <p className="text-end">${sumTotal()}</p>
      </div>
      <div className="bg-hospitalGreen rounded-lg border-none text-white w-full cursor-pointer text-md font-bold h-12 flex justify-center items-center">
        <Link href="/checkout/">Checkout</Link>
      </div>
    </aside>
  );
};

export default MyOrders;
