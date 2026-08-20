import * as React from 'react';
import { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { SocialProofSection } from './components/SocialProofSection';
import { WhatWillLearnSection } from './components/WhatWillLearnSection';
import { PainAvatarSection } from './components/PainAvatarSection';
import { WhatYouGetSection } from './components/WhatYouGetSection';
import { PricingOfferSection } from './components/PricingOfferSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaFooter } from './components/FinalCtaFooter';

// Loading fallback (no longer needed for normal imports but kept for structural consistency if needed)
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
    const el = document.getElementById('what-will-learn');
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

        {/* 2. What Will Learn (IMMEDIATELY AFTER HERO) */}
        <div className="section-lazy" id="what-will-learn">
          <WhatWillLearnSection />
        </div>

        {/* 3. Pain / Avatar Identification Section */}
        <div className="section-lazy">
          <PainAvatarSection />
        </div>

        {/* 5. What You Get (Explicit Deliverables) */}
        <div className="section-lazy">
          <WhatYouGetSection />
        </div>

        {/* 6. Social Proof & Real Reviews */}
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
      </main>
    </div>
  );
}


