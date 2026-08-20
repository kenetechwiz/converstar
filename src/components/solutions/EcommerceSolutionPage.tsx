import React, { useState } from 'react';
import { PageId } from '../../types';
import {
  ShoppingBag,
  Clock,
  Flame,
  Gift,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  DollarSign,
  Sparkles,
  Percent
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface EcommerceSolutionPageProps {
  onNavigate: (page: PageId) => void;
  onOpenTrial: () => void;
}

export const EcommerceSolutionPage: React.FC<EcommerceSolutionPageProps> = ({
  onNavigate,
  onOpenTrial
}) => {
  const [scratched, setScratched] = useState(false);

  const handleScratch = () => {
    setScratched(true);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 }
    });
  };

  return (
    <div className="pt-28 pb-20 bg-[#0D1F23] text-white">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider">
            <ShoppingBag className="w-3.5 h-3.5" /> Solution: For E-commerce Brands
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Stop Letting <span className="text-[#FF6131]">70% of Your Carts</span> Die at Checkout
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
            You are paying Mark Zuckerberg and TikTok a fortune to drive traffic to your store, only to watch visitors abandon their carts at the finish line. Converstar is your automated rescue engine that turns dead checkouts into captured revenue instantly.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenTrial}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-[#FF6131] to-[#FF7F59] text-white font-bold text-base shadow-xl shadow-[#FF6131]/30 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Plug the Leak Today — Start Your Free Trial</span>
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

        {/* Section 1: The Most Expensive Leak & Live Purchase Notifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 pb-16 border-b border-white/10">
          <div className="space-y-6">
            <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">
              The Most Expensive Leak in Your E-commerce Store
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-snug">
              Live Purchase Notifications: The Digital "Crowded Store" Effect
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Here is the brutal truth about running an online store today: getting the click is not the hard part anymore. Getting them to pull out their credit card is. Industry averages show that nearly 70% of shoppers will add an item to their cart and then simply close the tab.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Nobody wants to eat in an empty restaurant, and nobody wants to be the only person buying from your store. Converstar's Live Purchase Notifications create a digital frenzy. When a prospect is browsing your product pages, they will see a constant, smooth-looping stream of real-time pop-ups showing exactly who else is buying:
            </p>
            
            <ul className="space-y-2 text-sm text-slate-200 font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF6131]" />
                <span>&quot;Sarah from Texas just purchased the Ultimate Bundle.&quot;</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF6131]" />
                <span>&quot;Mark from London just bought 2 items.&quot;</span>
              </li>
            </ul>
          </div>

          {/* Interactive Live Purchase Widget Showcase */}
          <div className="p-8 rounded-3xl glass-panel-glow border border-white/15 space-y-4">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center justify-between">
              <span>Live Shopify / WooCommerce Simulation</span>
              <span className="text-emerald-400">Sync Active</span>
            </div>

            <div className="p-4 rounded-2xl bg-[#12262B] border border-[#FF6131]/40 flex items-center gap-3 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                alt="Sarah"
                className="w-12 h-12 rounded-full object-cover border-2 border-[#FF6131]"
                referrerPolicy="no-referrer"
              />
              <div className="flex-1">
                <div className="text-xs font-bold text-white">Sarah from Texas</div>
                <div className="text-xs text-slate-300">Just purchased the Ultimate Bundle ($149)</div>
                <div className="text-[10px] text-[#FF6131] font-semibold mt-0.5">Verified by Shopify Webhook</div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#091518] border border-white/10 flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                alt="Mark"
                className="w-12 h-12 rounded-full object-cover border-2 border-sky-400"
                referrerPolicy="no-referrer"
              />
              <div className="flex-1">
                <div className="text-xs font-bold text-white">Mark from London</div>
                <div className="text-xs text-slate-300">Just bought 2 items (Express Delivery)</div>
                <div className="text-[10px] text-sky-400 font-semibold mt-0.5">Verified Checkout</div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Exit-Intent Cart Rescue & Smart Coupon Gamification */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 pb-16 border-b border-white/10">
          
          {/* Gamified Scratch-To-Win Coupon Card */}
          <div className="p-8 rounded-3xl glass-panel-glow border border-white/15 space-y-6 order-2 lg:order-1 text-center">
            <div className="text-xs font-bold text-[#FF6131] uppercase tracking-wider flex items-center justify-center gap-1.5">
              <Gift className="w-4 h-4" /> Gamified Scratch-To-Win Discount Distributor
            </div>

            <div className="p-6 rounded-2xl bg-[#091518] border border-white/10 space-y-4">
              <h4 className="text-sm font-bold text-white">
                Interactive Margin-Protecting Promo Card
              </h4>
              <p className="text-xs text-slate-300">
                Only triggers when visitor has been on product page for 60s or attempts exit.
              </p>

              {!scratched ? (
                <button
                  onClick={handleScratch}
                  className="w-full py-6 rounded-2xl bg-gradient-to-r from-amber-500/20 to-orange-500/20 border-2 border-dashed border-orange-400/50 hover:border-orange-400 text-orange-300 font-bold text-sm flex flex-col items-center justify-center gap-2 cursor-pointer transition-all hover:scale-102"
                >
                  <Sparkles className="w-6 h-6 text-amber-400 animate-spin" />
                  <span>Tap to Scratch & Reveal 15% VIP Promo</span>
                  <span className="text-[10px] text-slate-400 font-normal">Saves order before bounce</span>
                </button>
              ) : (
                <div className="p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 space-y-2">
                  <div className="text-xs font-bold text-white">🎉 Code Unlocked: <span className="font-mono text-lg text-[#FF6131]">RESCUE15</span></div>
                  <div className="text-[11px] text-slate-300">Applied automatically at Shopify checkout.</div>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-6 order-1 lg:order-2">
            <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">
              Smart Coupon Distributors: Protect Your Profit Margins
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-snug">
              Exit-Intent Cart Rescue: Catch Them by the Collar
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Do not wait to send an abandoned cart email 24 hours after they have already bought from your competitor. Save the sale while they are still in the room.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Stop giving away 15% off to people who were already going to buy at full price. Converstar allows you to deploy intelligent Coupon Distributors that only trigger based on specific behavioral rules:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Wait until a user has been on a product page for 60 seconds.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Trigger a discount only when they scroll past the pricing section.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Deploy a scratch-to-win gamified pop-up to capture email in exchange for shipping.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Closing CTA */}
        <div className="p-10 rounded-3xl glass-panel-glow border-2 border-orange-500/30 text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Turn Your Traffic into Actual Cash
          </h3>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            If this tool recovers just one single abandoned cart for your store tonight, it has paid for itself. Every rescued checkout after that is pure, automated profit scaling your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenTrial}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#FF6131] to-[#FF7F59] text-white font-bold text-sm shadow-lg shadow-[#FF6131]/30 flex items-center gap-2 cursor-pointer"
            >
              <span>Plug the Leak Today — Start Your Free Trial</span>
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
