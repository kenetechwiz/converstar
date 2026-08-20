import React, { useState } from 'react';
import { PageId } from '../../types';
import { PRICING_PLANS } from '../../data/saasContent';
import {
  Check,
  Zap,
  Sparkles,
  HelpCircle,
  ShieldCheck,
  ArrowRight,
  ChevronDown,
  Info,
  DollarSign
} from 'lucide-react';

interface PricingPageProps {
  onOpenTrial: () => void;
  onOpenAuth: (mode: 'login' | 'register') => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onOpenTrial, onOpenAuth }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "What happens when my 14-day free trial ends?",
      a: "You will have full access to all features during your 14-day trial. When it ends, you can choose the plan that best fits your business needs. If you decide not to upgrade, your widgets will gracefully deactivate with zero penalties."
    },
    {
      q: "What happens if I exceed my monthly impression limits?",
      a: "We never hard-cutoff your conversion widgets mid-campaign. If you exceed your plan's impression limit, we will notify you and give you a grace period to upgrade. Your campaigns continue converting without interruption."
    },
    {
      q: "Can I use Converstar on multiple client websites?",
      a: "Yes! The Growth plan includes up to 10 domains, and the Scale/Agency plan offers unlimited domains with custom white-label branding and team permissions."
    },
    {
      q: "Does Converstar slow down my website load time?",
      a: "No. Our lightweight JavaScript snippet is under 4KB gzipped and loads asynchronously via global edge CDN nodes. It has zero impact on Google PageSpeed Insights and Core Web Vitals."
    },
    {
      q: "Can I cancel my subscription at any time?",
      a: "Absolutely. You can cancel with a single click inside your account dashboard at any time. There are no long-term contracts, lock-ins, or cancellation fees."
    }
  ];

  return (
    <div className="pt-28 pb-20 bg-[#0D1F23] text-white">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF6131]/15 border border-[#FF6131]/30 text-[#FF6131] text-xs font-bold uppercase tracking-wider">
            <DollarSign className="w-3.5 h-3.5" /> Transparent Pricing
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Predictable Pricing.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6131] to-[#FF8E69]">
              Instant, Measurable ROI.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
            No hidden fees. No long-term contracts. Choose the plan that fits your traffic volume and start plugging the leaks in your funnel today.
          </p>

          {/* Billing Switcher */}
          <div className="flex items-center justify-center gap-3 pt-4">
            <div className="bg-black/40 p-1.5 rounded-2xl border border-white/10 flex items-center gap-2">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  billingCycle === 'monthly'
                    ? 'bg-white/15 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Monthly Billing
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={`px-5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  billingCycle === 'annual'
                    ? 'bg-[#FF6131] text-white shadow-lg shadow-[#FF6131]/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>Annual Billing</span>
                <span className="px-2 py-0.5 rounded-full bg-white text-[#FF6131] text-[10px] font-extrabold">
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 max-w-5xl mx-auto items-stretch justify-center">
          {PRICING_PLANS.map((plan) => {
            const price = billingCycle === 'annual' ? plan.annualPrice : plan.monthlyPrice;

            return (
              <div
                key={plan.id}
                id={`pricing-card-${plan.id}`}
                className={`p-8 rounded-3xl flex flex-col justify-between relative transition-all duration-300 ${
                  plan.popular
                    ? 'glass-panel-glow border-2 border-[#FF6131] shadow-2xl scale-105 z-10'
                    : 'glass-card hover:border-white/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#FF6131] to-[#FF8E69] text-white text-[11px] font-extrabold uppercase tracking-wider shadow-lg flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Most Popular Choice
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                    <p className="text-xs text-slate-400 mt-1">{plan.tagline}</p>
                  </div>

                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-extrabold text-white font-mono">
                      ${price}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {plan.id === 'trial' ? '/ 14 days' : '/ month'}
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 font-mono">
                    <div className="text-white font-bold">{plan.limits.monthlyImpressions}</div>
                    <div className="text-[11px] text-slate-400">{plan.limits.domains}</div>
                  </div>

                  <ul className="space-y-2.5 text-xs text-slate-300 pt-2 border-t border-white/10">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8 mt-8 border-t border-white/10">
                  <button
                    onClick={onOpenTrial}
                    className={`w-full py-3.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 cursor-pointer transition-all ${
                      plan.popular
                        ? 'bg-[#FF6131] hover:bg-[#e05226] text-white shadow-lg shadow-[#FF6131]/30 hover:scale-102'
                        : 'bg-white/10 hover:bg-white/15 text-white'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Comparison Matrix */}
        <div className="mb-24 space-y-6 max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Feature-by-Feature Matrix
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Everything included in our enterprise conversion platform.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl glass-panel-glow border border-white/15 overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-300 min-w-[600px]">
              <thead>
                <tr className="border-b border-white/10 text-white font-bold">
                  <th className="py-3 px-4">Core Capability</th>
                  <th className="py-3 px-4 text-center">Starter ($29)</th>
                  <th className="py-3 px-4 text-center text-[#FF6131]">Growth ($79)</th>
                  <th className="py-3 px-4 text-center">Agency ($199)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr>
                  <td className="py-3 px-4 font-semibold text-white">Monthly Impressions</td>
                  <td className="py-3 px-4 text-center">50,000</td>
                  <td className="py-3 px-4 text-center text-white font-bold">250,000</td>
                  <td className="py-3 px-4 text-center font-bold">1,000,000+</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-white">Connected Domains</td>
                  <td className="py-3 px-4 text-center">3 Domains</td>
                  <td className="py-3 px-4 text-center text-white font-bold">10 Domains</td>
                  <td className="py-3 px-4 text-center font-bold">Unlimited</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-white">All 24+ Notification Types</td>
                  <td className="py-3 px-4 text-center"><Check className="w-4 h-4 text-emerald-400 mx-auto" /></td>
                  <td className="py-3 px-4 text-center"><Check className="w-4 h-4 text-emerald-400 mx-auto" /></td>
                  <td className="py-3 px-4 text-center"><Check className="w-4 h-4 text-emerald-400 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-white">Exit-Intent & Behavioral Triggers</td>
                  <td className="py-3 px-4 text-center">Basic</td>
                  <td className="py-3 px-4 text-center text-white font-bold">Advanced Sniper</td>
                  <td className="py-3 px-4 text-center font-bold">Advanced Sniper</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-white">Direct WhatsApp / Telegram Chat</td>
                  <td className="py-3 px-4 text-center">—</td>
                  <td className="py-3 px-4 text-center"><Check className="w-4 h-4 text-emerald-400 mx-auto" /></td>
                  <td className="py-3 px-4 text-center"><Check className="w-4 h-4 text-emerald-400 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-white">Custom Brand White-Labeling</td>
                  <td className="py-3 px-4 text-center">—</td>
                  <td className="py-3 px-4 text-center">—</td>
                  <td className="py-3 px-4 text-center"><Check className="w-4 h-4 text-emerald-400 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-white">Team Roles & Permissions</td>
                  <td className="py-3 px-4 text-center">—</td>
                  <td className="py-3 px-4 text-center">3 Members</td>
                  <td className="py-3 px-4 text-center font-bold">Unlimited Teams</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Pricing FAQs */}
        <div className="max-w-3xl mx-auto space-y-6 mb-20">
          <div className="text-center space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Frequently Asked Questions
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Everything you need to know about billing, trials, and setup.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl glass-card border border-white/10 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-5 text-left text-sm font-bold text-white flex items-center justify-between hover:bg-white/5 cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#FF6131] transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {openFaq === index && (
                  <div className="p-5 pt-0 text-xs sm:text-sm text-slate-300 border-t border-white/5 leading-relaxed bg-black/20">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Closing CTA */}
        <div className="p-10 rounded-3xl glass-panel-glow border-2 border-[#FF6131]/30 text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Ready to Double Your Conversions?
          </h3>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Join thousands of high-converting businesses using Converstar to turn passive traffic into automated revenue.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenTrial}
              className="px-10 py-4 rounded-2xl bg-gradient-to-r from-[#FF6131] to-[#FF7F59] text-white font-extrabold text-base shadow-xl shadow-[#FF6131]/30 hover:scale-[1.02] cursor-pointer"
            >
              Start 14-Day Free Trial (No Credit Card Required)
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
