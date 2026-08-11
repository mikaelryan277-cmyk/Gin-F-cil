import React from 'react';
import { BEFORE_AFTER } from '../data/landingData';
import { XCircle, CheckCircle2, Crown, Sparkles, ArrowRight } from 'lucide-react';

interface TransformationSectionProps {
  onScrollToOffer: () => void;
}

export const TransformationSection: React.FC<TransformationSectionProps> = ({ onScrollToOffer }) => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#0b0c10] via-[#12141f] to-[#0b0c10] border-b border-[#212433] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18231c] border border-[#064e3b] text-xs font-semibold text-[#10b981] mb-4">
            <Sparkles className="w-4 h-4 text-[#d4af37]" />
            <span>A METAMORFOSE DO ANFITRIÃO</span>
          </div>
          <h2 className="font-serif-display font-bold text-2xl sm:text-4xl text-white mb-4">
            {BEFORE_AFTER.title}
          </h2>
          <p className="text-base sm:text-lg text-[#a0a5ba]">
            {BEFORE_AFTER.subtitle}
          </p>
        </div>

        {/* Side-by-Side High Impact Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card BEFORE */}
          <div className="bg-[#12131a] border border-[#262838] rounded-3xl p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#2b1614] text-[#ef4444] text-xs font-bold px-4 py-1.5 rounded-bl-2xl uppercase tracking-wider">
              {BEFORE_AFTER.before.badge}
            </div>

            <h3 className="font-serif-display font-bold text-xl text-[#9298ad] mb-6 pt-2 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ef4444]" />
              Sem o Método
            </h3>

            <ul className="space-y-4">
              {BEFORE_AFTER.before.points.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-[#82889e]">
                  <XCircle className="w-5 h-5 text-[#ef4444]/80 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card AFTER - Highlight Gold & Emerald */}
          <div className="bg-gradient-to-b from-[#191c2b] to-[#0f111a] border-2 border-[#d4af37]/60 rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-2xl gold-glow">
            <div className="absolute top-0 right-0 bg-gradient-to-r from-[#d4af37] to-[#aa771c] text-[#0b0c10] text-xs font-extrabold px-4 py-1.5 rounded-bl-2xl uppercase tracking-wider flex items-center gap-1.5 shadow-md">
              <Crown className="w-3.5 h-3.5" />
              <span>{BEFORE_AFTER.after.badge}</span>
            </div>

            <h3 className="font-serif-display font-bold text-xl text-white mb-6 pt-2 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#d4af37] animate-ping" />
              Com o Método Cubano
            </h3>

            <ul className="space-y-4">
              {BEFORE_AFTER.after.points.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-[#e0e2ec] font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Section Action Trigger */}
        <div className="text-center mt-12">
          <button
            onClick={onScrollToOffer}
            id="btn-transformation-cta"
            data-checkout="transformation"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#aa771c] text-[#0b0c10] font-extrabold text-sm sm:text-base uppercase tracking-wider transition-all duration-300 hover:scale-105 gold-glow cursor-pointer"
          >
            <span>Quero Mudar Meus Encontros em Casa</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
