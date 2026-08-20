import React from 'react';
import { PageId } from '../../types';
import {
  ShoppingBag,
  Rocket,
  Briefcase,
  ArrowRight,
  Sparkles,
  Percent,
  Zap,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

interface SolutionsPersonaSectionProps {
  onNavigate: (page: PageId) => void;
  onOpenTrial: () => void;
}

export const SolutionsPersonaSection: React.FC<SolutionsPersonaSectionProps> = ({
  onNavigate,
  onOpenTrial
}) => {
  return (
    <section id="solutions-persona-section" className="py-24 bg-[#09171A] relative border-t border-white/5">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#FF6131]" /> Tailored For Your Business Model
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Engineered For Every Growth Stage
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Whether you are saving abandoned e-commerce carts, slashing B2B SaaS CAC, or managing 50 client websites for an agency, Converstar operates flawlessly in the background.
          </p>
        </div>

        {/* 3 Persona Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Persona 1: E-commerce */}
          <div
            id="persona-card-ecommerce"
            className="p-8 rounded-3xl glass-card flex flex-col justify-between relative group hover:border-orange-500/40"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400">
                <ShoppingBag className="w-6 h-6" />
              </div>

              <span className="text-xs font-mono font-bold text-orange-400 uppercase">
                For E-commerce Brands
              </span>

              <h3 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors">
                Stop Letting 70% of Your Carts Die at Checkout
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Wrap a 24/7 conversion net around your Shopify or WooCommerce store. Trigger real-time purchase pop-ups ("Sarah from Texas just bought...") and instant exit-intent cart rescues.
              </p>

              <div className="space-y-2 pt-4 border-t border-white/10 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Live Purchase Digital "Crowded Store" Effect</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Exit-Intent Cart Rescue ("Catch by the collar")</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Smart Margin-Protecting Coupon Distributors</span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <button
                onClick={() => onNavigate('solutions-ecommerce')}
                className="w-full py-3 rounded-xl bg-white/5 hover:bg-orange-500 hover:text-white text-slate-200 font-bold text-xs sm:text-sm border border-white/10 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Explore E-commerce Solution</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Persona 2: SaaS & Startups */}
          <div
            id="persona-card-saas"
            className="p-8 rounded-3xl glass-card flex flex-col justify-between relative group hover:border-cyan-500/40"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Rocket className="w-6 h-6" />
              </div>

              <span className="text-xs font-mono font-bold text-cyan-400 uppercase">
                For SaaS & Startups
              </span>

              <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                Scale Your MRR & Slash Acquisition Costs
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Plugs the silent holes in your SaaS funnel. Native tracking for React, Vue, & Angular Single Page Applications, aggressive lead capture for freemium sign-ups, and in-app FAQs.
              </p>

              <div className="space-y-2 pt-4 border-t border-white/10 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Flawless SPA Tracking (React, Vue, Angular)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Aggressive Freemium Lead & Waitlist Capture</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>In-App Onboarding FAQs to Obliterate Churn</span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <button
                onClick={() => onNavigate('solutions-saas')}
                className="w-full py-3 rounded-xl bg-white/5 hover:bg-cyan-500 hover:text-white text-slate-200 font-bold text-xs sm:text-sm border border-white/10 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Explore SaaS Solution</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Persona 3: Agencies & Marketers */}
          <div
            id="persona-card-agencies"
            className="p-8 rounded-3xl glass-card flex flex-col justify-between relative group hover:border-indigo-500/40"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                <Briefcase className="w-6 h-6" />
              </div>

              <span className="text-xs font-mono font-bold text-indigo-400 uppercase">
                For Agencies & Marketers
              </span>

              <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                10x Client Retention by Delivering Visible ROI
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                End the "wait and see" agency model. Deliver immediate spike in leads within days. Manage multi-client rosters, invite team members with role permissions, and full white-labeling.
              </p>

              <div className="space-y-2 pt-4 border-t border-white/10 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Centralized Agency Client Command Center</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Frictionless Teams System with Role Permissions</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>100% White-Labeling & Dynamic QR Generator</span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <button
                onClick={() => onNavigate('solutions-agencies')}
                className="w-full py-3 rounded-xl bg-white/5 hover:bg-indigo-500 hover:text-white text-slate-200 font-bold text-xs sm:text-sm border border-white/10 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Explore Agency Solution</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
