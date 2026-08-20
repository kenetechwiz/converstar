import React, { useState } from 'react';
import { PageId } from '../../types';
import {
  Target,
  MousePointerClick,
  Globe,
  Layers,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Sliders,
  Languages,
  Zap,
  Activity,
  Code2
} from 'lucide-react';

interface TargetingTriggersPageProps {
  onNavigate: (page: PageId) => void;
  onOpenTrial: () => void;
}

export const TargetingTriggersPage: React.FC<TargetingTriggersPageProps> = ({
  onNavigate,
  onOpenTrial
}) => {
  const [selectedLanguage, setSelectedLanguage] = useState<'en' | 'es' | 'de' | 'fr' | 'ja'>('en');
  const [scrollDepth, setScrollDepth] = useState(65);
  const [activeSelector, setActiveSelector] = useState('#pricing-checkout-btn');

  const translations = {
    en: {
      headline: "Wait! Unlock 15% Off Today",
      sub: "Don't leave empty-handed. Redeem your exclusive instant discount code.",
      cta: "Claim 15% Discount"
    },
    es: {
      headline: "¡Espera! Desbloquea 15% De Descuento Hoy",
      sub: "No te vayas con las manos vacías. Canjea tu código de descuento exclusivo.",
      cta: "Reclamar 15% De Descuento"
    },
    de: {
      headline: "Warten Sie! 15% Rabatt freischalten",
      sub: "Gehen Sie nicht mit leeren Händen. Lösen Sie Ihren Gutscheincode ein.",
      cta: "15% Rabatt anfordern"
    },
    fr: {
      headline: "Attendez ! Débloquez 15% De Réduction",
      sub: "Ne partez pas les mains vides. Profitez de votre remise instantanée.",
      cta: "Réclamer 15% De Réduction"
    },
    ja: {
      headline: "お待ちください！今すぐ15%割引を解除",
      sub: "手ぶらで帰らないでください。限定の即時割引コードを引き換えてください。",
      cta: "15%割引を受け取る"
    }
  };

  return (
    <div className="pt-28 pb-20 bg-[#0D1F23] text-white">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/15 border border-sky-500/30 text-sky-400 text-xs font-bold uppercase tracking-wider">
            <Target className="w-3.5 h-3.5" /> Feature Deep-Dive: Pillar 02
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Targeting & Triggers:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-300 to-indigo-300">
              Fire the Right Offer at the Exact Right Microsecond
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
            Timing is everything in sales. A pop-up that appears too early is annoying, but one that appears too late is useless. Converstar replaces guesswork with sniper-like precision, deploying your conversion triggers at the exact moment your visitor is most primed to take action.
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

        {/* Feature 1: Target Element Visibility: Sniper-Level Precision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 pb-16 border-b border-white/10">
          <div className="space-y-6">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">
              Stop Guessing. Start Targeting.
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-snug">
              Target Element Visibility: Sniper-Level Precision
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Say goodbye to random time delays. You can now set your campaigns to trigger the exact microsecond a visitor scrolls to a specific element or section on your webpage.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Want to trigger a special discount only when someone looks at your pricing table? Want to fire a 5-star review widget exactly when they hover near the &quot;Add to Cart&quot; button? By targeting specific CSS selectors, you deliver the perfect nudge at the exact moment of decision, drastically increasing your conversion rates.
            </p>

            <div className="space-y-2 pt-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Supports any CSS selector (e.g. <code>#checkout-form</code>, <code>.pricing-tier-card</code>)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>IntersectionObserver API with zero-repaint lag</span>
              </div>
            </div>
          </div>

          {/* Interactive CSS Selector Simulator */}
          <div className="p-8 rounded-3xl glass-panel-glow border border-white/15 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-xs font-bold text-white flex items-center gap-2">
                <Code2 className="w-3.5 h-3.5 text-sky-400" />
                CSS Target Selector Engine
              </span>
              <span className="text-[11px] font-mono text-emerald-400">Trigger Armed</span>
            </div>

            <div className="space-y-3">
              <label className="block text-xs font-semibold text-slate-300">
                Choose Target Trigger Element:
              </label>
              <div className="space-y-2">
                {[
                  { selector: '#pricing-checkout-btn', label: 'Pricing Table Checkout Button', trigger: 'Hover or 2s view' },
                  { selector: '.cart-drawer-total', label: 'Cart Drawer Subtotal Section', trigger: 'Instant scroll into view' },
                  { selector: '#sign-up-email-input', label: 'Signup Form Email Input Field', trigger: 'On field focus' }
                ].map((item) => (
                  <button
                    key={item.selector}
                    onClick={() => setActiveSelector(item.selector)}
                    className={`w-full p-3 rounded-xl text-left text-xs font-mono flex items-center justify-between border transition-all ${
                      activeSelector === item.selector
                        ? 'border-sky-400 bg-sky-500/15 text-white'
                        : 'border-white/10 bg-white/5 text-slate-400 hover:bg-white/10'
                    }`}
                  >
                    <span className="text-sky-300 font-bold">{item.selector}</span>
                    <span className="text-[10px] text-slate-300">{item.trigger}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#091518] border border-white/10 text-xs text-slate-300">
              <div className="text-white font-bold mb-1 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-[#FF6131]" />
                Live Rule Engine Status:
              </div>
              <p className="text-slate-400 text-[11px]">
                When visitor scrolls past <code className="text-sky-300">{activeSelector}</code>, Converstar will fire the designated high-converting social proof overlay with 0ms delay.
              </p>
            </div>
          </div>
        </div>

        {/* Feature 2: Advanced Behavioral Pop-Ups & Global AI Translation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 pb-16 border-b border-white/10">
          
          {/* Global AI Translation Previewer */}
          <div className="p-8 rounded-3xl glass-panel-glow border border-white/15 space-y-6 order-2 lg:order-1">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-xs font-bold text-white flex items-center gap-2">
                <Languages className="w-3.5 h-3.5 text-sky-400" />
                Live AI Auto-Translation Simulator
              </span>
              <span className="text-[11px] text-slate-400">Browser Locale Detector</span>
            </div>

            {/* Language Switcher Tabs */}
            <div className="flex flex-wrap gap-1.5">
              {[
                { code: 'en', label: '🇺🇸 English' },
                { code: 'es', label: '🇪🇸 Español' },
                { code: 'de', label: '🇩🇪 Deutsch' },
                { code: 'fr', label: '🇫🇷 Français' },
                { code: 'ja', label: '🇯🇵 日本語' }
              ].map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setSelectedLanguage(lang.code as any)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    selectedLanguage === lang.code
                      ? 'bg-sky-500 text-white shadow-md'
                      : 'bg-white/5 text-slate-400 hover:bg-white/10'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>

            {/* Translated Dynamic Modal Box */}
            <div className="p-6 rounded-2xl bg-[#12262B] border border-sky-500/30 text-center space-y-4 shadow-xl">
              <span className="text-[10px] font-bold uppercase tracking-wider text-sky-400">
                AI Translated Exit-Intent Overlay
              </span>
              <h3 className="text-lg font-bold text-white">
                {translations[selectedLanguage].headline}
              </h3>
              <p className="text-xs text-slate-300">
                {translations[selectedLanguage].sub}
              </p>
              <button className="w-full py-2.5 rounded-xl bg-[#FF6131] text-white font-bold text-xs shadow-md">
                {translations[selectedLanguage].cta}
              </button>
            </div>
          </div>

          <div className="space-y-6 order-1 lg:order-2">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">
              Global Widget Translation: Speak to Them Natively
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-snug">
              Never Lose an International Buyer to a Language Barrier Again
            </h2>
            <p className="text-slate-300 leading-relaxed">
              When a prospect from a different country lands on your site, Converstar’s AI automatically detects their browser's native language. In milliseconds, it translates your urgency bars, social proof pop-ups, and lead capture forms so you are communicating with them perfectly.
            </p>
            <p className="text-slate-300 leading-relaxed">
              You instantly build trust and authority globally, without lifting a finger. Combined with our Exit-Intent Technology (which detects mouse vectors moving toward the close tab button) and scroll depth triggers, you deliver the perfect pitch every single time.
            </p>
          </div>

        </div>

        {/* Feature 3: SPA Tracking Optimization */}
        <div className="p-8 sm:p-12 rounded-3xl glass-panel-glow border border-white/15 space-y-6">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
              Flawless Modern Performance
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              SPA Tracking Optimization (React, Vue, Angular, Next.js)
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Many pop-up tools break, lag, or fail to track properly on modern Single Page Applications (SPAs). We completely optimized our tracking infrastructure to handle SPA frameworks with ease. Converstar loads at breakneck speed, mapping dynamic user routes and behavioral paths without ever requiring a hard page reload.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
              <div className="text-xs text-slate-400">Route Change Latency</div>
              <div className="text-2xl font-mono font-bold text-emerald-400">0.02ms</div>
              <div className="text-[11px] text-slate-400">PushState interceptor</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
              <div className="text-xs text-slate-400">Hydration Mismatch</div>
              <div className="text-2xl font-mono font-bold text-sky-400">0 Errors</div>
              <div className="text-[11px] text-slate-400">SSR & Client Safe</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
              <div className="text-xs text-slate-400">Bundle Footprint</div>
              <div className="text-2xl font-mono font-bold text-purple-400">&lt; 3.8 KB</div>
              <div className="text-[11px] text-slate-400">Gzipped & Tree-shaken</div>
            </div>
          </div>
        </div>

        {/* Page Bottom CTA */}
        <div className="mt-20 p-10 rounded-3xl glass-panel-glow border-2 border-sky-500/30 text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Deliver the Perfect Pitch, Every Single Time
          </h3>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Stop relying on blind timing. Let behavioral data dictate your sales process and capture the leads your competitors are letting slip away.
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
