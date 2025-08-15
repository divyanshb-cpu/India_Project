
import React from 'react';
import AshokaChakraIcon from './icons/AshokaChakraIcon';

function IndiaFlagBackground(): React.ReactNode {
  return (
    <div className="fixed inset-0 z-0 flex flex-col">
      <div className="h-1/3 bg-saffron"></div>
      <div className="h-1/3 bg-white flex items-center justify-center">
        <AshokaChakraIcon />
      </div>
      <div className="h-1/3 bg-indiaGreen"></div>
    </div>
  );
}

export default IndiaFlagBackground;
