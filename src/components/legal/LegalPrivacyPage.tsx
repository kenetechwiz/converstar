import React from 'react';
import { PageId } from '../../types';
import { ShieldCheck } from 'lucide-react';

export const LegalPrivacyPage: React.FC<{ onNavigate: (page: PageId) => void }> = ({ onNavigate }) => {
  return (
    <div className="pt-28 pb-20 bg-[#0D1F23] text-white">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="text-center space-y-4 pb-8 border-b border-white/10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" /> Privacy & Cookies
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">Privacy Policy</h1>
          <p className="text-xs sm:text-sm text-slate-400">Last Updated: January 2026</p>
        </div>

        <div className="space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">1. Information We Collect</h2>
            <p>
              When you use Converstar, we collect account information (email, password hashes), billing identifiers (processed securely via Stripe), and non-personally identifiable aggregated website telemetry (pageviews, click counts, browser language, approximate country geolocation) necessary to render conversion widgets.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">2. No Cross-Site Tracking Or Ad Retargeting</h2>
            <p>
              We do not sell personal data, nor do we track user identities across disparate third-party advertising networks. Our tracking script operates exclusively within the boundary of the customer’s verified domain.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">3. GDPR & CCPA Rights</h2>
            <p>
              European and California residents retain the right to access, rectify, or permanently erase any stored personal telemetry upon written request to privacy@converstar.com or through our automated dashboard tools.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
};
