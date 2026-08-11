import React from 'react';
import { PRICING_PLANS } from '../data/landingData';
import { Check, Crown, Sparkles, ShieldCheck, Zap, ArrowRight, Lock } from 'lucide-react';

interface PricingOfferSectionProps {
  customCheckoutBasic?: string;
  customCheckoutComplete?: string;
  onOpenSettingsModal?: () => void;
}

export const PricingOfferSection: React.FC<PricingOfferSectionProps> = ({
  customCheckoutBasic,
  customCheckoutComplete,
  onOpenSettingsModal
}) => {
  return (
    <section id="pricing-section" className="py-16 sm:py-24 bg-gradient-to-b from-[#0b0c10] via-[#121522] to-[#0b0c10] relative border-b border-[#212433]">
      {/* Glow Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-[#d4af37]/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#201d12] border border-[#d4af37]/50 text-xs font-extrabold text-[#f3e5ab] mb-4 gold-glow">
            <Zap className="w-4 h-4 text-[#d4af37]" />
            <span>OFERTA LIMITADA DE LANÇAMENTO</span>
          </div>
          <h2 className="font-serif-display font-bold text-3xl sm:text-5xl text-white mb-4">
            Escolha seu Nível de Anfitrião
          </h2>
          <p className="text-base sm:text-lg text-[#a0a5ba]">
            Acesso vitalício imediato no seu e-mail. Acesse o guia e comece ainda hoje.
          </p>
        </div>

        {/* 2 Pricing Cards Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {PRICING_PLANS.map((plan) => {
            const isFeatured = plan.isPopular;
            const checkoutLink = isFeatured
              ? (customCheckoutComplete || plan.checkoutUrl)
              : (customCheckoutBasic || plan.checkoutUrl);

            return (
              <div
                key={plan.id}
                className={`relative flex flex-col justify-between rounded-3xl p-6 sm:p-10 transition-all duration-300 hover:-translate-y-1.5 ${
                  isFeatured
                    ? 'bg-gradient-to-b from-[#181c2c] via-[#121522] to-[#0d0f17] border-2 border-[#d4af37] shadow-2xl gold-glow-lg'
                    : 'bg-[#10121c] border border-[#23273c] hover:border-[#383d57] shadow-xl'
                }`}
              >
                {/* Popular Badge */}
                {isFeatured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#aa771c] text-[#0b0c10] text-xs font-black px-5 py-1.5 rounded-full uppercase tracking-wider shadow-lg flex items-center gap-1.5 whitespace-nowrap">
                    <Crown className="w-3.5 h-3.5" />
                    <span>{plan.badgeText || "MAIS POPULAR"}</span>
                  </div>
                )}

                <div>
                  <div className="text-center pb-6 border-b border-[#222638]">
                    <h3 className="font-serif-display font-bold text-2xl text-white mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-[#9298ad] min-h-[36px] max-w-xs mx-auto">
                      {plan.tagline}
                    </p>

                    {/* Pricing */}
                    <div className="mt-6">
                      <p className="text-xs text-[#ef4444] line-through font-semibold">
                        De R$ {plan.originalPrice}
                      </p>
                      <div className="flex items-baseline justify-center gap-1 mt-1">
                        <span className="text-sm font-bold text-[#d4af37]">Por R$</span>
                        <span className="font-serif-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight">
                          {plan.price}
                        </span>
                        <span className="text-xs text-[#a0a5ba] font-medium">/ pagamento único</span>
                      </div>
                      <p className="text-[11px] text-[#10b981] font-bold mt-1">
                        Sem mensalidades. Acesso vitalício!
                      </p>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="py-6 space-y-3.5 text-xs sm:text-sm text-[#d0d4e3]">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          isFeatured ? 'bg-[#d4af37] text-[#0b0c10]' : 'bg-[#1d2133] text-[#d4af37]'
                        }`}>
                          <Check className="w-3.5 h-3.5 font-bold" />
                        </div>
                        <span className={fIdx < 2 && isFeatured ? 'font-bold text-white' : ''}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA Button */}
                <div className="pt-4 border-t border-[#222638]">
                  <a
                    href={checkoutLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      if (typeof window !== 'undefined' && (window as any).fbq) {
                        try {
                          const isBasic = plan.id === 'basic';
                          (window as any).fbq('track', 'InitiateCheckout', {
                            content_name: isBasic ? 'Gin Fácil Básico' : 'Gin Fácil Completo',
                            value: isBasic ? 14.90 : 27.90,
                            currency: 'BRL',
                          });
                        } catch (err) {
                          console.error('FB Pixel error:', err);
                        }
                      }
                    }}
                    id={isFeatured ? "btn-checkout-premium" : "btn-checkout-basic"}
                    data-checkout={plan.id}
                    className={`w-full group relative inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl font-black text-sm sm:text-base uppercase tracking-wider transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] ${
                      isFeatured
                        ? 'bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#aa771c] text-[#0b0c10] gold-glow'
                        : 'bg-[#1d2133] hover:bg-[#282d45] text-white border border-[#373c57]'
                    }`}
                  >
                    <Lock className="w-4 h-4 opacity-75" />
                    <span>{plan.buttonText}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>

                  <div className="mt-3 text-center flex items-center justify-center gap-2 text-[11px] text-[#81879c]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#10b981]" />
                    <span>7 dias de garantia incondicional</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Customizable link settings helper badge for user */}
        {onOpenSettingsModal && (
          <div className="mt-10 text-center">
            <button
              onClick={onOpenSettingsModal}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#141624] hover:bg-[#1e2136] border border-[#2a2e45] text-xs text-[#a0a5ba] hover:text-white transition-colors cursor-pointer"
            >
              <span>⚙️ Configurar Links de Checkout (Hotmart / Kiwify / Eduzz)</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
