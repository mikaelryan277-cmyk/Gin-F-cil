import React from 'react';
import { BEFORE_AFTER } from '../data/landingData';
import { XCircle, CheckCircle2, Crown, Sparkles } from 'lucide-react';

interface TransformationSectionProps {
  onScrollToOffer: () => void;
}

export const TransformationSection: React.FC<TransformationSectionProps> = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#090909] border-b border-[#1c1c1c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* METAMORFOSE (ANTES VS DEPOIS) */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1c1214] border border-[#E50920]/40 text-xs font-semibold text-[#E50920] mb-4">
              <Sparkles className="w-4 h-4 text-[#E50920]" />
              <span>A TRANSFORMAÇÃO DA EXPERIÊNCIA</span>
            </div>
            <h2 className="font-serif-display font-bold text-2xl sm:text-4xl text-[#F5F5F0] mb-4">
              {BEFORE_AFTER.title}
            </h2>
            <p className="text-base sm:text-lg text-[#B8B8B8]">
              {BEFORE_AFTER.subtitle}
            </p>
          </div>

          {/* Side-by-Side High Impact Comparison Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Card BEFORE */}
            <div className="bg-[#111111] border border-[#262626] rounded-3xl p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#222222] text-[#888888] text-xs font-bold px-4 py-1.5 rounded-bl-2xl uppercase tracking-wider">
                {BEFORE_AFTER.before.badge}
              </div>

              <h3 className="font-serif-display font-bold text-xl text-[#888888] mb-6 pt-2 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#555555]" />
                Sem o Método
              </h3>

              <ul className="space-y-4">
                {BEFORE_AFTER.before.points.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[#888888]">
                    <XCircle className="w-5 h-5 text-[#666666] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card AFTER - Highlight Red Premium */}
            <div className="bg-[#171717] border-2 border-[#E50920]/70 rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-2xl red-glow">
              <div className="absolute top-0 right-0 bg-[#E50920] text-white text-xs font-extrabold px-4 py-1.5 rounded-bl-2xl uppercase tracking-wider flex items-center gap-1.5 shadow-md">
                <Crown className="w-3.5 h-3.5" />
                <span>{BEFORE_AFTER.after.badge}</span>
              </div>

              <h3 className="font-serif-display font-bold text-xl text-[#F5F5F0] mb-6 pt-2 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#E50920] animate-ping" />
                Com o Efeito Bartender
              </h3>

              <ul className="space-y-4">
                {BEFORE_AFTER.after.points.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[#F5F5F0] font-medium">
                    <CheckCircle2 className="w-5 h-5 text-[#E50920] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};



