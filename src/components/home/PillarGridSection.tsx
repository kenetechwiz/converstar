import React from 'react';
import { PageId } from '../../types';
import { FEATURE_PILLARS } from '../../data/saasContent';
import {
  Users,
  Target,
  MessageSquare,
  BarChart3,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Zap
} from 'lucide-react';

interface PillarGridSectionProps {
  onNavigate: (page: PageId) => void;
}

export const PillarGridSection: React.FC<PillarGridSectionProps> = ({ onNavigate }) => {
  const getPillarIcon = (id: string) => {
    switch (id) {
      case 'features-social-proof':
        return <Users className="w-6 h-6 text-[#FF6131]" />;
      case 'features-targeting':
        return <Target className="w-6 h-6 text-sky-400" />;
      case 'features-chat':
        return <MessageSquare className="w-6 h-6 text-emerald-400" />;
      case 'features-analytics':
        return <BarChart3 className="w-6 h-6 text-purple-400" />;
      default:
        return <Zap className="w-6 h-6 text-[#FF6131]" />;
    }
  };

  return (
    <section id="features-arsenal-grid" className="py-24 bg-[#0D1F23] relative">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF6131]/15 border border-[#FF6131]/30 text-[#FF6131] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> High-Speed Conversion Ecosystem
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            The Ultimate Arsenal to Force Conversions
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            We didn't just build a pop-up tool. We built a complete, high-speed ecosystem designed to squeeze every possible dollar out of the traffic you are already getting.
          </p>
        </div>

        {/* 4-Pillar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {FEATURE_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              id={`pillar-card-${pillar.id}`}
              className="p-6 sm:p-8 rounded-3xl glass-card relative group flex flex-col justify-between"
            >
              {/* Pillar Number & Badge */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getPillarIcon(pillar.id)}
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      PILLAR {pillar.pillarNum}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#FF6131] transition-colors">
                      {pillar.name}
                    </h3>
                  </div>
                </div>

                <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white/10 text-slate-300 border border-white/10">
                  {pillar.badge}
                </span>
              </div>

              {/* Tagline & Description */}
              <div className="space-y-3 mb-6">
                <h4 className="text-sm font-bold text-[#FF6131]">
                  {pillar.tagline}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* Feature Highlights Checklist */}
              <div className="space-y-2 mb-8 pt-4 border-t border-white/10">
                {pillar.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Deep-dive Link Button */}
              <button
                id={`explore-pillar-btn-${pillar.id}`}
                onClick={() => onNavigate(pillar.id as PageId)}
                className="w-full py-3 rounded-xl bg-white/5 hover:bg-[#FF6131] text-slate-200 hover:text-white font-bold text-xs sm:text-sm border border-white/10 hover:border-transparent transition-all flex items-center justify-center gap-2 group/btn cursor-pointer"
              >
                <span>Explore {pillar.name} In-Depth</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
