import {
  PricingPlan,
  Testimonial,
  WidgetTheme,
  AnalyticsCountryMetric,
  FAQItem,
  IntegrationItem,
  BlogPost
} from '../types';

export const HERO_COPY = {
  headline: "Turn Bouncing Traffic Into Paying Customers on Autopilot",
  subheadline: "Stop losing 99% of your website visitors. Converstar is the ultimate conversion engine that uses behavioral triggers, infinite social proof, and direct chat to force sales and capture leads instantly—with just one simple line of code.",
  ctaPrimary: "Start Your Free Trial",
  ctaSecondary: "See Pricing",
  guaranteeBadge: "Instant 1-minute install • No credit card required • 14-day free trial"
};

export const AGITATION_COPY = {
  badge: "The Silent Conversion Leak",
  title: "You Are Bleeding Money (And You Don't Even Know It)",
  paragraphs: [
    "You spend your hard-earned time, energy, and capital driving traffic to your website through ads, SEO, and content. Yet, industry averages show that up to 99% of those visitors will look around and leave without taking a single action.",
    "That is the most silent, expensive leak in your business.",
    "Converstar builds an invisible, 24/7 safety net across your entire website. By deploying highly targeted micro-interactions the exact second a visitor hesitates, we stop the bounce, break down objections, and turn cold traffic into actual revenue."
  ],
  stats: [
    { value: "98.4%", label: "Average B2B/B2C Bounce Without CRO", alert: true },
    { value: "3.2x", label: "Average Conversion Lift With Converstar", alert: false },
    { value: "1 Line", label: "Zero-Latency Script Embed", alert: false }
  ]
};

