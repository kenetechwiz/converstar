import React, { useState, useEffect } from 'react';
import { PageId } from '../../types';
import { WIDGET_THEMES } from '../../data/saasContent';
import {
  Users,
  Star,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  ArrowRight,
  ShieldCheck,
  Palette,
  Eye,
  RotateCw,
  ShoppingBag,
  Zap,
  Flame,
  Check
} from 'lucide-react';

interface SocialProofPageProps {
  onNavigate: (page: PageId) => void;
  onOpenTrial: () => void;
}

export const SocialProofPage: React.FC<SocialProofPageProps> = ({ onNavigate, onOpenTrial }) => {
  const [activeTheme, setActiveTheme] = useState(WIDGET_THEMES[0]);
  const [liveCounter, setLiveCounter] = useState(1428);
  const [stockRemaining, setStockRemaining] = useState(7);
  const [activeCartCount, setActiveCartCount] = useState(42);

  // Live count-up dynamic simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveCounter((prev) => prev + Math.floor(Math.random() * 3) - 1);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-28 pb-20 bg-[#0D1F23] text-white">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF6131]/15 border border-[#FF6131]/30 text-[#FF6131] text-xs font-bold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5" /> Feature Deep-Dive: Pillar 01
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Social Proof & Urgency:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6131] to-[#FF8E69]">
              Engineer Undeniable Buying Pressure
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
            Turn passive browsers into active buyers by triggering the most powerful psychological drivers in marketing: FOMO and Social Proof. Converstar's advanced visual engine proves your product is in high demand, forcing visitors to act before they miss out.
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

        {/* Feature Section 1: The Anatomy of High-Converting Social Proof & Infinite Widget Rotation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 pb-16 border-b border-white/10">
          <div className="space-y-6">
            <span className="text-xs font-bold text-[#FF6131] uppercase tracking-wider">
              The "Endless Loop" of FOMO
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-snug">
              Infinite Widget Rotation: Never Show a Static Page Again
            </h2>
            <p className="text-slate-300 leading-relaxed">
              When a visitor lands on your site, they are naturally skeptical. They don’t want to be the only person buying your product. Converstar eliminates that hesitation by visually proving that other people are purchasing, reviewing, and engaging with your brand in real-time.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Standard pop-ups show a single notification and disappear. Converstar does the exact opposite. Our Infinite Widget Rotation continuously loops your latest conversions, opt-ins, and 5-star reviews on the screen. Instead of a static webpage, your visitors experience a hypnotic, never-ending stream of real-time buyer activity.
            </p>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-slate-300 space-y-2">
              <div className="flex items-center gap-2 text-white font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Anti-Fatigue Loop Logic:</span>
              </div>
              <p className="text-slate-400">
                Smoothly staggers display frequencies, ensures zero layout shifts (CLS safe), and remembers dismissed items for repeat visits.
              </p>
            </div>
          </div>

          {/* Interactive Live Infinite Widget Loop Preview */}
          <div className="p-8 rounded-3xl glass-panel-glow border border-white/15 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-xs font-bold text-white flex items-center gap-2">
                <RotateCw className="w-3.5 h-3.5 text-[#FF6131] animate-spin" />
                Live Widget Stream Simulation
              </span>
              <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-semibold">
                Active Loop
              </span>
            </div>

            <div className="space-y-3">
              {/* Notification Card 1 */}
              <div className="p-4 rounded-2xl bg-[#12262B] border border-[#FF6131]/30 shadow-lg flex items-center gap-3.5 animate-in slide-in-from-bottom duration-300">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                  alt="Buyer"
                  className="w-11 h-11 rounded-full object-cover border-2 border-[#FF6131]"
                  referrerPolicy="no-referrer"
                />
                <div className="flex-1">
                  <div className="text-xs font-bold text-white">Sarah from Texas</div>
                  <div className="text-[11px] text-slate-300">Just purchased the Ultimate Bundle</div>
                  <div className="text-[10px] text-[#FF6131] font-semibold mt-0.5">14s ago • Verified Buyer</div>
                </div>
              </div>

              {/* Notification Card 2 */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3.5">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                  alt="Buyer"
                  className="w-11 h-11 rounded-full object-cover border-2 border-indigo-400"
                  referrerPolicy="no-referrer"
                />
                <div className="flex-1">
                  <div className="text-xs font-bold text-white">Mark from London</div>
                  <div className="text-[11px] text-slate-300">Just bought 2 items (Express Checkout)</div>
                  <div className="text-[10px] text-indigo-400 font-semibold mt-0.5">38s ago • Verified Order</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Section 2: Dynamic Live Counters & Demand You Can Actually See */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 pb-16 border-b border-white/10">
          
          {/* Interactive Counter Showcase Box */}
          <div className="p-8 rounded-3xl glass-panel-glow border border-white/15 space-y-6 order-2 lg:order-1">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-xs font-bold text-white flex items-center gap-2">
                <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                Real-Time Smooth-Scroll Count-Up
              </span>
              <span className="text-[11px] font-mono text-slate-400">FPS: 60 (Hardware Accelerated)</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-[#091518] border border-white/10 space-y-1">
                <span className="text-xs text-slate-400">Live Active On-Page Visitors</span>
                <div className="text-3xl font-extrabold text-emerald-400 font-mono flex items-center gap-2">
                  {liveCounter.toLocaleString()}
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                </div>
                <p className="text-[10px] text-slate-400">Ticks up dynamically</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#091518] border border-white/10 space-y-1">
                <span className="text-xs text-slate-400">Limited Stock Remaining</span>
                <div className="text-3xl font-extrabold text-[#FF6131] font-mono">
                  {stockRemaining} left in stock
                </div>
                <p className="text-[10px] text-red-400 font-semibold">High Urgency Trigger</p>
              </div>
            </div>

            {/* Inline Review Preview alongside 'Add to Cart' */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-300">Inline Trust Component Placement:</span>
                <div className="flex items-center gap-1 text-amber-400 text-xs font-bold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" />
                  ))}
                  <span className="text-white ml-1">4.9 / 5 (840+ reviews)</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button className="flex-1 py-3 rounded-xl bg-[#FF6131] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#FF6131]/30">
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add To Cart ($79.00)</span>
                </button>
                <div className="p-2.5 rounded-xl bg-white/10 text-slate-300 text-xs text-center">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 mx-auto" />
                  <span className="text-[9px]">30-Day Guarantee</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 order-1 lg:order-2">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
              Dynamic Live Counters & Inline Reviews
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-snug">
              Demand They Can Actually See — Shatter Skepticism Instantly
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Static numbers blend into the background. Movement forces the human eye to pay attention. Our Live Counters and Conversion Counters feature smooth, dynamic count-up animations. Whether you are showing active visitors currently on the page, limited stock remaining, or the total number of items sold, the numbers physically tick up in real-time.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Don't hide your best testimonials on a separate page where no one will see them. Converstar allows you to embed real-time customer ratings and review summaries directly inline with your most critical page content, right next to your "Add to Cart" or "Sign Up" buttons.
            </p>
          </div>

        </div>

        {/* Feature Section 3: 29 Premium Themed Customizations */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <span className="text-xs font-bold text-[#FF6131] uppercase tracking-wider flex items-center justify-center gap-1.5">
              <Palette className="w-4 h-4" /> Visual Identity Customizer
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              29 Premium Themed Customizations: Brand-Perfect Aesthetics
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Social proof only builds trust if it looks highly professional. We’ve engineered 29 gorgeous design themes to ensure your widgets look like a native, premium extension of your brand—not a cheap add-on.
            </p>
          </div>

          {/* Interactive 29 Themes Gallery Picker */}
          <div className="p-8 rounded-3xl glass-panel-glow border border-white/15 space-y-8">
            <div className="flex flex-wrap items-center justify-center gap-2">
              {WIDGET_THEMES.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => setActiveTheme(theme)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                    activeTheme.id === theme.id
                      ? 'bg-[#FF6131] text-white shadow-lg shadow-[#FF6131]/30 scale-105'
                      : 'bg-white/5 text-slate-300 hover:bg-white/10'
                  }`}
                >
                  <span>{theme.name}</span>
                  {activeTheme.id === theme.id && <Check className="w-3.5 h-3.5" />}
                </button>
              ))}
            </div>

            {/* Theme Live Preview Sandbox Card */}
            <div className="max-w-md mx-auto">
              <div
                className={`p-5 rounded-2xl border shadow-2xl transition-all duration-300 ${activeTheme.bgClass} ${activeTheme.borderClass} ${activeTheme.textClass}`}
              >
                <div className="flex items-start gap-3">
                  <div className="w-11 h-11 rounded-full bg-[#FF6131]/20 border border-[#FF6131]/50 flex items-center justify-center text-[#FF6131]">
                    <Flame className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold">{activeTheme.name} Theme Active</h4>
                      <span className="text-[10px] opacity-75">Just now</span>
                    </div>
                    <p className="text-xs mt-1 opacity-90 leading-snug">
                      &quot;Alex just upgraded to Converstar Agency tier.&quot;
                    </p>
                    <div className="flex items-center justify-between mt-3 pt-2 border-t border-white/10 text-[10px]">
                      <span>Verified Telemetry</span>
                      <span className="font-bold">29 Themes Supported</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-center text-xs text-slate-400 mt-3">
                Current selected theme: <strong className="text-white">{activeTheme.name}</strong> ({activeTheme.category})
              </p>
            </div>
          </div>
        </div>

        {/* Page Closing Call to Action */}
        <div className="p-10 rounded-3xl glass-panel-glow border-2 border-[#FF6131]/30 text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Stop Telling Them Your Product is Great. Show Them.
          </h3>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Don't let your visitors guess if your product is popular. Prove it to them the second they land on your page, and watch your conversion rates soar.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenTrial}
              className="px-8 py-3.5 rounded-xl bg-[#FF6131] hover:bg-[#e05226] text-white font-bold text-sm shadow-lg shadow-[#FF6131]/30 flex items-center gap-2 cursor-pointer"
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
