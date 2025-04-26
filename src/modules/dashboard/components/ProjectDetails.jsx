import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toggleTaskStatus, addTaskToProject, updateProjectProgress } from '../utils/projectStorage';

function ProjectDetails({ project, onUpdate }) {
  const [newTaskOpen, setNewTaskOpen] = useState(false);
  const [taskForm, setTaskForm] = useState({
    title: '',
    category: 'Riset Pasar',
    dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
  });
  
  const getProgressColorClass = (progress) => {
    if (progress >= 80) return "bg-green-600";
    if (progress >= 40) return "bg-yellow-500";
    return "bg-blue-600";
  };
  
  const handleToggleTask = (taskId) => {
    const updatedProject = toggleTaskStatus(project.id, taskId);
    if (updatedProject) {
      onUpdate(updatedProject);
    }
  };
  
  const handleAddTask = (e) => {
    e.preventDefault();
    if (!taskForm.title.trim()) return;
    
    const updatedProject = addTaskToProject(project.id, taskForm);
    if (updatedProject) {
      onUpdate(updatedProject);
      setTaskForm({
        title: '',
        category: 'Riset Pasar',
        dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      });
      setNewTaskOpen(false);
    }
  };
  
  const updateProgress = (section, value) => {
    const updatedProgress = { ...project.progress, [section]: value };
    const updatedProject = updateProjectProgress(project.id, updatedProgress);
    if (updatedProject) {
      onUpdate(updatedProject);
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="card">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
            <p className="text-gray-600">{project.description}</p>
            {project.industry && (
              <span className="inline-block mt-2 px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full">
                {project.industry}
              </span>
            )}
          </div>
          <button className="btn-outline text-sm cursor-pointer">Edit Proyek</button>
        </div>
        
        <div className="mt-6">
          <h4 className="font-medium text-gray-800 mb-3">Progress Pengembangan</h4>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Validasi Ide</span>
                <div className="flex items-center gap-2">
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    step="10" 
                    value={project.progress.ideaValidation} 
                    onChange={(e) => updateProgress('ideaValidation', parseInt(e.target.value))}
                    className="w-24"
                  />
                  <span>{project.progress.ideaValidation}%</span>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className={`h-2.5 rounded-full ${getProgressColorClass(project.progress.ideaValidation)}`} 
                  style={{ width: `${project.progress.ideaValidation}%` }}
                ></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Riset Pasar</span>
                <div className="flex items-center gap-2">
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    step="10" 
                    value={project.progress.marketResearch} 
                    onChange={(e) => updateProgress('marketResearch', parseInt(e.target.value))}
                    className="w-24"
                  />
                  <span>{project.progress.marketResearch}%</span>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className={`h-2.5 rounded-full ${getProgressColorClass(project.progress.marketResearch)}`} 
                  style={{ width: `${project.progress.marketResearch}%` }}
                ></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Perencanaan Bisnis</span>
                <div className="flex items-center gap-2">
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    step="10" 
                    value={project.progress.businessPlanning} 
                    onChange={(e) => updateProgress('businessPlanning', parseInt(e.target.value))}
                    className="w-24"
                  />
                  <span>{project.progress.businessPlanning}%</span>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className={`h-2.5 rounded-full ${getProgressColorClass(project.progress.businessPlanning)}`} 
                  style={{ width: `${project.progress.businessPlanning}%` }}
                ></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Eksekusi & Peluncuran</span>
                <div className="flex items-center gap-2">
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    step="10" 
                    value={project.progress.execution} 
                    onChange={(e) => updateProgress('execution', parseInt(e.target.value))}
                    className="w-24"
                  />
                  <span>{project.progress.execution}%</span>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className={`h-2.5 rounded-full ${getProgressColorClass(project.progress.execution)}`} 
                  style={{ width: `${project.progress.execution}%` }}
                ></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Optimasi & Pertumbuhan</span>
                <div className="flex items-center gap-2">
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    step="10" 
                    value={project.progress.optimization} 
                    onChange={(e) => updateProgress('optimization', parseInt(e.target.value))}
                    className="w-24"
                  />
                  <span>{project.progress.optimization}%</span>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className={`h-2.5 rounded-full ${getProgressColorClass(project.progress.optimization)}`} 
                  style={{ width: `${project.progress.optimization}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="card">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Tugas Mendatang</h3>
          <button 
            className="text-sm text-blue-600 hover:text-blue-800 font-medium cursor-pointer"
            onClick={() => setNewTaskOpen(!newTaskOpen)}
          >
            {newTaskOpen ? '- Batal' : '+ Tambah Tugas'}
          </button>
        </div>
        
        {newTaskOpen && (
          <form onSubmit={handleAddTask} className="mb-4 p-4 border border-blue-200 rounded-lg bg-blue-50">
            <div className="mb-3">
              <label htmlFor="taskTitle" className="label">Judul Tugas</label>
              <input
                id="taskTitle"
                className="input"
                placeholder="Masukkan judul tugas"
                value={taskForm.title}
                onChange={(e) => setTaskForm({...taskForm, title: e.target.value})}
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
              <div>
                <label htmlFor="taskCategory" className="label">Kategori</label>
                <select
                  id="taskCategory"
                  className="input"
                  value={taskForm.category}
                  onChange={(e) => setTaskForm({...taskForm, category: e.target.value})}
                >
                  <option value="Riset Pasar">Riset Pasar</option>
                  <option value="Perencanaan Bisnis">Perencanaan Bisnis</option>
                  <option value="Validasi Ide">Validasi Ide</option>
                  <option value="Eksekusi">Eksekusi</option>
                  <option value="Optimasi">Optimasi</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="taskDueDate" className="label">Tenggat Waktu</label>
                <input
                  id="taskDueDate"
                  type="date"
                  className="input"
                  value={taskForm.dueDate}
                  onChange={(e) => setTaskForm({...taskForm, dueDate: e.target.value})}
                />
              </div>
            </div>
            
            <div className="flex justify-end">
              <button type="submit" className="btn-primary text-sm cursor-pointer">
                Tambah Tugas
              </button>
            </div>
          </form>
        )}
        
        <div className="space-y-3">
          {project.tasks && project.tasks.length > 0 ? (
            project.tasks.map(task => (
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
                      onClick={() => handleToggleTask(task.id)}
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
            ))
          ) : (
            <div className="text-center py-8 border border-dashed rounded-lg">
              <p className="text-gray-500">Belum ada tugas. Tambahkan tugas untuk memulai.</p>
            </div>
          )}
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
  );
}

export default ProjectDetails;