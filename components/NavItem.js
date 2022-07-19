import React from 'react';

export default function NavItem({ name }) {
  return (
    <li>
      <button
        className="uppercase tracking-widest font-bold text-[11px]"
        onClick={() => console.log(name)}
      >
        {name}
      </button>
    </li>
  );
}
