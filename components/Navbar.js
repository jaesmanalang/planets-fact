import React from 'react';
import NavList from './NavList';
import Image from 'next/image';
import { useAppContext } from '../context/state';

export default function Navbar() {
  const { isMobileNavOpen, toggleMobileNav } = useAppContext();
  return (
    <nav className="lg:h-[85px] bg-transparent pt-4 pb-4 md:pt-8 md:pb-0 lg:pt-0 border-b border-b-slate-800">
      <div className="container h-full flex md:flex-col lg:flex-row items-center justify-between">
        <div className=" font-heading font-medium text-[28px] uppercase md:mb-7 lg:mb-0">
          The Planets
        </div>
        <NavList isMobileNavOpen={isMobileNavOpen} />
        <button
          className="md:hidden flex items-center"
          onClick={toggleMobileNav}
        >
          <Image
            src="/assets/icon-hamburger.svg"
            width={24}
            height={17}
            objectFit="contain"
            alt="Menu"
          />
        </button>
      </div>
    </nav>
  );
}
