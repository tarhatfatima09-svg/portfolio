import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { projects } from '../data/portfolioData';
import { Project } from '../types';
import { GithubIcon } from './Icons';
import { 
  FolderGit2, 
  ExternalLink, 
  ArrowUpRight, 
  TrendingUp, 
  PieChart, 
  Eye, 
  PenTool, 
  Database, 
  FileSpreadsheet,
  Layers
} from 'lucide-react';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

const iconComponentMap: Record<string, React.ReactNode> = {
  TrendingUp: <TrendingUp className="w-5 h-5 text-emerald-400" />,
  PieChart: <PieChart className="w-5 h-5 text-indigo-400" />,
  Eye: <Eye className="w-5 h-5 text-purple-400" />,
  PenTool: <PenTool className="w-5 h-5 text-cyan-400" />,
  Database: <Database className="w-5 h-5 text-amber-400" />,
  FileSpreadsheet: <FileSpreadsheet className="w-5 h-5 text-blue-400" />
};

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'Data Science', 'AI & CV', 'Software & Graphics', 'DBMS'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Featured Projects"
          title="Practical Software, Analytics & AI Work"
          subtitle="Real projects built from scratch — ranging from live business analytics dashboards to computer vision prototypes and C++ graphics systems."
          badgeIcon={<FolderGit2 className="w-3.5 h-3.5 text-indigo-400" />}
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                activeFilter === cat
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-600/25 scale-105'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer glass-panel p-6 rounded-2xl border border-slate-800/80 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-950/40 relative overflow-hidden"
            >
              {/* Subtle top gradient on card */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Header Icon + Category + Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 group-hover:border-indigo-500/40 group-hover:scale-105 transition-all">
                    {iconComponentMap[project.iconName] || <Layers className="w-5 h-5 text-indigo-400" />}
                  </div>

                  <div className="flex items-center gap-1.5">
                    {project.badge && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-950/80 text-indigo-300 border border-indigo-800/50">
                        {project.badge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Project Title & Category */}
                <div className="flex items-baseline justify-between mb-1">
                  <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors flex items-center justify-between">
                  <span>{project.title}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 text-indigo-400 transition-all" />
                </h3>

                <p className="text-xs text-slate-400 line-clamp-3 mt-2.5 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mt-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-900/90 text-slate-300 border border-slate-800/80 group-hover:border-slate-700 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Quick Links & View Details Prompt */}
              <div className="pt-5 mt-5 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs font-mono text-indigo-400 group-hover:underline flex items-center gap-1">
                  <span>View Details</span>
                  <ArrowUpRight className="w-3 h-3" />
                </span>

                <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} GitHub Repository`}
                      className="p-1.5 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} Live Application`}
                      className="p-1.5 rounded-lg bg-indigo-950/80 text-indigo-300 hover:text-white hover:bg-indigo-900 transition-colors border border-indigo-800/40"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom prompt */}
        <div className="mt-12 text-center">
          <p className="text-xs font-mono text-slate-400">
            Click any project card to view technical architecture, problem statement, and takeaways.
          </p>
        </div>

      </div>
    </section>
  );
};
