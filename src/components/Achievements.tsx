import React from 'react';
import { SectionHeading } from './SectionHeading';
import { achievements } from '../data/portfolioData';
import { 
  Trophy, 
  Award, 
  Code, 
  Brain, 
  BarChart, 
  CheckCircle2,
  ArrowUpRight
} from 'lucide-react';

const achievementIconMap: Record<string, React.ReactNode> = {
  Trophy: <Trophy className="w-6 h-6 text-amber-400" />,
  Code: <Code className="w-6 h-6 text-indigo-400" />,
  Brain: <Brain className="w-6 h-6 text-purple-400" />,
  BarChart: <BarChart className="w-6 h-6 text-emerald-400" />
};

interface AchievementsProps {
  onSelectCertById?: (certId: string) => void;
}

export const Achievements: React.FC<AchievementsProps> = ({ onSelectCertById }) => {
  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Milestones & Practice"
          title="Achievements & Coding Milestones"
          subtitle="Grounded accomplishments — hackathon recognition, algorithmic practice consistency, and real software deployments."
          badgeIcon={<Trophy className="w-3.5 h-3.5 text-amber-400" />}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {achievements.map((item) => (
            <div
              key={item.id}
              className="glass-panel glass-panel-hover p-6 rounded-2xl border border-slate-800/80 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Subtle decorative glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                    {achievementIconMap[item.icon] || <Award className="w-6 h-6 text-indigo-400" />}
                  </div>

                  {item.badge && (
                    <span className="text-[11px] font-mono text-amber-300 bg-amber-950/60 px-2.5 py-0.5 rounded-full border border-amber-800/40">
                      {item.badge}
                    </span>
                  )}
                </div>

                <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block mb-1">
                  {item.category} • {item.issuer}
                </span>

                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>

                {item.highlights && item.highlights.length > 0 && (
                  <div className="space-y-1.5 pt-3 border-t border-slate-800/60">
                    {item.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800/40 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span className="text-indigo-400">Verified Milestone</span>
                
                {item.certificateId && onSelectCertById ? (
                  <button
                    onClick={() => onSelectCertById(item.certificateId!)}
                    className="inline-flex items-center gap-1 text-[11px] font-mono text-amber-300 hover:text-amber-200 bg-amber-950/60 hover:bg-amber-900/60 px-2.5 py-1 rounded-lg border border-amber-500/30 transition-colors"
                  >
                    <Award className="w-3 h-3 text-amber-400" />
                    <span>View Certificate</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                ) : (
                  item.date && <span>{item.date}</span>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
