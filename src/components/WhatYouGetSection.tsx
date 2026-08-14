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
          <h2 className="font-serif-display font-bold text-2xl sm:text-4xl text-[#F5F5F0] mb-4">
            Do Supermercado Direto pro Copão
          </h2>
          <p className="text-base sm:text-lg text-[#B8B8B8]">
            Tudo o que você precisa para transformar ingredientes simples de mercado em copões com visual e sabor de alto nível.
          </p>
        </div>

        {/* 4 Core Modules Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHAT_YOU_GET.map((item, idx) => {
            const IconComp = idx === 0 ? BookOpen : idx === 1 ? Layers : idx === 2 ? Sparkles : ShoppingCart;
            return (
              <div
                key={idx}
                className="bg-[#171717] border border-[#262626] hover:border-[#E50920]/50 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#E50920]/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#231215] border border-[#E50920]/40 flex items-center justify-center text-[#E50920]">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded bg-[#111111] text-[#E50920] border border-[#2a2a2a]">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="font-serif-display font-bold text-lg text-[#F5F5F0] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#B8B8B8] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};



