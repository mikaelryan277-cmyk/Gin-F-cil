import React from 'react';
import { ShieldCheck, Lock, RefreshCw, CheckCircle2 } from 'lucide-react';

export const GuaranteeSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#0b0c10] via-[#121422] to-[#0b0c10] relative border-b border-[#212433]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#10131e] border-2 border-[#d4af37]/50 rounded-3xl p-8 sm:p-12 shadow-2xl gold-glow relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Golden Shield Seal Emblem */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center text-center">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-[#d4af37] via-[#f3e5ab] to-[#aa771c] p-1 shadow-2xl flex items-center justify-center animate-pulse-glow">
                <div className="w-full h-full bg-[#0b0c10] rounded-full flex flex-col items-center justify-center text-center p-2">
                  <ShieldCheck className="w-12 h-12 text-[#d4af37] mb-1" />
                  <span className="font-serif-display font-extrabold text-xl text-white">7 DIAS</span>
                  <span className="text-[9px] font-bold uppercase text-[#e5c158]">GARANTIA RISCO ZERO</span>
                </div>
              </div>
            </div>

            {/* Right Column: Copy & Details */}
            <div className="lg:col-span-8 text-center lg:text-left space-y-4">
              <span className="text-xs font-bold text-[#d4af37] uppercase tracking-widest">Compromisso de Satisfação</span>
              <h2 className="font-serif-display font-bold text-2xl sm:text-3xl text-white">
                Ou Seus Drinks Impressionam Todo Mundo ou Você Não Paga Nada!
              </h2>

              <p className="text-sm sm:text-base text-[#b0b6cc] leading-relaxed">
                Nós confiamos tanto no poder do Método Cubano que assumimos todo o risco por você. Acesse o guia, teste as receitas neste fim de semana e veja a reação dos seus amigos.
              </p>

              <p className="text-sm text-[#b0b6cc] leading-relaxed">
                Se por qualquer motivo você não gostar das receitas ou achar que o método não é para você, basta nos mandar uma mensagem dentro de <strong className="text-white">7 dias</strong> e devolveremos <strong className="text-[#d4af37]">100% do seu dinheiro</strong>. Sem letras miúdas.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-[#e0e2ec]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#10b981]" />
                  <span>Reembolso sem burocracia</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Lock className="w-4 h-4 text-[#d4af37]" />
                  <span>Processado de forma segura</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
