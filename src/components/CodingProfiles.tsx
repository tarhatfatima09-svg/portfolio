import React from 'react';
import { SectionHeading } from './SectionHeading';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon } from './Icons';
import { 
  ExternalLink, 
  Terminal, 
  CheckCircle2, 
  FolderGit2 
} from 'lucide-react';

export const CodingProfiles: React.FC = () => {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Coding & Practice Hubs"
          title="Code Repositories & Problem Solving"
          subtitle="Explore public GitHub repositories, algorithmic practice submissions, and hands-on codebases."
          badgeIcon={<Terminal className="w-3.5 h-3.5 text-indigo-400" />}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* GitHub Showcase Card */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white">
                    <GithubIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">GitHub Showcase</h3>
                    <p className="text-xs font-mono text-slate-400">@tarhatfatima09-svg</p>
                  </div>
                </div>

                <a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 transition-colors border border-slate-700"
                >
                  <span>Explore GitHub</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Active repository home for open-source exploratory data analysis, C++ computer graphics routines, relational DBMS schema scripts, and Streamlit business intelligence applications.
              </p>

              {/* Repositories Highlights */}
              <div className="space-y-3">
                
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FolderGit2 className="w-4 h-4 text-indigo-400 shrink-0" />
                    <div>
                      <h4 className="text-xs font-bold text-white">ai-business-analyst</h4>
                      <p className="text-[11px] text-slate-400">Streamlit dashboard with sales analytics & AI insights</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-950/80 text-indigo-300 border border-indigo-800/40">
                    Python
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FolderGit2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <h4 className="text-xs font-bold text-white">IPL-Data-Analysis</h4>
                      <p className="text-[11px] text-slate-400">Comprehensive multi-season EDA notebooks & team statistics</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-800/40">
                    Jupyter
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FolderGit2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <div>
                      <h4 className="text-xs font-bold text-white">2D-Graphics-Editor</h4>
                      <p className="text-[11px] text-slate-400">Interactive drawing canvas in C++ with custom shape algorithms</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-800/40">
                    C++
                  </span>
                </div>

              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-400 font-mono flex items-center justify-between">
              <span>Clean Code & Version Control</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Active Student Commits
              </span>
            </div>
          </div>

          {/* Coding Practice Platforms (HackerRank / LeetCode) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            
            {/* HackerRank Card */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-800/80 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-emerald-950/80 border border-emerald-800/40 flex items-center justify-center text-emerald-400 font-bold font-mono text-xs">
                      HR
                    </div>
                    <h4 className="text-base font-bold text-white">HackerRank</h4>
                  </div>
                  <a
                    href={personalInfo.social.hackerrank}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-slate-900 text-slate-400 hover:text-white"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Practicing problem-solving across C, C++, Python, and relational SQL query challenges to sharpen core computational fundamentals.
                </p>

                <div className="space-y-1.5 text-xs text-slate-400 font-mono">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>C / C++ Syntax & Data Structures</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>SQL Querying & Aggregations</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-emerald-400">
                Regular Practice Track
              </div>
            </div>

            {/* LeetCode & DSA Challenge Card */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-800/80 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-amber-950/80 border border-amber-800/40 flex items-center justify-center text-amber-400 font-bold font-mono text-xs">
                      LC
                    </div>
                    <h4 className="text-base font-bold text-white">DSA & Algorithmic Practice</h4>
                  </div>
                  <a
                    href={personalInfo.social.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-slate-900 text-slate-400 hover:text-white"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Dedicated 30-day DSA streak and continued problem solving in C++ focusing on arrays, strings, two-pointers, hash maps, and recursion.
                </p>

                <div className="space-y-1.5 text-xs text-slate-400 font-mono">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                    <span>30-Day DSA Practice Sprint Completed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Focusing on Time/Space Complexity</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-indigo-400">
                Foundations for Technical Interviews
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
