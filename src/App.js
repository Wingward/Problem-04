'use client'

import { useState } from 'react';
import Image from 'next/image'

// Görevler:
//  Kullanıcının oturum durumunu useState veya useReducer hook'u ile yöneteceğiz.
//    - Eğer kullanıcı giriş yapmamışsa (isAuthUser === false), yalnızca Login butonu görüntülenmelidir.
//    - Eğer kullanıcı giriş yapmışsa (isAuthUser === true), Dashboard ve Sign out linkleri görüntülenmelidir.
//  Login butonuna tıklandığında, kullanıcı oturum açmalı ve Dashboard ile Sign out linkleri görünmelidir.
//  Sign out linkine tıklandığında, kullanıcı oturumu kapatmalı ve yalnızca Login butonu görünmelidir.
//  Logo bileşenini bağımsız bir bileşen olarak tanımlayın ve tasarımı bozmadan üstte görüntüleyin.
//  Beklenen çıktıyı görmek için public/preview1.png  ve public/preview2.png dosyalarını inceleyin.

// Ek görev:
// - Navbar'a bir Contact Us linki ekleyin ve bu linkin her iki durumda da (giriş yapmış ya da yapmamış) görünür olmasını sağlayın.

export default function Navbar() {
  const [isAuthUser, setIsAuthUser] = useState(false);

  const handleLogin = () => setIsAuthUser(true);

  const handleLogout = (e) => {
    e.preventDefault();
    setIsAuthUser(false);
  };

  return (
    <header className='navbar-wrapper'>
      <nav className='navbar'>
        <Logo />
        <div className='navbar-links'>

          {isAuthUser ? (
            <>
              <a href='#' className='navbar-link'>
                Dashboard
              </a>
              <a href='#' onClick={handleLogout} className='navbar-link'>
                Sign out
              </a>
            </>
          ) : (
            <button onClick={handleLogin} className='navbar-link'>
              Login
            </button>
          )}
          <a href='#' className='navbar-link'>
            Contact Us
          </a>
        </div>
      </nav>
    </header>
  )
}

function Logo() {
  return (
    <div className='flex lg:flex-1'>
      <a href='#' className='-m-1.5 p-1.5'>
        <Image
          className='h-8 w-auto'
          src='/mark.svg'
          alt='Tailwind Logo'
          width={500}
          height={500}
        />
      </a>
    </div>
  )
}
