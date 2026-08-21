import * as React from 'react';
import { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { PainAvatarSection } from './components/PainAvatarSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { WhatYouGetSection } from './components/WhatYouGetSection';
import { SocialProofSection } from './components/SocialProofSection';
import { PricingOfferSection } from './components/PricingOfferSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaFooter } from './components/FinalCtaFooter';

// Mockup oficial em alta definição
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

  return (
    <div className="min-h-screen bg-[#090909] text-[#F5F5F0] font-sans-body antialiased selection:bg-[#E50920] selection:text-white bg-urban-dark">
      <main>
        {/* 1. Hero Section */}
        <HeroSection
          onScrollToOffer={scrollToOffer}
          mockupImgPath={NEW_MOCKUP_IMAGE_URL}
        />

        {/* 2. Para Quem É / Problemas */}
        <PainAvatarSection />

        {/* 3. Como Funciona (3 passos) */}
        <HowItWorksSection />

        {/* 4. O Que Você Recebe */}
        <WhatYouGetSection />

        {/* 5. Avaliações Reais */}
        <SocialProofSection />

        {/* 6. Oferta (Pricing com preços alinhados) */}
        <div id="pricing-section">
          <PricingOfferSection
            customCheckoutBasic={checkoutBasic}
            customCheckoutComplete={checkoutComplete}
          />
        </div>

        {/* 7. 7 Dias de Garantia */}
        <GuaranteeSection />

        {/* 8. Perguntas Frequentes (FAQ) */}
        <FaqSection />

        {/* 9. CTA Final + Rodapé */}
        <FinalCtaFooter
          onScrollToOffer={scrollToOffer}
          checkoutUrlComplete={checkoutComplete}
        />
      </main>
    </div>
  );
}



