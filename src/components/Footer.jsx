import * as React from 'react';
import logo from '../assets/logo.png';

export default function footerbar() {
  return (
    <footer className='top-shadow flex items-center justify-center py-2 px-4 bg-stone-900'>
      <img className='h-7' src={logo} alt="Logo Aluraflix" />
    </footer>
  );
}
