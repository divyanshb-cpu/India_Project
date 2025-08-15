
import React from 'react';

function AshokaChakraIcon(): React.ReactNode {
  return (
    <div className="w-24 h-24 md:w-32 md:h-32 text-navy animate-spin-slow">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="50" cy="50" r="5" fill="currentColor" />
        {[...Array(24)].map((_, i) => (
          <line
            key={i}
            x1="50"
            y1="50"
            x2="50"
            y2="5"
            stroke="currentColor"
            strokeWidth="1.5"
            transform={`rotate(${i * 15}, 50, 50)`}
          />
        ))}
      </svg>
    </div>
  );
}

export default AshokaChakraIcon;
