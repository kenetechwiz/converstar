import React from 'react';
import { PageId } from '../../types';
import {
  Flame,
  ShieldCheck,
  Globe,
  Radio,
  Github,
  Twitter,
  Linkedin,
  Youtube,
  ArrowUpRight,
  Heart
} from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenTrial: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenTrial }) => {
  return (
    <footer id="global-footer" className="bg-[#091518] border-t border-white/10 text-slate-400 text-sm">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-2.5 group text-left cursor-pointer focus:outline-none"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#FF6131] to-[#FF8E69] p-0.5 shadow-md shadow-[#FF6131]/30">
                <div className="w-full h-full bg-[#0D1F23] rounded-[10px] flex items-center justify-center">
                  <Flame className="w-5 h-5 text-[#FF6131]" />
                </div>
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white">
                Conver<span className="text-[#FF6131]">star</span>
              </span>
            </button>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              The high-speed conversion rate optimization (CRO) ecosystem. Stop losing 99% of your traffic with infinite social proof, sniper behavioral triggers, direct chat, and real-time telemetry.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                All Systems Operational (99.99% Uptime)
              </span>
            </div>

            <div className="flex items-center gap-3 pt-2 text-slate-400">
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition-colors" aria-label="GitHub">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition-colors" aria-label="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Features */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Features
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('features-social-proof')}
                  className="hover:text-[#FF6131] transition-colors"
                >
                  Social Proof & Urgency
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('features-targeting')}
                  className="hover:text-[#FF6131] transition-colors"
                >
                  Targeting & Triggers
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('features-chat')}
                  className="hover:text-[#FF6131] transition-colors"
                >
                  Direct Chat & 66text SMS
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('features-analytics')}
                  className="hover:text-[#FF6131] transition-colors"
                >
                  Real-Time Analytics & Maps
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('pricing')}
                  className="hover:text-[#FF6131] transition-colors text-slate-300 font-semibold"
                >
                  Pricing Plans & Limits
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Solutions */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Solutions
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('solutions-ecommerce')}
                  className="hover:text-[#FF6131] transition-colors"
                >
                  For E-commerce Stores
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('solutions-saas')}
                  className="hover:text-[#FF6131] transition-colors"
                >
                  For SaaS & Startups
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('solutions-agencies')}
                  className="hover:text-[#FF6131] transition-colors"
                >
                  For Agencies & Marketers
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenTrial}
                  className="hover:text-[#FF6131] transition-colors text-[#FF6131] font-semibold flex items-center gap-1"
                >
                  <span>14-Day Free Trial</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Resources & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Resources & Trust
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('resources-integrations')}
                  className="hover:text-[#FF6131] transition-colors"
                >
                  Integrations (Shopify, WP, React)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('resources-docs')}
                  className="hover:text-[#FF6131] transition-colors"
                >
                  Help Center & Setup Docs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('resources-blog')}
                  className="hover:text-[#FF6131] transition-colors"
                >
                  Conversion Academy Blog
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('resources-security')}
                  className="hover:text-[#FF6131] transition-colors text-emerald-400 font-medium flex items-center gap-1"
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Data Security & 2FA</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('legal-terms')}
                  className="hover:text-[#FF6131] transition-colors"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('legal-privacy')}
                  className="hover:text-[#FF6131] transition-colors"
                >
                  Privacy Policy & Cookies
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Converstar Technologies Inc. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Engineered with <Heart className="w-3.5 h-3.5 text-[#FF6131] fill-current" /> for high-converting businesses.
          </p>
        </div>

      </div>
    </footer>
  );
};