export const FEATURE_PILLARS = [
  {
    id: 'features-social-proof',
    pillarNum: "01",
    name: "Social Proof & Urgency",
    tagline: "Engineer Undeniable Buying Pressure",
    description: "Continuously loop real-time purchases, 5-star reviews, and live count-ups to trigger instant FOMO and validate buying decisions.",
    highlights: ["Infinite Widget Rotation", "Dynamic Count-Up Animations", "Inline Reviews & Badges", "29 Themed Customizations"],
    badge: "Most Popular",
    color: "#FF6131"
  },
  {
    id: 'features-targeting',
    pillarNum: "02",
    name: "Targeting & Triggers",
    tagline: "Fire the Right Offer at the Exact Right Microsecond",
    description: "Sniper-level element visibility triggers, instant exit-intent mouse vector detection, AI language translation, and SPA tracking.",
    highlights: ["Target Element Visibility", "Exit-Intent Technology", "Global AI Auto-Translation", "Flawless SPA Tracking"],
    badge: "Smart AI",
    color: "#38BDF8"
  },
  {
    id: 'features-chat',
    pillarNum: "03",
    name: "Direct Chat & Lead Capture",
    tagline: "Close the Sale While Their Wallet is Still on the Desk",
    description: "Connect instantly via WhatsApp, Telegram, Messenger, 98% open-rate SMS triggers, and high-converting request collectors.",
    highlights: ["Multi-Channel Click-to-Chat", "66text SMS Integration (98% Open Rate)", "Exit-Intent Request Collectors", "Instant In-App FAQ Closers"],
    badge: "Instant Closing",
    color: "#10B981"
  },
  {
    id: 'features-analytics',
    pillarNum: "04",
    name: "Analytics & Tracking",
    tagline: "Stop Guessing, Start Scaling",
    description: "Track conversions down to specific button clicks, explore interactive live global visitor maps, and pinpoint top intent URLs.",
    highlights: ["Interactive Real-Time Global Map", "Campaign-Level Precision Stats", "Top Pages High-Intent Ranking", "Granular Button Click Heatmaps"],
    badge: "Deep Telemetry",
    color: "#A855F7"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    headline: "An absolute Must-Have for any solopreneur.",
    quote: "I’ve tried countless website tools promising conversion gains, but none delivered like Converstar. Its beginner-friendly features for capturing and nurturing leads have doubled my email list and sales in just months.",
    author: "Kundan Choudhary",
    role: "7-Figure Internet Marketer",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    highlightMetric: "+210% Email List & Sales",
    verified: true
  },
  {
    headline: "Immediate ROI on day one.",
    quote: "As a SaaS founder, engineering time is precious. Converstar solved our conversion leaks instantly. We pasted one line of code, and the AI took over, driving a massive jump in our lead capture and paid conversions. It runs completely on autopilot.",
    author: "Magnus I.",
    role: "SaaS Entrepreneur & Founder",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    highlightMetric: "+148% Paid Trial Conversions",
    verified: true
  },
  {
    headline: "Client retention skyrocketed across 42 stores.",
    quote: "Our agency was struggling with e-commerce cart drop-offs. Deploying Converstar's live purchase notifications and exit-intent cart rescue immediately saved thousands in checkout revenue for our clients.",
    author: "Elena Rostova",
    role: "VP of Growth, HyperScale Agency",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    highlightMetric: "Saved $84k/mo in Abandoned Carts",
    verified: true
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    tagline: "Essential conversion acceleration for solopreneurs & new websites.",
    monthlyPrice: 29,
    annualPrice: 22,
    limits: {
      monthlyImpressions: "50,000 Impressions/mo",
      domains: "1 Active Domain",
      teamMembers: "1 User Account",
      dataRetention: "30-Day Analytics History"
    },
    features: [
      "Infinite Widget Rotation (5 concurrent)",
      "Dynamic Live Visitor Counter",
      "Inline 5-Star Reviews & Trust Badges",
      "Standard Behavioral Pop-ups & Exit-Intent",
      "Basic Multi-Channel Chat (WhatsApp, Telegram)",
      "1-Minute Script Installation",
      "Community & Email Support"
    ],
    ctaText: "Start Free 14-Day Trial"
  },
  {
    id: "pro",
    name: "Pro Growth",
    tagline: "For scaling SaaS businesses, fast-growing stores, and marketing teams.",
    monthlyPrice: 79,
    annualPrice: 59,
    popular: true,
    limits: {
      monthlyImpressions: "250,000 Impressions/mo",
      domains: "5 Active Domains",
      teamMembers: "5 Team Seats",
      dataRetention: "1-Year Analytics History"
    },
    features: [
      "Everything in Starter, plus:",
      "Target Element Visibility (CSS Selector Sniper)",
      "Global AI Auto-Translation (12+ languages)",
      "66text SMS Phone Number Capture & Triggers",
      "Interactive Real-Time Global Visitor Map",
      "Gamified Scratch-to-Win Coupon Distributors",
      "SPA Route Tracking (React, Vue, Angular)",
      "Custom Button & Link Click Precision Tracking",
      "Priority 24/7 Live Chat Support"
    ],
    ctaText: "Start Pro Free Trial",
    highlightColor: "#FF6131"
  },
  {
    id: "agency",
    name: "Agency & Scale",
    tagline: "Ultimate power, multi-client workspace, white-labeling, and dedicated scale.",
    monthlyPrice: 199,
    annualPrice: 149,
    limits: {
      monthlyImpressions: "Unlimited Impressions",
      domains: "Unlimited Client Domains",
      teamMembers: "Unlimited Team Seats + Roles",
      dataRetention: "Permanent Analytics Data"
    },
    features: [
      "Everything in Pro Growth, plus:",
      "Full White-Labeling (Remove Converstar branding)",
      "Centralized Agency Master Client Command Center",
      "Frictionless Teams System with Role Permissions",
      "Dynamic Trackable QR Code Deployment Engine",
      "Custom Webhooks & REST API Access",
      "Dedicated CRO Account Strategist",
      "SLA 99.99% Uptime Guarantee",
      "Custom Contract & Invoicing Support"
    ],
    ctaText: "Get Agency Access"
  }
];

