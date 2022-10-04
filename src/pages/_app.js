import React from 'react';
import ShoppingCartContext from '@context/ShoppingCartContext';

import useInitialState from '@hooks/useInitialState';
import { ProviderAuth } from '@hooks/useAuth';
import MainLayout from '@layout/MainLayout';

import '@styles/tailwind.css';
// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  const initialState = useInitialState();

  return (
    <>
      <ShoppingCartContext.Provider value={initialState}>
        <ProviderAuth>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </ProviderAuth>
      </ShoppingCartContext.Provider>
    </>
  );
}

export default MyApp;
