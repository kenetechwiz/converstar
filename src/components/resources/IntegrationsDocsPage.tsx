import React, { useState } from 'react';
import { PageId } from '../../types';
import {
  Layers,
  Code2,
  Cpu,
  Zap,
  Globe,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Copy,
  Check,
  Search,
  Key
} from 'lucide-react';

interface IntegrationsDocsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenTrial: () => void;
}

export const IntegrationsDocsPage: React.FC<IntegrationsDocsPageProps> = ({
  onNavigate,
  onOpenTrial
}) => {
  const [activeTab, setActiveTab] = useState<'quickstart' | 'platforms' | 'webhooks' | 'rest-api'>('quickstart');
  const [copiedKey, setCopiedKey] = useState(false);

  return (
    <div className="pt-28 pb-20 bg-[#0D1F23] text-white">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-400 text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" /> Developer Hub & Integrations
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Seamless Setup.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-sky-300">
              Universal Platform Compatibility.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
            Whether you run a headless Shopify store, custom Next.js frontend, WordPress multisite, or Webflow landing page, Converstar installs in under 60 seconds with zero runtime overhead.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-black/40 p-1.5 rounded-2xl border border-white/10 flex flex-wrap gap-2 text-xs">
            <button
              onClick={() => setActiveTab('quickstart')}
              className={`px-4 py-2 rounded-xl font-bold transition-all ${
                activeTab === 'quickstart' ? 'bg-[#FF6131] text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              1-Minute Quickstart
            </button>
            <button
              onClick={() => setActiveTab('platforms')}
              className={`px-4 py-2 rounded-xl font-bold transition-all ${
                activeTab === 'platforms' ? 'bg-[#FF6131] text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Supported Platforms
            </button>
            <button
              onClick={() => setActiveTab('webhooks')}
              className={`px-4 py-2 rounded-xl font-bold transition-all ${
                activeTab === 'webhooks' ? 'bg-[#FF6131] text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Real-Time Webhooks
            </button>
            <button
              onClick={() => setActiveTab('rest-api')}
              className={`px-4 py-2 rounded-xl font-bold transition-all ${
                activeTab === 'rest-api' ? 'bg-[#FF6131] text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              REST API & SDK
            </button>
          </div>
        </div>

        {/* Tab 1: Quickstart */}
        {activeTab === 'quickstart' && (
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="p-8 rounded-3xl glass-panel-glow border border-white/15 space-y-6">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Zap className="w-5 h-5 text-[#FF6131]" />
                Step 1: Embed Global Pixel Script
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                Add this single line of code to the <code>&lt;head&gt;</code> section of your website. It handles all widget rendering, behavioral tracking, exit-intent vectors, and real-time telemetry.
              </p>
              
              <div className="relative">
                <pre className="p-4 rounded-xl bg-[#091518] border border-white/10 text-emerald-300 font-mono text-xs overflow-x-auto">
{`<script async src="https://cdn.converstar.com/v2/pixel.js" data-site-id="YOUR_SITE_KEY_HERE"></script>`}
                </pre>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText('<script async src="https://cdn.converstar.com/v2/pixel.js" data-site-id="YOUR_SITE_KEY_HERE"></script>');
                    setCopiedKey(true);
                    setTimeout(() => setCopiedKey(false), 2000);
                  }}
                  className="absolute top-3 right-3 p-1.5 rounded-lg bg-white/10 hover:bg-[#FF6131] text-white text-xs"
                >
                  {copiedKey ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span>Payload Size: &lt; 3.8KB gzipped</span>
                <span className="text-emerald-400">Core Web Vitals Optimized</span>
              </div>
            </div>

            <div className="p-8 rounded-3xl glass-panel-glow border border-white/15 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                Step 2: Launch Campaigns from Dashboard
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Once the pixel is embedded, you will never have to touch your website code again. Create, customize, and toggle all 24+ conversion widgets directly from the Converstar Cloud Dashboard with 0ms deployment lag.
              </p>
              <button
                onClick={onOpenTrial}
                className="mt-2 px-6 py-3 rounded-xl bg-[#FF6131] text-white font-bold text-xs shadow-lg flex items-center gap-2"
              >
                <span>Launch Free Dashboard</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Tab 2: Platforms */}
        {activeTab === 'platforms' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { name: 'Shopify / Plus', desc: '1-Click App Store integration with auto cart-value passing and webhook sync.' },
              { name: 'WordPress / WooCommerce', desc: 'Lightweight PHP plugin or simple Header Script embed for any theme.' },
              { name: 'Webflow', desc: 'Custom code head injection with instant support for Webflow CMS collections.' },
              { name: 'React / Next.js SPA', desc: 'Next/Script component with strategy="afterInteractive" and route listeners.' },
              { name: 'Custom HTML & PHP', desc: 'Standard script tag compatible with Apache, Nginx, Cloudflare Workers, etc.' },
              { name: 'Square & Wix', desc: 'Direct embed code support inside tracking and analytics site settings.' }
            ].map((p, idx) => (
              <div key={idx} className="p-6 rounded-2xl glass-card border border-white/10 space-y-3">
                <div className="text-base font-bold text-white">{p.name}</div>
                <p className="text-xs text-slate-300 leading-relaxed">{p.desc}</p>
                <div className="text-[11px] text-[#FF6131] font-semibold">Native Support • 100% Tested</div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Webhooks */}
        {activeTab === 'webhooks' && (
          <div className="max-w-4xl mx-auto p-8 rounded-3xl glass-panel-glow border border-white/15 space-y-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Code2 className="w-5 h-5 text-purple-400" />
              Inbound & Outbound Webhook Dispatcher
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Trigger real-time purchase pop-ups whenever a sale happens on Stripe, Shopify, Gumroad, or your custom checkout server.
            </p>
            <pre className="p-4 rounded-xl bg-[#091518] border border-white/10 text-sky-300 font-mono text-xs overflow-x-auto leading-relaxed">
{`POST https://api.converstar.com/v1/events/purchase
Authorization: Bearer cvr_sec_93819381948
Content-Type: application/json

{
  "customer_name": "Sarah",
  "location": "Texas, USA",
  "product_title": "Ultimate Growth Bundle",
  "amount": 149.00,
  "currency": "USD",
  "avatar_url": "https://img.converstar.com/avatars/user_8.jpg"
}`}
            </pre>
          </div>
        )}

        {/* Tab 4: REST API */}
        {activeTab === 'rest-api' && (
          <div className="max-w-4xl mx-auto p-8 rounded-3xl glass-panel-glow border border-white/15 space-y-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Key className="w-5 h-5 text-emerald-400" />
              Developer REST API
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Programmatically create campaigns, generate dynamic QR codes, extract real-time visitor coordinates, and automate client onboarding.
            </p>
            <div className="p-4 rounded-xl bg-[#091518] border border-white/10 text-xs text-slate-300 space-y-2">
              <div className="font-mono text-white">GET /v1/analytics/realtime</div>
              <div className="font-mono text-white">POST /v1/campaigns/create</div>
              <div className="font-mono text-white">POST /v1/qrcodes/generate</div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
