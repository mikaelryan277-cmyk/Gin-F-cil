import React, { useState } from 'react';
import { WHAT_YOU_GET, RECIPE_PREVIEWS } from '../data/landingData';
import { BookOpen, Layers, Sparkles, ShoppingCart, GlassWater, Clock, Flame, ChevronRight, Check, Info } from 'lucide-react';

export const WhatYouGetSection: React.FC = () => {
  const [selectedRecipeIndex, setSelectedRecipeIndex] = useState(0);
  const activeRecipe = RECIPE_PREVIEWS[selectedRecipeIndex];

  return (
    <section id="preview-section" className="py-16 sm:py-24 bg-[#08090c] relative border-b border-[#212433]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1b1e2c] border border-[#d4af37]/40 text-xs font-semibold text-[#f3e5ab] mb-4">
            <BookOpen className="w-4 h-4 text-[#d4af37]" />
            <span>O QUE ESTÁ INCLUSO NO MÉTODO</span>
          </div>
          <h2 className="font-serif-display font-bold text-2xl sm:text-4xl text-white mb-4">
            Um Guia Sensorial, Visual e Direto ao Ponto
          </h2>
          <p className="text-base sm:text-lg text-[#a0a5ba]">
            Sem teorias cansativas. Você abre o guia no celular e já sabe exatamente o que comprar, como preparar e como servir.
          </p>
        </div>

        {/* 4 Core Modules Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {WHAT_YOU_GET.map((item, idx) => {
            const IconComp = idx === 0 ? BookOpen : idx === 1 ? Layers : idx === 2 ? Sparkles : ShoppingCart;
            return (
              <div
                key={idx}
                className="bg-[#10121c] border border-[#23273b] hover:border-[#d4af37]/50 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#d4af37]/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#d4af37]/20 to-[#9a3412]/20 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded bg-[#1f2336] text-[#e5c158] border border-[#2e344e]">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="font-serif-display font-bold text-lg text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#9298ad] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive PDF Page Previewer Component */}
        <div className="bg-gradient-to-b from-[#141724] to-[#0d0e15] border border-[#d4af37]/30 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 border-b border-[#252a3f] pb-6">
            <div>
              <span className="text-xs uppercase font-bold text-[#d4af37] tracking-wider">Degustação Interativa</span>
              <h3 className="font-serif-display font-bold text-xl sm:text-2xl text-white">
                Espie por Dentro: 3 das 30 Receitas do Guia
              </h3>
            </div>

            {/* Recipe Selector Buttons */}
            <div className="flex flex-wrap gap-2">
              {RECIPE_PREVIEWS.map((rec, index) => (
                <button
                  key={rec.id}
                  onClick={() => setSelectedRecipeIndex(index)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedRecipeIndex === index
                      ? 'bg-[#d4af37] text-[#0b0c10] shadow-md gold-glow'
                      : 'bg-[#1a1d2d] text-[#b0b6cc] hover:bg-[#25293e]'
                  }`}
                >
                  {rec.tag.split(' ')[0]} {rec.title.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Recipe Card Preview */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Details */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#251f11] border border-[#d4af37]/40 text-xs font-semibold text-[#f3e5ab]">
                <GlassWater className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Copo Sugerido: {activeRecipe.glassType}</span>
              </div>

              <h4 className="font-serif-display font-bold text-2xl sm:text-3xl text-white">
                {activeRecipe.title}
              </h4>

              <div className="flex items-center gap-4 text-xs text-[#a0a5ba]">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#d4af37]" />
                  <span>Preparo: {activeRecipe.prepTime}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-[#d97706]" />
                  <span>Dificuldade: {activeRecipe.difficulty}</span>
                </div>
              </div>

              <p className="text-sm text-[#b0b6cc] leading-relaxed">
                {activeRecipe.description}
              </p>

              {/* Key ingredients */}
              <div className="bg-[#0b0c10]/80 rounded-2xl p-4 border border-[#23273b]">
                <p className="text-xs font-bold text-[#d4af37] uppercase tracking-wider mb-2">Ingredientes Chave:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#e0e2ec]">
                  {activeRecipe.keyIngredients.map((ing, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#d4af37]" />
                      <span>{ing}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bartender Tip Callout */}
              <div className="bg-gradient-to-r from-[#211b0e] to-[#12141f] rounded-2xl p-4 border border-[#d4af37]/30 flex items-start gap-3">
                <Info className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                <p className="text-xs text-[#e5c158] leading-relaxed">
                  <strong>Dica de Ouro do Bartender:</strong> {activeRecipe.bartenderTip}
                </p>
              </div>
            </div>

            {/* Right Column: Visual Preview Sheet Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm bg-[#090a0d] border border-[#d4af37]/40 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-[#d4af37] text-[#0b0c10] text-[10px] font-black px-3 py-1 rounded-bl-xl uppercase">
                  Receita {selectedRecipeIndex + 12} do Método
                </div>

                <div className="text-center pt-2 pb-4 border-b border-[#212433]">
                  <p className="text-[10px] uppercase font-bold text-[#a0a5ba]">GIN FÁCIL: RECEITA #{selectedRecipeIndex + 1}</p>
                  <p className="font-serif-display font-bold text-lg text-[#f3e5ab] mt-1">{activeRecipe.title}</p>
                </div>

                <div className="py-6 space-y-4 text-center">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-tr from-[#d4af37]/20 via-[#9a3412]/30 to-[#064e3b]/20 flex items-center justify-center border border-[#d4af37]/40 text-[#d4af37] shadow-inner">
                    <GlassWater className="w-10 h-10" />
                  </div>

                  <p className="text-xs text-[#a0a5ba] italic">
                    "Proporção perfeita para não precisar medir no olho."
                  </p>
                </div>

                <div className="text-center pt-4 border-t border-[#212433]">
                  <span className="text-[11px] text-[#d4af37] font-semibold">
                    + Outras 27 receitas completas no guia oficial
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
