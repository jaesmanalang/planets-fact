import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CardInfo from './CardInfo';

export default function Planet({ planet }) {
  // useEffect(() => {
  //   console.log(planet.images);
  // }, [planet]);
  return (
    <div className="grow flex flex-col py-5">
      <div className="grow flex items-center">
        <div className="w-2/3 flex items-center justify-center">
          <Image
            src={planet.images.planet}
            alt={planet.name}
            width={290}
            height={290}
          />
        </div>
        <div className="w-1/3">
          <h1 className="font-heading text-[80px] font-medium mb-4">
            {planet.name}
          </h1>
          <p className="text-sm my-5">{planet.overview.content}</p>
          <div className="opacity-50 text-sm">
            <span>Source: &nbsp;</span>
            <Link href={planet.overview.source}>
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
      </div>
      <div className="flex items-center mt-5 gap-6">
        <CardInfo title="Rotation Time" detail={planet.rotation} />
        <CardInfo title="Revolution Time" detail={planet.revolution} />
        <CardInfo title="Radius" detail={planet.radius} />
        <CardInfo title="Average Temp." detail={planet.temperature} />
      </div>
    </div>
  );
}
