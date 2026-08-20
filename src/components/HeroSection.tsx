import React from 'react';
import { HERO_COPY } from '../data/landingData';
import { Sparkles, CheckCircle2, ArrowRight, Download, BookOpen, Star, Flame, ShieldCheck } from 'lucide-react';

interface HeroSectionProps {
  onScrollToOffer: () => void;
  onScrollToPreview: () => void;
  mockupImgPath: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onScrollToOffer,
  onScrollToPreview,
  mockupImgPath,
}) => {
  return (
    <section className="relative overflow-hidden pt-8 sm:pt-14 pb-16 sm:pb-24 bg-[#090909] border-b border-[#1c1c1c]">
      {/* Background ambient red night-bar lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[550px] pointer-events-none opacity-40">
        <div className="absolute top-10 left-1/4 w-80 h-80 bg-[#E50920]/20 rounded-full blur-[130px]" />
        <div className="absolute top-28 right-1/4 w-96 h-96 bg-[#8A0612]/25 rounded-full blur-[150px]" />
        <div className="absolute bottom-10 left-1/3 w-64 h-64 bg-[#B80818]/15 rounded-full blur-[110px]" />
      </div>

      {/* Micro-animation: Rising drink bubbles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        <div className="absolute bottom-10 left-[15%] w-2 h-2 rounded-full bg-[#E50920] animate-bubble-1" />
        <div className="absolute bottom-20 left-[45%] w-2.5 h-2.5 rounded-full bg-[#FF334B] animate-bubble-2" />
        <div className="absolute bottom-5 right-[20%] w-2 h-2 rounded-full bg-[#E50920] animate-bubble-3" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Eyebrow Tag */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#171717] border border-[#E50920]/40 shadow-inner text-xs sm:text-sm font-semibold text-[#F5F5F0] animate-pulse-glow">
            <Flame className="w-4 h-4 text-[#E50920]" />
            <span>{HERO_COPY.eyebrow}</span>
            <Sparkles className="w-3.5 h-3.5 text-[#E50920]" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <h1 className="font-serif-display font-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-[#F5F5F0] leading-[1.1] sm:leading-[1.1] mb-6 tracking-tight">
              {HERO_COPY.headline}
            </h1>

            <p className="font-sans-body text-lg sm:text-xl lg:text-2xl text-[#F5F5F0]/90 font-medium leading-relaxed mb-4 max-w-2xl mx-auto lg:mx-0">
              {HERO_COPY.subheadline}
            </p>

            <p className="font-sans-body text-base sm:text-lg text-[#B8B8B8] italic mb-8 max-w-2xl mx-auto lg:mx-0">
              "Ela não precisa saber quanto você gastou."
            </p>

            {/* Quick value highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 max-w-xl mx-auto lg:mx-0 text-xs sm:text-sm text-[#F5F5F0]">
              {HERO_COPY.guarantees.map((item, idx) => (
                <div key={idx} className="flex items-center justify-center lg:justify-start gap-2 bg-[#171717] border border-[#262626] px-3.5 py-2.5 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 text-[#E50920] shrink-0" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* Main Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-4">
              <button
                onClick={onScrollToOffer}
                id="btn-hero-cta"
                data-checkout="hero"
                className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl bg-[#E50920] hover:bg-[#B80818] text-white font-black text-base sm:text-lg uppercase tracking-wide transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] red-glow-lg cursor-pointer shadow-[0_0_20px_rgba(229,9,32,0.4)]"
              >
                <span>{HERO_COPY.mainCtaText}</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            <div className="mb-8 text-center lg:text-left">
              <p className="text-xl sm:text-2xl font-black text-[#F5F5F0] flex items-center justify-center lg:justify-start gap-2">
                <span className="text-sm font-normal text-[#B8B8B8] line-through">De R$ 49,90</span>
                <span>Por apenas <span className="text-[#E50920]">R$ 14,90</span></span>
              </p>
              <p className="text-xs text-[#B8B8B8] mt-1">Pagamento único • Acesso imediato • 7 dias de garantia</p>
            </div>

            {/* Social Trust Bar */}
            <div className="pt-4 border-t border-[#1f1f1f] flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[#B8B8B8]">
              <div className="flex items-center gap-1.5">
                <Download className="w-4 h-4 text-[#E50920]" />
                <span>Download imediato no celular</span>
              </div>

              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#E50920]" />
                <span>7 dias de Garantia</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Product Mockup with Float & Glow */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Backlight Red Glow Ring */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#E50920]/25 via-[#8A0612]/30 to-[#E50920]/15 rounded-3xl blur-2xl transform scale-105" />

              {/* Main Floating Product Mockup Frame */}
              <div className="relative bg-gradient-to-b from-[#1c1c1c] via-[#141414] to-[#0d0d0d] p-3 sm:p-4 rounded-3xl border border-[#E50920]/40 shadow-2xl animate-float aspect-[4/5] sm:aspect-auto">
                <div className="relative overflow-hidden rounded-2xl border border-[#262626] bg-[#090909] flex items-center justify-center min-h-[300px] sm:min-h-[450px] aspect-[4/5]">
                  <img
                    src={mockupImgPath || '/mockup-efeito-bartender.png'}
                    width="600"
                    height="750"
                    fetchPriority="high"
                    decoding="async"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      if (!target.dataset.tried) {
                        target.dataset.tried = '1';
                        target.src = 'https://i.imgur.com/XkzTVg7.png';
                      } else if (target.dataset.tried === '1') {
                        target.dataset.tried = '2';
                        target.src = 'https://i.imgur.com/XkzTVg7l.jpg'; // Using optimized Imgur thumbnail
                      }
                    }}
                    alt="Efeito Bartender - Guia Oficial de Copões de Gin"
                    referrerPolicy="no-referrer"
                    loading="eager"
                    className="w-full h-auto max-h-[500px] object-contain rounded-2xl transform transition-transform duration-700 hover:scale-105"
                  />

                  {/* Badge Floating Top Left */}
                  <div className="absolute top-3 left-3 bg-[#111111]/90 backdrop-blur-md border border-[#E50920]/50 rounded-xl px-3 py-2 shadow-xl flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-[#E50920] flex items-center justify-center text-white font-black text-[9px] tracking-widest">
                      OFICIAL
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white leading-tight">Efeito Bartender</p>
                      <p className="text-[10px] text-[#B8B8B8]">Método dos Copões de Gin</p>
                    </div>
                  </div>
                </div>

                {/* Bottom Mockup Sub-caption */}
                <div className="mt-3 text-center">
                  <p className="text-xs text-[#B8B8B8]">
                    Acesse imediatamente no celular por apenas <span className="text-[#E50920] font-bold">R$ 14,90</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


