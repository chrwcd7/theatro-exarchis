'use client';

import React from 'react';
import { useYear } from '../context/YearContext';
import { plays } from '../archive/plays';

const Sidebar = ({ closeSidebar }: { closeSidebar: () => void }) => {
  const { selectedYear, setSelectedYear } = useYear();

  // Extract years from plays and create a sorted set of unique years
  const years = Array.from(new Set(plays.map((play) => play.year))).sort((a, b) => b - a);

  const handleYearClick = (year: number) => {
    setSelectedYear(year);
    closeSidebar();
  };

  return (
    <div className="relative px-0 pt-4 lg:w-64 lg:px-4">
      <button
        className="absolute top-2 right-2 text-4xl text-black lg:hidden"
        onClick={closeSidebar}
        aria-label="Close sidebar"
      >
        &times;
      </button>
      <h2 className="text-xl font-bold mb-4 text-center">Έτος</h2>
      <ul className="flex flex-col items-center">
        {years.map((year) => (
          <li key={year} className="mb-2">
            <button
              onClick={() => handleYearClick(year)}
              className={`text-teal-500 hover:underline ${
                selectedYear === year ? 'bg-teal-500 !text-white font-bold' : ''
              } px-4 py-2 rounded`}
            >
              {year}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
