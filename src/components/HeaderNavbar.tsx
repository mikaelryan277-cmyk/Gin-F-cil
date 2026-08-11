import React from 'react';
import { GlassWater, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';

interface HeaderNavbarProps {
  onScrollToOffer: () => void;
  checkoutUrl: string;
}

export const HeaderNavbar: React.FC<HeaderNavbarProps> = ({ onScrollToOffer, checkoutUrl }) => {
  return (
    <header className="sticky top-0 z-50 bg-[#090a0d]/90 backdrop-blur-md border-b border-[#212433]">
      {/* Top Urgency Ticker Bar */}
      <div className="bg-gradient-to-r from-[#9a3412] via-[#d4af37] to-[#064e3b] text-white py-1.5 px-4 text-center text-xs sm:text-sm font-medium tracking-wide">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
          <Sparkles className="w-3.5 h-3.5 animate-pulse text-[#fff2ac]" />
          <span>OFETA DE LANÇAMENTO: Guia em PDF com <strong>70% de Desconto</strong> + Bônus Exclusivos só este Fim de Semana!</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#d4af37] via-[#9a3412] to-[#0b0c10] p-[1px] shadow-md shadow-[#d4af37]/20">
            <div className="w-full h-full bg-[#0b0c10] rounded-[11px] flex items-center justify-center text-[#d4af37]">
              <GlassWater className="w-5 h-5" />
            </div>
          </div>
          <div>
            <div className="font-serif-display font-bold text-lg sm:text-xl text-white tracking-wide flex items-center gap-1.5">
              GIN FÁCIL
              <span className="text-[10px] uppercase font-sans font-bold px-2 py-0.5 rounded bg-[#d4af37]/15 text-[#e5c158] border border-[#d4af37]/30">
                O Efeito Bartender
              </span>
            </div>
            <p className="text-[11px] text-[#a0a5ba] hidden sm:block">Método Cubano de Coquetelaria em Casa</p>
          </div>
        </div>

        {/* Navigation & Direct Action */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="hidden md:flex items-center gap-2 text-xs text-[#a0a5ba]">
            <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
            <span>Compra Segura 100% SSL</span>
          </div>

          <button
            onClick={onScrollToOffer}
            id="btn-nav-checkout"
            data-checkout="nav"
            className="group relative inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#aa771c] text-[#0c0d12] font-extrabold text-xs sm:text-sm tracking-wide transition-all duration-300 hover:scale-105 gold-glow cursor-pointer"
          >
            <span>QUERO O GUIA</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </header>
  );
};
