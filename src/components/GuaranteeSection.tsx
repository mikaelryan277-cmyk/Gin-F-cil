import React from 'react';
import { ShieldCheck, Lock, CheckCircle2 } from 'lucide-react';

export const GuaranteeSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#090909] relative border-b border-[#1c1c1c]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#171717] border-2 border-[#E50920]/50 rounded-3xl p-8 sm:p-12 shadow-2xl red-glow relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Red Shield Seal Emblem */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center text-center">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-[#E50920] via-[#FF334B] to-[#8A0612] p-1 shadow-2xl flex items-center justify-center">
                <div className="w-full h-full bg-[#090909] rounded-full flex flex-col items-center justify-center text-center p-2">
                  <ShieldCheck className="w-12 h-12 text-[#E50920] mb-1" />
                  <span className="font-serif-display font-black text-xl text-[#F5F5F0]">7 DIAS</span>
                  <span className="text-[9px] font-bold uppercase text-[#E50920]">GARANTIA RISCO ZERO</span>
                </div>
              </div>
            </div>

            {/* Right Column: Copy & Details */}
            <div className="lg:col-span-8 text-center lg:text-left space-y-4">
              <span className="text-xs font-bold text-[#E50920] uppercase tracking-widest">Compromisso de Satisfação</span>
              <h2 className="font-serif-display font-bold text-2xl sm:text-3xl text-[#F5F5F0]">
                Ou Seus Drinks Impressionam Todo Mundo ou Você Não Paga Nada!
              </h2>

              <p className="text-sm sm:text-base text-[#B8B8B8] leading-relaxed">
                Nós confiamos tanto no poder do Efeito Bartender que assumimos todo o risco por você. Acesse o método no celular, teste os copões neste fim de semana e veja a reação das pessoas.
              </p>

              <p className="text-sm text-[#B8B8B8] leading-relaxed">
                Se por qualquer motivo você não gostar das receitas ou achar que o método não é para você, basta nos mandar uma mensagem dentro de <strong className="text-[#F5F5F0]">7 dias</strong> e devolveremos <strong className="text-[#E50920]">100% do seu dinheiro</strong>. Sem letras miúdas.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-[#F5F5F0]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E50920]" />
                  <span>Reembolso sem burocracia</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Lock className="w-4 h-4 text-[#E50920]" />
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

