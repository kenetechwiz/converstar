import React from 'react';
import { PageId } from '../../types';
import { FileText, ShieldCheck } from 'lucide-react';

export const LegalTermsPage: React.FC<{ onNavigate: (page: PageId) => void }> = ({ onNavigate }) => {
  return (
    <div className="pt-28 pb-20 bg-[#0D1F23] text-white">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="text-center space-y-4 pb-8 border-b border-white/10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider">
            <FileText className="w-3.5 h-3.5" /> Legal Agreement
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">Terms of Service</h1>
          <p className="text-xs sm:text-sm text-slate-400">Last Updated: January 2026</p>
        </div>

        <div className="space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Converstar SaaS platform, including our widget delivery CDN, behavioral analytics dashboard, and API endpoints, you agree to be bound by these Terms of Service. If you do not agree to these terms, you must discontinue use immediately.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">2. Permitted Use & Ethical Social Proof</h2>
            <p>
              Converstar provides tools for displaying authentic notifications, dynamic counters, reviews, and lead capture widgets. Users agree not to configure misleading, fraudulent, or deceptive notifications that violate FTC guidelines or consumer protection laws in their jurisdiction.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">3. Subscription, Trials & Billing</h2>
            <p>
              All accounts begin with a 14-day full-feature trial. Following the trial period, active subscriptions are billed on a recurring monthly or annual basis depending on your selected billing cycle. You may cancel at any time via your account dashboard.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">4. Service Level & Uptime</h2>
            <p>
              We provide a 99.99% uptime target for our global CDN script distribution. While we make every reasonable commercial effort to ensure uninterrupted delivery, services are provided on an &quot;as is&quot; and &quot;as available&quot; basis.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
};
