import React, { useState, useEffect } from 'react';
import { PageId } from '../../types';
import { HERO_COPY } from '../../data/saasContent';
import {
  Flame,
  ArrowRight,
  Sparkles,
  Zap,
  TrendingUp,
  Users,
  ShieldCheck,
  CheckCircle2,
  Play,
  RotateCw,
  Bell,
  Eye,
  MessageSquare,
  BarChart3,
  MousePointerClick
} from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (page: PageId) => void;
  onOpenTrial?: () => void;
  onOpenFreeTrial?: () => void;
  liveVisitorsCount?: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate,
  onOpenTrial,
  onOpenFreeTrial,
  liveVisitorsCount = 1428
}) => {
  const handleOpenTrial = onOpenTrial || onOpenFreeTrial || (() => {});
  const safeLiveCount = liveVisitorsCount ?? 1428;
  const [activeTab, setActiveTab] = useState<'loop' | 'triggers' | 'chat' | 'telemetry'>('loop');
  const [simulatedSalesCount, setSimulatedSalesCount] = useState(148);
  const [activeWidgetType, setActiveWidgetType] = useState('purchase');

  useEffect(() => {
    const interval = setInterval(() => {
      setSimulatedSalesCount((prev) => prev + Math.floor(Math.random() * 2) + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero-section"
      className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 overflow-hidden bg-radial-glow"
    >
      {/* Background Grid Pattern & Ambient Lights */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#FF6131]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Announcement Badge */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => onNavigate('features-social-proof')}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-200 transition-all hover:border-[#FF6131]/50 group"
          >
            <span className="flex h-2 w-2 rounded-full bg-[#FF6131] animate-pulse" />
            <span className="text-[#FF6131] font-bold">New v2.8 Engine:</span>
            <span>Infinite Widget Rotation & 29 Brand Themes</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#FF6131] group-hover:translate-x-0.5 transition-all" />
          </button>
        </div>

        {/* Hero Title & Subheadline */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1
            id="hero-headline"
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]"
          >
            Turn Bouncing Traffic Into{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6131] via-[#FF8E69] to-[#FFB095]">
              Paying Customers
            </span>{' '}
            on Autopilot
          </h1>

          <p
            id="hero-subheadline"
            className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed"
          >
            {HERO_COPY.subheadline}
          </p>

          {/* Dual Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              id="hero-cta-trial"
              onClick={handleOpenTrial}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-[#FF6131] to-[#FF7F59] text-white font-extrabold text-base shadow-xl shadow-[#FF6131]/30 hover:shadow-[#FF6131]/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer group"
            >
              <span>{HERO_COPY.ctaPrimary}</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              id="hero-cta-pricing"
              onClick={() => onNavigate('pricing')}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-bold text-base transition-all hover:border-white/30 cursor-pointer flex items-center justify-center gap-2"
            >
              <span>{HERO_COPY.ctaSecondary}</span>
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-3 text-xs text-slate-400 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#FF6131]" /> 1-Minute zero-code setup
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#FF6131]" /> No credit card required
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#FF6131]" /> 14-day risk-free trial
            </span>
          </div>
        </div>

        {/* Central Interactive SaaS Dashboard UI Mockup */}
        <div className="mt-12 sm:mt-16 max-w-5xl mx-auto">
          <div
            id="saas-dashboard-mockup"
            className="relative rounded-3xl p-1 bg-gradient-to-b from-white/20 via-white/5 to-transparent shadow-2xl"
          >
            <div className="rounded-[22px] bg-[#09171A] border border-white/10 overflow-hidden shadow-2xl">
              
              {/* Dashboard Browser Frame Bar */}
              <div className="px-4 py-3 bg-[#0D1F23] border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs text-slate-400 font-mono ml-2 hidden sm:inline">
                    https://app.converstar.com/live-control-center
                  </span>
                </div>

                {/* Interactive Feature Simulator Tabs */}
                <div className="flex items-center gap-1 bg-black/40 p-1 rounded-xl border border-white/10 text-xs">
                  <button
                    onClick={() => setActiveTab('loop')}
                    className={`px-3 py-1 rounded-lg font-semibold transition-all ${
                      activeTab === 'loop' ? 'bg-[#FF6131] text-white shadow-md' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Social Loop
                  </button>
                  <button
                    onClick={() => setActiveTab('triggers')}
                    className={`px-3 py-1 rounded-lg font-semibold transition-all ${
                      activeTab === 'triggers' ? 'bg-[#FF6131] text-white shadow-md' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Sniper Triggers
                  </button>
                  <button
                    onClick={() => setActiveTab('chat')}
                    className={`px-3 py-1 rounded-lg font-semibold transition-all ${
                      activeTab === 'chat' ? 'bg-[#FF6131] text-white shadow-md' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Direct Chat
                  </button>
                  <button
                    onClick={() => setActiveTab('telemetry')}
                    className={`px-3 py-1 rounded-lg font-semibold transition-all ${
                      activeTab === 'telemetry' ? 'bg-[#FF6131] text-white shadow-md' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Live Telemetry
                  </button>
                </div>
              </div>

              {/* Dashboard Inner Body */}
              <div className="p-5 sm:p-8 space-y-6">
                
                {/* Metric Summary Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span>Live Active Visitors</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                      {safeLiveCount.toLocaleString()}
                    </div>
                    <div className="text-[11px] text-emerald-400 flex items-center gap-1 font-semibold">
                      <TrendingUp className="w-3 h-3" /> +34.8% vs normal baseline
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                    <div className="text-xs text-slate-400">Recovered Cart Sales</div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-[#FF6131] font-mono">
                      ${(simulatedSalesCount * 79).toLocaleString()}
                    </div>
                    <div className="text-[11px] text-emerald-400 font-semibold">
                      {simulatedSalesCount} orders saved today
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                    <div className="text-xs text-slate-400">Exit-Intent Save Rate</div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-sky-400 font-mono">
                      24.7%
                    </div>
                    <div className="text-[11px] text-slate-400">
                      1 in 4 bouncing visitors retained
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                    <div className="text-xs text-slate-400">Avg. Response Time</div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-purple-400 font-mono">
                      &lt; 0.8s
                    </div>
                    <div className="text-[11px] text-slate-400">
                      Zero-latency CDN delivery
                    </div>
                  </div>
                </div>

                {/* Interactive Simulated Preview Canvas inside Dashboard */}
                <div className="relative rounded-2xl bg-[#0D1F23] border border-white/10 p-6 sm:p-8 min-h-[260px] flex flex-col justify-between overflow-hidden">
                  
                  {/* Subtle watermarked label */}
                  <div className="flex items-center justify-between text-xs text-slate-400 pb-4 border-b border-white/10">
                    <span className="font-semibold text-white flex items-center gap-2">
                      <Zap className="w-4 h-4 text-[#FF6131]" />
                      Interactive Widget Playground Simulator
                    </span>
                    <span className="text-[11px] bg-white/10 px-2.5 py-1 rounded-full text-slate-300">
                      Simulating Active E-Commerce Store & SaaS Funnel
                    </span>
                  </div>

                  {/* Interactive Dynamic Simulation View based on activeTab */}
                  <div className="my-6">
                    {activeTab === 'loop' && (
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                        <div className="space-y-2 max-w-md">
                          <span className="text-xs font-bold text-[#FF6131] uppercase tracking-wider">
                            Endless FOMO Loop
                          </span>
                          <h3 className="text-xl font-bold text-white">
                            Continuous Buying Pressure Without Being Obnoxious
                          </h3>
                          <p className="text-xs text-slate-300 leading-relaxed">
                            Watch how our infinite rotation cycles verified purchases, ratings, and live active counters in real-time.
                          </p>
                        </div>

                        {/* Interactive Widget Box */}
                        <div className="w-full sm:w-80 p-4 rounded-2xl bg-[#12262B] border border-[#FF6131]/40 shadow-xl shadow-[#FF6131]/10 space-y-2 transform hover:scale-105 transition-transform">
                          <div className="flex items-center gap-3">
                            <img
                              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                              alt="Buyer"
                              className="w-10 h-10 rounded-full object-cover border border-[#FF6131]"
                              referrerPolicy="no-referrer"
                            />
                            <div>
                              <div className="text-xs font-bold text-white">Sarah M. from Texas</div>
                              <div className="text-[11px] text-slate-300">Just bought Ultimate SaaS Bundle</div>
                              <div className="text-[10px] text-[#FF6131] font-semibold">12 seconds ago • Verified Buyer</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === 'triggers' && (
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                        <div className="space-y-2 max-w-md">
                          <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">
                            Target Element Visibility & Exit-Intent
                          </span>
                          <h3 className="text-xl font-bold text-white">
                            Sniper-Level Microsecond Offer Triggers
                          </h3>
                          <p className="text-xs text-slate-300 leading-relaxed">
                            Triggers fire only when visitors hesitate at pricing buttons or move their cursor upward to close the browser tab.
                          </p>
                        </div>

                        <div className="w-full sm:w-80 p-4 rounded-2xl bg-sky-950/40 border border-sky-500/40 text-left space-y-2">
                          <div className="text-xs font-bold text-sky-400 flex items-center gap-1.5">
                            <MousePointerClick className="w-4 h-4" /> Exit-Intent Trigger Detected
                          </div>
                          <div className="text-sm font-extrabold text-white">
                            &quot;Wait! Unlock 15% Off Your First Month&quot;
                          </div>
                          <div className="text-[11px] text-slate-300">
                            Auto-translated to user&apos;s browser language in 4ms.
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === 'chat' && (
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                        <div className="space-y-2 max-w-md">
                          <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                            Multi-Channel Instant Closers
                          </span>
                          <h3 className="text-xl font-bold text-white">
                            Close Objections While The Wallet is on the Desk
                          </h3>
                          <p className="text-xs text-slate-300 leading-relaxed">
                            Deploy 1-click WhatsApp, Telegram, and 98% open-rate SMS lead capture prompts on key conversion pages.
                          </p>
                        </div>

                        <div className="w-full sm:w-80 p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-left space-y-2">
                          <div className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                            <MessageSquare className="w-4 h-4" /> Live WhatsApp Closing Prompt
                          </div>
                          <div className="text-xs text-white">
                            &quot;Have a question about enterprise integrations? Chat with our CRO architect right now.&quot;
                          </div>
                          <div className="text-[10px] text-emerald-300 font-mono">
                            98% open rate with 66text SMS webhook
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === 'telemetry' && (
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                        <div className="space-y-2 max-w-md">
                          <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">
                            Real-Time Global Telemetry
                          </span>
                          <h3 className="text-xl font-bold text-white">
                            Pinpoint High-Intent Visitors Worldwide
                          </h3>
                          <p className="text-xs text-slate-300 leading-relaxed">
                            Watch live visitor pins pulse on interactive global maps with campaign-level ROI and button click heatmaps.
                          </p>
                        </div>

                        <div className="w-full sm:w-80 p-4 rounded-2xl bg-purple-950/40 border border-purple-500/40 text-left space-y-2">
                          <div className="text-xs font-bold text-purple-400 flex items-center gap-1.5">
                            <BarChart3 className="w-4 h-4" /> Live Top Performing URL
                          </div>
                          <div className="text-xs font-mono text-white truncate">
                            /pricing?tier=pro_annual
                          </div>
                          <div className="text-[11px] text-purple-200">
                            Conversion Rate: <strong className="text-white font-bold">6.8%</strong> (2.4x over baseline)
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Dashboard Bottom CTA Bar */}
                  <div className="flex flex-col sm:flex-row items-center justify-between pt-4 border-t border-white/10 gap-3">
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <span className="w-2 h-2 rounded-full bg-[#FF6131]" />
                      <span>Ready to see this on your own live site?</span>
                    </div>
                    <button
                      onClick={handleOpenTrial}
                      className="px-4 py-2 rounded-xl bg-[#FF6131] hover:bg-[#e05226] text-white text-xs font-bold flex items-center gap-1.5 shadow-md shadow-[#FF6131]/20 transition-all cursor-pointer"
                    >
                      <span>Embed on My Site in 60s</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
