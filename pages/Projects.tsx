import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-slate-400 text-xl font-light">02.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Built Projects</h2>
          <div className="h-px bg-slate-200 flex-grow ml-4 max-w-xs"></div>
        </div>
        <p className="text-slate-600 max-w-2xl">
          A selection of projects ranging from web applications to low-level system implementations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;