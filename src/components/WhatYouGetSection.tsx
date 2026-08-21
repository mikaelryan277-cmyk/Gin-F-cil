import React from 'react';
import { WHAT_YOU_RECEIVE } from '../data/landingData';
import { GlassWater, ShoppingCart, Sparkles, Smartphone, Layers, PackageCheck } from 'lucide-react';

export const WhatYouGetSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#0c0c0c] relative border-b border-[#1c1c1c]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1c1214] border border-[#E50920]/40 text-xs font-semibold text-[#E50920] mb-3">
            <PackageCheck className="w-4 h-4 text-[#E50920]" />
            <span>CONTEÚDO DO MÉTODO</span>
          </div>
          <h2 className="font-serif-display font-bold text-2xl sm:text-4xl text-[#F5F5F0]">
            Ao acessar hoje você recebe:
          </h2>
        </div>

        {/* 5 Deliverables Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {WHAT_YOU_RECEIVE.map((item, idx) => {
            const getIcon = (iconName: string) => {
              switch (iconName) {
                case 'GlassWater': return <GlassWater className="w-5 h-5" />;
                case 'ShoppingCart': return <ShoppingCart className="w-5 h-5" />;
                case 'Ice': return <Layers className="w-5 h-5" />;
                case 'Sparkles': return <Sparkles className="w-5 h-5" />;
                case 'Smartphone': return <Smartphone className="w-5 h-5" />;
                default: return <Sparkles className="w-5 h-5" />;
              }
            };

            return (
              <div
                key={idx}
                className="bg-[#141414] border border-[#222222] hover:border-[#E50920]/40 rounded-2xl p-5 sm:p-6 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-[#231215] border border-[#E50920]/30 flex items-center justify-center text-[#E50920] mb-4">
                  {getIcon(item.icon)}
                </div>
                <h3 className="font-serif-display font-bold text-base text-[#F5F5F0] mb-1.5 tracking-wide">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#B8B8B8] leading-relaxed">
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




