import React, { useState, useEffect, useRef } from 'react';
import { PageId } from '../../types';
import {
  Flame,
  ChevronDown,
  Sparkles,
  Users,
  Target,
  MessageSquare,
  BarChart3,
  ShoppingBag,
  Rocket,
  Briefcase,
  Layers,
  FileCode2,
  BookOpen,
  ShieldCheck,
  Menu,
  X,
  ArrowRight,
  Zap,
  Globe,
  Radio
} from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenAuth: (mode?: 'login' | 'register') => void;
  onOpenTrial?: () => void;
  onOpenFreeTrial?: () => void;
  liveVisitorsCount?: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenAuth,
  onOpenTrial,
  onOpenFreeTrial,
  liveVisitorsCount = 1428
}) => {
  const handleOpenTrial = onOpenTrial || onOpenFreeTrial || (() => {});
  const safeLiveCount = liveVisitorsCount ?? 1428;
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="global-navbar"
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0D1F23]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/40 py-3'
          : 'bg-transparent border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <button
            id="brand-logo-btn"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 group text-left cursor-pointer focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#FF6131] to-[#FF8E69] p-0.5 shadow-lg shadow-[#FF6131]/30 group-hover:shadow-[#FF6131]/50 transition-all duration-300">
              <div className="w-full h-full bg-[#0D1F23] rounded-[10px] flex items-center justify-center">
                <Flame className="w-5 h-5 text-[#FF6131] transition-transform duration-300 group-hover:scale-110" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-extrabold tracking-tight text-white font-sans">
                  Conver<span className="text-[#FF6131]">star</span>
                </span>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-[#FF6131]/15 text-[#FF6131] border border-[#FF6131]/30">
                  v2.8
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium hidden sm:block">
                Conversion Rate Optimization SaaS
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            
            {/* Features Megamenu */}
            <div className="relative">
              <button
                id="nav-features-btn"
                onClick={() => toggleDropdown('features')}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeDropdown === 'features' || currentPage.startsWith('features-')
                    ? 'text-[#FF6131] bg-white/5'
                    : 'text-slate-200 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>Features</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === 'features' ? 'rotate-180 text-[#FF6131]' : ''
                  }`}
                />
              </button>

              {/* Megamenu Dropdown */}
              {activeDropdown === 'features' && (
                <div
                  id="features-megamenu-panel"
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[600px] p-4 rounded-2xl glass-panel-glow shadow-2xl animate-in fade-in zoom-in-95 duration-200"
                >
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 px-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#FF6131] flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" /> High-Impact Conversion Pillars
                    </span>
                    <span className="text-[11px] text-slate-400">All 4 pillars in 1 line of script</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      id="megamenu-social-proof"
                      onClick={() => handleNavClick('features-social-proof')}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-all text-left group border border-transparent hover:border-white/10"
                    >
                      <div className="p-2.5 rounded-lg bg-[#FF6131]/15 text-[#FF6131] group-hover:scale-105 transition-transform">
                        <Users className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white group-hover:text-[#FF6131] transition-colors flex items-center gap-1.5">
                          Social Proof & Urgency
                          <span className="text-[9px] px-1.5 py-0.5 bg-[#FF6131]/20 text-[#FF6131] rounded font-semibold">Hot</span>
                        </div>
                        <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                          Infinite widget loops, live count-ups, and inline reviews.
                        </p>
                      </div>
                    </button>

                    <button
                      id="megamenu-targeting"
                      onClick={() => handleNavClick('features-targeting')}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-all text-left group border border-transparent hover:border-white/10"
                    >
                      <div className="p-2.5 rounded-lg bg-sky-500/15 text-sky-400 group-hover:scale-105 transition-transform">
                        <Target className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white group-hover:text-sky-400 transition-colors">
                          Targeting & Triggers
                        </div>
                        <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                          Element visibility, exit-intent vectors, and global AI translation.
                        </p>
                      </div>
                    </button>

                    <button
                      id="megamenu-chat"
                      onClick={() => handleNavClick('features-chat')}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-all text-left group border border-transparent hover:border-white/10"
                    >
                      <div className="p-2.5 rounded-lg bg-emerald-500/15 text-emerald-400 group-hover:scale-105 transition-transform">
                        <MessageSquare className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                          Direct Chat & SMS
                        </div>
                        <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                          WhatsApp, Telegram, 66text SMS, and lead capture nets.
                        </p>
                      </div>
                    </button>

                    <button
                      id="megamenu-analytics"
                      onClick={() => handleNavClick('features-analytics')}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-all text-left group border border-transparent hover:border-white/10"
                    >
                      <div className="p-2.5 rounded-lg bg-purple-500/15 text-purple-400 group-hover:scale-105 transition-transform">
                        <BarChart3 className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white group-hover:text-purple-400 transition-colors">
                          Analytics & Tracking
                        </div>
                        <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                          Real-time global maps, campaign ROI, and button clicks.
                        </p>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div className="relative">
              <button
                id="nav-solutions-btn"
                onClick={() => toggleDropdown('solutions')}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeDropdown === 'solutions' || currentPage.startsWith('solutions-')
                    ? 'text-[#FF6131] bg-white/5'
                    : 'text-slate-200 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>Solutions</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === 'solutions' ? 'rotate-180 text-[#FF6131]' : ''
                  }`}
                />
              </button>

              {activeDropdown === 'solutions' && (
                <div
                  id="solutions-dropdown-panel"
                  className="absolute top-full left-0 mt-2 w-80 p-3 rounded-2xl glass-panel-glow shadow-2xl animate-in fade-in zoom-in-95 duration-200"
                >
                  <div className="space-y-1">
                    <button
                      id="dropdown-sol-ecommerce"
                      onClick={() => handleNavClick('solutions-ecommerce')}
                      className="w-full flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-all text-left group"
                    >
                      <div className="p-2 rounded-lg bg-orange-500/15 text-orange-400">
                        <ShoppingBag className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white group-hover:text-[#FF6131]">
                          For E-commerce
                        </div>
                        <div className="text-xs text-slate-400">Save 70% cart abandonment</div>
                      </div>
                    </button>

                    <button
                      id="dropdown-sol-saas"
                      onClick={() => handleNavClick('solutions-saas')}
                      className="w-full flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-all text-left group"
                    >
                      <div className="p-2 rounded-lg bg-cyan-500/15 text-cyan-400">
                        <Rocket className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white group-hover:text-cyan-400">
                          For SaaS & Startups
                        </div>
                        <div className="text-xs text-slate-400">Slash CAC & track SPA routes</div>
                      </div>
                    </button>

                    <button
                      id="dropdown-sol-agencies"
                      onClick={() => handleNavClick('solutions-agencies')}
                      className="w-full flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-all text-left group"
                    >
                      <div className="p-2 rounded-lg bg-indigo-500/15 text-indigo-400">
                        <Briefcase className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white group-hover:text-indigo-400">
                          For Agencies & Marketers
                        </div>
                        <div className="text-xs text-slate-400">White-label & team workspace</div>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Pricing */}
            <button
              id="nav-pricing-btn"
              onClick={() => handleNavClick('pricing')}
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                currentPage === 'pricing'
                  ? 'text-[#FF6131] bg-white/5'
                  : 'text-slate-200 hover:text-white hover:bg-white/5'
              }`}
            >
              Pricing
            </button>

            {/* Resources Dropdown */}
            <div className="relative">
              <button
                id="nav-resources-btn"
                onClick={() => toggleDropdown('resources')}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeDropdown === 'resources' || currentPage.startsWith('resources-')
                    ? 'text-[#FF6131] bg-white/5'
                    : 'text-slate-200 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>Resources</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === 'resources' ? 'rotate-180 text-[#FF6131]' : ''
                  }`}
                />
              </button>

              {activeDropdown === 'resources' && (
                <div
                  id="resources-dropdown-panel"
                  className="absolute top-full left-0 mt-2 w-72 p-3 rounded-2xl glass-panel-glow shadow-2xl animate-in fade-in zoom-in-95 duration-200"
                >
                  <div className="space-y-1">
                    <button
                      id="dropdown-res-integrations"
                      onClick={() => handleNavClick('resources-integrations')}
                      className="w-full flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-all text-left group"
                    >
                      <Layers className="w-4 h-4 text-slate-300 group-hover:text-[#FF6131]" />
                      <div>
                        <div className="text-sm font-medium text-white group-hover:text-[#FF6131]">Integrations Directory</div>
                        <div className="text-xs text-slate-400">Shopify, WordPress, Zapier</div>
                      </div>
                    </button>
                    <button
                      id="dropdown-res-docs"
                      onClick={() => handleNavClick('resources-docs')}
                      className="w-full flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-all text-left group"
                    >
                      <FileCode2 className="w-4 h-4 text-slate-300 group-hover:text-[#FF6131]" />
                      <div>
                        <div className="text-sm font-medium text-white group-hover:text-[#FF6131]">Help Center & Docs</div>
                        <div className="text-xs text-slate-400">1-min setup, CSS API</div>
                      </div>
                    </button>
                    <button
                      id="dropdown-res-blog"
                      onClick={() => handleNavClick('resources-blog')}
                      className="w-full flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-all text-left group"
                    >
                      <BookOpen className="w-4 h-4 text-slate-300 group-hover:text-[#FF6131]" />
                      <div>
                        <div className="text-sm font-medium text-white group-hover:text-[#FF6131]">Conversion Academy</div>
                        <div className="text-xs text-slate-400">CRO playbooks & guides</div>
                      </div>
                    </button>
                    <button
                      id="dropdown-res-security"
                      onClick={() => handleNavClick('resources-security')}
                      className="w-full flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-all text-left group"
                    >
                      <ShieldCheck className="w-4 h-4 text-slate-300 group-hover:text-[#FF6131]" />
                      <div>
                        <div className="text-sm font-medium text-white group-hover:text-[#FF6131]">Data Security & 2FA</div>
                        <div className="text-xs text-slate-400">Honeypots, CSRF, GDPR</div>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Live Visitor Pill & Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
              <Radio className="w-3 h-3 animate-pulse text-emerald-400" />
              <span>
                <strong className="font-bold text-white">{safeLiveCount.toLocaleString()}</strong> live active visitors
              </span>
            </div>

            <button
              id="navbar-login-btn"
              onClick={() => onOpenAuth('login')}
              className="px-4 py-2 text-sm font-medium text-slate-200 hover:text-white transition-colors cursor-pointer"
            >
              Log in
            </button>

            <button
              id="navbar-trial-btn"
              onClick={handleOpenTrial}
              className="relative group px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FF6131] to-[#FF7F59] text-white text-sm font-bold shadow-lg shadow-[#FF6131]/25 hover:shadow-[#FF6131]/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center gap-1.5"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer-menu"
          className="lg:hidden bg-[#0D1F23]/98 backdrop-blur-2xl border-b border-white/10 px-4 pt-4 pb-8 space-y-4 max-h-[85vh] overflow-y-auto"
        >
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>{safeLiveCount.toLocaleString()} visitors online now</span>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuth('login');
              }}
              className="text-xs font-semibold text-slate-300 underline"
            >
              Member Login
            </button>
          </div>

          <div className="space-y-1">
            <div className="text-xs font-bold uppercase tracking-wider text-[#FF6131] px-3 py-1">
              Conversion Features
            </div>
            <button
              onClick={() => handleNavClick('features-social-proof')}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-slate-200 hover:bg-white/5 text-left"
            >
              <span className="flex items-center gap-2">
                <Users className="w-4 h-4 text-[#FF6131]" /> Social Proof & Urgency
              </span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#FF6131]/20 text-[#FF6131]">Popular</span>
            </button>
            <button
              onClick={() => handleNavClick('features-targeting')}
              className="w-full flex items-center px-3 py-2.5 rounded-lg text-sm text-slate-200 hover:bg-white/5 text-left gap-2"
            >
              <Target className="w-4 h-4 text-sky-400" /> Targeting & Triggers
            </button>
            <button
              onClick={() => handleNavClick('features-chat')}
              className="w-full flex items-center px-3 py-2.5 rounded-lg text-sm text-slate-200 hover:bg-white/5 text-left gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" /> Direct Chat & Lead Capture
            </button>
            <button
              onClick={() => handleNavClick('features-analytics')}
              className="w-full flex items-center px-3 py-2.5 rounded-lg text-sm text-slate-200 hover:bg-white/5 text-left gap-2"
            >
              <BarChart3 className="w-4 h-4 text-purple-400" /> Real-Time Analytics
            </button>
          </div>

          <div className="space-y-1 pt-2 border-t border-white/10">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 px-3 py-1">
              Solutions
            </div>
            <button
              onClick={() => handleNavClick('solutions-ecommerce')}
              className="w-full flex items-center px-3 py-2 rounded-lg text-sm text-slate-200 hover:bg-white/5 text-left gap-2"
            >
              <ShoppingBag className="w-4 h-4 text-orange-400" /> E-commerce Stores
            </button>
            <button
              onClick={() => handleNavClick('solutions-saas')}
              className="w-full flex items-center px-3 py-2 rounded-lg text-sm text-slate-200 hover:bg-white/5 text-left gap-2"
            >
              <Rocket className="w-4 h-4 text-cyan-400" /> SaaS & Startups
            </button>
            <button
              onClick={() => handleNavClick('solutions-agencies')}
              className="w-full flex items-center px-3 py-2 rounded-lg text-sm text-slate-200 hover:bg-white/5 text-left gap-2"
            >
              <Briefcase className="w-4 h-4 text-indigo-400" /> Agencies & Marketers
            </button>
          </div>

          <div className="space-y-1 pt-2 border-t border-white/10">
            <button
              onClick={() => handleNavClick('pricing')}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold text-white bg-white/5"
            >
              <span>Pricing Plans</span>
              <span className="text-xs text-[#FF6131]">From $22/mo</span>
            </button>
            <button
              onClick={() => handleNavClick('resources-integrations')}
              className="w-full flex items-center px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-white/5 text-left gap-2"
            >
              <Layers className="w-4 h-4 text-slate-400" /> Integrations
            </button>
            <button
              onClick={() => handleNavClick('resources-docs')}
              className="w-full flex items-center px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-white/5 text-left gap-2"
            >
              <FileCode2 className="w-4 h-4 text-slate-400" /> Documentation & Setup
            </button>
          </div>

          <div className="pt-4 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleOpenTrial();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#FF6131] to-[#FF7F59] text-white font-bold text-center shadow-lg shadow-[#FF6131]/25"
            >
              Start 14-Day Free Trial
            </button>
            <p className="text-[11px] text-center text-slate-400">
              No credit card required • Instant 1-line script
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
