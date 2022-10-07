import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import ShoppingCartContext from '@context/ShoppingCartContext';

import MyOrders from '@containers/MyOrders';
import useFetch from '@hooks/useFetch';
import endPoints from '@services/api';

import Bar from '@icons/icon_menu.svg';
import Cart from '@icons/icon_shopping_cart.svg';
import Logo from '@logos/logo_yard_sale.svg';
import MobileMenu from '@components/MobileMenu';

const Header = () => {
  const products = useFetch(endPoints.products.getProducts);
  const categoryNames = new Set(products?.map((product) => product.category.name));
  const categoriesArray = Array.from(categoryNames);
  const categories = categoriesArray.sort();
  const { state, toggleOrders, toggleMenu, toggleMenuMobile, changeToggle } = useContext(ShoppingCartContext);
  const handleToggle = (toggle) => {
    changeToggle(toggle);
  };

  console.log(categories);

  return (
    <>
      <nav className="flex justify-between py-0 px-6 border-b border-veryLightPink border-solid sticky top-0 z-20 bg-white">
        <div className="block lg:hidden my-auto mx-0">
          <Image onClick={() => handleToggle('menu-mobile')} src={Bar} alt="menu" />
        </div>

        <div className="flex">
          <Link href="/">
            <Image src={Logo} alt="logo" className="w-[100px] cursor-pointer" />
          </Link>

          <ul className="hidden list-none p-0 ml-12 lg:flex lg:items-center h-16">
            {categories.map((category) => (
              <li>
                <a className="text-veryLightPink border border-solid border-white p-2 rounded-lg hover:border-hospitalGreen" href="/">
                  {category}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <ul className="list-none p-0 m-0 flex items-center h-16 space-x-4">
            <li className="hidden lg:inline-block">
              <button className="inline-block h-10 w-24 border border-solid border-hospitalGreen text-md font-semibold text-veryLightPink rounded-lg hover:scale-110">Login</button>
            </li>
            <li className="hidden lg:inline-block">
              <button className="inline-block h-10 w-24 border border-solid bg-hospitalGreen text-md font-semibold text-white rounded-lg hover:scale-110">Sign up</button>
            </li>
            <li className="hidden text-veryLightPink text-sm mr-3">platzi@example.com</li>
            <li className="relative cursor-pointer align-middle">
              <Image src={Cart} alt="shopping cart" className="" onClick={() => handleToggle('cart')} />
              {state.cart.length > 0 ? (
                <div className="w-4 h-4 font-bold absolute top-[-6px] right-[-3px] text-sm flex justify-center items-center bg-hospitalGreen rounded-full">
                  <p>{state.cart.length}</p>
                </div>
              ) : null}
            </li>
          </ul>
        </div>
        {toggleMenuMobile && <MobileMenu categories={categories} />}
        {toggleOrders && <MyOrders />}
      </nav>
    </>
  );
};

export default Header;
