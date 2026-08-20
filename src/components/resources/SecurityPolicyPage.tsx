import React from 'react';
import { PageId } from '../../types';
import {
  ShieldCheck,
  Lock,
  Server,
  Key,
  EyeOff,
  FileCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface SecurityPolicyPageProps {
  onNavigate: (page: PageId) => void;
  onOpenTrial: () => void;
}

export const SecurityPolicyPage: React.FC<SecurityPolicyPageProps> = ({
  onNavigate,
  onOpenTrial
}) => {
  return (
    <div className="pt-28 pb-20 bg-[#0D1F23] text-white">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" /> Enterprise-Grade Trust & Compliance
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Security, Privacy &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              Zero-Trust Architecture
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
            Your data and your customers' trust are non-negotiable. Converstar is engineered from the ground up with end-to-end TLS encryption, two-factor authentication, dynamic honeypots, and strict global privacy compliance (GDPR & CCPA).
          </p>
        </div>

        {/* Security Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto">
          
          <div className="p-8 rounded-3xl glass-card border border-white/10 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <Key className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Two-Factor Auth & Honeypots</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Protect your account from unauthorized intrusions with mandatory 2FA support and automated dynamic honeypots that trap malicious bots and credential stuffers before they hit your database.
            </p>
          </div>

          <div className="p-8 rounded-3xl glass-card border border-white/10 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-sky-500/20 text-sky-400 flex items-center justify-center">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">End-to-End TLS 1.3 Encryption</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              All pixel scripts, visitor telemetry, and webhook events are encrypted in transit via TLS 1.3 and at rest with AES-256 military-grade encryption standards.
            </p>
          </div>

          <div className="p-8 rounded-3xl glass-card border border-white/10 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center">
              <FileCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">GDPR & CCPA Compliant</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We respect user privacy. Converstar does not track invasive personal identifiers across third-party networks, operates cookie-less behavioral counters, and offers instant data deletion endpoints.
            </p>
          </div>

        </div>

        {/* Closing CTA */}
        <div className="max-w-4xl mx-auto p-10 rounded-3xl glass-panel-glow border-2 border-emerald-500/30 text-center space-y-6">
          <h3 className="text-2xl font-bold text-white">
            Built for High-Growth Enterprises
          </h3>
          <p className="text-xs sm:text-sm text-slate-300">
            Need a custom SOC2 report, Data Processing Agreement (DPA), or single-tenant cloud deployment?
          </p>
          <button
            onClick={onOpenTrial}
            className="px-8 py-3.5 rounded-xl bg-[#FF6131] text-white font-bold text-xs shadow-lg"
          >
            Start Your Enterprise Free Trial
          </button>
        </div>

      </div>
    </div>
  );
};
