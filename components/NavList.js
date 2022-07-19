import { useState, useEffect } from 'react';
import NavItem from './NavItem';
import data from '../data/planets.json';

export default function NavList() {
  const [planets, setPlanets] = useState(data);

  return (
    <ul className="flex items-center gap-8">
      {planets &&
        planets.map((planet, index) => <NavItem key={index} planet={planet} />)}
    </ul>
  );
}
