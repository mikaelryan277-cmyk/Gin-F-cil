import React from 'react';
import { WHAT_YOU_GET } from '../data/landingData';
import { BookOpen, Layers, Sparkles, ShoppingCart } from 'lucide-react';

export const WhatYouGetSection: React.FC = () => {
  return (
    <section id="preview-section" className="py-16 sm:py-24 bg-[#090909] relative border-b border-[#1c1c1c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1c1214] border border-[#E50920]/40 text-xs font-semibold text-[#E50920] mb-4">
            <BookOpen className="w-4 h-4 text-[#E50920]" />
            <span>O QUE VOCÊ VAI APRENDER NO MÉTODO</span>
          </div>
          <h2 className="font-serif-display font-bold text-3xl sm:text-4xl text-[#F5F5F0] mb-4">
            Você recebe:
          </h2>
          <p className="text-base sm:text-lg text-[#B8B8B8] max-w-2xl mx-auto">
            Acesso imediato ao material completo otimizado para o seu celular.
          </p>
        </div>

        {/* 4 Core Modules Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {WHAT_YOU_GET.map((item, idx) => {
            const IconComp = idx === 0 ? BookOpen : idx === 1 ? Layers : idx === 2 ? Sparkles : ShoppingCart;
            return (
              <div
                key={idx}
                className="bg-[#171717] border border-[#262626] rounded-2xl p-6 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#231215] border border-[#E50920]/40 flex items-center justify-center text-[#E50920] mb-4">
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-base text-[#F5F5F0] mb-2 uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="text-sm text-[#B8B8B8] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};



