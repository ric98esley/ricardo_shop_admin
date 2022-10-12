import React, { useRef, useState } from 'react';
import Router from 'next/router';
import Image from 'next/image';
import { useForm } from 'react-hook-form';

import { useAuth } from '@hooks/useAuth';

import { LockClosedIcon } from '@heroicons/react/24/solid';
import Logo from '@logos/logo_yard_sale.svg';

const Login = ({setOpen}) => {
  const { register, handleSubmit } = useForm();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const auth = useAuth();
  const [errorLogin, setErrorLogin] = useState(null);
  const [loading, setLoading] = useState(false);

  const submitHanlder = (form,event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    setErrorLogin(null);
    setLoading(true);

    auth
      .signIn(email, password)
      .then(() => {
        setOpen(false);
      })
      .catch(function (error) {
        if (error.response?.status === 401) {
          setErrorLogin('Usuario o password incorrectos.');
        } else if (error.request) {
          setErrorLogin('Tenemos un problema.');
        } else {
          setErrorLogin('Algo salió mal.');
        }
        setLoading(false);
      });
  };



  return (
    <div className="w-full h-96 grid place-items-center">
      <div className="grid grid-rows-[auto_1fr_auto] min-w-[240px] max-w-72">
        <Image src={Logo} alt="logo" className="w-72 mb-12 justify-self-center lg:hidden" />

        <form onSubmit={handleSubmit(submitHanlder)} className="flex flex-col ">
          <label htmlFor="email-address" className="text-sm font-bold mb-1">
            Email address
          </label>
          <input
            id="email-address"
            {...register('email')}
            type="email"
            autoComplete="email"
            required
            ref={emailRef}
            placeholder="mail@example.com"
            className="bg-textInputField rounded-lg h-8 text-base p-1.5 mb-5 border-none"
          />

          <label htmlFor="password" className="text-sm font-bold mb-1">
            Password
          </label>
          <input
            id="password"
            {...register('password')}
            autoComplete="current-password"
            required
            ref={passwordRef}
            type="password"
            placeholder="*********"
            className="bg-textInputField rounded-lg h-8 text-base p-1.5 mb-3 input-password border-none"
          />

          <button
          disabled={loading}
          type="submit"
          value="Log in"
          className="bg-hospitalGreen rounded-lg text-white cursor-pointer font-bold h-12 mt-4 mb-7 relative">
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-white" aria-hidden="true" />
                </span>
                Sign in
                {loading && (
                  <span className="flex absolute h-4 w-4 top-0 right-0 -mt-1 -mr-1">
                    <span className="animate-ping absolte inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-300"></span>
                  </span>
                )}
          </button>
          <a href="/" className="text-hospitalGreen text-sm text-center mb-8">
            Forgot my password
          </a>
        </form>

        <button className="bg-white rounded-lg text-hospitalGreen border border-hospitalGreen-1 cursor-pointer font-bold h-12 signup-button">Sign up</button>
      </div>
    </div>
  );
};

export default Login;
