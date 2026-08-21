import React from 'react';
import { HOW_IT_WORKS_STEPS } from '../data/landingData';
import { Check, ArrowDown, ArrowRight, Zap } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#090909] relative border-b border-[#1c1c1c]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1c1214] border border-[#E50920]/40 text-xs font-semibold text-[#E50920] mb-3">
            <Zap className="w-4 h-4" />
            <span>PASSO A PASSO</span>
          </div>
          <h2 className="font-serif-display font-bold text-2xl sm:text-4xl text-[#F5F5F0] mb-2">
            Não tem segredo
          </h2>
          <p className="text-sm sm:text-base text-[#888888]">
            Três passos simples para você preparar qualquer receita no ato.
          </p>
        </div>

        {/* 3 Steps Horizontal / Vertical Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 relative">
          {HOW_IT_WORKS_STEPS.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#141414] border border-[#222222] hover:border-[#E50920]/40 rounded-2xl p-6 text-center transition-all flex flex-col items-center relative"
            >
              {/* Step Badge */}
              <div className="w-12 h-12 rounded-2xl bg-[#231215] border border-[#E50920]/40 flex items-center justify-center text-[#E50920] font-black text-lg mb-4 shadow-lg">
                {item.step}
              </div>

              <span className="text-[11px] font-bold text-[#E50920] uppercase tracking-widest mb-1">
                Passo {item.step}
              </span>
              
              <h3 className="font-serif-display font-bold text-xl text-[#F5F5F0] mb-2">
                {item.label}
              </h3>
              
              <p className="text-xs sm:text-sm text-[#B8B8B8] leading-relaxed">
                {item.description}
              </p>

              {/* Desktop arrow connector */}
              {idx < HOW_IT_WORKS_STEPS.length - 1 && (
                <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-[#E50920] bg-[#090909] p-1 rounded-full border border-[#222222]">
                  <ArrowRight className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Visual summary bar */}
        <div className="mt-8 bg-[#141414]/60 border border-[#222222] py-3.5 px-6 rounded-2xl flex items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-bold text-[#F5F5F0]">
          <span className="text-[#E50920]">ESCOLHEU</span>
          <span className="text-[#555555]">→</span>
          <span className="text-[#E50920]">MONTOU</span>
          <span className="text-[#555555]">→</span>
          <span className="text-[#E50920]">SERVIU</span>
        </div>
      </div>
    </section>
  );
};
