import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { useAppContext } from '../context/state';

export default function Button({ num, title }) {
  const { currentInfo, changeInfo, currentPlanet, color } = useAppContext();
  const intNum = parseInt(num);

  const handleClick = () => {
    changeInfo(intNum);
  };

  return (
    <button
      onClick={handleClick}
      className={classNames(
        'px-7 py-3 tracking-widest uppercase text-white text-xs w-full flex items-center font-bold border border-slate-500',
        {
          'bg-mercury border-mercury':
            intNum === currentInfo.num && currentPlanet.name === 'Mercury',
          'bg-venus border-venus':
            intNum === currentInfo.num && currentPlanet.name === 'Venus',
          'bg-earth border-earth':
            intNum === currentInfo.num && currentPlanet.name === 'Earth',
          'bg-mars border-mars':
            intNum === currentInfo.num && currentPlanet.name === 'Mars',
          'bg-jupiter border-jupiter':
            intNum === currentInfo.num && currentPlanet.name === 'Jupiter',
          'bg-saturn border-saturn':
            intNum === currentInfo.num && currentPlanet.name === 'Saturn',
          'bg-uranus border-uranus':
            intNum === currentInfo.num && currentPlanet.name === 'Uranus',
          'bg-neptune border-neptune':
            intNum === currentInfo.num && currentPlanet.name === 'Neptune',
        }
      )}
    >
      <span className="opacity-50">{num < 10 ? `0${num}` : num}</span>
      <span className="ml-7">{title}</span>
    </button>
  );
}
