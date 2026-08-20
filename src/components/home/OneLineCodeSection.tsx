import React, { useState } from 'react';
import {
  Code2,
  Copy,
  Check,
  Zap,
  Globe,
  Layers,
  Cpu,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

export const OneLineCodeSection: React.FC = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<'html' | 'shopify' | 'wordpress' | 'react' | 'webflow'>('html');
  const [copied, setCopied] = useState(false);

  const getSnippets = () => {
    switch (selectedPlatform) {
      case 'html':
        return `<!-- Paste in your <head> tag or before </body> -->
<script async src="https://cdn.converstar.com/v2/pixel.js" data-site-id="CS_PRO_84920"></script>`;
      case 'shopify':
        return `<!-- Shopify theme.liquid inside <head> -->
{{ 'https://cdn.converstar.com/v2/pixel.js' | script_tag: async: true, 'data-site-id': 'CS_SHOPIFY_84920' }}`;
      case 'wordpress':
        return `// functions.php or Header & Footer Scripts Plugin
add_action('wp_head', function() {
  echo '<script async src="https://cdn.converstar.com/v2/pixel.js" data-site-id="CS_WP_84920"></script>';
});`;
      case 'react':
        return `// Next.js / React SPA layout.tsx
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script 
          src="https://cdn.converstar.com/v2/pixel.js" 
          data-site-id="CS_REACT_84920" 
          strategy="afterInteractive" 
        />
      </head>
      <body>{children}</body>
    </html>
  );
}`;
      case 'webflow':
        return `<!-- Webflow Project Settings > Custom Code > Head Code -->
<script async src="https://cdn.converstar.com/v2/pixel.js" data-site-id="CS_WEBFLOW_84920"></script>`;
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getSnippets());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="one-line-installation-section" className="py-20 bg-[#09171A] border-t border-white/5 relative">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" /> 1-Minute Zero Friction Setup
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Built for Speed, Scalability, and Instant ROI
          </h2>

          <p className="text-slate-300 text-sm sm:text-base">
            Copy and paste one line of code. Works seamlessly on WordPress, Shopify, custom HTML, Webflow, and heavily optimized Single Page Applications (SPAs) with zero impact on page load speed.
          </p>
        </div>

        {/* Code Snippet Box */}
        <div className="max-w-4xl mx-auto rounded-3xl glass-panel-glow p-6 sm:p-8">
          
          {/* Framework Selector Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-white/10">
            <div className="flex flex-wrap items-center gap-1.5 bg-black/40 p-1 rounded-xl border border-white/10 text-xs">
              <button
                onClick={() => setSelectedPlatform('html')}
                className={`px-3 py-1.5 rounded-lg font-semibold transition-colors ${
                  selectedPlatform === 'html' ? 'bg-[#FF6131] text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Standard HTML
              </button>
              <button
                onClick={() => setSelectedPlatform('shopify')}
                className={`px-3 py-1.5 rounded-lg font-semibold transition-colors ${
                  selectedPlatform === 'shopify' ? 'bg-[#FF6131] text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Shopify
              </button>
              <button
                onClick={() => setSelectedPlatform('wordpress')}
                className={`px-3 py-1.5 rounded-lg font-semibold transition-colors ${
                  selectedPlatform === 'wordpress' ? 'bg-[#FF6131] text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                WordPress
              </button>
              <button
                onClick={() => setSelectedPlatform('react')}
                className={`px-3 py-1.5 rounded-lg font-semibold transition-colors ${
                  selectedPlatform === 'react' ? 'bg-[#FF6131] text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                React / Next.js SPA
              </button>
              <button
                onClick={() => setSelectedPlatform('webflow')}
                className={`px-3 py-1.5 rounded-lg font-semibold transition-colors ${
                  selectedPlatform === 'webflow' ? 'bg-[#FF6131] text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Webflow
              </button>
            </div>

            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-[#FF6131] text-white text-xs font-bold transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied Code!' : 'Copy Script'}</span>
            </button>
          </div>

          {/* Snippet Display */}
          <div className="mt-4">
            <pre className="p-4 sm:p-6 rounded-2xl bg-[#091518] border border-white/10 text-emerald-300 font-mono text-xs sm:text-sm overflow-x-auto leading-relaxed whitespace-pre-wrap select-all">
              {getSnippets()}
            </pre>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-sky-400 shrink-0" />
              <span>&lt;4KB gzipped asynchronous payload</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Dynamic honeypots & 2FA protection</span>
            </div>
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-purple-400 shrink-0" />
              <span>Zero layout shifts (CLS & Core Web Vitals friendly)</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
