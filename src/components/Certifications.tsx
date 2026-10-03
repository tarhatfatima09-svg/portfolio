import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { certifications } from '../data/portfolioData';
import { CertificationItem } from '../types';
import { 
  Award, 
  ShieldCheck, 
  ArrowUpRight, 
  Eye 
} from 'lucide-react';

interface CertificationsProps {
  onSelectCert: (cert: CertificationItem) => void;
}

export const Certifications: React.FC<CertificationsProps> = ({ onSelectCert }) => {
  const [filterType, setFilterType] = useState<string>('all');

  const filterOptions = [
    { label: 'All Certifications', value: 'all' },
    { label: 'Technical Courses', value: 'Course Certification' },
    { label: 'Professional Skills', value: 'Professional Skill' },
    { label: 'Internships', value: 'Internship' },
    { label: 'Hackathons', value: 'Hackathon Participation' }
  ];

  const filteredCerts = filterType === 'all'
    ? certifications
    : certifications.filter(c => c.type === filterType);

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Verified Credentials"
          title="Certifications & Technical Training"
          subtitle="Verified learning paths, industry skill certifications, internship completions, and competitive hackathon participations."
          badgeIcon={<Award className="w-3.5 h-3.5 text-amber-400" />}
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setFilterType(opt.value)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                filterType === opt.value
                  ? 'bg-gradient-to-r from-amber-500/20 via-indigo-600/30 to-purple-600/30 text-amber-300 border border-amber-500/40 shadow-md shadow-amber-950/40'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              onClick={() => onSelectCert(cert)}
              className="group cursor-pointer glass-panel p-6 rounded-2xl border border-slate-800/80 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:border-amber-500/40 hover:shadow-xl hover:shadow-amber-950/20 relative overflow-hidden"
            >
              {/* Top Accent Gradient */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Certificate Visual Thumbnail / Preview Box */}
                <div className="relative h-32 rounded-xl bg-gradient-to-b from-[#141424] to-[#0a0a12] border border-slate-800 group-hover:border-amber-500/30 p-4 mb-5 flex flex-col justify-between overflow-hidden shadow-inner transition-colors">
                  {/* Watermark Seal */}
                  <div className="absolute -right-3 -bottom-3 w-20 h-20 rounded-full bg-amber-500/5 blur-xl pointer-events-none" />
                  
                  <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-amber-950/80 border border-amber-500/40 text-amber-400">
                        <Award className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-amber-300/90 font-semibold">
                        {cert.issuer}
                      </span>
                    </div>

                    <span className="text-[10px] font-mono text-slate-400 bg-slate-900/90 px-2 py-0.5 rounded border border-slate-800">
                      {cert.year}
                    </span>
                  </div>

                  <div className="relative z-10 text-left">
                    <h4 className="text-sm font-bold text-white line-clamp-1 group-hover:text-amber-300 transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-[10px] font-mono text-slate-400 mt-0.5 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-emerald-400" />
                      <span>Verified Recipient: Tarhat Fatima</span>
                    </p>
                  </div>
                </div>

                {/* Card Title & Issuer */}
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] font-mono text-indigo-400 uppercase tracking-wider font-medium">
                    {cert.type}
                  </span>
                  {cert.issuerBadge && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-950/70 text-emerald-300 border border-emerald-800/40">
                      {cert.issuerBadge}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-amber-200 transition-colors mb-2 text-left">
                  {cert.title}
                </h3>

                <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed mb-4 text-left">
                  {cert.description}
                </p>

                {/* Focus Areas Chips */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {cert.focusAreas.map((focus) => (
                    <span
                      key={focus}
                      className="px-2.5 py-0.5 rounded-md text-[10px] font-mono bg-slate-900/90 text-slate-300 border border-slate-800"
                    >
                      {focus}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Action / View Certificate Button */}
              <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs font-mono text-amber-400 group-hover:underline flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Certificate</span>
                </span>

                <div className="p-1.5 rounded-lg bg-slate-900 text-slate-400 group-hover:text-white group-hover:bg-amber-950/80 group-hover:border-amber-800/40 border border-slate-800 transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Certificate Transparency Callout */}
        <div className="mt-12 p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-center max-w-2xl mx-auto">
          <p className="text-xs text-slate-400 font-mono">
            📜 All credentials reflect actual course completions, internship tracks, and hackathon participations. Certificate files are accessible for verification.
          </p>
        </div>

      </div>
    </section>
  );
};
