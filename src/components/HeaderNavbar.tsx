import React from 'react';
import { GlassWater, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';

interface HeaderNavbarProps {
  onScrollToOffer: () => void;
  checkoutUrl?: string;
}

export const HeaderNavbar: React.FC<HeaderNavbarProps> = ({ onScrollToOffer }) => {
  return (
    <header className="sticky top-0 z-50 bg-[#090909]/95 backdrop-blur-md border-b border-[#1f1f1f]">
      {/* Top Urgency Ticker Bar */}
      <div className="bg-gradient-to-r from-[#B80818] via-[#E50920] to-[#8A0612] text-white py-1.5 px-4 text-center text-xs sm:text-sm font-medium tracking-wide shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
          <Sparkles className="w-3.5 h-3.5 animate-pulse text-[#fff]" />
          <span>OFERTA DE LANÇAMENTO: Método com <strong>70% de Desconto</strong> e Acesso Imediato no Celular por apenas R$ 14,90</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#E50920] to-[#171717] p-[1px] shadow-md shadow-[#E50920]/20">
            <div className="w-full h-full bg-[#111111] rounded-[11px] flex items-center justify-center text-[#E50920]">
              <GlassWater className="w-5 h-5" />
            </div>
          </div>
          <div>
            <div className="font-serif-display font-bold text-lg sm:text-xl text-[#F5F5F0] tracking-wide flex items-center gap-1.5">
              EFEITO BARTENDER
              <span className="text-[10px] uppercase font-sans font-bold px-2 py-0.5 rounded bg-[#E50920]/15 text-[#E50920] border border-[#E50920]/30">
                Método Oficial
              </span>
            </div>
            <p className="text-[11px] text-[#B8B8B8] hidden sm:block">Copões de Gin & Drinks de Rolê em Casa</p>
          </div>
        </div>

        {/* Navigation & Direct Action */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="hidden md:flex items-center gap-2 text-xs text-[#B8B8B8]">
            <ShieldCheck className="w-4 h-4 text-[#E50920]" />
            <span>Compra Segura 100% SSL</span>
          </div>

          <button
            onClick={onScrollToOffer}
            id="btn-nav-checkout"
            data-checkout="nav"
            className="group relative inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-[#E50920] hover:bg-[#B80818] text-white font-black text-xs sm:text-sm tracking-wide transition-all duration-300 hover:scale-105 red-glow cursor-pointer"
          >
            <span>QUERO O MÉTODO</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </header>
  );
};


