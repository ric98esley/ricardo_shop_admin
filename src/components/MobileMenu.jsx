import React from 'react';
import Link from 'next/link';

const MobileMenu = ({ categories, user, handleCategory }) => {
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
            <Link href="/">My orders</Link>
          </li>
          <li>
            <Link href="/">My account</Link>
          </li>
        </ul>

        <ul className="p-0 mt-6 text-black">
          <li>
            <Link href="/" className="font-light text-sm">
              {user.email}
            </Link>
          </li>
          <li>
            <Link href="/" className="text-sm text-hospitalGreen">
              Sign out
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MobileMenu;
