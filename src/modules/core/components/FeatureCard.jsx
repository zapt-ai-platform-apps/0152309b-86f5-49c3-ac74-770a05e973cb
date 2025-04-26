import React from 'react';
import { Link } from 'react-router-dom';

function FeatureCard({ title, description, icon, link }) {
  return (
    <div className="card hover:shadow-lg transition-shadow">
      <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {link && (
        <Link 
          to={link} 
          className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1 cursor-pointer"
        >
          Pelajari lebih lanjut
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </Link>
      )}
    </div>
  );
}

export default FeatureCard;