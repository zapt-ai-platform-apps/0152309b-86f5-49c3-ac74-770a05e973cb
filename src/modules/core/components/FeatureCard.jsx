import React from 'react';
import { Link } from 'react-router-dom';

function FeatureCard({ icon, title, description, linkTo }) {
  return (
    <Link
      to={linkTo}
      className="group block p-6 border border-gray-200 rounded-xl transition-all hover:border-blue-300 hover:shadow-md"
    >
      <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Link>
  );
}

export default FeatureCard;