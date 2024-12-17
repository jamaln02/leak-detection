"use client"
import React from 'react'
import { useSelector } from 'react-redux';

const HeaderNav = ({ children }) => {
  const { isMenuOpen } = useSelector((state) => state.allData);
  return (
    <nav
      className={`fixed inset-y-0 right-0 w-64 bg-main transform transition-transform duration-300 ease-in-out z-50 md:static md:flex md:w-auto md:bg-transparent md:translate-x-0
      ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} 
      shadow-lg md:shadow-none`}>
      {children}
    </nav>
  )
}

export default HeaderNav