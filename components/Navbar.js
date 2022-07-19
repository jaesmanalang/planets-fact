import React from 'react';
import NavList from './NavList';

export default function Navbar() {
  return (
    <nav className="h-[85px] bg-transparent">
      <div className="container h-full flex items-center justify-between">
        <div className=" font-heading font-medium text-[28px] uppercase">
          The Planets
        </div>
        <NavList />
      </div>
    </nav>
  );
}
