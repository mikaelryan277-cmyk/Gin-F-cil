import React from 'react';
import { PRICING_PLANS } from '../data/landingData';
import { Check, Crown, Zap, ArrowRight, Lock, ShieldCheck } from 'lucide-react';

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
    <section id="pricing-section" className="py-16 sm:py-24 bg-[#090909] relative border-b border-[#1c1c1c]">
      {/* Ambient Red Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-[#E50920]/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1c1214] border border-[#E50920]/50 text-xs font-extrabold text-[#E50920] mb-4 red-glow">
            <Zap className="w-4 h-4 text-[#E50920]" />
            <span>OFERTA LIMITADA DE LANÇAMENTO</span>
          </div>
          <h2 className="font-serif-display font-bold text-3xl sm:text-5xl text-[#F5F5F0] mb-4">
            Escolha o Seu Plano
          </h2>
          <p className="text-base sm:text-lg text-[#B8B8B8]">
            Acesso vitalício imediato. Pagamento único, sem mensalidades.
          </p>
        </div>

        {/* 2 Pricing Cards Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {PRICING_PLANS.map((plan) => {
            const isFeatured = plan.id === 'complete';
            const checkoutLink = isFeatured
              ? (customCheckoutComplete || plan.checkoutUrl)
              : (customCheckoutBasic || plan.checkoutUrl);

            return (
              <div
                key={plan.id}
                className={`relative flex flex-col justify-between rounded-3xl p-6 sm:p-10 transition-all duration-300 ${
                  isFeatured
                    ? 'bg-[#171717] border-2 border-[#E50920] shadow-2xl red-glow-lg scale-105 z-10'
                    : 'bg-[#141414] border border-[#262626] opacity-90'
                }`}
              >
                {/* Popular Badge */}
                {isFeatured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#E50920] text-white text-xs font-black px-5 py-1.5 rounded-full uppercase tracking-wider shadow-lg flex items-center gap-1.5 whitespace-nowrap">
                    <Crown className="w-3.5 h-3.5" />
                    <span>MAIS ESCOLHIDO</span>
                  </div>
                )}

                <div>
                  <div className="text-center pb-6 border-b border-[#262626]">
                    <h3 className="font-serif-display font-bold text-2xl text-[#F5F5F0] mb-2 uppercase tracking-wide">
                      {plan.name}
                    </h3>
                    <p className="text-sm text-[#888888] font-medium italic">
                      {plan.tagline}
                    </p>

                    {/* Pricing */}
                    <div className="mt-8">
                      <p className="text-xs text-[#888888] line-through font-semibold mb-1">
                        De R$ {plan.originalPrice}
                      </p>
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-sm font-bold text-[#E50920]">POR APENAS</span>
                        <span className="font-serif-display font-black text-5xl text-[#F5F5F0]">
                          R$ {plan.price}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#E50920] font-bold mt-2 uppercase tracking-widest">
                        Acesso Vitalício
                      </p>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="py-8 space-y-4 text-sm text-[#B8B8B8]">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        <Check className={`w-5 h-5 shrink-0 ${isFeatured ? 'text-[#E50920]' : 'text-[#888888]'}`} />
                        <span className={isFeatured ? 'text-[#F5F5F0] font-medium' : ''}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA Button */}
                <div className="pt-4 border-t border-[#262626]">
                  <a
                    href={checkoutLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      if (typeof window !== 'undefined' && (window as any).fbq) {
                        try {
                          const isBasic = plan.id === 'basic';
                          (window as any).fbq('track', 'InitiateCheckout', {
                            content_name: isBasic ? 'Efeito Bartender Essencial' : 'Efeito Bartender Completo',
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
                    className={`w-full group relative inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl font-black text-sm sm:text-base uppercase tracking-wider transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] cursor-pointer ${
                      isFeatured
                        ? 'bg-[#E50920] hover:bg-[#B80818] text-white red-glow'
                        : 'bg-[#222222] hover:bg-[#2c2c2c] text-[#F5F5F0] border border-[#333333]'
                    }`}
                  >
                    <Lock className="w-4 h-4 opacity-75" />
                    <span>{plan.buttonText}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>

                  <div className="mt-3 text-center flex items-center justify-center gap-2 text-[11px] text-[#888888]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#E50920]" />
                    <span>7 dias de garantia incondicional</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guarantee Banner Box */}
        <div className="mt-14 max-w-3xl mx-auto bg-[#171717] border border-[#262626] rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 shadow-2xl text-center sm:text-left">
          <div className="w-16 h-16 rounded-2xl bg-[#231215] border border-[#E50920]/40 flex items-center justify-center shrink-0 text-[#E50920]">
            <ShieldCheck className="w-9 h-9" />
          </div>
          <div>
            <h4 className="font-serif-display font-bold text-lg sm:text-xl text-[#F5F5F0] mb-1">
              Risco Zero: 7 Dias de Garantia Incondicional
            </h4>
            <p className="text-xs sm:text-sm text-[#B8B8B8] leading-relaxed">
              Teste o método por 7 dias. Se você decidir que o produto não é para você, solicite o reembolso dentro do prazo e devolvemos 100% do seu investimento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};


