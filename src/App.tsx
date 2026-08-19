import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { PainAvatarSection } from './components/PainAvatarSection';
import { TransformationSection } from './components/TransformationSection';
import { WhatYouGetSection } from './components/WhatYouGetSection';
import { PricingOfferSection } from './components/PricingOfferSection';
import { SocialProofSection } from './components/SocialProofSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaFooter } from './components/FinalCtaFooter';

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
        {/* 1. Hero Section */}
        <HeroSection
          onScrollToOffer={scrollToOffer}
          onScrollToPreview={scrollToPreview}
          mockupImgPath={NEW_MOCKUP_IMAGE_URL}
        />

        {/* 2. Pain / Avatar Identification Section */}
        <PainAvatarSection />

        {/* 3. Transformation (Antes vs Depois) */}
        <TransformationSection onScrollToOffer={scrollToOffer} />

        {/* 4. What You Get (O Que Você Recebe + PDF Preview) */}
        <WhatYouGetSection />

        {/* 5. Social Proof & Real Reviews */}
        <SocialProofSection />

        {/* 6. Pricing Offer Section (2 Cards Side by Side) */}
        <PricingOfferSection
          customCheckoutBasic={checkoutBasic}
          customCheckoutComplete={checkoutComplete}
        />

        {/* 7. 7-Day Guarantee */}
        <GuaranteeSection />

        {/* 8. FAQ Accordion */}
        <FaqSection />

        {/* 9. Final Urgency CTA & Footer */}
        <FinalCtaFooter
          onScrollToOffer={scrollToOffer}
          checkoutUrlComplete={checkoutComplete}
        />
      </main>
    </div>
  );
}


