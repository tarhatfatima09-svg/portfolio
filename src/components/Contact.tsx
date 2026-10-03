import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  MessageSquare, 
  Sparkles, 
  ArrowRight
} from 'lucide-react';

interface ContactProps {
  onShowToast: (msg: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onShowToast }) => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    purpose: 'Internship / Opportunity',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.social.email);
    setCopied(true);
    onShowToast(`Copied ${personalInfo.social.email} to clipboard!`);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct real mailto URL
    const subject = encodeURIComponent(`[Portfolio Contact: ${formData.purpose}] from ${formData.name || 'Visitor'}`);
    const body = encodeURIComponent(
      `Hi Tarhat,\n\nName: ${formData.name}\nEmail: ${formData.email}\nPurpose: ${formData.purpose}\n\nMessage:\n${formData.message}\n\nSent via Portfolio Contact Form`
    );

    window.location.href = `mailto:${personalInfo.social.email}?subject=${subject}&body=${body}`;
    onShowToast("Opening your email client to send message!");
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Get in Touch"
          title="Let's build something meaningful."
          subtitle="I'm always open to interesting projects, collaborations, hackathons, data/AI opportunities and conversations about technology."
          badgeIcon={<MessageSquare className="w-3.5 h-3.5 text-indigo-400" />}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-start">
          
          {/* Left Column: Direct Contact Info & Quick Actions */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Email Card */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-800/80">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-indigo-950/90 text-indigo-400 border border-indigo-800/40">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Direct Email</span>
                  <h4 className="text-base font-bold text-white break-all">{personalInfo.social.email}</h4>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <a
                  href={`mailto:${personalInfo.social.email}`}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-sm transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Direct Email</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  className="p-2.5 rounded-xl text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:text-white transition-colors"
                  title="Copy to clipboard"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Social & Professional Connections */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-800/80 space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
                Professional Profiles
              </h4>

              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/80 hover:bg-indigo-950/50 border border-slate-800 hover:border-indigo-700/40 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <LinkedinIcon className="w-5 h-5 text-blue-400" />
                  <div>
                    <span className="text-sm font-semibold text-white block">LinkedIn</span>
                    <span className="text-xs text-slate-400">Connect & message professionally</span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:translate-x-1 group-hover:text-indigo-300 transition-all" />
              </a>

              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800/80 border border-slate-800 hover:border-slate-700 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <GithubIcon className="w-5 h-5 text-slate-300" />
                  <div>
                    <span className="text-sm font-semibold text-white block">GitHub</span>
                    <span className="text-xs text-slate-400">View codebases & contributions</span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:translate-x-1 group-hover:text-slate-200 transition-all" />
              </a>
            </div>

            {/* Quick Availability Badge */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-3 text-xs text-slate-300 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Student Internships & Hackathon Teams (Bengaluru / Remote)</span>
            </div>

          </div>

          {/* Right Column: Interactive Mailto Message Composer */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800/80 relative">
              <h3 className="text-lg font-bold text-white mb-1 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-400" />
                <span>Send a Message</span>
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill this out and click send — it will seamlessly generate and format an email directly in your email app.
              </p>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Johnson"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl glass-input text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl glass-input text-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">
                    What would you like to discuss?
                  </label>
                  <select
                    value={formData.purpose}
                    onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl glass-input text-xs bg-[#0d0d16] cursor-pointer"
                  >
                    <option value="Internship / Opportunity">Data Analyst / Science Internship</option>
                    <option value="Hackathon / Project Collaboration">Hackathon / AI Project Collaboration</option>
                    <option value="General Conversation / Mentorship">General Tech Conversation & Mentorship</option>
                    <option value="Other Project Inquiry">Other Inquiries</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me a bit about what you're working on or how we can collaborate..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl glass-input text-xs resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-600/25 transition-all active:scale-[0.98]"
                >
                  <Send className="w-4 h-4" />
                  <span>Draft & Send via Email</span>
                </button>

                <p className="text-[11px] text-center text-slate-500 font-mono mt-2">
                  No tracking or marketing emails. Direct peer communication only.
                </p>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
