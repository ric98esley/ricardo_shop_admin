import Link from 'next/link';
import React from 'react';
import { useAuth } from '@hooks/useAuth';


const Menu = ({changeToggle, logout}) => {


  return (
    <>
      <div className="bg-white w-44 h-auto border border-veryLightPink rounded-md pt-5 px-5 pb-0 absolute top-[65px] right-12">
        <ul className="font-bold text-end ">
          <li className="">
            <Link href="/">
              <a className="text-black mb-5 inline-block">My orders</a>
            </Link>
          </li>

          <li>
            <Link href="/" className="text-black mb-5">
              <a className="text-black mb-5 inline-block">My account</a>
            </Link>
          </li>

          <li className="pt-5 border-t border-veryLightPink">
            <button onClick={() => {
              logout();
              changeToggle("menu");
              }} className="text-hospitalGreen text-md mb-5 inline-block">Sign out
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Menu;
