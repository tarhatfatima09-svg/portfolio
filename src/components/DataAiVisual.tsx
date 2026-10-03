import React, { useState, useEffect, useRef } from 'react';
import { Database, Brain, Sparkles, Terminal, Activity, BarChart2, Layers } from 'lucide-react';

export const DataAiVisual: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'neural' | 'analytics' | 'pipeline'>('neural');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  // Simulated live metrics for data science feel
  const [pulseCount, setPulseCount] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setPulseCount(prev => (prev + 1) % 100);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-lg mx-auto aspect-square rounded-2xl glass-panel p-6 overflow-hidden border border-slate-800/80 shadow-2xl transition-transform duration-300 ease-out"
      style={{
        transform: `perspective(1000px) rotateY(${mousePos.x * 8}deg) rotateX(${-mousePos.y * 8}deg)`
      }}
    >
      {/* Background ambient glow */}
      <div className="absolute -top-20 -right-20 w-56 h-56 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

      {/* Visual Header / Control bar */}
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          <span className="ml-2 font-mono text-xs text-slate-400">tarhat_workspace // data_ai_core.py</span>
        </div>
        <div className="flex items-center gap-1 text-[11px] font-mono text-indigo-400 bg-indigo-950/60 px-2 py-0.5 rounded border border-indigo-800/40">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>LIVE RUN</span>
        </div>
      </div>

      {/* Visual Mode Selector Tabs */}
      <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-950/70 rounded-lg mb-4 text-xs font-medium text-slate-400">
        <button
          onClick={() => setActiveTab('neural')}
          className={`flex items-center justify-center gap-1.5 py-1.5 rounded-md transition-all ${
            activeTab === 'neural' 
              ? 'bg-indigo-600/30 text-indigo-200 border border-indigo-500/30 shadow-sm' 
              : 'hover:text-slate-200'
          }`}
        >
          <Brain className="w-3.5 h-3.5" />
          <span>AI / CV</span>
        </button>
        <button
          onClick={() => setActiveTab('analytics')}
          className={`flex items-center justify-center gap-1.5 py-1.5 rounded-md transition-all ${
            activeTab === 'analytics' 
              ? 'bg-indigo-600/30 text-indigo-200 border border-indigo-500/30 shadow-sm' 
              : 'hover:text-slate-200'
          }`}
        >
          <BarChart2 className="w-3.5 h-3.5" />
          <span>Analytics</span>
        </button>
        <button
          onClick={() => setActiveTab('pipeline')}
          className={`flex items-center justify-center gap-1.5 py-1.5 rounded-md transition-all ${
            activeTab === 'pipeline' 
              ? 'bg-indigo-600/30 text-indigo-200 border border-indigo-500/30 shadow-sm' 
              : 'hover:text-slate-200'
          }`}
        >
          <Terminal className="w-3.5 h-3.5" />
          <span>Code & SQL</span>
        </button>
      </div>

      {/* Visual Canvas Area */}
      <div className="relative h-64 rounded-xl bg-slate-950/90 border border-slate-800/80 p-4 font-mono text-xs overflow-hidden flex flex-col justify-between">
        
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

        {activeTab === 'neural' && (
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div className="flex items-center justify-between text-slate-400 border-b border-slate-800/60 pb-2">
              <span className="text-[11px] flex items-center gap-1.5 text-indigo-300">
                <Sparkles className="w-3.5 h-3.5" />
                YOLOv8 + Vision Feedback Pipeline
              </span>
              <span className="text-[10px] text-slate-500">Latency: 28ms</span>
            </div>

            {/* Neural Network Node Graph (SVG) */}
            <div className="relative my-auto h-32 flex items-center justify-center">
              <svg className="w-full h-full" viewBox="0 0 300 120">
                {/* Connecting Lines */}
                <line x1="40" y1="30" x2="150" y2="25" stroke="#6366f1" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="3 3" />
                <line x1="40" y1="60" x2="150" y2="60" stroke="#6366f1" strokeWidth="2" strokeOpacity="0.8" />
                <line x1="40" y1="90" x2="150" y2="95" stroke="#6366f1" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="3 3" />
                
                <line x1="40" y1="30" x2="150" y2="60" stroke="#8b5cf6" strokeWidth="1" strokeOpacity="0.3" />
                <line x1="40" y1="90" x2="150" y2="60" stroke="#8b5cf6" strokeWidth="1" strokeOpacity="0.3" />
                
                <line x1="150" y1="25" x2="260" y2="60" stroke="#06b6d4" strokeWidth="1.5" strokeOpacity="0.6" />
                <line x1="150" y1="60" x2="260" y2="60" stroke="#06b6d4" strokeWidth="2" strokeOpacity="0.9" />
                <line x1="150" y1="95" x2="260" y2="60" stroke="#06b6d4" strokeWidth="1.5" strokeOpacity="0.6" />

                {/* Input Layer Nodes */}
                <circle cx="40" cy="30" r="8" fill="#1e1b4b" stroke="#818cf8" strokeWidth="2" />
                <circle cx="40" cy="60" r="9" fill="#312e81" stroke="#a78bfa" strokeWidth="2" className="animate-pulse" />
                <circle cx="40" cy="90" r="8" fill="#1e1b4b" stroke="#818cf8" strokeWidth="2" />

                {/* Hidden Layer Nodes */}
                <circle cx="150" cy="25" r="9" fill="#1e1b4b" stroke="#6366f1" strokeWidth="2" />
                <circle cx="150" cy="60" r="11" fill="#4338ca" stroke="#c084fc" strokeWidth="2.5" />
                <circle cx="150" cy="95" r="9" fill="#1e1b4b" stroke="#6366f1" strokeWidth="2" />

                {/* Output Decision Node */}
                <circle cx="260" cy="60" r="12" fill="#042f2e" stroke="#2dd4bf" strokeWidth="2.5" />

                {/* Labels */}
                <text x="40" y="112" fill="#64748b" fontSize="8" textAnchor="middle">Input Stream</text>
                <text x="150" y="115" fill="#818cf8" fontSize="8" textAnchor="middle">Feature Extractor</text>
                <text x="260" y="85" fill="#2dd4bf" fontSize="8" textAnchor="middle">Audio Cues</text>
              </svg>
            </div>

            {/* Live Model Output Badge */}
            <div className="bg-slate-900/90 rounded-md p-2 border border-slate-800 flex items-center justify-between text-[10px]">
              <span className="text-slate-400">Object: <span className="text-emerald-300 font-semibold">Navigational Obstacle</span></span>
              <span className="text-slate-400">Action: <span className="text-cyan-300">Spatial Audio Guidance</span></span>
            </div>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div className="flex items-center justify-between text-slate-400 border-b border-slate-800/60 pb-2">
              <span className="text-[11px] flex items-center gap-1.5 text-emerald-300">
                <Activity className="w-3.5 h-3.5" />
                Sales & Performance Stream (Pandas Engine)
              </span>
              <span className="text-[10px] text-emerald-400 font-bold">+18.4% MoM</span>
            </div>

            {/* Dynamic mini bar chart simulation */}
            <div className="my-auto grid grid-cols-6 gap-2 items-end h-28 pt-4 px-2">
              {[
                { label: 'Q1', height: '45%', val: '24K' },
                { label: 'Q2', height: '65%', val: '38K' },
                { label: 'Q3', height: '55%', val: '32K' },
                { label: 'Q4', height: '88%', val: '52K' },
                { label: 'Q5', height: '70%', val: '41K' },
                { label: 'Q6', height: '95%', val: '64K' },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center gap-1.5 h-full justify-end group">
                  <span className="text-[8px] text-slate-500 group-hover:text-indigo-300 transition-colors">{item.val}</span>
                  <div 
                    className="w-full rounded-t transition-all duration-500 bg-gradient-to-t from-indigo-900 via-indigo-600 to-cyan-400 hover:from-purple-800 hover:to-emerald-400"
                    style={{ height: item.height }}
                  />
                  <span className="text-[9px] text-slate-400">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="bg-slate-900/90 rounded-md p-2 border border-slate-800 flex items-center justify-between text-[10px]">
              <span className="text-slate-400">Dataset: <span className="text-indigo-300">IPL & Sales Transactions</span></span>
              <span className="text-slate-400">Nulls Handled: <span className="text-emerald-300">100% Cleaned</span></span>
            </div>
          </div>
        )}

        {activeTab === 'pipeline' && (
          <div className="relative z-10 h-full flex flex-col justify-between text-left">
            <div className="flex items-center justify-between text-slate-400 border-b border-slate-800/60 pb-2">
              <span className="text-[11px] flex items-center gap-1.5 text-cyan-300">
                <Layers className="w-3.5 h-3.5" />
                C++ Graphics & Relational Schema
              </span>
              <span className="text-[10px] text-slate-500">C++20 & MySQL</span>
            </div>

            {/* Code snippets */}
            <div className="my-auto space-y-1.5 py-1 text-[10.5px] leading-snug">
              <div className="text-slate-400">
                <span className="text-purple-400">class</span> <span className="text-yellow-300">GraphicsCanvas</span> {'{'}
              </div>
              <div className="text-slate-400 pl-3">
                <span className="text-blue-400">std::vector</span>&lt;<span className="text-emerald-300">Shape*</span>&gt; elements;
              </div>
              <div className="text-slate-400 pl-3">
                <span className="text-purple-400">void</span> <span className="text-blue-300">renderBresenhamLine</span>(<span className="text-cyan-300">Point</span> a, <span className="text-cyan-300">Point</span> b);
              </div>
              <div className="text-slate-500 text-[10px] border-t border-slate-800/60 pt-1 mt-1">
                <span className="text-amber-400 font-semibold">SELECT</span> s.name, <span className="text-cyan-300">AVG</span>(e.grade) <span className="text-amber-400">FROM</span> students s <span className="text-amber-400">JOIN</span> enrollments e;
              </div>
            </div>

            <div className="bg-slate-900/90 rounded-md p-2 border border-slate-800 flex items-center justify-between text-[10px]">
              <span className="text-slate-400">Memory: <span className="text-emerald-300">O(1) Auxiliary</span></span>
              <span className="text-slate-400">Status: <span className="text-cyan-300">Compiled (0 errors)</span></span>
            </div>
          </div>
        )}
      </div>

      {/* Footer Pill Status */}
      <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <Database className="w-3.5 h-3.5 text-indigo-400" />
          <span className="text-[11px]">SQL + Pandas + C++ DSA</span>
        </div>
        <div className="font-mono text-[10px] text-slate-500">
          cycle #{pulseCount}
        </div>
      </div>
    </div>
  );
};
