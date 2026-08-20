import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/home/HeroSection';
import { AgitationSection } from './components/home/AgitationSection';
import { PillarGridSection } from './components/home/PillarGridSection';
import { SolutionsPersonaSection } from './components/home/SolutionsPersonaSection';
import { TestimonialsSection } from './components/home/TestimonialsSection';
import { OneLineCodeSection } from './components/home/OneLineCodeSection';
import { GlobalCtaSection } from './components/home/GlobalCtaSection';
import { SocialProofPage } from './components/features/SocialProofPage';
import { TargetingTriggersPage } from './components/features/TargetingTriggersPage';
import { DirectChatPage } from './components/features/DirectChatPage';
import { AnalyticsPage } from './components/features/AnalyticsPage';
import { EcommerceSolutionPage } from './components/solutions/EcommerceSolutionPage';
import { SaasSolutionPage } from './components/solutions/SaasSolutionPage';
import { AgenciesSolutionPage } from './components/solutions/AgenciesSolutionPage';
import { PricingPage } from './components/pricing/PricingPage';
import { IntegrationsDocsPage } from './components/resources/IntegrationsDocsPage';
import { SecurityPolicyPage } from './components/resources/SecurityPolicyPage';
import { LegalTermsPage } from './components/legal/LegalTermsPage';
import { LegalPrivacyPage } from './components/legal/LegalPrivacyPage';
import { FloatingWidgetsSimulator } from './components/widgets/FloatingWidgetsSimulator';
import { AuthModal } from './components/modals/AuthModal';
import { FreeTrialModal } from './components/modals/FreeTrialModal';
import { ExitIntentModal } from './components/modals/ExitIntentModal';

export function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [isTrialOpen, setIsTrialOpen] = useState(false);
  const [isExitIntentOpen, setIsExitIntentOpen] = useState(false);
  const [liveVisitorsCount, setLiveVisitorsCount] = useState(1428);

  // Live visitor ticker
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveVisitorsCount((prev) => {
        const delta = Math.floor(Math.random() * 5) - 2;
        return Math.max(1200, prev + delta);
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Sync state with URL hash and scroll to top on navigation
  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (hash) {
        setCurrentPage(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const openAuth = (mode: 'login' | 'register' = 'login') => {
    setAuthMode(mode);
    setIsAuthOpen(true);
  };

  const openTrial = () => {
    setIsTrialOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0D1F23] text-white flex flex-col font-sans selection:bg-[#FF6131] selection:text-white">
      
      {/* Global Navigation Header */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenAuth={openAuth}
        onOpenTrial={openTrial}
        liveVisitorsCount={liveVisitorsCount}
      />

      {/* Main Content Router View */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <>
            <HeroSection
              onOpenTrial={openTrial}
              onNavigate={handleNavigate}
              liveVisitorsCount={liveVisitorsCount}
            />
            <AgitationSection onOpenTrial={openTrial} />
            <PillarGridSection onNavigate={handleNavigate} onOpenTrial={openTrial} />
            <SolutionsPersonaSection onNavigate={handleNavigate} onOpenTrial={openTrial} />
            <TestimonialsSection />
            <OneLineCodeSection />
            <GlobalCtaSection onOpenTrial={openTrial} />
          </>
        )}

        {currentPage === 'features-social-proof' && (
          <SocialProofPage onNavigate={handleNavigate} onOpenTrial={openTrial} />
        )}

        {currentPage === 'features-targeting' && (
          <TargetingTriggersPage onNavigate={handleNavigate} onOpenTrial={openTrial} />
        )}

        {currentPage === 'features-chat' && (
          <DirectChatPage onNavigate={handleNavigate} onOpenTrial={openTrial} />
        )}

        {currentPage === 'features-analytics' && (
          <AnalyticsPage onNavigate={handleNavigate} onOpenTrial={openTrial} />
        )}

        {currentPage === 'solutions-ecommerce' && (
          <EcommerceSolutionPage onNavigate={handleNavigate} onOpenTrial={openTrial} />
        )}

        {currentPage === 'solutions-saas' && (
          <SaasSolutionPage onNavigate={handleNavigate} onOpenTrial={openTrial} />
        )}

        {currentPage === 'solutions-agencies' && (
          <AgenciesSolutionPage onNavigate={handleNavigate} onOpenTrial={openTrial} />
        )}

        {currentPage === 'pricing' && (
          <PricingPage onOpenTrial={openTrial} onOpenAuth={openAuth} />
        )}

        {(currentPage === 'resources-integrations' ||
          currentPage === 'resources-docs' ||
          currentPage === 'resources-blog') && (
          <IntegrationsDocsPage onNavigate={handleNavigate} onOpenTrial={openTrial} />
        )}

        {currentPage === 'resources-security' && (
          <SecurityPolicyPage onNavigate={handleNavigate} onOpenTrial={openTrial} />
        )}

        {currentPage === 'legal-terms' && (
          <LegalTermsPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'legal-privacy' && (
          <LegalPrivacyPage onNavigate={handleNavigate} />
        )}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} onOpenTrial={openTrial} />

      {/* Interactive Live Conversion Widget Simulator (Bottom Floating) */}
      <FloatingWidgetsSimulator onOpenTrial={openTrial} />

      {/* Modals & Exit-Intent Triggers */}
      <AuthModal
        isOpen={isAuthOpen}
        mode={authMode}
        onClose={() => setIsAuthOpen(false)}
        onSwitchMode={(mode) => setAuthMode(mode)}
        onSuccess={() => {
          setIsAuthOpen(false);
          setIsTrialOpen(true);
        }}
      />

      <FreeTrialModal
        isOpen={isTrialOpen}
        onClose={() => setIsTrialOpen(false)}
      />

      <ExitIntentModal
        isOpen={isExitIntentOpen}
        onClose={() => setIsExitIntentOpen(false)}
        onClaimDiscount={() => {
          setIsExitIntentOpen(false);
          setIsTrialOpen(true);
        }}
      />

    </div>
  );
}
export default App;
