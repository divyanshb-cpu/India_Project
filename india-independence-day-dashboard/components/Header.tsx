
import React from 'react';

function Header(): React.ReactNode {
  return (
    <header className="text-center my-8">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
        Happy 79th Independence Day
      </h1>
    </header>
  );
}

export default Header;
