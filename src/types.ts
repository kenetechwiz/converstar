export type PageId =
  | 'home'
  | 'features-social-proof'
  | 'features-targeting'
  | 'features-chat'
  | 'features-analytics'
  | 'solutions-ecommerce'
  | 'solutions-saas'
  | 'solutions-agencies'
  | 'pricing'
  | 'resources-integrations'
  | 'resources-docs'
  | 'resources-blog'
  | 'resources-security'
  | 'legal-about'
  | 'legal-terms'
  | 'legal-privacy';

export interface NavDropdownItem {
  id: PageId;
  title: string;
  description: string;
  icon: string;
  badge?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  monthlyPrice: number;
  annualPrice: number;
  popular?: boolean;
  features: string[];
  limits: {
    monthlyImpressions: string;
    domains: string;
    teamMembers: string;
    dataRetention: string;
  };
  ctaText: string;
  highlightColor?: string;
}

export interface Testimonial {
  quote: string;
  headline: string;
  author: string;
  role: string;
  avatar: string;
  highlightMetric: string;
  verified: boolean;
}

export interface LiveNotificationWidget {
  id: string;
  type: 'purchase' | 'visitor_counter' | 'review' | 'urgency_counter' | 'pro_badge' | 'chat_prompt' | 'coupon';
  title: string;
  subtitle: string;
  timeAgo?: string;
  avatar?: string;
  rating?: number;
  count?: number;
  location?: string;
  theme?: string;
  actionUrl?: string;
  productImage?: string;
}

export interface WidgetTheme {
  id: string;
  name: string;
  bgClass: string;
  borderClass: string;
  textClass: string;
  accentClass: string;
  category: 'Modern Glass' | 'Vibrant Neon' | 'Clean Minimal' | 'High Contrast' | 'Enterprise Dark';
}

export interface AnalyticsCountryMetric {
  code: string;
  country: string;
  activeVisitors: number;
  conversionRate: number;
  lat: number;
  lng: number;
  flag: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface IntegrationItem {
  id: string;
  name: string;
  category: 'CMS & E-commerce' | 'Modern Frameworks' | 'CRM & Email' | 'Automation & APIs';
  description: string;
  icon: string;
  installTime: string;
  popular?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
}
