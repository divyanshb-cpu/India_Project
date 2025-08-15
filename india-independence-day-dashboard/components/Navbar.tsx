
import React from 'react';
import { type Tab } from '../types';

interface NavbarProps {
  tabs: Tab[];
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

function Navbar({ tabs, activeTab, setActiveTab }: NavbarProps): React.ReactNode {
  return (
    <nav className="flex justify-center items-center gap-4 md:gap-8 mb-8 border-b border-white/30 pb-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-4 py-2 text-lg md:text-xl font-semibold transition-all duration-300 rounded-t-lg
            ${activeTab === tab 
              ? 'text-white border-b-4 border-white' 
              : 'text-white/70 hover:text-white hover:bg-white/10'
            }`}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
}

export default Navbar;
