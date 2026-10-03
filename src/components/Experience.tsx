import React from 'react';
import { SectionHeading } from './SectionHeading';
import { experienceTimeline } from '../data/portfolioData';
import { 
  Briefcase, 
  MapPin, 
  Calendar,
  Award,
  ArrowUpRight
} from 'lucide-react';

interface ExperienceProps {
  onSelectCertById?: (certId: string) => void;
}

export const Experience: React.FC<ExperienceProps> = ({ onSelectCertById }) => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Experience & Learning"
          title="Practical Roles, Internships & Club Leadership"
          subtitle="Honest student milestones — practical analytics programs, community leadership at REVA University, and competitive AI hackathons."
          badgeIcon={<Briefcase className="w-3.5 h-3.5 text-indigo-400" />}
        />

        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-indigo-500/60 via-purple-500/40 to-slate-800 -translate-x-1/2 hidden sm:block" />

          <div className="space-y-8 sm:space-y-12">
            {experienceTimeline.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div 
                  key={item.id} 
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Center Node Indicator */}
                  <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 top-6 w-8 h-8 rounded-full bg-[#0d0d16] border-2 border-indigo-500 items-center justify-center z-10 shadow-lg shadow-indigo-950">
                    <span className="w-2.5 h-2.5 rounded-full bg-indigo-400" />
                  </div>

                  {/* Card Content (fills half width on desktop) */}
                  <div className={`w-full sm:w-[calc(50%-2rem)] ${
                    isEven ? 'sm:pl-0 sm:pr-4' : 'sm:pr-0 sm:pl-4'
                  }`}>
                    <div className="glass-panel glass-panel-hover p-6 rounded-2xl border border-slate-800/80 relative">
                      
                      {/* Badge / Type */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="text-[11px] font-mono text-indigo-300 bg-indigo-950/80 px-2.5 py-0.5 rounded-full border border-indigo-800/50">
                          {item.type}
                        </span>
                        
                        <div className="flex items-center gap-1 text-xs font-mono text-slate-400">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{item.period}</span>
                        </div>
                      </div>

                      {/* Role & Org */}
                      <h3 className="text-lg font-bold text-white mb-1">
                        {item.role}
                      </h3>
                      <p className="text-sm font-medium text-indigo-400 mb-2">
                        {item.organization}
                      </p>

                      <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono mb-4">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        <span>{item.location}</span>
                      </div>

                      {/* Highlights */}
                      <ul className="space-y-2 mb-5">
                        {item.highlights.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0 mt-1.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Certificate link & Tags */}
                      <div className="pt-3 border-t border-slate-800/60 flex flex-wrap items-center justify-between gap-2">
                        <div className="flex flex-wrap gap-1.5">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-slate-300 border border-slate-800"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {item.certificateId && onSelectCertById && (
                          <button
                            onClick={() => onSelectCertById(item.certificateId!)}
                            className="inline-flex items-center gap-1 text-[11px] font-mono text-amber-300 hover:text-amber-200 bg-amber-950/60 hover:bg-amber-900/60 px-2.5 py-1 rounded-lg border border-amber-500/30 transition-colors"
                          >
                            <Award className="w-3 h-3 text-amber-400" />
                            <span>View Certificate</span>
                            <ArrowUpRight className="w-3 h-3" />
                          </button>
                        )}
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Extra campus engagement pill */}
          <div className="mt-12 p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-center max-w-xl mx-auto">
            <p className="text-xs text-slate-300">
              Also actively engaged in <strong className="text-indigo-300">AI Arena</strong> coding rounds, internal REVA hackathons, and technical project showcases across Bengaluru developer circles.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
