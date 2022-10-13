import React from 'react';
import Link from 'next/link';

const MobileMenu = ({ categories, user, handleCategory, handleToggle }) => {
  return (
    <>
      <div className="p-6 absolute top-[65px] left-0 w-full bg-white font-bold [&>ul>li]:mb-4 overflow-y-scroll">
        <ul className="p-0 mt-6 text-black border-b border-veryLightPink ">
          {categories.map((category) => (
            <li key={`nav-list-category-mobile-${category.name}`} className="mb-4">
              <button
                onClick={() => {
                  handleCategory(category);
                }}
              >
                {category.name}
              </button>
            </li>
          ))}
        </ul>

        <ul className="p-0 mt-6 text-black">
          <li>
            <Link href='#'>
              <a href="replace" onClick={() => handleToggle('cart')}>My orders</a>
            </Link>
          </li>
          {user.email && (
            <li>
              <Link href="/">
                <a href="replace">My account</a>
              </Link>
            </li>
          )}
        </ul>

        {user.email && (
          <ul className="p-0 mt-6 text-black">
            <li>
              <Link href="/" className="font-light text-sm">
                <a href="replace">{user.email}</a>
              </Link>
            </li>
            <li>
              <Link href="/" className="text-sm text-hospitalGreen">
                <a href="replace">Sign out</a>
              </Link>
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default MobileMenu;
