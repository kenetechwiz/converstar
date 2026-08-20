import React, { useState } from 'react';
import { PageId } from '../../types';
import { GLOBAL_ANALYTICS_METRICS } from '../../data/saasContent';
import {
  BarChart3,
  Globe,
  TrendingUp,
  MousePointer,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Filter,
  Eye,
  Activity,
  Layers,
  Calendar,
  Compass
} from 'lucide-react';

interface AnalyticsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenTrial: () => void;
}

export const AnalyticsPage: React.FC<AnalyticsPageProps> = ({ onNavigate, onOpenTrial }) => {
  const [selectedCountry, setSelectedCountry] = useState(GLOBAL_ANALYTICS_METRICS[0]);
  const [timeRange, setTimeRange] = useState<'24h' | '7d' | '30d'>('24h');

  return (
    <div className="pt-28 pb-20 bg-[#0D1F23] text-white">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-400 text-xs font-bold uppercase tracking-wider">
            <BarChart3 className="w-3.5 h-3.5" /> Feature Deep-Dive: Pillar 04
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Analytics & Tracking:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">
              Stop Guessing, Start Scaling: Analytics That Drive Decisions
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
            Turn raw data into actionable insights. Converstar’s comprehensive analytics suite provides crystal-clear visibility into how visitors interact with your campaigns, empowering you to optimize your conversion strategy with absolute precision.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenTrial}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-[#FF6131] to-[#FF7F59] text-white font-bold text-base shadow-xl shadow-[#FF6131]/30 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Start Your Free Trial Now</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => onNavigate('pricing')}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-bold text-base transition-all"
            >
              <span>View Pricing Plans</span>
            </button>
          </div>
        </div>

        {/* Feature 1: Interactive Real-Time Maps */}
        <div className="mb-24 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">
                Precision Tracking for Measurable Growth
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Interactive Real-Time Maps: Visualize Your Global Reach
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                See your website traffic come to life. Our interactive mapping feature provides a real-time, visual breakdown of exactly where your active visitors are located across the globe.
              </p>
            </div>

            <div className="flex items-center gap-2 bg-black/40 p-1 rounded-xl border border-white/10 text-xs">
              <button
                onClick={() => setTimeRange('24h')}
                className={`px-3 py-1.5 rounded-lg font-semibold ${timeRange === '24h' ? 'bg-[#FF6131] text-white' : 'text-slate-400'}`}
              >
                Live 24h
              </button>
              <button
                onClick={() => setTimeRange('7d')}
                className={`px-3 py-1.5 rounded-lg font-semibold ${timeRange === '7d' ? 'bg-[#FF6131] text-white' : 'text-slate-400'}`}
              >
                7 Days
              </button>
              <button
                onClick={() => setTimeRange('30d')}
                className={`px-3 py-1.5 rounded-lg font-semibold ${timeRange === '30d' ? 'bg-[#FF6131] text-white' : 'text-slate-400'}`}
              >
                30 Days
              </button>
            </div>
          </div>

          {/* Map Simulation Board */}
          <div className="p-6 sm:p-8 rounded-3xl glass-panel-glow border border-white/15 space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* World Coordinates Visual Mockup */}
              <div className="lg:col-span-2 relative min-h-[320px] rounded-2xl bg-[#091518] border border-white/10 p-6 flex flex-col justify-between overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-30" />
                
                <div className="flex items-center justify-between text-xs text-slate-400 relative z-10">
                  <span className="flex items-center gap-1.5 text-white font-bold">
                    <Compass className="w-4 h-4 text-purple-400" /> Global Visitor Heatmap
                  </span>
                  <span className="flex items-center gap-1 text-emerald-400 font-mono">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    4,380 Active Live Nodes
                  </span>
                </div>

                {/* Country Pins Grid */}
                <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
                  {GLOBAL_ANALYTICS_METRICS.slice(0, 4).map((c) => (
                    <button
                      key={c.code}
                      onClick={() => setSelectedCountry(c)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        selectedCountry.code === c.code
                          ? 'border-[#FF6131] bg-[#FF6131]/15 text-white shadow-lg'
                          : 'border-white/10 bg-white/5 text-slate-300 hover:bg-white/10'
                      }`}
                    >
                      <div className="text-lg mb-1">{c.flag}</div>
                      <div className="text-xs font-bold truncate">{c.country}</div>
                      <div className="text-[11px] font-mono text-[#FF6131] font-bold">
                        {c.activeVisitors.toLocaleString()} online
                      </div>
                      <div className="text-[10px] text-emerald-400 font-semibold">
                        {c.conversionRate}% CVR
                      </div>
                    </button>
                  ))}
                </div>

                <div className="relative z-10 flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-white/10">
                  <span>Selected Node: <strong className="text-white">{selectedCountry.country} ({selectedCountry.code})</strong></span>
                  <span className="text-[#FF6131] font-bold">Geographic AI routing active</span>
                </div>
              </div>

              {/* Campaign Stats Card */}
              <div className="p-6 rounded-2xl bg-[#091518] border border-white/10 space-y-4 flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white mb-1 flex items-center gap-2">
                    <Activity className="w-4 h-4 text-[#FF6131]" />
                    Precision ROI Breakdown
                  </h4>
                  <p className="text-xs text-slate-400">
                    Down to the individual widget and button click.
                  </p>
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span className="text-slate-300">Infinite Social Proof Loop:</span>
                      <span className="text-[#FF6131] font-mono font-bold">4.8% CVR</span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="w-[78%] h-full bg-[#FF6131]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span className="text-slate-300">Exit-Intent Cart Rescue:</span>
                      <span className="text-sky-400 font-mono font-bold">24.2% Saved</span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="w-[85%] h-full bg-sky-400" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span className="text-slate-300">Direct WhatsApp Closer:</span>
                      <span className="text-emerald-400 font-mono font-bold">18.6% Closes</span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="w-[68%] h-full bg-emerald-400" />
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/5 text-[11px] text-slate-300">
                  Total revenue generated this month: <strong className="text-white font-mono text-sm ml-1">$142,800.00</strong>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Feature 2: Top Pages Insights & Custom Button Tracking */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 pb-16 border-b border-white/10">
          <div className="space-y-6">
            <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">
              Top Pages Insights & Custom Button Tracking
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-snug">
              Pinpoint High-Intent Traffic & Measure Every Single CTA
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Not all pages on your website hold the same value. Our Top Pages Insights identify exactly where your visitors are spending the most time and demonstrating the highest buying intent.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Go beyond basic pageviews and bounce rates. Converstar allows you to track highly specific, granular actions across your entire website: measure clicks on an &quot;Add to Cart&quot; button, a &quot;Download PDF&quot; link, or a specific pricing tier selection.
            </p>
          </div>

          {/* Top Pages Table Preview */}
          <div className="p-6 sm:p-8 rounded-3xl glass-panel-glow border border-white/15 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-bold text-white">
              <span>Top High-Intent URLs</span>
              <span className="text-slate-400">Conversion Rate</span>
            </div>

            <div className="space-y-2">
              {[
                { path: '/pricing', visitors: '14,290 visits', cvr: '6.4%', boost: '+4.2%' },
                { path: '/checkout/step-2', visitors: '8,420 visits', cvr: '28.6%', boost: '+11.8%' },
                { path: '/features/social-proof', visitors: '6,100 visits', cvr: '9.2%', boost: '+5.1%' },
                { path: '/solutions/ecommerce', visitors: '4,800 visits', cvr: '7.8%', boost: '+3.9%' }
              ].map((row, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-mono font-bold text-white">{row.path}</div>
                    <div className="text-[10px] text-slate-400">{row.visitors}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono font-bold text-[#FF6131]">{row.cvr}</div>
                    <div className="text-[10px] text-emerald-400 font-semibold">{row.boost}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Page Bottom CTA */}
        <div className="p-10 rounded-3xl glass-panel-glow border-2 border-purple-500/30 text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Data-Driven Conversions Are Just a Click Away
          </h3>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Gain the clarity you need to scale your digital presence intelligently. Track, measure, and optimize your entire conversion funnel from one clean, lightning-fast dashboard.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenTrial}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#FF6131] to-[#FF7F59] text-white font-bold text-sm shadow-lg shadow-[#FF6131]/30 flex items-center gap-2 cursor-pointer"
            >
              <span>Start Your Free Trial Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('pricing')}
              className="px-8 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-bold text-sm"
            >
              <span>View Pricing Plans</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
