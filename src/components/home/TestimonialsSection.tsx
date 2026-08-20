import React from 'react';
import { TESTIMONIALS } from '../../data/saasContent';
import {
  Star,
  Quote,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Sparkles
} from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="social-proof-testimonials" className="py-24 bg-[#0D1F23] relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#FF6131]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF6131]/15 border border-[#FF6131]/30 text-[#FF6131] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Proven Results
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Don't Take Our Word For It
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            See how top marketers, 7-figure solopreneurs, and high-growth SaaS founders turn cold bounces into measurable profit on autopilot.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <div
              key={index}
              id={`testimonial-card-${index}`}
              className="p-8 rounded-3xl glass-card flex flex-col justify-between relative group hover:border-[#FF6131]/40"
            >
              <div className="space-y-4">
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Highlight Metric Pill */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#FF6131]/15 border border-[#FF6131]/30 text-[#FF6131] text-xs font-bold font-mono">
                  <TrendingUp className="w-3.5 h-3.5" />
                  {t.highlightMetric}
                </div>

                {/* Headline & Quote */}
                <h3 className="text-lg font-bold text-white">
                  &quot;{t.headline}&quot;
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  &quot;{t.quote}&quot;
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-6 mt-6 border-t border-white/10">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#FF6131]/50"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="text-sm font-bold text-white flex items-center gap-1.5">
                    <span>{t.author}</span>
                    <ShieldCheck className="w-4 h-4 text-emerald-400" title="Verified Customer" />
                  </div>
                  <div className="text-xs text-slate-400">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Live Stats Banner */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#FF6131] font-mono">$18.4M+</div>
            <div className="text-xs text-slate-400 mt-1">Abandoned Cart Sales Recovered</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">1.2B+</div>
            <div className="text-xs text-slate-400 mt-1">Monthly Micro-Interactions Fired</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-sky-400 font-mono">3.2x</div>
            <div className="text-xs text-slate-400 mt-1">Average Conversion Rate Lift</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">99.99%</div>
            <div className="text-xs text-slate-400 mt-1">High-Speed Cloud Uptime SLA</div>
          </div>
        </div>

      </div>
    </section>
  );
};
