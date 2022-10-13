import React, { useContext, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import ShoppingCartContext from '@context/ShoppingCartContext';

import MyOrders from '@containers/MyOrders';
import Modal from '@common/Modal';
import useFetch from '@hooks/useFetch';
import endPoints from '@services/api';

import Bar from '@icons/icon_menu.svg';
import Cart from '@icons/icon_shopping_cart.svg';
import Logo from '@logos/logo_yard_sale.svg';
import MobileMenu from '@components/MobileMenu';
import Menu from '@components/Menu';
import Login from '@components/Login';
import { useAuth } from '@hooks/useAuth';

const Header = () => {
  const [open, setOpen] = useState(false);

  const auth = useAuth();
  const userData = {
    name: auth?.user?.name,
    email: auth?.user?.email,
    imageUrl: auth?.user?.avatar,
  };

  const { state, setCategoryHeader } = useContext(ShoppingCartContext);

  const categoriesFetch = useFetch(endPoints.categories.getCategories());
  const categories = [
    {
      id: 0,
      name: 'All',
      image: 'https://api.lorem.space/image/fashion?w=640&h=480&r=9765',
    },
    ...categoriesFetch,
  ];

  const handleCategory = (categoryH) => {
    setCategoryHeader(categoryH);
  };

  const [toggleOrders, setToggleOrders] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleMenuMobile, setToggleMenuMobile] = useState(false);
  const changeToggle = (toggle) => {
    if (toggle === 'menu') {
      setToggleMenu(!toggleMenu);
      setToggleMenuMobile(false);
      setToggleOrders(false);
    } else if (toggle === 'cart') {
      setToggleOrders(!toggleOrders);
      setToggleMenuMobile(false);
      setToggleMenu(false);
    } else if (toggle === 'menu-mobile') {
      setToggleMenuMobile(!toggleMenuMobile);
      setToggleOrders(false);
      setToggleMenu(false);
    }
  };

  const handleToggle = (toggle) => {
    changeToggle(toggle);
  };

  return (
    <>
      <nav className="flex justify-between py-0 px-6 border-b border-veryLightPink border-solid sticky top-0 z-20 bg-white">
        <div className="block lg:hidden my-auto mx-0">
          <Image onClick={() => handleToggle('menu-mobile')} src={Bar} alt="menu" />
        </div>

        <div className="flex">
          <Link href="/">
            <a href="replace" className="flex align-middle">
              <Image src={Logo} alt="logo" className="w-[100px] cursor-pointer" />
            </a>
          </Link>

          <ul className="hidden list-none p-0 ml-12 lg:flex lg:items-center h-16">
            {categories.map((category) => (
              <li key={`nav-list-category-${category.name}`}>
                <button onClick={() => handleCategory(category)} className="text-veryLightPink border border-solid border-white p-2 rounded-lg hover:border-hospitalGreen">
                  {category.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <ul className="list-none p-0 m-0 flex items-center h-16 space-x-4">
            {!auth.user && (
              <>
                <li className="hidden lg:inline-block">
                  <button
                    className="inline-block h-10 w-24 border border-solid border-hospitalGreen text-md font-semibold text-veryLightPink rounded-lg hover:scale-110"
                    onClick={() => setOpen(!open)}
                  >
                    Login
                  </button>
                </li>
                <li className="hidden lg:inline-block">
                  <button className="inline-block h-10 w-24 border border-solid bg-hospitalGreen text-md font-semibold text-white rounded-lg hover:scale-110">Sign up</button>
                </li>
              </>
            )}
            {auth.user && (
              <li role="menuitem" className="hidden cursor-pointer lg:inline-block text-veryLightPink text-sm mr-3" onClick={() => handleToggle('menu')} onKeyPress={() => handleToggle('menu')}>
                {userData.email}
              </li>
            )}
            <li role="menuitem" className="relative cursor-pointer align-middle">
              <Image src={Cart} alt="shopping cart" className="" onClick={() => handleToggle('cart')} />
              {state.cart.length > 0 ? (
                <div className="w-4 h-4 font-bold absolute top-[-6px] right-[-3px] text-sm flex justify-center items-center bg-hospitalGreen rounded-full">
                  <p>{state.cart.length}</p>
                </div>
              ) : null}
            </li>
          </ul>
        </div>
        {toggleMenu && <Menu changeToggle={changeToggle} logout={auth.logout} />}
        {toggleMenuMobile && <MobileMenu categories={categories} user={userData} handleCategory={handleCategory} />}
        {toggleOrders && <MyOrders />}
      </nav>
      <Modal open={open} setOpen={setOpen}>
        <Login setOpen={setOpen} />
      </Modal>
    </>
  );
};

export default Header;
