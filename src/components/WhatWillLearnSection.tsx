import React from 'react';
import { WHAT_WILL_LEARN } from '../data/landingData';
import { CheckCircle2, ShoppingCart, GlassWater, Sparkles, BookOpen } from 'lucide-react';

const ICONS = [ShoppingCart, GlassWater, Sparkles, BookOpen];

export const WhatWillLearnSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#0d0d0d] relative overflow-hidden" id="what-will-learn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#F5F5F0] mb-6">
            O que você vai aprender
          </h2>
          <p className="font-sans-body text-[#B8B8B8] text-lg max-w-2xl mx-auto">
            Tudo o que você precisa para sair do amadorismo e dominar o preparo de copões de gin em minutos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHAT_WILL_LEARN.map((item, idx) => {
            const Icon = ICONS[idx] || CheckCircle2;
            return (
              <div 
                key={idx}
                className="bg-[#171717] border border-[#262626] p-8 rounded-2xl hover:border-[#E50920]/40 transition-all duration-300 group shadow-xl"
              >
                <div className="w-14 h-14 bg-[#090909] border border-[#262626] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-[#E50920]" />
                </div>
                <h3 className="text-xl font-bold text-[#F5F5F0] mb-3">{item.title}</h3>
                <p className="text-[#B8B8B8] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