export const WIDGET_THEMES: WidgetTheme[] = [
  { id: 'dark-coral', name: 'Electric Coral', bgClass: 'bg-[#12262B]', borderClass: 'border-[#FF6131]/40', textClass: 'text-white', accentClass: 'bg-[#FF6131]', category: 'Enterprise Dark' },
  { id: 'glass-frost', name: 'Frosted Glass', bgClass: 'bg-white/10 backdrop-blur-md', borderClass: 'border-white/20', textClass: 'text-white', accentClass: 'bg-indigo-400', category: 'Modern Glass' },
  { id: 'obsidian-gold', name: 'Obsidian Gold', bgClass: 'bg-[#0B0F19]', borderClass: 'border-amber-400/30', textClass: 'text-amber-100', accentClass: 'bg-amber-400', category: 'Enterprise Dark' },
  { id: 'emerald-pulse', name: 'Emerald Cyber', bgClass: 'bg-[#0A1F18]', borderClass: 'border-emerald-500/40', textClass: 'text-emerald-50', accentClass: 'bg-emerald-500', category: 'Vibrant Neon' },
  { id: 'neon-cyan', name: 'Cyan Kinetic', bgClass: 'bg-[#081B26]', borderClass: 'border-cyan-400/40', textClass: 'text-cyan-50', accentClass: 'bg-cyan-400', category: 'Vibrant Neon' },
  { id: 'minimal-light', name: 'Clean Snow', bgClass: 'bg-[#F8FAFC]', borderClass: 'border-slate-300', textClass: 'text-slate-900', accentClass: 'bg-[#FF6131]', category: 'Clean Minimal' },
  { id: 'high-contrast-mono', name: 'Monochrome Luxe', bgClass: 'bg-black', borderClass: 'border-white/40', textClass: 'text-white', accentClass: 'bg-white text-black', category: 'High Contrast' },
  { id: 'pastel-indigo', name: 'Pastel Indigo', bgClass: 'bg-[#1E1B4B]', borderClass: 'border-indigo-500/40', textClass: 'text-indigo-100', accentClass: 'bg-indigo-500', category: 'Modern Glass' }
];

export const GLOBAL_ANALYTICS_METRICS: AnalyticsCountryMetric[] = [
  { code: 'US', country: 'United States', activeVisitors: 1420, conversionRate: 4.8, lat: 37.0902, lng: -95.7129, flag: '🇺🇸' },
  { code: 'GB', country: 'United Kingdom', activeVisitors: 680, conversionRate: 5.2, lat: 55.3781, lng: -3.4360, flag: '🇬🇧' },
  { code: 'DE', country: 'Germany', activeVisitors: 512, conversionRate: 4.9, lat: 51.1657, lng: 10.4515, flag: '🇩🇪' },
  { code: 'CA', country: 'Canada', activeVisitors: 430, conversionRate: 4.4, lat: 56.1304, lng: -106.3468, flag: '🇨🇦' },
  { code: 'AU', country: 'Australia', activeVisitors: 390, conversionRate: 5.6, lat: -25.2744, lng: 133.7751, flag: '🇦🇺' },
  { code: 'JP', country: 'Japan', activeVisitors: 340, conversionRate: 6.1, lat: 36.2048, lng: 138.2529, flag: '🇯🇵' },
  { code: 'FR', country: 'France', activeVisitors: 290, conversionRate: 4.1, lat: 46.2276, lng: 2.2137, flag: '🇫🇷' },
  { code: 'BR', country: 'Brazil', activeVisitors: 260, conversionRate: 3.9, lat: -14.2350, lng: -51.9253, flag: '🇧🇷' }
];

export const INTEGRATIONS_LIST: IntegrationItem[] = [
  { id: 'wordpress', name: 'WordPress & WooCommerce', category: 'CMS & E-commerce', description: 'Plug-and-play plugin or header script snippet installation with zero latency.', icon: 'Wordpress', installTime: '45 seconds', popular: true },
  { id: 'shopify', name: 'Shopify Storefront', category: 'CMS & E-commerce', description: 'Sync abandoned carts, checkout updates, and customer purchase alerts instantly.', icon: 'ShoppingBag', installTime: '1 minute', popular: true },
  { id: 'react', name: 'React / Next.js', category: 'Modern Frameworks', description: 'Zero-hydration flicker SPA tracking component for SSR & client-side routes.', icon: 'Code', installTime: '30 seconds', popular: true },
  { id: 'vue', name: 'Vue / Nuxt', category: 'Modern Frameworks', description: 'Reactive router hooks for uninterrupted user journey behavioral tracking.', icon: 'Layers', installTime: '30 seconds' },
  { id: 'webflow', name: 'Webflow', category: 'CMS & E-commerce', description: 'Inject our custom head tag once to trigger responsive micro-animations on all pages.', icon: 'Globe', installTime: '1 minute', popular: true },
  { id: 'zapier', name: 'Zapier & Make', category: 'Automation & APIs', description: 'Stream captured phone numbers and leads into 5,000+ CRM and marketing apps.', icon: 'Zap', installTime: '2 minutes' },
  { id: 'klaviyo', name: 'Klaviyo & Mailchimp', category: 'CRM & Email', description: 'Instant auto-sync of exit-intent request collector emails into your warm drip flows.', icon: 'Mail', installTime: '1 minute', popular: true },
  { id: 'stripe', name: 'Stripe Webhooks', category: 'Automation & APIs', description: 'Listen to live payment success webhooks to fire real-time verified buyer notifications.', icon: 'CreditCard', installTime: '2 minutes' }
];

