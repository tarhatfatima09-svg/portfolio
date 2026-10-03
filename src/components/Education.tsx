import React from 'react';
import { SectionHeading } from './SectionHeading';
import { educationInfo } from '../data/portfolioData';
import { 
  GraduationCap, 
  MapPin, 
  Calendar, 
  BookOpen, 
  CheckCircle2, 
  Building2 
} from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Academics"
          title="Education & Technical Coursework"
          subtitle="Formal computer science and information technology training at REVA University, Bengaluru."
          badgeIcon={<GraduationCap className="w-3.5 h-3.5 text-indigo-400" />}
        />

        <div className="max-w-4xl mx-auto">
          <div className="glass-panel p-8 rounded-2xl border border-slate-800/80 relative overflow-hidden">
            
            {/* Ambient background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: University info */}
              <div className="md:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-indigo-950/80 text-indigo-300 border border-indigo-800/40">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>University Profile</span>
                </div>

                <h3 className="text-2xl font-bold text-white leading-tight">
                  {educationInfo.institution}
                </h3>
                
                <p className="text-base font-semibold text-indigo-400">
                  {educationInfo.degree}
                </p>

                <div className="space-y-2 pt-2 text-xs text-slate-300 font-mono">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-slate-500" />
                    <span>Expected Graduation: <strong className="text-white">{educationInfo.expectedGraduation}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-slate-500" />
                    <span>{educationInfo.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-slate-500" />
                    <span>Current Semester: <strong className="text-emerald-400">{educationInfo.currentSemester}</strong></span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
                    Academic Highlights
                  </h4>
                  <ul className="space-y-2">
                    {educationInfo.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column: Core Subject Grid */}
              <div className="md:col-span-6 bg-slate-900/60 p-6 rounded-xl border border-slate-800/80">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-4 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-indigo-400" />
                  Core CSIT Subjects & Foundations
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {educationInfo.coreSubjects.map((subject, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-slate-950/80 border border-slate-800/80 flex items-center gap-2 text-xs font-medium text-slate-200"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                      <span>{subject}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-3.5 rounded-lg bg-indigo-950/40 border border-indigo-800/40">
                  <p className="text-xs text-indigo-200 leading-relaxed">
                    🎓 Focused on bridging core theoretical curricula with hands-on open-source development and applied data competitions.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
