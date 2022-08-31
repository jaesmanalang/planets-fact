import { useState, useEffect } from 'react';
import NavItem from './NavItem';
import data from '../data/planets.json';

export default function NavList({ isMobileNavOpen }) {
  const [planets] = useState(data);

  return (
    <>
      <ul className="hidden md:flex items-center gap-8">
        {planets &&
          planets.map((planet, index) => (
            <NavItem key={index} planet={planet} />
          ))}
      </ul>
      {isMobileNavOpen && (
        <ul className="px-6 py-6 absolute bg-[#070724] h-[calc(100vh-75px)] top-[75px] left-0 w-full md:hidden z-20">
          {planets &&
            planets.map((planet, index) => (
              <NavItem key={index} planet={planet} />
            ))}
        </ul>
      )}
    </>
  );
}
