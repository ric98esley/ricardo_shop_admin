import React from 'react';
import Header from '@components/Header';
import Nav from '@common/Nav';

// eslint-disable-next-line react/prop-types
export default function MainLayout({ children }) {
  return (
    <>
      <div className="min-h-full">
        <Header />
        <Nav />
        <main>
          <div className="w-full pt-10 sm:px-6 lg:px-3">{children}</div>
        </main>
      </div>
    </>
  );
}
