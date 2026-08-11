import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { PainAvatarSection } from './components/PainAvatarSection';
import { TransformationSection } from './components/TransformationSection';
import { WhatYouGetSection } from './components/WhatYouGetSection';
import { InteractiveDrinkCalculator } from './components/InteractiveDrinkCalculator';
import { PricingOfferSection } from './components/PricingOfferSection';
import { SocialProofSection } from './components/SocialProofSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaFooter } from './components/FinalCtaFooter';
import { CheckoutSettingsModal } from './components/CheckoutSettingsModal';

import heroMockupImg from './assets/images/hero_ebook_mockup_1786454344899.jpg';

export default function App() {
  const [checkoutBasic, setCheckoutBasic] = useState('https://ggcheckout.app/checkout/v4/akNASSdlT23O50Jx6P0p');
  const [checkoutComplete, setCheckoutComplete] = useState('https://ggcheckout.app/checkout/v4/w8WpOvBkzPNAtTxTOXuE');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

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

  const handleSaveCheckout = (basic: string, complete: string) => {
    setCheckoutBasic(basic);
    setCheckoutComplete(complete);
  };

  return (
    <div className="min-h-screen bg-[#0b0c10] text-[#e0e2ec] font-sans-body antialiased selection:bg-[#d4af37] selection:text-[#0b0c10] bg-cuban-pattern">
      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <HeroSection
          onScrollToOffer={scrollToOffer}
          onScrollToPreview={scrollToPreview}
          mockupImgPath={heroMockupImg}
        />

        {/* 2. Pain / Avatar Identification Section */}
        <PainAvatarSection />

        {/* 3. Transformation (Antes vs Depois) */}
        <TransformationSection onScrollToOffer={scrollToOffer} />

        {/* 4. What You Get (O Que Você Recebe + PDF Preview) */}
        <WhatYouGetSection />

        {/* 5. Interactive Drink Calculator Bonus Tool */}
        <InteractiveDrinkCalculator onScrollToOffer={scrollToOffer} />

        {/* 6. Pricing Offer Section (2 Cards Side by Side) */}
        <PricingOfferSection
          customCheckoutBasic={checkoutBasic}
          customCheckoutComplete={checkoutComplete}
          onOpenSettingsModal={() => setIsSettingsOpen(true)}
        />

        {/* 7. Social Proof & Testimonials */}
        <SocialProofSection />

        {/* 8. 7-Day Guarantee */}
        <GuaranteeSection />

        {/* 9. FAQ Accordion */}
        <FaqSection />

        {/* 10. Final Urgency CTA & Footer */}
        <FinalCtaFooter
          onScrollToOffer={scrollToOffer}
          checkoutUrlComplete={checkoutComplete}
        />
      </main>

      {/* Settings Modal for Checkout links */}
      <CheckoutSettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        checkoutBasic={checkoutBasic}
        checkoutComplete={checkoutComplete}
        onSave={handleSaveCheckout}
      />
    </div>
  );
}

