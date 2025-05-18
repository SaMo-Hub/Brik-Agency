import React from 'react';

export const NavBar = () => {
  return (
    <nav className="mb-6">
      <div className="flex items-center justify-between">
        <img src="" alt="logo" className="h-8" />

        <ul className="flex gap-8 font-['Supply_Mono']">
          <li>Website</li>
          <li>Website</li>
          <li>Website</li>
        </ul>

        <div className="flex items-center gap-3 font-['Supply_Mono']">
          <div className="w-[27px] h-[27px] bg-white rounded"></div>
          <p>Write Us</p>
        </div>
      </div>

      <div className="mt-3 h-2 w-full rounded-t border-t-8 border-[#E72E00]"></div>
    </nav>
  );
};