export const FAQ_LIST: FAQItem[] = [
  {
    question: "How difficult is it to install Converstar on my website?",
    answer: "It takes literally 60 seconds. You copy a single line of lightweight JavaScript code and paste it into your website's header or tag manager (works seamlessly on Shopify, WordPress, Webflow, React, Vue, Angular, or standard HTML). There are zero complex dependencies.",
    category: "Installation"
  },
  {
    question: "Will Converstar slow down my website's loading speed?",
    answer: "Absolutely not. Converstar is served via our global tier-1 CDN and loads asynchronously with less than 4KB gzipped footprint. Your core website assets and DOM load first without a millisecond of lag, ensuring 100/100 Google PageSpeed scores.",
    category: "Performance"
  },
  {
    question: "How does the AI Global Widget Translation work?",
    answer: "Our AI engine inspects the visitor's incoming browser locale headers and instantly renders your urgency copy, timers, and social proof in their native language (supporting 20+ major languages) with zero latency or manual translation setup.",
    category: "Features"
  },
  {
    question: "Can I manage multiple client websites and team members?",
    answer: "Yes! On our Agency plan, you get a centralized master dashboard allowing you to switch between client accounts, grant granular role-based permissions to copywriters or VAs, and completely white-label the widgets to show your agency brand.",
    category: "Agency"
  },
  {
    question: "What happens when my free 14-day trial ends?",
    answer: "You won't be charged unless you choose to upgrade to a paid subscription. You can test every single feature, launch live campaigns, and observe real conversion lift before deciding.",
    category: "Billing"
  },
  {
    question: "How does Converstar protect against bots and spam?",
    answer: "We deploy military-grade dynamic honeypots, behavioral mouse-motion heuristics, and CSRF token protection to ensure captured leads and phone numbers are verified human buyers.",
    category: "Security"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "cro-playbook-2026",
    title: "The 2026 CRO Playbook: How Live Social Proof Crushes Traditional Email Pop-ups",
    slug: "cro-playbook-2026",
    excerpt: "Why static discount overlays are getting ignored, and how micro-interaction loops create hypnotic buyer urgency.",
    category: "Conversion Strategy",
    readTime: "6 min read",
    date: "Aug 15, 2026",
    author: {
      name: "Marcus Vance",
      role: "Head of Growth",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80"
    }
  },
  {
    id: "abandoned-cart-rescue",
    title: "Recovering the 70% Cart Abandonment Leak with Sniper-Level Element Triggers",
    slug: "abandoned-cart-rescue",
    excerpt: "A tactical guide to firing irresistible exit offers the exact microsecond checkout friction occurs.",
    category: "E-commerce",
    readTime: "8 min read",
    date: "Aug 10, 2026",
    author: {
      name: "Sophia Chen",
      role: "CRO Lead Strategist",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80"
    }
  },
  {
    id: "spa-tracking-speed",
    title: "Why Most Pop-Up Scripts Break on React & Vue SPAs (And How We Solved It)",
    slug: "spa-tracking-speed",
    excerpt: "Deep dive into client-side router interception, zero-hydration layout shifts, and sub-millisecond trigger firing.",
    category: "Engineering",
    readTime: "10 min read",
    date: "Jul 28, 2026",
    author: {
      name: "Alex Thorne",
      role: "Principal Systems Architect",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80"
    }
  }
];
