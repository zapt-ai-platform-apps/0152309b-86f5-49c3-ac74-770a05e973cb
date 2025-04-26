import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../core/components/PageHeader';

function Dashboard() {
  const [activeProject, setActiveProject] = useState(null);
  
  const dummyProjects = [
    {
      id: 1,
      name: "FreshMeal - Layanan Pengiriman Makanan Sehat",
      description: "Layanan pengiriman makanan sehat berlangganan untuk profesional muda di kota besar.",
      lastUpdated: "2023-10-15",
      progress: {
        ideaValidation: 100,
        marketResearch: 80,
        businessPlanning: 60,
        execution: 20,
        optimization: 0
      },
      tasks: [
        { id: 1, title: "Selesaikan analisis kompetitor", category: "Riset Pasar", dueDate: "2023-10-30", completed: false },
        { id: 2, title: "Persiapkan proyeksi keuangan", category: "Perencanaan Bisnis", dueDate: "2023-11-10", completed: false },
        { id: 3, title: "Draft rencana marketing awal", category: "Perencanaan Bisnis", dueDate: "2023-11-15", completed: false }
      ]
    },
    {
      id: 2,
      name: "SkillConnect - Platform Matching Skill",
      description: "Marketplace yang menghubungkan profesional skill digital dengan bisnis yang membutuhkan layanan mereka.",
      lastUpdated: "2023-10-05",
      progress: {
        ideaValidation: 100,
        marketResearch: 100,
        businessPlanning: 90,
        execution: 40,
        optimization: 0
      },
      tasks: [
        { id: 1, title: "Finalisasi model bisnis", category: "Perencanaan Bisnis", dueDate: "2023-10-22", completed: true },
        { id: 2, title: "Bangun MVP platform", category: "Eksekusi", dueDate: "2023-12-01", completed: false },
        { id: 3, title: "Rekrut 10 freelancer awal", category: "Eksekusi", dueDate: "2023-11-20", completed: false }
      ]
    }
  ];
  
  const getOverallProgress = (progress) => {
    const values = Object.values(progress);
    return values.reduce((sum, current) => sum + current, 0) / values.length;
  };
  
  const getProgressColorClass = (progress) => {
    if (progress >= 80) return "bg-green-600";
    if (progress >= 40) return "bg-yellow-500";
    return "bg-blue-600";
  };
  
  const toggleTaskStatus = (projectId, taskId) => {
    setActiveProject(prev => {
      if (prev && prev.id === projectId) {
        return {
          ...prev,
          tasks: prev.tasks.map(task => 
            task.id === taskId ? { ...task, completed: !task.completed } : task
          )
        };
      }
      return prev;
    });
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
            
            <div className="space-y-3">
              {dummyProjects.map(project => (
                <button
                  key={project.id}
                  onClick={() => setActiveProject(project)}
                  className={`w-full p-4 rounded-lg text-left transition-all cursor-pointer ${
                    activeProject?.id === project.id 
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
              ))}
            </div>
            
            <button className="mt-4 w-full py-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-blue-300 hover:text-blue-600 transition-colors cursor-pointer">
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
          {activeProject ? (
            <div className="space-y-6">
              <div className="card">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{activeProject.name}</h3>
                    <p className="text-gray-600">{activeProject.description}</p>
                  </div>
                  <button className="btn-outline text-sm cursor-pointer">Edit Proyek</button>
                </div>
                
                <div className="mt-6">
                  <h4 className="font-medium text-gray-800 mb-3">Progress Pengembangan</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Validasi Ide</span>
                        <span>{activeProject.progress.ideaValidation}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className={`h-2.5 rounded-full ${getProgressColorClass(activeProject.progress.ideaValidation)}`} style={{ width: `${activeProject.progress.ideaValidation}%` }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Riset Pasar</span>
                        <span>{activeProject.progress.marketResearch}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className={`h-2.5 rounded-full ${getProgressColorClass(activeProject.progress.marketResearch)}`} style={{ width: `${activeProject.progress.marketResearch}%` }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Perencanaan Bisnis</span>
                        <span>{activeProject.progress.businessPlanning}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className={`h-2.5 rounded-full ${getProgressColorClass(activeProject.progress.businessPlanning)}`} style={{ width: `${activeProject.progress.businessPlanning}%` }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Eksekusi & Peluncuran</span>
                        <span>{activeProject.progress.execution}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className={`h-2.5 rounded-full ${getProgressColorClass(activeProject.progress.execution)}`} style={{ width: `${activeProject.progress.execution}%` }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Optimasi & Pertumbuhan</span>
                        <span>{activeProject.progress.optimization}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className={`h-2.5 rounded-full ${getProgressColorClass(activeProject.progress.optimization)}`} style={{ width: `${activeProject.progress.optimization}%` }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="card">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold">Tugas Mendatang</h3>
                  <button className="text-sm text-blue-600 hover:text-blue-800 font-medium cursor-pointer">+ Tambah Tugas</button>
                </div>
                
                <div className="space-y-3">
                  {activeProject.tasks.map(task => (
                    <div 
                      key={task.id} 
                      className={`p-4 border rounded-lg ${task.completed ? 'bg-gray-50' : ''}`}
                    >
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-0.5">
                          <button 
                            className={`w-5 h-5 rounded-full border flex items-center justify-center cursor-pointer ${
                              task.completed 
                                ? 'bg-green-500 border-green-500 text-white'
                                : 'border-gray-300 hover:border-blue-400'
                            }`}
                            onClick={() => toggleTaskStatus(activeProject.id, task.id)}
                          >
                            {task.completed && (
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                              </svg>
                            )}
                          </button>
                        </div>
                        <div className="ml-3 flex-1">
                          <div className="flex justify-between">
                            <span className={`font-medium ${task.completed ? 'text-gray-500 line-through' : 'text-gray-900'}`}>
                              {task.title}
                            </span>
                            <span className="text-sm text-gray-500">
                              {new Date(task.dueDate).toLocaleDateString('id-ID')}
                            </span>
                          </div>
                          <span className="inline-block px-2 py-0.5 text-xs bg-gray-100 text-gray-800 rounded mt-1">
                            {task.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-semibold mb-4">Rekomendasi Langkah Selanjutnya</h3>
                
                <div className="space-y-4">
                  <Link 
                    to="/analisis-ide" 
                    className="block p-4 border rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-blue-600">
                          <path d="M12 .75a8.25 8.25 0 00-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 00.577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.75 6.75 0 1113.5 0v4.661c0 .326.277.585.6.544.364-.047.722-.112 1.074-.195a.75.75 0 00.577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0012 .75z" />
                          <path fillRule="evenodd" d="M9.75 15.75a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V16.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                          <path fillRule="evenodd" d="M14.25 15.75a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V16.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">Lakukan Analisis Kompetitor</h4>
                        <p className="text-sm text-gray-600">Identifikasi dan analisis pesaing langsung dan tidak langsung dalam industri Anda.</p>
                      </div>
                    </div>
                  </Link>
                  
                  <Link 
                    to="/template-bisnis" 
                    className="block p-4 border rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-blue-600">
                          <path fillRule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625zM7.5 15a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 017.5 15zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H8.25z" clipRule="evenodd" />
                          <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">Persiapkan Proyeksi Keuangan</h4>
                        <p className="text-sm text-gray-600">Gunakan template proyeksi keuangan untuk mengestimasi kebutuhan modal dan potensi pendapatan.</p>
                      </div>
                    </div>
                  </Link>
                  
                  <Link 
                    to="/panduan-langkah" 
                    className="block p-4 border rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-blue-600">
                          <path fillRule="evenodd" d="M2.625 6.75a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875 0A.75.75 0 018.25 6h12a.75.75 0 010 1.5h-12a.75.75 0 01-.75-.75zM2.625 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zM7.5 12a.75.75 0 01.75-.75h12a.75.75 0 010 1.5h-12A.75.75 0 017.5 12zm-4.875 5.25a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875 0a.75.75 0 01.75-.75h12a.75.75 0 010 1.5h-12a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">Kembangkan Rencana Pemasaran</h4>
                        <p className="text-sm text-gray-600">Definisikan strategi akuisisi pelanggan awal dan saluran pemasaran yang akan digunakan.</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="card text-center py-12">
              <div className="mx-auto w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-1">Pilih Proyek</h3>
              <p className="text-gray-500 mb-6">Pilih proyek yang ingin Anda kelola dari panel kiri</p>
              <button className="btn-primary inline-flex items-center cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                Mulai Proyek Baru
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;