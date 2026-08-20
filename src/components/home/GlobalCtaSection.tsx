import React from 'react';
import {
  Flame,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Lock
} from 'lucide-react';

interface GlobalCtaSectionProps {
  onOpenTrial: () => void;
}

export const GlobalCtaSection: React.FC<GlobalCtaSectionProps> = ({ onOpenTrial }) => {
  return (
    <section id="global-cta-section" className="py-24 bg-[#0D1F23] relative overflow-hidden">
      
      {/* Background glowing gradient sphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-[#FF6131]/20 to-[#FF8E69]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-14 rounded-3xl glass-panel-glow border-2 border-[#FF6131]/40 text-center space-y-8 shadow-2xl relative overflow-hidden">
          
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#FF6131] to-[#FF8E69] p-0.5 mx-auto shadow-xl shadow-[#FF6131]/40">
            <div className="w-full h-full bg-[#0D1F23] rounded-[14px] flex items-center justify-center">
              <Flame className="w-7 h-7 text-[#FF6131]" />
            </div>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Stop Leaving Your Money on the Table
            </h2>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-normal">
              If Converstar recovers just one lost customer who was about to click the &quot;back&quot; button and leave your site forever, the software has completely paid for itself. Every sale it saves after that is pure, automated profit.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              id="global-cta-trial-btn"
              onClick={onOpenTrial}
              className="w-full sm:w-auto px-10 py-4 rounded-2xl bg-gradient-to-r from-[#FF6131] to-[#FF7F59] text-white font-extrabold text-base shadow-xl shadow-[#FF6131]/30 hover:shadow-[#FF6131]/50 hover:scale-[1.03] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer group"
            >
              <span>Plug the Leak Today — Start Your Free Trial</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> 14-Day Full Feature Free Trial
            </span>
            <span className="flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-emerald-400" /> Cancel anytime with 1 click
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Works on any web platform
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};
