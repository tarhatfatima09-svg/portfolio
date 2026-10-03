import React, { useEffect } from 'react';
import { Project } from '../types';
import { GithubIcon } from './Icons';
import { 
  X, 
  ExternalLink, 
  AlertCircle, 
  Lightbulb, 
  Wrench, 
  Layers, 
  BookOpen, 
  CheckCircle2,
  TrendingUp,
  PieChart,
  Eye,
  PenTool,
  Database,
  FileSpreadsheet
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const iconComponentMap: Record<string, React.ReactNode> = {
  TrendingUp: <TrendingUp className="w-5 h-5 text-emerald-400" />,
  PieChart: <PieChart className="w-5 h-5 text-indigo-400" />,
  Eye: <Eye className="w-5 h-5 text-purple-400" />,
  PenTool: <PenTool className="w-5 h-5 text-cyan-400" />,
  Database: <Database className="w-5 h-5 text-amber-400" />,
  FileSpreadsheet: <FileSpreadsheet className="w-5 h-5 text-blue-400" />
};

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="fixed inset-0" 
        onClick={onClose} 
        aria-hidden="true" 
      />

      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-panel bg-[#0d0d16]/95 rounded-2xl border border-slate-700/80 shadow-2xl p-6 sm:p-8 z-10 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Project Modal"
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-start gap-4 mb-6 pr-10">
          <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 shrink-0">
            {iconComponentMap[project.iconName] || <Layers className="w-6 h-6 text-indigo-400" />}
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="text-xs font-mono text-indigo-400 bg-indigo-950/80 px-2.5 py-0.5 rounded-full border border-indigo-800/40 font-medium">
                {project.category}
              </span>
              {project.badge && (
                <span className="text-xs font-mono text-emerald-300 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-800/40">
                  {project.badge}
                </span>
              )}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              {project.title}
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              {project.subtitle}
            </p>
          </div>
        </div>

        {/* Action Buttons Header */}
        <div className="flex flex-wrap items-center gap-3 pb-6 mb-6 border-b border-slate-800">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-md shadow-indigo-600/30 transition-all active:scale-95"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open Live Project</span>
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>View Source on GitHub</span>
            </a>
          )}

          {project.details.statusNote && (
            <span className="text-xs font-mono text-slate-400 py-2">
              Note: {project.details.statusNote}
            </span>
          )}
        </div>

        {/* Prototype / Distinction Banner if applicable */}
        {project.details.isConceptOrPrototype && (
          <div className="mb-6 p-3.5 rounded-xl bg-purple-950/30 border border-purple-800/40 flex items-start gap-3">
            <AlertCircle className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
            <p className="text-xs text-purple-200 leading-relaxed">
              <strong className="font-semibold text-white">Prototype / Hackathon Distinction:</strong> This system was conceived and engineered as a competitive prototype during AINEX VisionX 2026 (AiFI × GDG). Computer vision object classification and spatial audio output pipelines were tested in demonstration environments.
            </p>
          </div>
        )}

        {/* Detailed Sections Grid */}
        <div className="space-y-6">
          
          {/* Problem */}
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/60">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2 flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-amber-400" />
              Problem Statement
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.details.problem}
            </p>
          </div>

          {/* Approach */}
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/60">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2 flex items-center gap-2">
              <Layers className="w-4 h-4 text-indigo-400" />
              Technical Approach & Architecture
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.details.approach}
            </p>
          </div>

          {/* Tools & Technologies */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2.5 flex items-center gap-2">
              <Wrench className="w-4 h-4 text-cyan-400" />
              Tools & Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.details.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-900 border border-slate-800 text-slate-200"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2.5 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Key Features & Capabilities
            </h4>
            <ul className="space-y-2">
              {project.details.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-2" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What I Learned */}
          <div className="p-4 rounded-xl bg-indigo-950/30 border border-indigo-800/40">
            <h4 className="text-xs font-mono uppercase tracking-wider text-indigo-300 font-semibold mb-2 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-indigo-400" />
              What I Learned & Takeaways
            </h4>
            <p className="text-sm text-indigo-100 leading-relaxed">
              {project.details.whatILearned}
            </p>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="mt-8 pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-semibold text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-colors"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  );
};
