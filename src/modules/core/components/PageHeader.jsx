import React from 'react';

function PageHeader({ title, description }) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-3">{title}</h1>
      {description && <p className="text-lg text-gray-600">{description}</p>}
    </div>
  );
}

export default PageHeader;