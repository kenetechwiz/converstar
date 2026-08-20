import React, { useState } from 'react';
import { AGITATION_COPY } from '../../data/saasContent';
import {
  AlertTriangle,
  TrendingDown,
  TrendingUp,
  DollarSign,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Zap,
  Activity
} from 'lucide-react';

interface AgitationSectionProps {
  onOpenTrial: () => void;
}

export const AgitationSection: React.FC<AgitationSectionProps> = ({ onOpenTrial }) => {
  // Interactive Traffic Leak Calculator
  const [monthlyVisitors, setMonthlyVisitors] = useState(25000);
  const [avgOrderValue, setAvgOrderValue] = useState(75);

  // Math: 98.4% bounce rate -> only 1.6% converts.
  // With Converstar recovery -> additional ~2.8% conversion lift.
  const unoptimizedConversions = Math.round(monthlyVisitors * 0.016);
  const baselineRevenue = unoptimizedConversions * avgOrderValue;
  const recoveredSales = Math.round(monthlyVisitors * 0.028);
  const recoveredRevenue = recoveredSales * avgOrderValue;
  const annualSavedMoney = recoveredRevenue * 12;

  return (
    <section id="agitation-banner" className="py-20 bg-[#091619] relative border-y border-white/5 overflow-hidden">
      
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#FF6131]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Agitation Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-500/15 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider">
            <AlertTriangle className="w-4 h-4" />
            <span>{AGITATION_COPY.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            You Are <span className="text-red-400 underline decoration-[#FF6131] decoration-wavy decoration-2">Bleeding Money</span>{' '}
            (And You Don't Even Know It)
          </h2>

          <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed pt-2">
            <p>{AGITATION_COPY.paragraphs[0]}</p>
            <p className="font-bold text-white text-lg sm:text-xl">
              {AGITATION_COPY.paragraphs[1]}
            </p>
            <p className="text-slate-300">{AGITATION_COPY.paragraphs[2]}</p>
          </div>
        </div>

        {/* Interactive Traffic Leak vs. Recovered Revenue Calculator */}
        <div className="max-w-4xl mx-auto rounded-3xl p-6 sm:p-10 glass-panel-glow border border-white/15 shadow-2xl">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-8 border-b border-white/10">
            <div>
              <span className="text-xs font-bold text-[#FF6131] uppercase tracking-wider flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5" /> Interactive ROI Calculator
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">
                Calculate Your Monthly Lost Revenue & Recovery Potential
              </h3>
            </div>
            <span className="text-xs text-slate-400">Live ROI simulation</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
            
            {/* Sliders Form */}
            <div className="space-y-6">
              
              {/* Monthly Visitors Slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm font-semibold">
                  <span className="text-slate-300">Monthly Website Visitors:</span>
                  <span className="text-[#FF6131] font-mono font-bold text-base">
                    {monthlyVisitors.toLocaleString()} visitors
                  </span>
                </div>
                <input
                  type="range"
                  min="2000"
                  max="200000"
                  step="1000"
                  value={monthlyVisitors}
                  onChange={(e) => setMonthlyVisitors(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#FF6131]"
                />
                <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                  <span>2k</span>
                  <span>50k</span>
                  <span>100k</span>
                  <span>200k+</span>
                </div>
              </div>

              {/* Average Order / Subscription Value */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm font-semibold">
                  <span className="text-slate-300">Average Order / Monthly SaaS Value:</span>
                  <span className="text-[#FF6131] font-mono font-bold text-base">
                    ${avgOrderValue}
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="500"
                  step="5"
                  value={avgOrderValue}
                  onChange={(e) => setAvgOrderValue(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#FF6131]"
                />
                <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                  <span>$10</span>
                  <span>$150</span>
                  <span>$300</span>
                  <span>$500+</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-slate-300 space-y-1">
                <div className="text-white font-semibold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  How Converstar Stops The Leak:
                </div>
                <p className="text-slate-400 text-[11px]">
                  By triggering exit-intent cart overlays, infinite live purchases, and direct WhatsApp / SMS prompts at microsecond friction points, Converstar recovers 2.8% to 4.2% of otherwise lost bouncing traffic.
                </p>
              </div>

            </div>

            {/* Results Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0D1F23] border border-[#FF6131]/30 flex flex-col justify-between space-y-6 shadow-xl">
              
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="text-xs text-slate-400">Estimated Unrecovered Bounce Loss:</div>
                  <div className="text-sm font-mono font-bold text-red-400 flex items-center gap-1">
                    <TrendingDown className="w-4 h-4" />
                    -${Math.round((monthlyVisitors * 0.984 * avgOrderValue * 0.05)).toLocaleString()} / mo
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Automated Recovered Revenue With Converstar
                  </span>
                  <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6131] to-[#FF9E80] font-mono">
                    +${recoveredRevenue.toLocaleString()} <span className="text-sm text-slate-400 font-sans">/ month</span>
                  </div>
                  <p className="text-xs text-emerald-400 font-medium">
                    = +${annualSavedMoney.toLocaleString()} in net-new annual profit
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <button
                  onClick={onOpenTrial}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#FF6131] to-[#FF7F59] text-white font-bold text-sm shadow-lg shadow-[#FF6131]/25 hover:shadow-[#FF6131]/40 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Plug The Leak — Start Free Trial</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="text-center text-[10px] text-slate-400 mt-2">
                  Software pays for itself in your first 24 hours of traffic
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
