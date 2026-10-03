import React from 'react';
import { 
  X, 
  Download, 
  FileText, 
  AlertCircle, 
  GraduationCap, 
  Code2, 
  Trophy
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { LinkedinIcon } from './Icons';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, onShowToast }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = personalInfo.resumePath;
    link.download = 'Tarhat_Fatima_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    onShowToast("Resume download initiated! (Place your Tarhat_Fatima_Resume.pdf in the /public folder to update)");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div 
        className="relative w-full max-w-2xl bg-[#0e0e18] border border-slate-700/80 rounded-2xl shadow-2xl p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Resume Modal"
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white bg-slate-900 border border-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3.5 mb-6">
          <div className="p-3 rounded-xl bg-indigo-950/90 text-indigo-400 border border-indigo-800/40">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Tarhat Fatima — Resume
            </h2>
            <p className="text-xs font-mono text-slate-400">
              B.Tech CSIT @ REVA University • Data Science & Analytics Focus
            </p>
          </div>
        </div>

        {/* Action Bar */}
        <div className="flex flex-wrap items-center gap-3 p-4 rounded-xl bg-slate-900/90 border border-slate-800 mb-6">
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-md shadow-indigo-600/30 transition-all active:scale-95"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF Resume</span>
          </button>

          <a
            href={personalInfo.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors"
          >
            <LinkedinIcon className="w-4 h-4 text-blue-400" />
            <span>View LinkedIn Profile</span>
          </a>
        </div>

        {/* PDF Connect Note / Instructions for User */}
        <div className="p-3.5 rounded-xl bg-indigo-950/40 border border-indigo-800/40 mb-6 flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
          <div className="text-xs text-indigo-200 leading-relaxed">
            <span className="font-semibold text-white">Note for Tarhat:</span> You can drop your official PDF resume file named <code className="bg-slate-900 px-1 py-0.5 rounded text-indigo-300 font-mono">Tarhat_Fatima_Resume.pdf</code> directly into the <code className="bg-slate-900 px-1 py-0.5 rounded text-indigo-300 font-mono">/public</code> folder whenever you update it.
          </div>
        </div>

        {/* Resume Quick Summary / Structured Preview */}
        <div className="space-y-4 text-left">
          
          {/* Section: Education */}
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/60">
            <h3 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold mb-2 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              Education
            </h3>
            <div className="text-xs text-slate-300 space-y-1">
              <div className="font-bold text-white text-sm">REVA University, Bengaluru</div>
              <div>B.Tech in Computer Science & Information Technology (2025 – 2029)</div>
              <div className="text-slate-400">Current Semester: 3rd Semester • Expected Graduation: July 2029</div>
            </div>
          </div>

          {/* Section: Core Skills */}
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/60">
            <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold mb-2 flex items-center gap-2">
              <Code2 className="w-4 h-4" />
              Key Technical Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
              <div><strong className="text-white">Languages:</strong> Python, C++, C, SQL</div>
              <div><strong className="text-white">Data & Analytics:</strong> Pandas, NumPy, Excel, EDA, Visualization</div>
              <div><strong className="text-white">Databases:</strong> MySQL, SQLite, Relational DBMS</div>
              <div><strong className="text-white">AI & Tools:</strong> Streamlit, Computer Vision, Git, GitHub, VS Code</div>
            </div>
          </div>

          {/* Section: Key Projects & Hackathons */}
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/60">
            <h3 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold mb-2 flex items-center gap-2">
              <Trophy className="w-4 h-4" />
              Featured Projects & Milestones
            </h3>
            <ul className="space-y-1.5 text-xs text-slate-300">
              <li>• <strong className="text-white">AI Business Analyst:</strong> Live Streamlit sales intelligence dashboard.</li>
              <li>• <strong className="text-white">IPL Data Analysis:</strong> Multi-season exploratory analysis and player stats.</li>
              <li>• <strong className="text-white">AI Vision / Navigation Assistant:</strong> Top 7 Finalist at AINEX VisionX 2026 (AiFI × GDG).</li>
              <li>• <strong className="text-white">2D Graphics Editor:</strong> Interactive shape drawing engine built in C++.</li>
              <li>• <strong className="text-white">DecodeLab Data Analysis:</strong> Practical data cleaning & business metrics internship track.</li>
            </ul>
          </div>

        </div>

        {/* Modal Close CTA */}
        <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs text-slate-500 font-mono">Available for internships & hackathons</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-colors"
          >
            Close Preview
          </button>
        </div>

      </div>
    </div>
  );
};
