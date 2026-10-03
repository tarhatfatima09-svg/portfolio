import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { skillCategories } from '../data/portfolioData';
import { 
  Code2, 
  BarChart3, 
  Database, 
  Sparkles, 
  Wrench, 
  GraduationCap, 
  Check, 
  Layers
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-5 h-5 text-blue-400" />,
  BarChart3: <BarChart3 className="w-5 h-5 text-emerald-400" />,
  Database: <Database className="w-5 h-5 text-amber-400" />,
  Sparkles: <Sparkles className="w-5 h-5 text-purple-400" />,
  Wrench: <Wrench className="w-5 h-5 text-cyan-400" />,
  GraduationCap: <GraduationCap className="w-5 h-5 text-indigo-400" />
};

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredCategories = selectedCategory === 'all' 
    ? skillCategories 
    : skillCategories.filter(cat => cat.title.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Technical Toolkit"
          title="Skills, Frameworks & Technologies"
          subtitle="Organized by functional domains. Focused on practical application without exaggerated percentages."
          badgeIcon={<Layers className="w-3.5 h-3.5 text-indigo-400" />}
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
              selectedCategory === 'all'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            All Disciplines
          </button>
          {skillCategories.map((category) => (
            <button
              key={category.title}
              onClick={() => setSelectedCategory(category.title)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                selectedCategory === category.title
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.title}
              className="glass-panel glass-panel-hover p-6 rounded-2xl border border-slate-800/80 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800">
                    {iconMap[category.icon] || <Code2 className="w-5 h-5 text-indigo-400" />}
                  </div>
                  <span className="text-[11px] font-mono text-slate-500 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                    {category.skills.length} skills
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-1">
                  {category.title}
                </h3>
                <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                  {category.description}
                </p>

                {/* Skill Badges / Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-900/80 border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-800 transition-all text-slate-200"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400/80 group-hover:bg-indigo-300" />
                      <span>{skill.name}</span>
                      
                      {skill.levelTag && (
                        <span className="text-[10px] font-mono text-indigo-300 bg-indigo-950/80 px-1.5 py-0.2 rounded border border-indigo-800/40">
                          {skill.levelTag}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Practical note */}
              <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span className="flex items-center gap-1 text-emerald-400/90">
                  <Check className="w-3 h-3 text-emerald-400" />
                  Practical Experience
                </span>
                <span className="text-slate-500">Active</span>
              </div>
            </div>
          ))}
        </div>

        {/* Methodology note */}
        <div className="mt-10 p-4 rounded-xl bg-indigo-950/30 border border-indigo-800/30 max-w-2xl mx-auto text-center">
          <p className="text-xs text-indigo-300 font-mono">
            💡 "Skill competency here represents genuine codebase usage in academic projects, hackathons, and analytics dashboards — not arbitrary percentage scores."
          </p>
        </div>

      </div>
    </section>
  );
};
