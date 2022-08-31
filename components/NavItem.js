import { useEffect, useState } from 'react';
import { useAppContext } from '../context/state';
import classNames from 'classnames';
import Image from 'next/image';

export default function NavItem({ planet }) {
  const { currentPlanet, changePlanet, closeMobileNav } = useAppContext();
  function handleClick() {
    changePlanet(planet);
    closeMobileNav();
  }

  return (
    <li>
      <button
        className={classNames(
          'w-full flex items-center md:inline-block md:w-auto uppercase tracking-[2px] font-bold text-[15px] md:text-[11px] py-5 md:py-3 border-b md:border-b-2 border-b-slate-800 md:border-transparent',
          {
            'md:border-b-mercury':
              planet === currentPlanet && currentPlanet.name === 'Mercury',
            'md:border-b-venus':
              planet === currentPlanet && currentPlanet.name === 'Venus',
            'md:border-b-earth':
              planet === currentPlanet && currentPlanet.name === 'Earth',
            'md:border-b-mars':
              planet === currentPlanet && currentPlanet.name === 'Mars',
            'md:border-b-jupiter':
              planet === currentPlanet && currentPlanet.name === 'Jupiter',
            'md:border-b-saturn':
              planet === currentPlanet && currentPlanet.name === 'Saturn',
            'md:border-b-uranus':
              planet === currentPlanet && currentPlanet.name === 'Uranus',
            'md:border-b-neptune':
              planet === currentPlanet && currentPlanet.name === 'Neptune',
          }
        )}
        onClick={handleClick}
      >
        <span
          className={classNames(
            'inline-block md:hidden mr-6 rounded-full h-[20px] w-[20px]',
            {
              'bg-mercury': planet.name === 'Mercury',
              'bg-venus': planet.name === 'Venus',
              'bg-earth': planet.name === 'Earth',
              'bg-mars': planet.name === 'Mars',
              'bg-jupiter': planet.name === 'Jupiter',
              'bg-saturn': planet.name === 'Saturn',
              'bg-uranus': planet.name === 'Uranus',
              'bg-neptune': planet.name === 'Neptune',
            }
          )}
        ></span>
        {planet.name}
        <div className="md:hidden ml-auto">
          <Image
            width={8}
            height={16}
            objectFit="contain"
            src="/assets/icon-chevron.svg"
          />
        </div>
      </button>
    </li>
  );
}
