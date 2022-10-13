import React, { useState, useContext, createContext, useEffect, useCallback } from 'react';
import Cookie from 'js-cookie';
import axios from 'axios';
import endPoints from '@services/api';

const AuthContext = createContext();

export function ProviderAuth({ children }) {
  const auth = useProviderAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};

function useProviderAuth() {
  const [user, setUser] = useState(null);

  const fetchUser = useCallback(async () => {
    try {
      const token = Cookie.get('token');

      if (token) {
        axios.defaults.headers.Authorization = `Bearer ${token}`;
        const { data: user } = await axios.get(endPoints.auth.profile);
        setUser(user);
        console.log(user);
      }
    } catch (error) {
      logout();
      setUser(null);
    }
  }, []);

  const signIn = async (email, password) => {
    try {
      const options = {
        headers: {
          accept: '*/*',
          'Content-Type': 'application/json',
        },
      };
      const {
        data: { access_token },
      } = await axios.post(endPoints.auth.login, { email, password }, options);
      if (access_token) {
        const token = access_token;
        Cookie.set('token', token, { expires: 5 });

        //Envia el token para firmar la solicitud
        await fetchUser();
      }
    } catch (error) {
      setUser(null);
    }
  };

  const logout = () => {
    Cookie.remove('token');
    setUser(null);
    delete axios.defaults.headers.Authorization;
  };

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return {
    user,
    signIn,
    logout,
  };
}
