/**
 * Project storage utilities for managing projects in local storage
 */

const STORAGE_KEY = 'business_idea_validator_projects';

/**
 * Get all saved projects from local storage
 * @returns {Array} Array of project objects
 */
export const getProjects = () => {
  try {
    const projectsJson = localStorage.getItem(STORAGE_KEY);
    return projectsJson ? JSON.parse(projectsJson) : [];
  } catch (error) {
    console.error('Error getting projects from storage:', error);
    return [];
  }
};

/**
 * Save a new project to local storage
 * @param {Object} project Project data to save
 * @returns {Object} The saved project with an ID
 */
export const saveProject = (project) => {
  try {
    const projects = getProjects();
    const newProject = {
      ...project,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      lastUpdated: new Date().toISOString(),
      progress: {
        ideaValidation: 0,
        marketResearch: 0,
        businessPlanning: 0,
        execution: 0,
        optimization: 0
      },
      tasks: []
    };
    
    projects.push(newProject);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
    return newProject;
  } catch (error) {
    console.error('Error saving project:', error);
    throw new Error('Failed to save project');
  }
};

/**
 * Update an existing project
 * @param {string} projectId ID of project to update
 * @param {Object} updatedData Updated project data
 * @returns {Object|null} Updated project or null if not found
 */
export const updateProject = (projectId, updatedData) => {
  try {
    const projects = getProjects();
    const index = projects.findIndex(p => p.id === projectId);
    
    if (index === -1) return null;
    
    projects[index] = {
      ...projects[index],
      ...updatedData,
      lastUpdated: new Date().toISOString()
    };
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
    return projects[index];
  } catch (error) {
    console.error('Error updating project:', error);
    throw new Error('Failed to update project');
  }
};

/**
 * Delete a project from storage
 * @param {string} projectId ID of project to delete
 * @returns {boolean} Success status
 */
export const deleteProject = (projectId) => {
  try {
    const projects = getProjects();
    const updatedProjects = projects.filter(p => p.id !== projectId);
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedProjects));
    return true;
  } catch (error) {
    console.error('Error deleting project:', error);
    throw new Error('Failed to delete project');
  }
};

/**
 * Add a task to a project
 * @param {string} projectId Project ID
 * @param {Object} task Task to add
 * @returns {Object|null} Updated project or null if not found
 */
export const addTaskToProject = (projectId, task) => {
  try {
    const projects = getProjects();
    const index = projects.findIndex(p => p.id === projectId);
    
    if (index === -1) return null;
    
    const newTask = {
      id: Date.now().toString(),
      completed: false,
      createdAt: new Date().toISOString(),
      ...task
    };
    
    if (!projects[index].tasks) {
      projects[index].tasks = [];
    }
    
    projects[index].tasks.push(newTask);
    projects[index].lastUpdated = new Date().toISOString();
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
    return projects[index];
  } catch (error) {
    console.error('Error adding task to project:', error);
    throw new Error('Failed to add task');
  }
};

/**
 * Toggle a task's completion status
 * @param {string} projectId Project ID
 * @param {string} taskId Task ID
 * @returns {Object|null} Updated project or null if not found
 */
export const toggleTaskStatus = (projectId, taskId) => {
  try {
    const projects = getProjects();
    const projectIndex = projects.findIndex(p => p.id === projectId);
    
    if (projectIndex === -1) return null;
    
    const project = projects[projectIndex];
    if (!project.tasks) return project;
    
    const taskIndex = project.tasks.findIndex(t => t.id === taskId);
    if (taskIndex === -1) return project;
    
    project.tasks[taskIndex].completed = !project.tasks[taskIndex].completed;
    project.lastUpdated = new Date().toISOString();
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
    return project;
  } catch (error) {
    console.error('Error toggling task status:', error);
    throw new Error('Failed to update task');
  }
};

/**
 * Update a project's progress
 * @param {string} projectId Project ID
 * @param {Object} progress Progress object with updated values
 * @returns {Object|null} Updated project or null if not found
 */
export const updateProjectProgress = (projectId, progress) => {
  try {
    const projects = getProjects();
    const index = projects.findIndex(p => p.id === projectId);
    
    if (index === -1) return null;
    
    projects[index].progress = {
      ...projects[index].progress,
      ...progress
    };
    projects[index].lastUpdated = new Date().toISOString();
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
    return projects[index];
  } catch (error) {
    console.error('Error updating project progress:', error);
    throw new Error('Failed to update progress');
  }
};