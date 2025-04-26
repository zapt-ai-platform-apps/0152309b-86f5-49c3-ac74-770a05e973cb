import React from 'react';

function ProjectCard({ project, isActive, onClick }) {
  const getOverallProgress = (progress) => {
    if (!progress) return 0;
    const values = Object.values(progress);
    return values.reduce((sum, current) => sum + current, 0) / values.length;
  };
  
  return (
    <button
      onClick={onClick}
      className={`w-full p-4 rounded-lg text-left transition-all cursor-pointer ${
        isActive 
          ? 'bg-blue-50 border-2 border-blue-500' 
          : 'border border-gray-200 hover:border-blue-300'
      }`}
    >
      <h4 className="font-medium text-gray-900 mb-1">{project.name}</h4>
      <p className="text-sm text-gray-600 mb-3">{project.description}</p>
      
      <div className="flex justify-between items-center text-xs text-gray-500">
        <span>Update: {new Date(project.lastUpdated).toLocaleDateString('id-ID')}</span>
        <span>{Math.round(getOverallProgress(project.progress))}% selesai</span>
      </div>
    </button>
  );
}

export default ProjectCard;