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
    <section className="relative overflow-hidden pt-8 sm:pt-14 pb-16 sm:pb-24 bg-gradient-to-b from-[#0b0c10] via-[#11131c] to-[#0b0c10] border-b border-[#212433]">
      {/* Background ambient lighting blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none opacity-30">
        <div className="absolute top-10 left-1/4 w-80 h-80 bg-[#d4af37]/25 rounded-full blur-[120px]" />
        <div className="absolute top-32 right-1/4 w-96 h-96 bg-[#9a3412]/30 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 left-1/3 w-64 h-64 bg-[#064e3b]/30 rounded-full blur-[100px]" />
      </div>

      {/* Micro-animation: Rising drink bubbles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40">
        <div className="absolute bottom-10 left-[15%] w-2 h-2 rounded-full bg-[#d4af37] animate-bubble-1" />
        <div className="absolute bottom-20 left-[45%] w-3 h-3 rounded-full bg-[#f3e5ab] animate-bubble-2" />
        <div className="absolute bottom-5 right-[20%] w-2.5 h-2.5 rounded-full bg-[#d4af37] animate-bubble-3" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Eyebrow Tag */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1a1d29] border border-[#d4af37]/40 shadow-inner text-xs sm:text-sm font-semibold text-[#f3e5ab] animate-pulse-glow">
            <Flame className="w-4 h-4 text-[#d97706]" />
            <span>MÉTODOS EXCLUSIVOS DE HAVANA & COQUETELARIA EM CASA</span>
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <h1 className="font-serif-display font-extrabold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white leading-[1.15] sm:leading-[1.15] mb-6 tracking-tight">
              Com o <span className="text-gold-gradient">Método Cubano</span>, Aprenda a Fazer Drink de Bar em Casa Este Fim de Semana
            </h1>

            <p className="font-sans-body text-base sm:text-lg lg:text-xl text-[#b8bdcc] leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
              {HERO_COPY.subheadline}
            </p>

            {/* Quick value highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 max-w-xl mx-auto lg:mx-0 text-xs sm:text-sm text-[#d0d4e3]">
              <div className="flex items-center justify-center lg:justify-start gap-2 bg-[#141622]/80 border border-[#272b3c] px-3 py-2 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span>30 Receitas Práticas</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2 bg-[#141622]/80 border border-[#272b3c] px-3 py-2 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span>Ingredientes Baratos</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2 bg-[#141622]/80 border border-[#272b3c] px-3 py-2 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span>Zero Enrocação</span>
              </div>
            </div>

            {/* Main Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              <button
                onClick={onScrollToOffer}
                id="btn-hero-cta"
                data-checkout="hero"
                className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 px-8 py-4 sm:py-4.5 rounded-2xl bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#aa771c] text-[#0b0c10] font-black text-base sm:text-lg uppercase tracking-wide transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] gold-glow-lg cursor-pointer"
              >
                <span>{HERO_COPY.mainCtaText}</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onScrollToPreview}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-[#151722] hover:bg-[#1f2233] border border-[#2e3347] text-[#e0e2ec] font-semibold text-sm transition-all duration-200 cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-[#d4af37]" />
                <span>{HERO_COPY.secondaryCtaText}</span>
              </button>
            </div>

            {/* Social Trust Bar */}
            <div className="pt-4 border-t border-[#202333]/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[#a0a5ba]">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <img className="w-7 h-7 rounded-full border-2 border-[#0b0c10]" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Avatar User" />
                  <img className="w-7 h-7 rounded-full border-2 border-[#0b0c10]" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Avatar User" />
                  <img className="w-7 h-7 rounded-full border-2 border-[#0b0c10]" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" alt="Avatar User" />
                </div>
                <div>
                  <div className="flex text-[#d4af37]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                  <span className="font-semibold text-white">4.9/5 (+2.480 leitores)</span>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <Download className="w-4 h-4 text-[#d4af37]" />
                <span>Download imediato após pagamento</span>
              </div>

              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#10b981]" />
                <span>7 dias de Garantia</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Product Mockup with Float & Glow */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Backlight Glow Ring */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#d4af37]/30 via-[#9a3412]/30 to-[#064e3b]/30 rounded-3xl blur-2xl transform scale-105" />

              {/* Main Floating Product Mockup Frame */}
              <div className="relative bg-gradient-to-b from-[#181a26] to-[#0e1018] p-3 sm:p-4 rounded-3xl border border-[#d4af37]/40 shadow-2xl animate-float">
                <div className="relative overflow-hidden rounded-2xl border border-[#2a2e42] aspect-[3/4] bg-[#07080b]">
                  <img
                    src={mockupImgPath}
                    alt="Gin Fácil - O Efeito Bartender PDF Mockup"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover rounded-2xl transform transition-transform duration-700 hover:scale-105"
                  />

                  {/* Glassmorphism Badge Floating Overlay */}
                  <div className="absolute top-4 left-4 bg-[#090a0d]/85 backdrop-blur-md border border-[#d4af37]/50 rounded-xl p-3 shadow-xl flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#d4af37] to-[#9a3412] flex items-center justify-center text-[#0b0c10] font-black text-[10px] tracking-widest">
                      GUIA
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">Método Completo</p>
                      <p className="text-[10px] text-[#e5c158]">Acesso no Celular ou Tablet</p>
                    </div>
                  </div>

                  {/* Floating Shaker Icon Badge Bottom Right */}
                  <div className="absolute bottom-4 right-4 bg-[#0b0c10]/90 backdrop-blur-md border border-[#d4af37]/40 rounded-xl p-3 shadow-2xl flex items-center gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-[#10b981] animate-ping" />
                    <div>
                      <p className="text-[11px] font-bold text-white">Método Cubano</p>
                      <p className="text-[10px] text-[#a0a5ba]">30 Receitas + Dicas de Bar</p>
                    </div>
                  </div>
                </div>

                {/* Bottom Mockup Sub-caption */}
                <div className="mt-3 text-center">
                  <p className="text-xs text-[#a0a5ba]">
                    Acesse imediatamente no seu celular em menos de <span className="text-[#d4af37] font-bold">1 minuto</span>.
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
