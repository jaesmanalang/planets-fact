import React from 'react';

export default function CardInfo({ title, detail }) {
  return (
    <div className="border border-slate-500 lg:py-5 lg:px-6 md:p-4 py-2 px-6 grow w-full md:w-1/4 flex md:flex-col items-center md:items-start justify-between">
      <div className="tracking-widest uppercase lg:text-[11px] text-[8px] text-white opacity-50">
        {title}
      </div>
      <h4 className="font-heading lg:text-[40px] md:text-[24px] text-[20px] font-medium">
        {detail}
      </h4>
    </div>
  );
}
