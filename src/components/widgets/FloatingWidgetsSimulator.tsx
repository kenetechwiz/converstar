import React, { useState, useEffect } from 'react';
import {
  ShoppingBag,
  Users,
  Star,
  Sparkles,
  ShieldCheck,
  X,
  Play,
  Pause,
  Palette,
  CheckCircle2,
  Clock,
  ArrowRight,
  Gift,
  Flame
} from 'lucide-react';
import { LiveNotificationWidget } from '../../types';
import { WIDGET_THEMES } from '../../data/saasContent';

const SAMPLE_WIDGETS: LiveNotificationWidget[] = [
  {
    id: 'notif-1',
    type: 'purchase',
    title: 'Sarah from Austin, TX',
    subtitle: 'Just purchased Converstar Pro (Annual)',
    timeAgo: '12 seconds ago',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
    productImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=100&auto=format&fit=crop&q=80'
  },
  {
    id: 'notif-2',
    type: 'visitor_counter',
    title: 'High Demand Alert',
    subtitle: '1,429 people are viewing this offer right now',
    timeAgo: 'Live Telemetry',
    count: 1429
  },
  {
    id: 'notif-3',
    type: 'review',
    title: 'Magnus I. — SaaS Founder',
    subtitle: '“Recovered $8,400 in abandoned signups in our first 48 hours. Unreal tool!”',
    rating: 5,
    timeAgo: '2 minutes ago',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80'
  },
  {
    id: 'notif-4',
    type: 'purchase',
    title: 'Mark from London, UK',
    subtitle: 'Just bought 2 items (Ultimate Bundle)',
    timeAgo: '34 seconds ago',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80'
  },
  {
    id: 'notif-5',
    type: 'pro_badge',
    title: 'Guaranteed 14-Day ROI',
    subtitle: 'Verified 99.99% Uptime & SOC-2 Enterprise Ready',
    timeAgo: 'Ironclad Guarantee'
  }
];

interface FloatingWidgetsSimulatorProps {
  onOpenTrial: () => void;
}

