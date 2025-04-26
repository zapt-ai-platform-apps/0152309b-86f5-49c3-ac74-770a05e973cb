import React from 'react';

function ZaptBadge() {
  return (
    <div className="fixed bottom-4 left-4 z-50">
      <a 
        href="https://www.zapt.ai" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center justify-center bg-gray-800 text-white text-xs px-2 py-1 rounded-lg hover:bg-gray-700 transition-colors"
      >
        Made on ZAPT
      </a>
    </div>
  );
}

export default ZaptBadge;