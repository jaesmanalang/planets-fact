import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CardInfo from './CardInfo';
import Button from './Button';
import { useAppContext } from '../context/state';

export default function Planet() {
  const { currentPlanet, changePlanet, currentInfo } = useAppContext();
  const { num, content, source, imageSrc } = currentInfo;

  if (!currentPlanet) return <div>Loading...</div>;

  return (
    <div className="grow flex flex-col py-5">
      <div className="grow flex items-center">
        <div className="w-2/3 flex items-center justify-center relative">
          <Image
            src={currentPlanet.images.planet}
            width={450}
            height={450}
            objectFit="contain"
            alt={currentPlanet.name}
          />

          {num === 2 && (
            <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
              <Image
                src={currentPlanet.images.internal}
                alt={currentPlanet.name}
                width={450}
                height={450}
              />
            </div>
          )}

          {num === 3 && (
            <div className="absolute left-1/2 top-3/4 -translate-x-1/2">
              <Image
                src={currentPlanet.images.geology}
                alt={currentPlanet.name}
                width={163}
                height={199}
              />
            </div>
          )}
        </div>
        <div className="w-1/3">
          <h1 className="font-heading text-[80px] font-medium mb-4">
            {currentPlanet.name}
          </h1>
          <p className="text-sm my-5">{content}</p>
          <div className="opacity-50 text-sm">
            <span>Source: &nbsp;</span>
            <Link href={source}>
              <a
                className="font-bold underline mr-1 inline-flex items-start"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="mr-1">Wikipedia</span>
                <Image src="/assets/icon-source.svg" width={14} height={14} />
              </a>
            </Link>
          </div>
          <div className="flex flex-col mt-5 gap-4">
            <Button num="1" title="Overview" />
            <Button num="2" title="Internal Structure" />
            <Button num="3" title="Surface Geology" />
          </div>
        </div>
      </div>
      <div className="flex items-center mt-5 gap-6">
        <CardInfo title="Rotation Time" detail={currentPlanet.rotation} />
        <CardInfo title="Revolution Time" detail={currentPlanet.revolution} />
        <CardInfo title="Radius" detail={currentPlanet.radius} />
        <CardInfo title="Average Temp." detail={currentPlanet.temperature} />
      </div>
    </div>
  );
}