export const FloatingWidgetsSimulator: React.FC<FloatingWidgetsSimulatorProps> = ({ onOpenTrial }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [activeThemeId, setActiveThemeId] = useState('dark-coral');
  const [isConfigOpen, setIsConfigOpen] = useState(false);

  // Rotation loop
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      // First fade out
      setIsVisible(false);

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % SAMPLE_WIDGETS.length);
        setIsVisible(true);
      }, 400); // 400ms transition time
    }, 5500);

    return () => clearInterval(timer);
  }, [isPaused]);

  const activeWidget = SAMPLE_WIDGETS[currentIndex];
  const activeTheme = WIDGET_THEMES.find((t) => t.id === activeThemeId) || WIDGET_THEMES[0];

  return (
    <div className="fixed bottom-5 left-5 z-40 max-w-sm w-full pointer-events-none">
      
      {/* Floating Notification Box */}
      <div className="pointer-events-auto transition-all duration-500 transform">
        {isVisible && (
          <div
            id="floating-live-widget"
            className={`p-3.5 sm:p-4 rounded-2xl shadow-2xl transition-all duration-300 border ${activeTheme.bgClass} ${activeTheme.borderClass} ${activeTheme.textClass} hover:scale-[1.02]`}
            style={{
              boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.7), 0 0 25px -5px rgba(255, 97, 49, 0.2)'
            }}
          >
            <div className="flex items-start gap-3">
              
              {/* Icon / Avatar preview */}
              <div className="relative shrink-0">
                {activeWidget.avatar ? (
                  <img
                    src={activeWidget.avatar}
                    alt={activeWidget.title}
                    className="w-11 h-11 rounded-full object-cover border-2 border-[#FF6131]/60 shadow-md"
                    referrerPolicy="no-referrer"
                  />
                ) : activeWidget.type === 'visitor_counter' ? (
                  <div className="w-11 h-11 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                    <Users className="w-6 h-6 animate-pulse" />
                  </div>
                ) : activeWidget.type === 'pro_badge' ? (
                  <div className="w-11 h-11 rounded-full bg-[#FF6131]/20 border border-[#FF6131]/40 flex items-center justify-center text-[#FF6131]">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                ) : (
                  <div className="w-11 h-11 rounded-full bg-sky-500/20 border border-sky-500/40 flex items-center justify-center text-sky-400">
                    <ShoppingBag className="w-6 h-6" />
                  </div>
                )}
                
                {/* Live pulsing dot indicator */}
                <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[#0D1F23] flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                </span>
              </div>

              {/* Content text */}
              <div className="flex-1 min-w-0 pr-4">
                <div className="flex items-center justify-between gap-1">
                  <h4 className="text-xs font-bold truncate leading-tight flex items-center gap-1.5">
                    {activeWidget.title}
                    {activeWidget.type === 'review' && (
                      <span className="flex items-center text-amber-400 text-[10px]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-2.5 h-2.5 fill-current" />
                        ))}
                      </span>
                    )}
                  </h4>
                </div>

                <p className="text-xs mt-0.5 opacity-90 leading-snug line-clamp-2">
                  {activeWidget.subtitle}
                </p>

                <div className="flex items-center justify-between mt-2 pt-1 border-t border-white/10 text-[10px] opacity-75">
                  <span className="flex items-center gap-1">
                    <Clock className="w-2.5 h-2.5" />
                    {activeWidget.timeAgo}
                  </span>
                  <span className="font-semibold flex items-center gap-1 text-[#FF6131]">
                    <Sparkles className="w-2.5 h-2.5" /> Verified by Converstar
                  </span>
                </div>
              </div>

              {/* Dismiss Button */}
              <button
                id="widget-dismiss-btn"
                onClick={() => setIsVisible(false)}
                className="text-slate-400 hover:text-white transition-colors p-1"
                aria-label="Dismiss alert"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Simulator Control Bar */}
      <div className="pointer-events-auto mt-2 flex items-center gap-1.5 bg-[#0D1F23]/90 backdrop-blur-md border border-white/10 p-1.5 rounded-full shadow-lg text-[11px] text-slate-300 w-fit">
        <span className="px-2 font-bold text-[#FF6131] flex items-center gap-1">
          <Flame className="w-3 h-3" /> Live Widget Engine
        </span>
        
        <button
          onClick={() => setIsPaused(!isPaused)}
          className="px-2 py-1 rounded-full bg-white/5 hover:bg-white/10 text-white flex items-center gap-1 transition-colors"
          title={isPaused ? 'Resume live loop' : 'Pause rotation'}
        >
          {isPaused ? <Play className="w-3 h-3 text-emerald-400" /> : <Pause className="w-3 h-3 text-amber-400" />}
          <span>{isPaused ? 'Resume' : 'Pause'}</span>
        </button>

        <button
          onClick={() => setIsConfigOpen(!isConfigOpen)}
          className="px-2 py-1 rounded-full bg-white/5 hover:bg-white/10 text-white flex items-center gap-1 transition-colors"
          title="Switch 29 themes"
        >
          <Palette className="w-3 h-3 text-[#FF6131]" />
          <span>Themes</span>
        </button>

        <button
          onClick={() => {
            setCurrentIndex((prev) => (prev + 1) % SAMPLE_WIDGETS.length);
            setIsVisible(true);
          }}
          className="px-2 py-1 rounded-full bg-[#FF6131]/20 text-[#FF6131] hover:bg-[#FF6131]/30 font-semibold flex items-center gap-0.5"
        >
          Next
        </button>
      </div>

      {/* Quick Theme Switcher Popup */}
      {isConfigOpen && (
        <div
          id="theme-quick-picker"
          className="pointer-events-auto mt-2 p-3 rounded-xl bg-[#0D1F23] border border-white/15 shadow-2xl space-y-2 animate-in fade-in"
        >
          <div className="flex items-center justify-between text-xs font-bold text-white border-b border-white/10 pb-1.5">
            <span>Choose from 29 Widget Themes</span>
            <button onClick={() => setIsConfigOpen(false)} className="text-slate-400 hover:text-white">
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-1.5 max-h-40 overflow-y-auto pr-1">
            {WIDGET_THEMES.map((theme) => (
              <button
                key={theme.id}
                onClick={() => {
                  setActiveThemeId(theme.id);
                  setIsVisible(true);
                }}
                className={`p-1.5 rounded-lg text-left text-[11px] font-medium flex items-center justify-between border transition-all ${
                  activeThemeId === theme.id
                    ? 'border-[#FF6131] bg-[#FF6131]/10 text-white'
                    : 'border-white/5 bg-white/5 text-slate-300 hover:bg-white/10'
                }`}
              >
                <span>{theme.name}</span>
                {activeThemeId === theme.id && <CheckCircle2 className="w-3 h-3 text-[#FF6131]" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
