import React, { useState } from 'react';
import { PageId } from '../../types';
import {
  MessageSquare,
  Smartphone,
  Send,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Phone,
  Check,
  ShieldCheck,
  Zap,
  Clock,
  Flame
} from 'lucide-react';

interface DirectChatPageProps {
  onNavigate: (page: PageId) => void;
  onOpenTrial: () => void;
}

export const DirectChatPage: React.FC<DirectChatPageProps> = ({ onNavigate, onOpenTrial }) => {
  const [activeChannel, setActiveChannel] = useState<'whatsapp' | 'telegram' | 'messenger'>('whatsapp');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [smsSubmitted, setSmsSubmitted] = useState(false);
  const [leadName, setLeadName] = useState('');
  const [leadEmail, setLeadEmail] = useState('');
  const [collectorSubmitted, setCollectorSubmitted] = useState(false);

  const handleSmsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber) return;
    setSmsSubmitted(true);
  };

  const handleCollectorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadEmail) return;
    setCollectorSubmitted(true);
  };

  return (
    <div className="pt-28 pb-20 bg-[#0D1F23] text-white">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" /> Feature Deep-Dive: Pillar 03
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Direct Chat & Lead Capture:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              Close the Sale While Their Wallet is Still on the Desk
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
            Every unanswered question is a lost sale. Converstar’s Direct Chat & Lead Capture engine instantly connects you to your hottest prospects via WhatsApp, Telegram, Messenger, and SMS, right at the exact microsecond they are ready to buy.
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
              <span>View Pricing Plans</span>
            </button>
          </div>
        </div>

        {/* Feature 1: Multi-Channel Chat */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 pb-16 border-b border-white/10">
          <div className="space-y-6">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
              The Silent Killer of Conversions: "I'll Think About It"
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-snug">
              Multi-Channel Chat: Close Them Where They Live
            </h2>
            <p className="text-slate-300 leading-relaxed">
              When a prospect lands on your page, their buying temperature is boiling. They are looking for a solution. But the moment they have a single question or objection, the momentum stops. If they have to search for a clunky &quot;Contact Us&quot; page or fill out a slow email support ticket, you have already lost them.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Stop forcing your prospects to use communication channels they hate. Converstar integrates flawlessly with the platforms your buyers already use every single day: WhatsApp, Telegram, & Facebook Messenger. Deploy instant click-to-chat widgets directly on your site. You are no longer just a website; you are a direct contact right next to their friends and family.
            </p>

            <div className="space-y-2 pt-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>One-click direct opening in visitor's native mobile/desktop app</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Pre-filled customizable intent messages (e.g. "I need help with Pro plan")</span>
              </div>
            </div>
          </div>

          {/* Interactive Chat Widget Previewer */}
          <div className="p-8 rounded-3xl glass-panel-glow border border-white/15 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-xs font-bold text-white flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                Multi-Channel Chat Sandbox
              </span>
              <span className="text-[11px] text-emerald-400 font-semibold">Online & Ready</span>
            </div>

            {/* Channel Tabs */}
            <div className="flex gap-2">
              <button
                onClick={() => setActiveChannel('whatsapp')}
                className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                  activeChannel === 'whatsapp' ? 'bg-[#25D366] text-black shadow-lg' : 'bg-white/5 text-slate-300'
                }`}
              >
                WhatsApp
              </button>
              <button
                onClick={() => setActiveChannel('telegram')}
                className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                  activeChannel === 'telegram' ? 'bg-[#229ED9] text-white shadow-lg' : 'bg-white/5 text-slate-300'
                }`}
              >
                Telegram
              </button>
              <button
                onClick={() => setActiveChannel('messenger')}
                className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                  activeChannel === 'messenger' ? 'bg-[#0084FF] text-white shadow-lg' : 'bg-white/5 text-slate-300'
                }`}
              >
                Messenger
              </button>
            </div>

            {/* Live Chat Bubble Mockup */}
            <div className="p-5 rounded-2xl bg-[#091518] border border-white/10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                  CS
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Converstar Support Rep</div>
                  <div className="text-[10px] text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Typically replies in under 1 minute
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/5 text-xs text-slate-200 leading-relaxed">
                👋 Hey there! Have any questions about our 29 themes, exit-intent triggers, or agency white-labeling? Let's chat!
              </div>

              <a
                href="#chat-demo"
                onClick={(e) => {
                  e.preventDefault();
                  alert(`Starting instant ${activeChannel.toUpperCase()} conversation simulation...`);
                }}
                className={`w-full py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 cursor-pointer transition-all ${
                  activeChannel === 'whatsapp'
                    ? 'bg-[#25D366] text-black hover:bg-[#20bd5a]'
                    : activeChannel === 'telegram'
                    ? 'bg-[#229ED9] text-white hover:bg-[#1f8fc4]'
                    : 'bg-[#0084FF] text-white hover:bg-[#0074e0]'
                }`}
              >
                <Send className="w-3.5 h-3.5" />
                <span>Open Instant {activeChannel === 'whatsapp' ? 'WhatsApp' : activeChannel === 'telegram' ? 'Telegram' : 'Messenger'} Chat</span>
              </a>
            </div>
          </div>
        </div>

        {/* Feature 2: 66text SMS Integration & Request Collectors */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 pb-16 border-b border-white/10">
          
          {/* SMS Simulator Card */}
          <div className="p-8 rounded-3xl glass-panel-glow border border-white/15 space-y-6 order-2 lg:order-1">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-xs font-bold text-white flex items-center gap-2">
                <Smartphone className="w-3.5 h-3.5 text-[#FF6131]" />
                66text SMS Automation Engine
              </span>
              <span className="text-[11px] font-mono text-emerald-400 font-bold">98% Open Rate</span>
            </div>

            {!smsSubmitted ? (
              <form onSubmit={handleSmsSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#FF6131]" /> Test Instant SMS Delivery
                  </label>
                  <input
                    type="tel"
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="+1 (555) 019-2834"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-slate-500 focus:border-[#FF6131] outline-none font-mono"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#FF6131] text-white font-bold text-xs shadow-lg shadow-[#FF6131]/25 hover:bg-[#e05226] transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Test Abandoned Cart SMS Trigger</span>
                </button>
              </form>
            ) : (
              <div className="p-5 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-xs text-emerald-300 space-y-2 text-center">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                <div className="font-bold text-white text-sm">SMS Trigger Fired to {phoneNumber}</div>
                <p className="text-[11px] text-emerald-200">
                  Simulated message: &quot;Your cart is reserved with 15% discount for the next 15 minutes! Click to finish order: https://cvr.st/8492&quot;
                </p>
                <button
                  onClick={() => setSmsSubmitted(false)}
                  className="mt-2 text-xs text-slate-300 underline"
                >
                  Reset SMS test
                </button>
              </div>
            )}
          </div>

          <div className="space-y-6 order-1 lg:order-2">
            <span className="text-xs font-bold text-[#FF6131] uppercase tracking-wider">
              66text SMS Integration: The Ultimate Unfair Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-snug">
              98% Open Rate SMS Triggers & Exit-Intent Request Collectors
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Email is powerful, but text messages boast a staggering 98% open rate. With Converstar’s seamless SMS integration, you can capture phone numbers directly from your behavioral pop-ups and trigger instant text messages. Whether it is delivering a highly anticipated discount code or a cart abandonment reminder, you reach your prospects instantly, right in the palm of their hand.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Not every visitor is ready to buy on day one, but that does not mean you should let them leave empty-handed. Our advanced Request Collectors act as high-converting digital nets. Set them to trigger via exit-intent or specific time-on-page, capturing highly qualified leads effortlessly.
            </p>
          </div>

        </div>

        {/* Closing CTA */}
        <div className="p-10 rounded-3xl glass-panel-glow border-2 border-emerald-500/30 text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Stop Hiding Behind Contact Forms. Start Closing Deals.
          </h3>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            The era of making your customers wait 24-48 hours for a response is dead. Put an invisible 24/7 closer on your website today.
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
              <span>View Pricing Plans</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
