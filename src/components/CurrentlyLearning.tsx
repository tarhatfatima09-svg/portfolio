import React from 'react';
import { currentlyLearning } from '../data/portfolioData';
import { 
  Binary, 
  Cpu, 
  Database, 
  LineChart, 
  Sparkles, 
  Flame,
  ArrowRight
} from 'lucide-react';

const learningIcons: Record<string, React.ReactNode> = {
  Binary: <Binary className="w-5 h-5 text-indigo-400" />,
  Cpu: <Cpu className="w-5 h-5 text-cyan-400" />,
  Database: <Database className="w-5 h-5 text-amber-400" />,
  LineChart: <LineChart className="w-5 h-5 text-emerald-400" />,
  Sparkles: <Sparkles className="w-5 h-5 text-purple-400" />
};

export const CurrentlyLearning: React.FC = () => {
  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-slate-800/80 relative overflow-hidden bg-gradient-to-b from-[#10101c]/90 to-[#0c0c14]/95">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-slate-800">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-purple-950/70 border border-purple-800/40 text-purple-300 mb-3">
                <Flame className="w-3.5 h-3.5 text-purple-400" />
                <span>Continuous Growth</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                What I'm Learning Right Now
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                Active subjects and technical domains being deepened this semester through coursework and builds.
              </p>
            </div>

            <div className="mt-4 md:mt-0 font-mono text-xs text-indigo-400 flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 w-fit">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
              <span>3rd Semester Sprint</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentlyLearning.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-indigo-500/40 hover:bg-slate-900 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 group-hover:scale-105 transition-transform">
                      {learningIcons[item.icon] || <Sparkles className="w-5 h-5 text-indigo-400" />}
                    </div>
                    <span className="text-[10px] font-mono text-indigo-300 bg-indigo-950/80 px-2 py-0.5 rounded border border-indigo-800/40">
                      {item.progress}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block mb-1">
                    {item.area}
                  </span>

                  <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {item.topic}
                  </h3>

                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    {item.currentFocus}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Daily / Weekly Practice</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 text-slate-600 group-hover:text-indigo-400 transition-all" />
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
