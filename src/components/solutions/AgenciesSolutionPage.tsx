import React, { useState } from 'react';
import { PageId } from '../../types';
import {
  Briefcase,
  Users,
  Shield,
  QrCode,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Layers,
  Crown,
  Download,
  Copy,
  Check
} from 'lucide-react';

interface AgenciesSolutionPageProps {
  onNavigate: (page: PageId) => void;
  onOpenTrial: () => void;
}

export const AgenciesSolutionPage: React.FC<AgenciesSolutionPageProps> = ({
  onNavigate,
  onOpenTrial
}) => {
  const [activeClient, setActiveClient] = useState('Apex Digital Store');
  const [qrUrl, setQrUrl] = useState('https://converstar.com/vip-offer');
  const [customBrandName, setCustomBrandName] = useState('ApexConversion Engine');
  const [whiteLabelActive, setWhiteLabelActive] = useState(true);

  return (
    <div className="pt-28 pb-20 bg-[#0D1F23] text-white">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-400 text-xs font-bold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" /> Solution: For Agencies & Marketers
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            10x Your Client Retention by{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-300">
              Delivering ROI They Can Actually See
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
            As an agency owner or marketer, your biggest enemy is not the competition—it is client churn. If your clients do not see immediate, undeniable results from your campaigns, they fire you. Converstar is your ultimate retention weapon, designed to force conversions and prove your value the second you deploy it.
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
              <span>View Agency Pricing Plans</span>
            </button>
          </div>
        </div>

        {/* Section 1: The End of the "Wait and See" Agency Model */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 pb-16 border-b border-white/10">
          <div className="space-y-6">
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
              The End of the "Wait and See" Agency Model
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-snug">
              Frictionless Client Management: Your Agency Command Center
            </h2>
            <p className="text-slate-300 leading-relaxed">
              You know the drill. You sign a new client, launch their ads, and optimize their SEO. Then, you have to beg them to be patient while you wait for the traffic to convert. Meanwhile, they are watching their ad spend burn and getting nervous.
            </p>
            <p className="text-slate-300 leading-relaxed">
              You need a way to manufacture immediate wins. By pasting Converstar's single line of code onto your client's website, you instantly deploy an automated conversion net that captures the traffic they are already getting. You deliver a massive spike in leads and sales in days, not months—making you absolutely irreplaceable.
            </p>
          </div>

          {/* Master Agency Dashboard Client Switcher Preview */}
          <div className="p-8 rounded-3xl glass-panel-glow border border-white/15 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-xs font-bold text-white flex items-center gap-2">
                <Crown className="w-3.5 h-3.5 text-indigo-400" />
                Master Agency Multi-Client Roster
              </span>
              <span className="text-[11px] text-slate-400">18 Active Client Domains</span>
            </div>

            <div className="space-y-2">
              {[
                { name: 'Apex Digital Store', cName: 'E-commerce', cvr: '+4.8% CVR', status: 'Live' },
                { name: 'SaaS MetricFlow', cName: 'B2B Software', cvr: '+142% Leads', status: 'Live' },
                { name: 'Horizon Fitness App', cName: 'DTC Brand', cvr: '+28% Checkouts', status: 'Live' }
              ].map((client) => (
                <button
                  key={client.name}
                  onClick={() => setActiveClient(client.name)}
                  className={`w-full p-3.5 rounded-xl text-left text-xs flex items-center justify-between border transition-all ${
                    activeClient === client.name
                      ? 'border-indigo-400 bg-indigo-500/15 text-white'
                      : 'border-white/10 bg-white/5 text-slate-400 hover:bg-white/10'
                  }`}
                >
                  <div>
                    <div className="font-bold text-white text-sm">{client.name}</div>
                    <div className="text-[10px] text-slate-400">{client.cName}</div>
                  </div>
                  <div className="text-right">
                    <span className="text-emerald-400 font-mono font-bold">{client.cvr}</span>
                    <div className="text-[10px] text-indigo-300 font-semibold">{client.status}</div>
                  </div>
                </button>
              ))}
            </div>

            <div className="p-3 rounded-xl bg-white/5 text-xs text-slate-300">
              Active Workspace: <strong className="text-white">{activeClient}</strong> — 1-click campaign deployment enabled.
            </div>
          </div>
        </div>

        {/* Section 2: White-Labeling & QR Code Generator */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 pb-16 border-b border-white/10">
          
          {/* QR Code & White-Label Simulator */}
          <div className="p-8 rounded-3xl glass-panel-glow border border-white/15 space-y-6 order-2 lg:order-1">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-xs font-bold text-white flex items-center gap-2">
                <QrCode className="w-3.5 h-3.5 text-indigo-400" />
                Trackable Offline QR Code Generator
              </span>
              <span className="text-[11px] text-emerald-400 font-semibold">Instant Telemetry</span>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Custom Destination URL:
                </label>
                <input
                  type="text"
                  value={qrUrl}
                  onChange={(e) => setQrUrl(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white outline-none font-mono"
                />
              </div>

              {/* QR Mockup visual */}
              <div className="p-6 rounded-2xl bg-white text-slate-900 flex flex-col items-center justify-center space-y-2 text-center">
                <div className="w-32 h-32 bg-slate-900 rounded-xl p-2 flex items-center justify-center text-white">
                  <QrCode className="w-24 h-24 text-white" />
                </div>
                <div className="text-xs font-extrabold text-slate-900">
                  {whiteLabelActive ? customBrandName : 'Powered by Converstar'}
                </div>
                <span className="text-[10px] text-slate-600">Scan to trigger mobile exit-intent offer</span>
              </div>
            </div>
          </div>

          <div className="space-y-6 order-1 lg:order-2">
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
              Premium White-Labeling & QR Codes
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-snug">
              Protect Your Secret Weapon & Bridge Offline-to-Online
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Do not let your clients know how easy it is to double their conversion rates. With our White-Labeling capabilities, you can strip out the Converstar branding and present these high-powered widgets as your agency's own proprietary technology.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Working with brick-and-mortar clients, running direct mail, or handling event marketing? Converstar allows you to generate dynamic, trackable QR codes directly from your dashboard. When a customer scans the code on a flyer, menu, or storefront window, they are driven straight to your behavioral funnel.
            </p>
          </div>

        </div>

        {/* Closing CTA */}
        <div className="p-10 rounded-3xl glass-panel-glow border-2 border-indigo-500/30 text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Stop Begging for Retainers. Start Dictating Them.
          </h3>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            When you can guarantee a higher conversion rate on your client's existing traffic, you stop being an expense and become an asset. Arm your agency with the ultimate conversion engine today.
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
              <span>View Agency Pricing Plans</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
