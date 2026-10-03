import React from 'react';
import { ArrowRight, FileText, Mail, Sparkles, Database } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { DataAiVisual } from './DataAiVisual';
import { GithubIcon, LinkedinIcon } from './Icons';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Subtle Background Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-indigo-600/10 via-purple-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Hero Details */}
          <div className="lg:col-span-7 flex flex-col text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-slate-900/90 border border-slate-800 text-slate-300 w-fit mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>3rd Semester CSIT</span>
              <span className="text-slate-600">•</span>
              <span className="text-indigo-400">REVA University, Bengaluru</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
              Building with <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-300">Data</span>.<br />
              Exploring <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">AI</span>.<br />
              Creating with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-300 to-white">Purpose</span>.
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-slate-300 font-medium leading-relaxed mb-4 max-w-2xl">
              {personalInfo.subheading}
            </p>

            {/* Short Introduction */}
            <p className="text-slate-400 text-base leading-relaxed mb-8 max-w-xl">
              {personalInfo.shortIntro}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10">
              <a
                href="#projects"
                className="group flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-600/25 transition-all duration-200 active:scale-95"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-indigo-500/40 shadow-sm transition-all duration-200 active:scale-95"
              >
                <FileText className="w-4 h-4 text-indigo-400" />
                <span>Download Resume</span>
              </button>

              <a
                href="#contact"
                className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors"
              >
                <Mail className="w-4 h-4 text-purple-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links & Quick Pillars */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">Connect:</span>
                <a
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium text-slate-300 bg-slate-900/80 hover:bg-indigo-950/60 hover:text-indigo-300 border border-slate-800 hover:border-indigo-700/40 transition-all"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-blue-400" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium text-slate-300 bg-slate-900/80 hover:bg-slate-800 hover:text-white border border-slate-800 hover:border-slate-700 transition-all"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-slate-300" />
                  <span>GitHub</span>
                </a>
                <a
                  href={`mailto:${personalInfo.social.email}`}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium text-slate-300 bg-slate-900/80 hover:bg-emerald-950/60 hover:text-emerald-300 border border-slate-800 hover:border-emerald-700/40 transition-all"
                >
                  <Mail className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Email</span>
                </a>
              </div>

              <div className="flex items-center gap-4 text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5 text-indigo-400" />
                  Data Analytics
                </span>
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                  Applied AI
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Data + AI + Code Visual */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <DataAiVisual />
          </div>

        </div>
      </div>
    </section>
  );
};
