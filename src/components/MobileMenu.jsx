import React from 'react';

const MobileMenu = ({categories}) => {
  return (
    <>
      <div className="p-6 absolute top-16 left-0 w-full bg-white font-bold [&>ul>li]:mb-4">
        <ul className="p-0 mt-6 text-black border-b border-veryLightPink ">
          {categories.map((category) => 
            (<li className="mb-4">
              <a href="/">{category}</a>
            </li>)
          )}
        </ul>

        <ul className="p-0 mt-6 text-black">
          <li>
            <a href="/">My orders</a>
          </li>
          <li>
            <a href="/">My account</a>
          </li>
        </ul>

        <ul className="p-0 mt-6 text-black">
          <li>
            <a href="/" className="font-light text-sm">
              platzi@example.com
            </a>
          </li>
          <li>
            <a href="/" className="text-sm text-hospitalGreen">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MobileMenu;
