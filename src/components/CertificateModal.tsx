import React, { useEffect } from 'react';
import { CertificationItem } from '../types';
import { 
  X, 
  Award, 
  Download, 
  CheckCircle2, 
  ShieldCheck, 
  Calendar, 
  Building2, 
  Layers, 
  AlertCircle
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface CertificateModalProps {
  cert: CertificationItem | null;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ cert, onClose, onShowToast }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (cert) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [cert, onClose]);

  if (!cert) return null;

  const handleDownload = () => {
    if (!cert.certificateUrl) return;
    const link = document.createElement('a');
    link.href = cert.certificateUrl;
    link.download = `${cert.title.replace(/\s+/g, '_')}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    onShowToast(`Downloading certificate: ${cert.title}`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-panel bg-[#0d0d16]/95 rounded-2xl border border-slate-700/80 shadow-2xl p-6 sm:p-8 z-10 animate-in zoom-in-95 duration-200 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Certificate Preview"
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-start gap-4 mb-6 pr-10">
          <div className="p-3.5 rounded-2xl bg-slate-900 border border-indigo-500/30 text-indigo-400 shrink-0 shadow-lg shadow-indigo-950">
            <Award className="w-7 h-7 text-amber-400" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="text-xs font-mono text-indigo-400 bg-indigo-950/80 px-2.5 py-0.5 rounded-full border border-indigo-800/40 font-medium">
                {cert.type}
              </span>
              {cert.issuerBadge && (
                <span className="text-xs font-mono text-emerald-300 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-800/40">
                  {cert.issuerBadge}
                </span>
              )}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              {cert.title}
            </h2>
            <p className="text-sm text-slate-400 mt-1 flex items-center gap-2">
              <span>{cert.issuer}</span>
              <span className="text-slate-600">•</span>
              <span className="font-mono text-slate-400">{cert.year}</span>
            </p>
          </div>
        </div>

        {/* Certificate Decorative Showcase Canvas */}
        <div className="relative rounded-2xl border border-amber-500/30 bg-gradient-to-b from-[#141424] via-[#0d0d18] to-[#090910] p-6 sm:p-8 mb-6 overflow-hidden shadow-inner">
          {/* Subtle corner decorations */}
          <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-amber-400/40" />
          <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-amber-400/40" />
          <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-amber-400/40" />
          <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-amber-400/40" />

          {/* Certificate Watermark / Ambient glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="text-center space-y-3 relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-950/50 border border-amber-500/30 text-amber-300 text-xs font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>OFFICIAL CREDENTIAL RECORD</span>
            </div>

            <p className="text-xs font-mono uppercase tracking-widest text-slate-400 pt-1">
              Presented to
            </p>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-amber-200">
              {personalInfo.name}
            </h3>

            <p className="text-xs text-slate-300 max-w-lg mx-auto leading-relaxed pt-1">
              for successful completion of training & verified competency in <strong className="text-white">{cert.title}</strong> by <span className="text-indigo-300">{cert.issuer}</span>.
            </p>

            {/* Seal and Signature Line */}
            <div className="pt-6 mt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-indigo-400" />
                <span>Issuer: <strong className="text-white">{cert.issuer}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-amber-400" />
                <span>Issued: <strong className="text-white">{cert.year}</strong></span>
              </div>
            </div>
          </div>
        </div>

        {/* Description & Focus Areas */}
        <div className="space-y-4 mb-6">
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/60">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2">
              Certificate Description
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {cert.description}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2 flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-400" />
              Key Competencies & Focus Areas
            </h4>
            <div className="flex flex-wrap gap-2">
              {cert.focusAreas.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-900 border border-slate-800 text-slate-200 flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{skill}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Editable note for user */}
        {cert.note && (
          <div className="p-3.5 rounded-xl bg-indigo-950/30 border border-indigo-800/40 mb-6 flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
            <p className="text-xs text-indigo-200 leading-relaxed">
              <strong className="text-white">Note:</strong> {cert.note} (You can place certificate PDFs in <code className="bg-slate-900 px-1 py-0.5 rounded text-indigo-300 font-mono">/public/certificates/</code> or connect external credential links).
            </p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-md shadow-indigo-600/30 transition-all active:scale-95"
            >
              <Download className="w-4 h-4" />
              <span>Download / View PDF</span>
            </button>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-colors"
          >
            Close Preview
          </button>
        </div>

      </div>
    </div>
  );
};
