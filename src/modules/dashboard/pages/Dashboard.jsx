import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../core/components/PageHeader';
import ProjectCard from '../components/ProjectCard';
import NewProjectForm from '../components/NewProjectForm';
import ProjectDetails from '../components/ProjectDetails';
import GoogleTrendsEmbed from '../../googleTrends/components/GoogleTrendsEmbed';
import { getProjects, saveProject, deleteProject } from '../utils/projectStorage';

function Dashboard() {
  const [projects, setProjects] = useState([]);
  const [activeProject, setActiveProject] = useState(null);
  const [showNewProjectForm, setShowNewProjectForm] = useState(false);
  const [loading, setLoading] = useState(true);
  
  // Load projects from local storage on mount
  useEffect(() => {
    try {
      const savedProjects = getProjects();
      setProjects(savedProjects);
      setLoading(false);
    } catch (error) {
      console.error('Error loading projects:', error);
      setLoading(false);
    }
  }, []);
  
  const handleCreateProject = async (projectData) => {
    try {
      const newProject = saveProject(projectData);
      setProjects([...projects, newProject]);
      setActiveProject(newProject);
      setShowNewProjectForm(false);
    } catch (error) {
      console.error('Error creating project:', error);
    }
  };
  
  const handleDeleteProject = async (projectId) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus proyek ini?')) {
      try {
        deleteProject(projectId);
        setProjects(projects.filter(p => p.id !== projectId));
        if (activeProject?.id === projectId) {
          setActiveProject(null);
        }
      } catch (error) {
        console.error('Error deleting project:', error);
      }
    }
  };
  
  const updateProjectInState = (updatedProject) => {
    setProjects(projects.map(p => 
      p.id === updatedProject.id ? updatedProject : p
    ));
    setActiveProject(updatedProject);
  };
  
  return (
    <div>
      <PageHeader 
        title="Dashboard" 
        description="Pantau kemajuan dan kelola proyek ide bisnis Anda." 
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 space-y-6">
          <div className="card">
            <h3 className="text-xl font-semibold mb-4">Proyek Ide Bisnis</h3>
            
            {loading ? (
              <div className="py-10 flex justify-center">
                <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : (
              <div className="space-y-3">
                {projects.length > 0 ? (
                  projects.map(project => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      isActive={activeProject?.id === project.id}
                      onClick={() => setActiveProject(project)}
                    />
                  ))
                ) : (
                  <div className="text-center p-6 border border-dashed rounded-lg">
                    <p className="text-gray-500 mb-2">Belum ada proyek yang dibuat</p>
                    <p className="text-sm text-gray-400">Buat proyek baru untuk memulai perjalanan bisnis Anda</p>
                  </div>
                )}
              </div>
            )}
            
            <button 
              onClick={() => setShowNewProjectForm(true)}
              className="mt-4 w-full py-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-blue-300 hover:text-blue-600 transition-colors cursor-pointer"
            >
              + Tambah Proyek Baru
            </button>
          </div>
          
          <div className="card">
            <h3 className="text-xl font-semibold mb-4">Alat & Sumber Daya</h3>
            
            <div className="space-y-3">
              <Link 
                to="/template-bisnis" 
                className="flex items-center p-3 border rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-blue-600">
                    <path d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625z" />
                    <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Template Bisnis</h4>
                  <p className="text-sm text-gray-500">Akses template business plan, model kanvas, dll.</p>
                </div>
              </Link>
              
              <Link 
                to="/riset-pasar" 
                className="flex items-center p-3 border rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-blue-600">
                    <path fillRule="evenodd" d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.54 15h6.42l.5 1.5H8.29l.5-1.5zm8.085-8.995a.75.75 0 10-.75-1.299 12.81 12.81 0 00-3.558 3.05L11.03 8.47a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l2.47-2.47 1.617 1.618a.75.75 0 001.146-.102 11.312 11.312 0 013.612-3.321z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Riset Pasar</h4>
                  <p className="text-sm text-gray-500">Akses data pasar dan tren industri</p>
                </div>
              </Link>
              
              <Link 
                to="/wawasan-bisnis" 
                className="flex items-center p-3 border rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-blue-600">
                    <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Wawasan Bisnis</h4>
                  <p className="text-sm text-gray-500">Tips dan studi kasus dari pengusaha sukses</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="md:col-span-2">
          {showNewProjectForm ? (
            <NewProjectForm 
              onSubmit={handleCreateProject}
              onCancel={() => setShowNewProjectForm(false)}
            />
          ) : activeProject ? (
            <ProjectDetails 
              project={activeProject}
              onUpdate={updateProjectInState}
            />
          ) : (
            <div className="card text-center py-12">
              <div className="mx-auto w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-1">Pilih Proyek</h3>
              <p className="text-gray-500 mb-6">Pilih proyek yang ingin Anda kelola dari panel kiri atau buat proyek baru</p>
              <button 
                className="btn-primary inline-flex items-center cursor-pointer"
                onClick={() => setShowNewProjectForm(true)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                Mulai Proyek Baru
              </button>
            </div>
          )}
          
          {/* Google Trends integration */}
          <div className="mt-6">
            <GoogleTrendsEmbed />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;