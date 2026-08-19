import React, { useState, lazy, Suspense } from 'react';
import { HeroSection } from './components/HeroSection';

// Lazy load below-the-fold components
const PainAvatarSection = lazy(() => import('./components/PainAvatarSection').then(m => ({ default: m.PainAvatarSection })));
const TransformationSection = lazy(() => import('./components/TransformationSection').then(m => ({ default: m.TransformationSection })));
const WhatYouGetSection = lazy(() => import('./components/WhatYouGetSection').then(m => ({ default: m.WhatYouGetSection })));
const SocialProofSection = lazy(() => import('./components/SocialProofSection').then(m => ({ default: m.SocialProofSection })));
const PricingOfferSection = lazy(() => import('./components/PricingOfferSection').then(m => ({ default: m.PricingOfferSection })));
const GuaranteeSection = lazy(() => import('./components/GuaranteeSection').then(m => ({ default: m.GuaranteeSection })));
const FaqSection = lazy(() => import('./components/FaqSection').then(m => ({ default: m.FaqSection })));
const FinalCtaFooter = lazy(() => import('./components/FinalCtaFooter').then(m => ({ default: m.FinalCtaFooter })));

// Loading fallback for lazy components
const SectionLoader = () => <div className="py-20 bg-[#090909]" />;

// Mockup oficial em alta definição (salvo localmente e com fallbacks)
const NEW_MOCKUP_IMAGE_URL = '/mockup-efeito-bartender.png';

export default function App() {
  const [checkoutBasic] = useState('https://ggcheckout.app/checkout/v4/akNASSdlT23O50Jx6P0p');
  const [checkoutComplete] = useState('https://ggcheckout.app/checkout/v4/w8WpOvBkzPNAtTxTOXuE');

  const scrollToOffer = () => {
    const el = document.getElementById('pricing-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPreview = () => {
    const el = document.getElementById('preview-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#090909] text-[#F5F5F0] font-sans-body antialiased selection:bg-[#E50920] selection:text-white bg-urban-dark">
      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section (CRITICAL) */}
        <HeroSection
          onScrollToOffer={scrollToOffer}
          onScrollToPreview={scrollToPreview}
          mockupImgPath={NEW_MOCKUP_IMAGE_URL}
        />

        <Suspense fallback={<SectionLoader />}>
          {/* 2. Pain / Avatar Identification Section (CRITICAL-ISH) */}
          <div className="section-lazy">
            <PainAvatarSection />
          </div>

          {/* 3. Transformation (Antes vs Depois) */}
          <div className="section-lazy">
            <TransformationSection onScrollToOffer={scrollToOffer} />
          </div>

          {/* 4. What You Get (O Que Você Recebe + PDF Preview) */}
          <div className="section-lazy">
            <WhatYouGetSection />
          </div>

          {/* 5. Social Proof & Real Reviews */}
          <div className="section-lazy">
            <SocialProofSection />
          </div>

          {/* 6. Pricing Offer Section (2 Cards Side by Side) */}
          <div className="section-lazy" id="pricing-section">
            <PricingOfferSection
              customCheckoutBasic={checkoutBasic}
              customCheckoutComplete={checkoutComplete}
            />
          </div>

          {/* 7. 7-Day Guarantee */}
          <div className="section-lazy">
            <GuaranteeSection />
          </div>

          {/* 8. FAQ Accordion */}
          <div className="section-lazy">
            <FaqSection />
          </div>

          {/* 9. Final Urgency CTA & Footer */}
          <div className="section-lazy">
            <FinalCtaFooter
              onScrollToOffer={scrollToOffer}
              checkoutUrlComplete={checkoutComplete}
            />
          </div>
        </Suspense>
      </main>
    </div>
  );
}


