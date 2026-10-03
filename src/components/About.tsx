import React from 'react';
import { SectionHeading } from './SectionHeading';
import { personalInfo } from '../data/portfolioData';
import { 
  GraduationCap, 
  MapPin, 
  Calendar, 
  Target, 
  Sparkles, 
  TrendingUp, 
  Code, 
  Compass
} from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="About Me"
          title="Student, Builder & Data Enthusiast"
          subtitle="Building solid fundamentals in computer science while exploring data science and applied AI."
          badgeIcon={<Compass className="w-3.5 h-3.5 text-indigo-400" />}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Story & Narrative */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div className="glass-panel p-8 rounded-2xl border border-slate-800/80 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl pointer-events-none" />
              
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-indigo-400" />
                <span>My Journey & Philosophy</span>
              </h3>

              <div className="space-y-4 text-slate-300 text-base leading-relaxed">
                {personalInfo.aboutParagraphs.map((para, idx) => (
                  <p key={idx}>
                    {para}
                  </p>
                ))}
              </div>

              {/* Learning by Building Pillars */}
              <div className="mt-8 pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/50">
                  <div className="p-2 rounded-lg bg-indigo-950/80 text-indigo-400 shrink-0">
                    <Code className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Learn by Building</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Creating practical dashboards & applications rather than just watching tutorials.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/50">
                  <div className="p-2 rounded-lg bg-purple-950/80 text-purple-400 shrink-0">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Data-First Mindset</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Turning raw numbers and unstructured datasets into clear visual insights.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Career Trajectory Roadmap Card */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-800/80">
              <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold mb-3 block">
                Career Direction
              </span>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center">
                
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-indigo-500/30 text-left relative">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 absolute top-3.5 right-3.5" />
                  <span className="text-[11px] font-mono text-emerald-400 font-medium">CURRENT STAGE</span>
                  <h4 className="text-sm font-bold text-white mt-1">CSIT Student & Builder</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Core DSA, DBMS, C++, Python & practical data tools.</p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-left">
                  <span className="text-[11px] font-mono text-indigo-400 font-medium">NEAR-TERM GOAL</span>
                  <h4 className="text-sm font-bold text-white mt-1">Data Analyst</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Business analytics, EDA, SQL querying & visualization pipelines.</p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-left">
                  <span className="text-[11px] font-mono text-purple-400 font-medium">LONG-TERM VISION</span>
                  <h4 className="text-sm font-bold text-white mt-1">Data Scientist</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Applied ML systems, predictive modeling & AI products with impact.</p>
                </div>

              </div>
            </div>

          </div>

          {/* Right Column: Key Info Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            
            {/* Card 1: Degree */}
            <div className="glass-panel glass-panel-hover p-5 rounded-2xl border border-slate-800/80 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-indigo-950/80 text-indigo-300 border border-indigo-800/40">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Academic Degree</span>
                <h4 className="text-base font-bold text-white mt-0.5">B.Tech in CSIT</h4>
                <p className="text-xs text-slate-300 mt-0.5">REVA University, Bengaluru</p>
                <p className="text-[11px] text-indigo-400 font-mono mt-1">Currently 3rd Semester</p>
              </div>
            </div>

            {/* Card 2: Location */}
            <div className="glass-panel glass-panel-hover p-5 rounded-2xl border border-slate-800/80 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-purple-950/80 text-purple-300 border border-purple-800/40">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Location</span>
                <h4 className="text-base font-bold text-white mt-0.5">Bengaluru, India</h4>
                <p className="text-xs text-slate-300 mt-0.5">India's Tech & AI Hub</p>
                <p className="text-[11px] text-slate-400 font-mono mt-1">Open to local & remote opportunities</p>
              </div>
            </div>

            {/* Card 3: Graduation */}
            <div className="glass-panel glass-panel-hover p-5 rounded-2xl border border-slate-800/80 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-blue-950/80 text-blue-300 border border-blue-800/40">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Timeline</span>
                <h4 className="text-base font-bold text-white mt-0.5">Graduation: July 2029</h4>
                <p className="text-xs text-slate-300 mt-0.5">Class of 2025–2029</p>
                <p className="text-[11px] text-emerald-400 font-mono mt-1">Building projects alongside coursework</p>
              </div>
            </div>

            {/* Card 4: Focus */}
            <div className="glass-panel glass-panel-hover p-5 rounded-2xl border border-slate-800/80 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-emerald-950/80 text-emerald-300 border border-emerald-800/40">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Primary Focus</span>
                <h4 className="text-base font-bold text-white mt-0.5">Data Science & Analytics</h4>
                <p className="text-xs text-slate-300 mt-0.5">Python, Pandas, SQL, C++, Applied AI</p>
                <p className="text-[11px] text-cyan-400 font-mono mt-1">Focus on practical applications</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
