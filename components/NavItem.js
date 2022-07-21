import { useEffect, useState } from 'react';
import { useAppContext } from '../context/state';
import classNames from 'classnames';

export default function NavItem({ planet }) {
  const { currentPlanet, changePlanet, color } = useAppContext();
  function handleClick() {
    changePlanet(planet);
  }

  return (
    <li>
      <button
        className={classNames(
          'uppercase tracking-widest font-bold text-[11px] py-3 border-b-2 border-transparent',
          {
            'border-b-mercury':
              planet === currentPlanet && currentPlanet.name === 'Mercury',
            'border-b-venus':
              planet === currentPlanet && currentPlanet.name === 'Venus',
            'border-b-earth':
              planet === currentPlanet && currentPlanet.name === 'Earth',
            'border-b-mars':
              planet === currentPlanet && currentPlanet.name === 'Mars',
            'border-b-jupiter':
              planet === currentPlanet && currentPlanet.name === 'Jupiter',
            'border-b-saturn':
              planet === currentPlanet && currentPlanet.name === 'Saturn',
            'border-b-uranus':
              planet === currentPlanet && currentPlanet.name === 'Uranus',
            'border-b-neptune':
              planet === currentPlanet && currentPlanet.name === 'Neptune',
          }
        )}
        onClick={handleClick}
      >
        {planet.name}
      </button>
    </li>
  );
}
