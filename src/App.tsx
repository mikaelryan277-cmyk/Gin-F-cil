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
import { CheckoutSettingsModal } from './components/CheckoutSettingsModal';

// Novo Mockup fornecido pelo usuário (https://imgur.com/a/tQC18ku)
const NEW_MOCKUP_IMAGE_URL = 'https://images.weserv.nl/?url=https://i.imgur.com/tQC18ku.png';

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

        {/* 5. Pricing Offer Section (2 Cards Side by Side) */}
        <PricingOfferSection
          customCheckoutBasic={checkoutBasic}
          customCheckoutComplete={checkoutComplete}
          onOpenSettingsModal={() => setIsSettingsOpen(true)}
        />

        {/* 6. Social Proof & Testimonials */}
        <SocialProofSection />

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


