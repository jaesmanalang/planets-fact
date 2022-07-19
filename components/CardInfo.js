import React from 'react';

export default function CardInfo({ title, detail }) {
  return (
    <div className="border border-slate-500 py-5 px-6 grow w-1/4">
      <div className="tracking-widest uppercase text-[11px] text-slate-500">
        {title}
      </div>
      <h4 className="font-heading text-[40px] font-medium">{detail}</h4>
    </div>
  );
}
