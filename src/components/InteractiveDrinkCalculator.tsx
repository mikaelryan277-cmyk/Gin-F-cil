import React, { useState } from 'react';
import { Calculator, Users, Sparkles, GlassWater, ShoppingBag, DollarSign, ArrowRight } from 'lucide-react';

interface InteractiveDrinkCalculatorProps {
  onScrollToOffer: () => void;
}

export const InteractiveDrinkCalculator: React.FC<InteractiveDrinkCalculatorProps> = ({ onScrollToOffer }) => {
  const [guestsCount, setGuestsCount] = useState<number>(6);
  const [vibe, setVibe] = useState<'refrescante' | 'tropical' | 'intenso'>('refrescante');

  // Calculations
  const totalDrinksNeeded = guestsCount * 3; // avg 3 drinks per person
  const iceKg = Math.ceil(guestsCount * 1.2); // ~1.2kg ice per guest
  const ginBottles = Math.ceil((totalDrinksNeeded * 50) / 750); // 50ml per drink, 750ml bottle
  const tonicCans = totalDrinksNeeded * 1.2; // 1.2 cans/mixers per drink
  const limesNeeded = Math.ceil(totalDrinksNeeded * 0.75); // 0.75 lime per drink

  const estimatedBarCost = totalDrinksNeeded * 38; // avg R$38 at a bar
  const estimatedHomeCost = (ginBottles * 55) + (iceKg * 6) + (tonicCans * 4.5) + (limesNeeded * 0.8);
  const totalSavings = Math.max(0, estimatedBarCost - estimatedHomeCost);

  return (
    <section className="py-16 sm:py-24 bg-[#0a0b0e] relative border-b border-[#212433]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#201d12] border border-[#d4af37]/40 text-xs font-semibold text-[#f3e5ab] mb-4">
            <Calculator className="w-4 h-4 text-[#d4af37]" />
            <span>FERRAMENTA PRÁTICA INTERATIVA</span>
          </div>
          <h2 className="font-serif-display font-bold text-2xl sm:text-4xl text-white mb-3">
            Calculadora do Anfitrião Inteligente
          </h2>
          <p className="text-sm sm:text-base text-[#a0a5ba]">
            Simule o consumo para a sua galera no próximo fim de semana e veja quanto você economiza comparado ao bar:
          </p>
        </div>

        <div className="bg-[#10121b] border border-[#23273a] rounded-3xl p-6 sm:p-10 max-w-4xl mx-auto shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Input Controls */}
            <div className="space-y-6">
              <div>
                <label className="flex justify-between text-sm font-bold text-white mb-2">
                  <span className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#d4af37]" />
                    Número de Convidados:
                  </span>
                  <span className="text-[#d4af37] text-base">{guestsCount} pessoas</span>
                </label>
                <input
                  type="range"
                  min={2}
                  max={24}
                  step={2}
                  value={guestsCount}
                  onChange={(e) => setGuestsCount(parseInt(e.target.value))}
                  className="w-full h-2 bg-[#202436] rounded-lg appearance-none cursor-pointer accent-[#d4af37]"
                />
                <div className="flex justify-between text-[11px] text-[#71788e] mt-1">
                  <span>2 amigos</span>
                  <span>10 pessoas</span>
                  <span>24 galera em peso</span>
                </div>
              </div>

              {/* Vibe Selection */}
              <div>
                <label className="block text-sm font-bold text-white mb-2">
                  Estilo de Drink Preferido:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setVibe('refrescante')}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      vibe === 'refrescante'
                        ? 'bg-[#d4af37] text-[#0b0c10] gold-glow'
                        : 'bg-[#181a27] text-[#9298ad] hover:bg-[#202436]'
                    }`}
                  >
                    Gin Tônica & Spritz
                  </button>
                  <button
                    onClick={() => setVibe('tropical')}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      vibe === 'tropical'
                        ? 'bg-[#d4af37] text-[#0b0c10] gold-glow'
                        : 'bg-[#181a27] text-[#9298ad] hover:bg-[#202436]'
                    }`}
                  >
                    Mojito & Cuban Drinks
                  </button>
                  <button
                    onClick={() => setVibe('intenso')}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      vibe === 'intenso'
                        ? 'bg-[#d4af37] text-[#0b0c10] gold-glow'
                        : 'bg-[#181a27] text-[#9298ad] hover:bg-[#202436]'
                    }`}
                  >
                    Negroni & Encorpados
                  </button>
                </div>
              </div>

              {/* Recipe Recommendation Pill */}
              <div className="bg-[#171a29] border border-[#2c324a] rounded-xl p-4 flex items-center gap-3">
                <GlassWater className="w-8 h-8 text-[#d4af37] shrink-0" />
                <div className="text-xs">
                  <span className="text-[10px] uppercase font-bold text-[#d4af37]">Receita Chave no Guia:</span>
                  <p className="font-bold text-white">
                    {vibe === 'refrescante' && "Gin Tônica Havaneira com Alecrim Tostado"}
                    {vibe === 'tropical' && "Mojito Cubano do Bodeguita com Hortelã Fresca"}
                    {vibe === 'intenso' && "Negroni de Mogno & Zeste de Toranja"}
                  </p>
                </div>
              </div>
            </div>

            {/* Output Calculations Box */}
            <div className="bg-[#0b0c10] border border-[#d4af37]/40 rounded-2xl p-6 space-y-4 shadow-xl">
              <div className="border-b border-[#212433] pb-3">
                <p className="text-xs text-[#a0a5ba] uppercase tracking-wider font-bold">O que comprar para sua festa:</p>
                <p className="text-lg font-serif-display font-bold text-[#f3e5ab]">
                  ~{totalDrinksNeeded} drinks previstos ({guestsCount} pessoas)
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-[#131522] p-3 rounded-xl border border-[#23273b]">
                  <span className="text-[#a0a5ba] block">Destilados (Garrafas):</span>
                  <strong className="text-white text-sm">{ginBottles} garrafa(s) de 750ml</strong>
                </div>
                <div className="bg-[#131522] p-3 rounded-xl border border-[#23273b]">
                  <span className="text-[#a0a5ba] block">Gelo Rígido:</span>
                  <strong className="text-white text-sm">~{iceKg} kg de gelo</strong>
                </div>
                <div className="bg-[#131522] p-3 rounded-xl border border-[#23273b]">
                  <span className="text-[#a0a5ba] block">Tônica/Misturas:</span>
                  <strong className="text-white text-sm">~{Math.ceil(tonicCans)} latas</strong>
                </div>
                <div className="bg-[#131522] p-3 rounded-xl border border-[#23273b]">
                  <span className="text-[#a0a5ba] block">Limões Tahiti:</span>
                  <strong className="text-white text-sm">~{limesNeeded} unidades</strong>
                </div>
              </div>

              {/* Financial Savings Box */}
              <div className="bg-gradient-to-r from-[#1b261e] to-[#11131c] border border-[#064e3b] p-4 rounded-xl text-center">
                <p className="text-xs text-[#a0a5ba]">Gasto no Bar vs Gasto em Casa:</p>
                <div className="flex justify-between items-center mt-1 text-xs">
                  <span className="text-[#ef4444] line-through">Bar: R$ {estimatedBarCost.toFixed(0)}</span>
                  <span className="text-[#10b981] font-bold text-sm">Em Casa: ~R$ {estimatedHomeCost.toFixed(0)}</span>
                </div>
                <p className="text-xs font-black text-[#d4af37] mt-2">
                  Economia estimada de R$ {totalSavings.toFixed(0)} neste único rolê!
                </p>
              </div>

              <button
                onClick={onScrollToOffer}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#aa771c] text-[#0b0c10] font-extrabold text-xs uppercase tracking-wider hover:scale-[1.02] transition-transform gold-glow cursor-pointer"
              >
                Garantir Guia Por Apenas R$ 14,90
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
