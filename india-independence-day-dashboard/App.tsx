
import React, { useState } from 'react';
import { type Tab } from './types';
import { TABS } from './constants';
import IndiaFlagBackground from './components/IndiaFlagBackground';
import Header from './components/Header';
import Navbar from './components/Navbar';
import ContentDisplay from './components/ContentDisplay';

function App(): React.ReactNode {
  const [activeTab, setActiveTab] = useState<Tab>('History');

  return (
    <main className="relative min-h-screen text-white font-sans overflow-x-hidden">
      <IndiaFlagBackground />
      <div className="relative z-10 flex flex-col items-center w-full min-h-screen p-4 md:p-8 bg-black/20">
        <Header />
        <Navbar tabs={TABS} activeTab={activeTab} setActiveTab={setActiveTab} />
        <ContentDisplay key={activeTab} activeTab={activeTab} />
      </div>
    </main>
  );
}

export default App;
