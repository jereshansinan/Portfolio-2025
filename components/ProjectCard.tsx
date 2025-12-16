import React from 'react';
import { ExternalLink, Github, Folder } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative bg-white rounded-xl overflow-hidden hover:-translate-y-2 transition-all duration-300 border border-slate-200 hover:shadow-2xl flex flex-col h-full">
      <div className="h-48 overflow-hidden relative border-b border-slate-100">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
        />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <div className="text-slate-900">
            <Folder size={40} strokeWidth={1} />
          </div>
          <div className="flex gap-4 z-20">
            {project.repoUrl && (
              <a 
                href={project.repoUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="text-slate-400 hover:text-slate-900 transition-colors"
                aria-label="GitHub Repo"
              >
                <Github size={20} />
              </a>
            )}
            {project.demoUrl && (
              <a 
                href={project.demoUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="text-slate-400 hover:text-slate-900 transition-colors"
                aria-label="Live Demo"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-2">
          {project.title}
        </h3>
        
        <p className="text-slate-600 text-sm mb-4 flex-grow leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-100">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs font-bold text-slate-500">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;