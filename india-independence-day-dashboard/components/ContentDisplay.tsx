
import React from 'react';
import { type Tab } from '../types';
import { CONTENT_DATA } from '../constants';

interface ContentDisplayProps {
  activeTab: Tab;
}

function ContentDisplay({ activeTab }: ContentDisplayProps): React.ReactNode {
  const content = CONTENT_DATA[activeTab];

  return (
    <section className="w-full max-w-4xl p-6 md:p-8 bg-black/40 backdrop-blur-md rounded-xl shadow-2xl animate-fade-in">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-saffron border-b-2 border-saffron/50 pb-2">
        {content.title}
      </h2>
      <div className="space-y-4 text-base md:text-lg text-gray-200 leading-relaxed">
        {content.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}

export default ContentDisplay;
