import * as React from 'react';
import logo from '../assets/logo.png';
import plusIcon from "../assets/plus.svg";

export default function Navbar() {
  return (
    <nav className='flex items-center justify-between py-2 px-4 shadow-md shadow-blue-500'>
      <img className='h-7' src={logo} alt="Logo Aluraflix" />
      <button className='flex items-center gap-2 px-4 border h-8 border-blue-500 rounded-md font-semibold text-blue-500 hover:scale-105 transition-transform inner-shadow'>
        <img className='w-4' src={plusIcon} alt="" />
        Nuevo Video
      </button>
    </nav>
  );
}
