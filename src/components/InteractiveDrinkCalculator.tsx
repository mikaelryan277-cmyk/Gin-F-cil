import React, { useState } from 'react';
import { Calculator, Users, GlassWater } from 'lucide-react';

interface InteractiveDrinkCalculatorProps {
  onScrollToOffer: () => void;
}

export const InteractiveDrinkCalculator: React.FC<InteractiveDrinkCalculatorProps> = ({ onScrollToOffer }) => {
  const [guestsCount, setGuestsCount] = useState<number>(6);
  const [vibe, setVibe] = useState<'citrus' | 'tropical' | 'red'>('citrus');

  // Calculations
  const totalDrinksNeeded = guestsCount * 3; // avg 3 copões per person in a session
  const iceKg = Math.ceil(guestsCount * 1.2); // ~1.2kg ice per guest
  const ginBottles = Math.ceil((totalDrinksNeeded * 60) / 750); // 60ml per copão, 750ml bottle
  const mixersCans = totalDrinksNeeded * 1.5; // mixers/citrus/tonica
  const fruitsNeeded = Math.ceil(totalDrinksNeeded * 0.8); // lemons, fruits

  const estimatedBarCost = totalDrinksNeeded * 38; // avg R$38 at a club/bar
  const estimatedHomeCost = (ginBottles * 42) + (iceKg * 6) + (mixersCans * 4.2) + (fruitsNeeded * 1.5);
  const totalSavings = Math.max(0, estimatedBarCost - estimatedHomeCost);

  return (
    <section className="py-16 sm:py-24 bg-[#090909] relative border-b border-[#1c1c1c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1c1214] border border-[#E50920]/40 text-xs font-semibold text-[#E50920] mb-4">
            <Calculator className="w-4 h-4 text-[#E50920]" />
            <span>A MATEMÁTICA DO ROLÊ</span>
          </div>
          <h2 className="font-serif-display font-bold text-2xl sm:text-4xl text-[#F5F5F0] mb-3">
            Simulador de Economia: Esquenta vs Bar
          </h2>
          <p className="text-sm sm:text-base text-[#B8B8B8]">
            Veja quanto você gastaria pagando R$ 38 a 45 por drink no bar vs preparando copões de 500–700ml em casa gastando centavos:
          </p>
        </div>

        <div className="bg-[#171717] border border-[#262626] rounded-3xl p-6 sm:p-10 max-w-4xl mx-auto shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Input Controls */}
            <div className="space-y-6">
              <div>
                <label className="flex justify-between text-sm font-bold text-[#F5F5F0] mb-2">
                  <span className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#E50920]" />
                    Pessoas no Esquenta / Casa:
                  </span>
                  <span className="text-[#E50920] text-base font-black">{guestsCount} pessoas</span>
                </label>
                <input
                  type="range"
                  min={2}
                  max={20}
                  step={2}
                  value={guestsCount}
                  onChange={(e) => setGuestsCount(parseInt(e.target.value))}
                  className="w-full h-2 bg-[#262626] rounded-lg appearance-none cursor-pointer accent-[#E50920]"
                />
                <div className="flex justify-between text-[11px] text-[#888888] mt-1">
                  <span>2 (Encontro)</span>
                  <span>6 (Esquenta)</span>
                  <span>20 (Churrasco com a galera)</span>
                </div>
              </div>

              {/* Vibe Selection */}
              <div>
                <label className="block text-sm font-bold text-[#F5F5F0] mb-2">
                  Estilo de Copão Principal:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setVibe('citrus')}
                    className={`py-2.5 px-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      vibe === 'citrus'
                        ? 'bg-[#E50920] text-white red-glow'
                        : 'bg-[#111111] text-[#888888] hover:bg-[#222222] border border-[#262626]'
                    }`}
                  >
                    Citrus & Limão
                  </button>
                  <button
                    onClick={() => setVibe('tropical')}
                    className={`py-2.5 px-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      vibe === 'tropical'
                        ? 'bg-[#E50920] text-white red-glow'
                        : 'bg-[#111111] text-[#888888] hover:bg-[#222222] border border-[#262626]'
                    }`}
                  >
                    Tropical Maracujá
                  </button>
                  <button
                    onClick={() => setVibe('red')}
                    className={`py-2.5 px-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      vibe === 'red'
                        ? 'bg-[#E50920] text-white red-glow'
                        : 'bg-[#111111] text-[#888888] hover:bg-[#222222] border border-[#262626]'
                    }`}
                  >
                    Frutas Vermelhas
                  </button>
                </div>
              </div>

              {/* Recipe Recommendation Pill */}
              <div className="bg-[#111111] border border-[#262626] rounded-xl p-4 flex items-center gap-3">
                <GlassWater className="w-8 h-8 text-[#E50920] shrink-0" />
                <div className="text-xs">
                  <span className="text-[10px] uppercase font-bold text-[#E50920]">Copão Recomendado:</span>
                  <p className="font-bold text-[#F5F5F0]">
                    {vibe === 'citrus' && "Copão Citrus Limão Tahiti com Gelo Rígido (Custo R$ 6,20)"}
                    {vibe === 'tropical' && "Copão Tropical de Maracujá & Tônica (Custo R$ 7,50)"}
                    {vibe === 'red' && "Copão Vermelho de Frutas Silvestres & Citrus (Custo R$ 7,80)"}
                  </p>
                </div>
              </div>
            </div>

            {/* Output Calculations Box */}
            <div className="bg-[#111111] border border-[#262626] rounded-2xl p-6 space-y-4 shadow-xl">
              <div className="border-b border-[#222222] pb-3">
                <p className="text-xs text-[#888888] uppercase tracking-wider font-bold">Estimativa para o seu esquenta:</p>
                <p className="text-lg font-serif-display font-bold text-[#F5F5F0]">
                  ~{totalDrinksNeeded} copões ({guestsCount} pessoas)
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-[#171717] p-3 rounded-xl border border-[#262626]">
                  <span className="text-[#888888] block">Gin de Mercado:</span>
                  <strong className="text-[#F5F5F0] text-sm">{ginBottles} garrafa(s)</strong>
                </div>
                <div className="bg-[#171717] p-3 rounded-xl border border-[#262626]">
                  <span className="text-[#888888] block">Gelo de Posto/Mercado:</span>
                  <strong className="text-[#F5F5F0] text-sm">~{iceKg} kg</strong>
                </div>
                <div className="bg-[#171717] p-3 rounded-xl border border-[#262626]">
                  <span className="text-[#888888] block">Refrigerantes/Tônicas:</span>
                  <strong className="text-[#F5F5F0] text-sm">~{Math.ceil(mixersCans)} latas</strong>
                </div>
                <div className="bg-[#171717] p-3 rounded-xl border border-[#262626]">
                  <span className="text-[#888888] block">Frutas / Limão:</span>
                  <strong className="text-[#F5F5F0] text-sm">~{fruitsNeeded} unidades</strong>
                </div>
              </div>

              {/* Financial Savings Box */}
              <div className="bg-[#1a1214] border border-[#E50920]/40 p-4 rounded-xl text-center">
                <p className="text-xs text-[#888888]">Gasto no Bar vs Gasto no Esquenta:</p>
                <div className="flex justify-between items-center mt-1 text-xs">
                  <span className="text-[#888888] line-through">Bar/Balada: R$ {estimatedBarCost.toFixed(0)}</span>
                  <span className="text-[#E50920] font-bold text-sm">Em Casa: ~R$ {estimatedHomeCost.toFixed(0)}</span>
                </div>
                <p className="text-xs font-black text-[#F5F5F0] mt-2">
                  Você economiza <span className="text-[#E50920]">R$ {totalSavings.toFixed(0)}</span> num único fim de semana!
                </p>
              </div>

              <button
                onClick={onScrollToOffer}
                className="w-full py-3.5 rounded-xl bg-[#E50920] hover:bg-[#B80818] text-white font-black text-xs uppercase tracking-wider hover:scale-[1.02] transition-transform red-glow cursor-pointer"
              >
                QUERO APRENDER O EFEITO BARTENDER (R$ 14,90)
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


