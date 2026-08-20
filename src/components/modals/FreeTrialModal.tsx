import React, { useState } from 'react';
import {
  X,
  Flame,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Globe,
  Code2,
  Copy,
  Check,
  Zap
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface FreeTrialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FreeTrialModal: React.FC<FreeTrialModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [selectedGoal, setSelectedGoal] = useState('recover-abandoned-carts');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const scriptCode = `<script async src="https://cdn.converstar.com/v2/pixel.js" data-site-id="${
    websiteUrl.replace(/https?:\/\//, '').replace(/\//g, '') || 'app-growth-id'
  }"></script>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(scriptCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFinish = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
    setStep(3);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        id="free-trial-modal-card"
        className="relative w-full max-w-lg p-6 sm:p-8 rounded-3xl bg-[#0D1F23] border border-[#FF6131]/30 shadow-2xl text-white overflow-hidden"
        style={{
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.9), 0 0 50px -10px rgba(255, 97, 49, 0.3)'
        }}
      >
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6131]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Steps indicator */}
        <div className="flex items-center gap-2 mb-6">
          <div className={`h-1.5 flex-1 rounded-full ${step >= 1 ? 'bg-[#FF6131]' : 'bg-white/10'}`} />
          <div className={`h-1.5 flex-1 rounded-full ${step >= 2 ? 'bg-[#FF6131]' : 'bg-white/10'}`} />
          <div className={`h-1.5 flex-1 rounded-full ${step >= 3 ? 'bg-[#FF6131]' : 'bg-white/10'}`} />
        </div>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#FF6131] to-[#FF8E69] p-0.5 shadow-lg shadow-[#FF6131]/30 shrink-0">
            <div className="w-full h-full bg-[#0D1F23] rounded-[14px] flex items-center justify-center">
              <Flame className="w-6 h-6 text-[#FF6131]" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">
              {step === 1 && 'Deploy Converstar Free for 14 Days'}
              {step === 2 && 'Generate Your 1-Line Pixel'}
              {step === 3 && 'Campaign Engine Active!'}
            </h3>
            <p className="text-xs text-slate-400">
              {step === 1 && 'No credit card required • Instant behavioral triggers'}
              {step === 2 && 'Copy and paste into your website header in under 60 seconds'}
              {step === 3 && 'Real-time telemetry and social proof loop are now live'}
            </p>
          </div>
        </div>

        {/* Step 1: Input URL and choose Goal */}
        {step === 1 && (
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-[#FF6131]" /> Your Website or Store URL
              </label>
              <input
                type="text"
                value={websiteUrl}
                onChange={(e) => setWebsiteUrl(e.target.value)}
                placeholder="https://mystore.com or app.mybrand.io"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-slate-500 focus:border-[#FF6131] focus:ring-1 focus:ring-[#FF6131] outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">
                Primary Conversion Goal:
              </label>
              <div className="space-y-2">
                {[
                  { id: 'recover-abandoned-carts', label: 'Recover Abandoned Carts & Boost Sales', tag: 'E-commerce' },
                  { id: 'boost-saas-trials', label: 'Slash CAC & Force Freemium SaaS Upgrades', tag: 'SaaS' },
                  { id: 'agency-white-label', label: 'Deploy Infinite Social Proof for Agency Clients', tag: 'Agencies' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedGoal(item.id)}
                    className={`w-full p-3 rounded-xl text-left text-xs font-semibold flex items-center justify-between border transition-all ${
                      selectedGoal === item.id
                        ? 'border-[#FF6131] bg-[#FF6131]/10 text-white'
                        : 'border-white/10 bg-white/5 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-slate-300">
                      {item.tag}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => setStep(2)}
              disabled={!websiteUrl}
              className="w-full mt-3 py-3.5 rounded-xl bg-gradient-to-r from-[#FF6131] to-[#FF7F59] text-white font-bold text-sm shadow-lg shadow-[#FF6131]/25 hover:shadow-[#FF6131]/40 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-40"
            >
              <span>Continue to Instant Setup</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Step 2: 1-Line Code Preview */}
        {step === 2 && (
          <div className="space-y-4">
            <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>Pixel generated for <strong>{websiteUrl || 'your website'}</strong>.</span>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs text-slate-300 font-semibold">
                <span className="flex items-center gap-1.5">
                  <Code2 className="w-4 h-4 text-[#FF6131]" /> Embed in &lt;head&gt; or Tag Manager:
                </span>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1 text-[#FF6131] hover:underline cursor-pointer text-xs"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied!' : 'Copy Script'}</span>
                </button>
              </div>
              <pre className="p-3 rounded-xl bg-black/60 border border-white/10 text-emerald-300 text-xs font-mono overflow-x-auto whitespace-pre-wrap select-all">
                {scriptCode}
              </pre>
            </div>

            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 space-y-1">
              <div className="font-bold text-white flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-[#FF6131]" /> Included in your 14-Day Free Trial:
              </div>
              <ul className="list-disc list-inside space-y-0.5 text-slate-400 text-[11px]">
                <li>Infinite widget rotation & 29 premium brand themes</li>
                <li>Live visitor count-up animations & verified purchase alerts</li>
                <li>Target element visibility & exit-intent detector</li>
                <li>Multi-channel chat & 66text SMS triggers</li>
              </ul>
            </div>

            <div className="flex gap-2 pt-2">
              <button
                onClick={() => setStep(1)}
                className="py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 transition-colors"
              >
                Back
              </button>
              <button
                onClick={handleFinish}
                className="flex-1 py-3 rounded-xl bg-gradient-to-r from-[#FF6131] to-[#FF7F59] text-white font-bold text-sm shadow-lg shadow-[#FF6131]/25 hover:shadow-[#FF6131]/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Launch My Free Trial</span>
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Success Confirmation */}
        {step === 3 && (
          <div className="py-6 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#FF6131] to-[#FF8E69] text-white mx-auto flex items-center justify-center shadow-lg shadow-[#FF6131]/40 animate-pulse">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white">Your Trial is Live & Ready!</h4>
              <p className="text-xs text-slate-300 mt-1 max-w-sm mx-auto">
                We've activated your 14-day full access pass for <strong>{websiteUrl || 'your website'}</strong>.
                You can now customize widgets, set behavioral triggers, and monitor real-time conversions.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onClose}
                className="w-full py-3 rounded-xl bg-[#FF6131] text-white font-bold text-sm hover:bg-[#e05226] transition-colors"
              >
                Enter Converstar Workspace
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
