import React, { useState } from 'react';
import {
  X,
  Flame,
  Percent,
  Clock,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Copy,
  Check
} from 'lucide-react';

interface ExitIntentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onClaim: (code: string) => void;
}

export const ExitIntentModal: React.FC<ExitIntentModalProps> = ({ isOpen, onClose, onClaim }) => {
  const [email, setEmail] = useState('');
  const [claimed, setClaimed] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const couponCode = 'CONVERT15';

  const handleClaim = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setClaimed(true);
    onClaim(couponCode);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(couponCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-lg animate-in fade-in duration-300">
      <div
        id="exit-intent-overlay-card"
        className="relative w-full max-w-lg p-6 sm:p-8 rounded-3xl bg-[#0D1F23] border-2 border-[#FF6131] shadow-2xl text-white overflow-hidden animate-in zoom-in-95 duration-200"
        style={{
          boxShadow: '0 25px 70px -10px rgba(0, 0, 0, 0.95), 0 0 60px 0 rgba(255, 97, 49, 0.4)'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Exit Intent Banner */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6131]/20 border border-[#FF6131]/40 text-[#FF6131] text-xs font-bold uppercase tracking-wider mb-4">
          <Clock className="w-3.5 h-3.5 animate-spin" /> Wait! Before you leave...
        </div>

        <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2">
          Unlock an Instant <span className="text-[#FF6131]">15% Off</span> Your First Plan
        </h3>

        <p className="text-sm text-slate-300 mb-6 leading-relaxed">
          Stop losing 99% of your traffic today. Recover your very first abandoned cart or convert your first lead tonight.
        </p>

        {!claimed ? (
          <form onSubmit={handleClaim} className="space-y-3">
            <div>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email to reveal promo code"
                className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/20 text-white placeholder-slate-400 focus:border-[#FF6131] focus:ring-1 focus:ring-[#FF6131] outline-none text-sm"
                autoFocus
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#FF6131] to-[#FF7F59] text-white font-bold text-sm shadow-lg shadow-[#FF6131]/30 hover:shadow-[#FF6131]/50 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Percent className="w-4 h-4" />
              <span>Claim My 15% VIP Discount</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        ) : (
          <div className="space-y-4 py-2">
            <div className="p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-sm space-y-2">
              <div className="flex items-center gap-2 font-bold text-white">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>Coupon Activated Successfully!</span>
              </div>
              <div className="flex items-center justify-between bg-black/40 p-2.5 rounded-xl border border-emerald-500/20">
                <span className="font-mono text-lg font-extrabold tracking-widest text-[#FF6131]">
                  {couponCode}
                </span>
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#FF6131] text-white hover:bg-[#e05226] transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm transition-colors"
            >
              Continue Exploring Converstar
            </button>
          </div>
        )}

        <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-[#FF6131]" /> 100% Risk-Free Guarantee
          </span>
          <span>Single-use code • Expires in 24 hours</span>
        </div>
      </div>
    </div>
  );
};
