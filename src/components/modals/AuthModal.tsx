import React, { useState } from 'react';
import {
  X,
  Flame,
  CheckCircle2,
  Lock,
  Mail,
  ArrowRight,
  Shield,
  KeyRound
} from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (email: string) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [twoFactorCode, setTwoFactorCode] = useState('');
  const [step, setStep] = useState<'credentials' | 'twoFactor' | 'success'>('credentials');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (twoFactorEnabled) {
        setStep('twoFactor');
      } else {
        setStep('success');
        setTimeout(() => {
          onSuccess(email);
          onClose();
        }, 1200);
      }
    }, 800);
  };

  const handle2FASubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep('success');
      setTimeout(() => {
        onSuccess(email);
        onClose();
      }, 1200);
    }, 600);
  };

  const handleOAuthLogin = (provider: 'Apple' | 'GitHub' | 'Google') => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep('success');
      setTimeout(() => {
        onSuccess(`user@${provider.toLowerCase()}.com`);
        onClose();
      }, 1000);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        id="auth-modal-card"
        className="relative w-full max-w-md p-6 sm:p-8 rounded-3xl bg-[#0D1F23] border border-white/15 shadow-2xl text-white"
        style={{
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.9), 0 0 40px -10px rgba(255, 97, 49, 0.2)'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#FF6131] to-[#FF8E69] p-0.5 shadow-lg shadow-[#FF6131]/30">
            <div className="w-full h-full bg-[#0D1F23] rounded-[10px] flex items-center justify-center">
              <Flame className="w-5 h-5 text-[#FF6131]" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold">
              {step === 'twoFactor'
                ? 'Two-Factor Verification'
                : step === 'success'
                ? 'Welcome to Converstar'
                : authMode === 'login'
                ? 'Log In to Workspace'
                : 'Create Converstar Account'}
            </h3>
            <p className="text-xs text-slate-400">
              {step === 'twoFactor'
                ? 'Enter your 6-digit authenticator code'
                : 'Your single command center for high-converting social proof'}
            </p>
          </div>
        </div>

        {step === 'success' ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-bold text-white">Authentication Successful</h4>
            <p className="text-xs text-slate-400">Redirecting to your active CRO campaigns dashboard...</p>
          </div>
        ) : step === 'twoFactor' ? (
          <form onSubmit={handle2FASubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                <KeyRound className="w-3.5 h-3.5 text-[#FF6131]" /> Enter 6-Digit 2FA Token
              </label>
              <input
                type="text"
                maxLength={6}
                value={twoFactorCode}
                onChange={(e) => setTwoFactorCode(e.target.value.replace(/\D/g, ''))}
                placeholder="123456"
                className="w-full text-center tracking-[0.5em] text-2xl font-mono px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-[#FF6131] focus:ring-1 focus:ring-[#FF6131] outline-none"
                autoFocus
              />
            </div>
            <button
              type="submit"
              disabled={loading || twoFactorCode.length < 6}
              className="w-full py-3 rounded-xl bg-[#FF6131] text-white font-bold hover:bg-[#e05226] transition-colors disabled:opacity-50"
            >
              {loading ? 'Verifying...' : 'Verify & Enter Dashboard'}
            </button>
          </form>
        ) : (
          <div className="space-y-4">
            {/* Quick OAuth Providers (Featuring Apple & GitHub as requested in specs) */}
            <div className="grid grid-cols-2 gap-2.5">
              <button
                type="button"
                onClick={() => handleOAuthLogin('Apple')}
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold transition-all hover:border-white/20"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 170 170">
                  <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.07-7.7-7.9-12-14.49-6.09-9.35-10.9-19.98-14.43-31.9-3.53-11.92-5.3-23.08-5.3-33.48 0-14.45 3.65-26.65 10.95-36.6 7.3-9.95 16.52-15.03 27.67-15.24 4.89 0 10.12 1.34 15.7 4.02 5.58 2.68 9.38 4.08 11.4 4.2 1.63 0 5.48-1.45 11.55-4.35 6.07-2.9 11.39-4.22 15.96-3.96 12.39.75 22.37 5.54 29.93 14.37-10.87 6.53-16.19 15.54-15.96 27.02.23 9.46 3.88 17.38 10.95 23.76 7.07 6.38 15.55 9.94 25.43 10.68-2.61 7.61-5.75 15.08-9.42 22.41zM119.22 31.84c0-7.39 2.67-14.18 8.01-20.37 5.34-6.19 11.9-9.82 19.68-10.9 1.09 7.61-1.36 14.57-7.35 20.89-5.99 6.32-12.77 9.78-20.34 10.38z"/>
                </svg>
                <span>Continue with Apple</span>
              </button>

              <button
                type="button"
                onClick={() => handleOAuthLogin('GitHub')}
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold transition-all hover:border-white/20"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <span>GitHub Login</span>
              </button>
            </div>

            <div className="relative flex items-center justify-center my-4">
              <div className="border-t border-white/10 w-full" />
              <span className="bg-[#0D1F23] px-3 text-[11px] uppercase tracking-wider text-slate-400">
                Or with email
              </span>
            </div>

            {/* Email Form */}
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Work Email</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-slate-500 focus:border-[#FF6131] focus:ring-1 focus:ring-[#FF6131] outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Password</label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-slate-500 focus:border-[#FF6131] focus:ring-1 focus:ring-[#FF6131] outline-none transition-colors"
                  />
                </div>
              </div>

              {/* 2FA Demonstration checkbox */}
              <div className="flex items-center justify-between pt-1">
                <label className="flex items-center gap-2 text-xs text-slate-400 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={twoFactorEnabled}
                    onChange={(e) => setTwoFactorEnabled(e.target.checked)}
                    className="rounded bg-white/10 border-white/20 text-[#FF6131] focus:ring-[#FF6131]"
                  />
                  <span>Simulate 2FA Security Check</span>
                </label>
                <a href="#forgot" onClick={(e) => e.preventDefault()} className="text-xs text-[#FF6131] hover:underline">
                  Forgot?
                </a>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-[#FF6131] to-[#FF7F59] text-white font-bold text-sm shadow-lg shadow-[#FF6131]/25 hover:shadow-[#FF6131]/40 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <span>{loading ? 'Processing...' : authMode === 'login' ? 'Sign In' : 'Create Free Account'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            <div className="text-center pt-2">
              <button
                type="button"
                onClick={() => setAuthMode(authMode === 'login' ? 'signup' : 'login')}
                className="text-xs text-slate-400 hover:text-white transition-colors"
              >
                {authMode === 'login' ? (
                  <>Don't have an account? <span className="text-[#FF6131] font-semibold">Sign up free</span></>
                ) : (
                  <>Already have an account? <span className="text-[#FF6131] font-semibold">Log in</span></>
                )}
              </button>
            </div>
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-center gap-2 text-[11px] text-slate-400">
          <Shield className="w-3.5 h-3.5 text-emerald-400" />
          <span>SOC-2 Type II Certified • End-to-End Encrypted</span>
        </div>
      </div>
    </div>
  );
};
