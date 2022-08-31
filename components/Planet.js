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
      <div className="grow flex flex-col lg:flex-row items-center">
        <div className="w-1/2 lg:w-2/3 flex items-center justify-center relative py-16 md:py-20">
          <Image
            src={currentPlanet.images.planet}
            width={450}
            height={450}
            objectFit="contain"
            alt={currentPlanet.name}
          />

          {num === 2 && (
            <div className="absolute w-full flex items-center justify-center left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
              <Image
                src={currentPlanet.images.internal}
                alt={currentPlanet.name}
                width={450}
                height={450}
              />
            </div>
          )}

          {num === 3 && (
            <div className="w-2/5 md:w-auto absolute left-1/2 top-[60%] -translate-x-1/2">
              <Image
                src={currentPlanet.images.geology}
                alt={currentPlanet.name}
                width={163}
                height={199}
              />
            </div>
          )}
        </div>
        <div className="lg:w-1/3 flex flex-col md:flex-row lg:flex-col">
          <div className="md:w-1/2 lg:w-auto text-center md:text-left min-h-[200px]">
            <h1 className="font-heading text-[40px] md:text-[80px] font-medium mb-4">
              {currentPlanet.name}
            </h1>
            <p className="text-xs md:text-sm my-5 ">{content}</p>
            <div className="opacity-50 text-xs md:text-sm">
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
          </div>
          <div className="hidden md:flex flex-col mt-5 gap-4 md:w-1/2 lg:w-auto justify-center md:pl-11 lg:pl-0">
            <Button num="1" title="Overview" />
            <Button num="2" title="Internal Structure" />
            <Button num="3" title="Surface Geology" />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center mt-5 gap-6">
        <CardInfo title="Rotation Time" detail={currentPlanet.rotation} />
        <CardInfo title="Revolution Time" detail={currentPlanet.revolution} />
        <CardInfo title="Radius" detail={currentPlanet.radius} />
        <CardInfo title="Average Temp." detail={currentPlanet.temperature} />
      </div>
    </div>
  );
}
