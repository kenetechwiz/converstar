import React, { useState } from 'react';
import { PageId } from '../../types';
import {
  Rocket,
  Code2,
  Users,
  HelpCircle,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Zap,
  Sparkles,
  Layers,
  ChevronDown
} from 'lucide-react';

interface SaasSolutionPageProps {
  onNavigate: (page: PageId) => void;
  onOpenTrial: () => void;
}

export const SaasSolutionPage: React.FC<SaasSolutionPageProps> = ({ onNavigate, onOpenTrial }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="pt-28 pb-20 bg-[#0D1F23] text-white">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <Rocket className="w-3.5 h-3.5" /> Solution: For SaaS & Startups
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Scale Your MRR and{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300">
              Slash Acquisition Costs Instantly
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
            You engineered a brilliant software product. But if you are burning through your runway paying for traffic that simply bounces, your SaaS is bleeding to death. Converstar is the automated growth engine built specifically to capture leads, optimize onboarding, and force freemium users to upgrade.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenTrial}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-[#FF6131] to-[#FF7F59] text-white font-bold text-base shadow-xl shadow-[#FF6131]/30 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Plug the Leak Today — Start Your Free Trial</span>
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

        {/* Section 1: The Silent Killer of Startups: High CAC */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 pb-16 border-b border-white/10">
          <div className="space-y-6">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
              The Silent Killer of Startups: High CAC
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-snug">
              Flawless SPA Tracking Built for Modern Tech Stacks
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Every SaaS founder knows the brutal math: Customer Acquisition Cost (CAC) will make or break your company. You spend a fortune on ads, content, and product hunt launches, but if visitors land on your pricing page and leave without starting a trial, you are actively burning cash.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Traditional pop-up tools are dinosaurs. They lag, break, and completely fail to track user behavior on modern Single Page Applications (SPAs) built with React, Vue, or Angular. We engineered Converstar's tracking infrastructure for the modern web. It loads asynchronously at breakneck speed, mapping dynamic user routes without hard reloads.
            </p>
          </div>

          {/* SPA Metrics Card */}
          <div className="p-8 rounded-3xl glass-panel-glow border border-white/15 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-xs font-bold text-white flex items-center gap-2">
                <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                React / Next.js / Vue Route Telemetry
              </span>
              <span className="text-[11px] font-mono text-emerald-400">Zero Flicker</span>
            </div>

            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-[#091518] border border-white/10 space-y-1">
                <div className="text-xs text-slate-400">Freemium Signup Acceleration</div>
                <div className="text-3xl font-extrabold text-cyan-400 font-mono">+148%</div>
                <div className="text-[11px] text-emerald-400">Captured via behavioral exit opt-ins</div>
              </div>

              <div className="p-4 rounded-2xl bg-[#091518] border border-white/10 space-y-1">
                <div className="text-xs text-slate-400">Trial-to-Paid Upgrade Velocity</div>
                <div className="text-3xl font-extrabold text-[#FF6131] font-mono">2.8x Faster</div>
                <div className="text-[11px] text-slate-300">Driven by inline social proof in user dashboard</div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Aggressive Lead Capture & In-App Onboarding FAQs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 pb-16 border-b border-white/10">
          
          {/* In-App Onboarding FAQ Mockup */}
          <div className="p-8 rounded-3xl glass-panel-glow border border-white/15 space-y-4 order-2 lg:order-1">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-xs font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
                In-App Onboarding FAQ Widget Preview
              </span>
              <span className="text-[11px] text-slate-400">Dashboard Closer</span>
            </div>

            <div className="space-y-2">
              {[
                { q: "How do I invite team members?", a: "Go to Settings > Team and add emails. Role permissions are instant." },
                { q: "Can I export data to BigQuery or Webhooks?", a: "Yes, 1-click webhook integrations are available on the Pro plan." },
                { q: "How do I upgrade to Pro with 15% discount?", a: "Click the upgrade badge in top right corner to apply coupon." }
              ].map((item, idx) => (
                <div key={idx} className="rounded-xl bg-[#091518] border border-white/10 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full p-3.5 text-left text-xs font-bold text-white flex items-center justify-between hover:bg-white/5"
                  >
                    <span>{item.q}</span>
                    <ChevronDown className={`w-4 h-4 text-cyan-400 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === idx && (
                    <div className="p-3.5 pt-0 text-xs text-slate-300 border-t border-white/5 bg-black/20">
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 order-1 lg:order-2">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
              Interactive Onboarding FAQs: Obliterate User Churn
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-snug">
              Fuel Your Freemium Funnel & Prevent Early Drop-Offs
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Before you can sell them a premium monthly subscription, you have to capture them in your ecosystem. Deploy high-converting exit-intent overlays, time-delayed opt-ins, and targeted behavioral pop-ups to capture emails before a visitor bounces.
            </p>
            <p className="text-slate-300 leading-relaxed">
              The highest risk of losing a SaaS user is during their first 5 minutes inside your application. If they get confused or hit a roadblock, they churn. Stop forcing your users to leave your app to dig through a clunky external knowledge base. Converstar allows you to deploy beautiful, interactive FAQ widgets and direct chat prompts directly inside your user dashboard.
            </p>
          </div>

        </div>

        {/* Closing CTA */}
        <div className="p-10 rounded-3xl glass-panel-glow border-2 border-cyan-500/30 text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Stop Burning Your Runway. Start Scaling.
          </h3>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Your engineering time is your most valuable asset. Stop wasting sprint cycles trying to build in-house marketing tools. Paste Converstar's single line of code today, let the conversion engine take over, and watch your Monthly Recurring Revenue (MRR) climb on autopilot.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenTrial}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#FF6131] to-[#FF7F59] text-white font-bold text-sm shadow-lg shadow-[#FF6131]/30 flex items-center gap-2 cursor-pointer"
            >
              <span>Plug the Leak Today — Start Your Free Trial</span>
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
