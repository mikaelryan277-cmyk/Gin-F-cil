import React from 'react';
import { PAIN_AVATAR } from '../data/landingData';
import { XCircle, AlertCircle, WineOff, Beer, Sparkles, Frown, CheckCircle2 } from 'lucide-react';

export const PainAvatarSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#090a0d] relative border-b border-[#1f2233]">
      {/* Background grain texture */}
      <div className="absolute inset-0 bg-grain pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#261310] border border-[#9a3412]/50 text-xs font-semibold text-[#f97316] mb-4">
            <Frown className="w-4 h-4" />
            <span>IDENTIFICAÇÃO DE ANFITRIÃO</span>
          </div>
          <h2 className="font-serif-display font-bold text-2xl sm:text-4xl text-white mb-4">
            {PAIN_AVATAR.title}
          </h2>
          <p className="text-base sm:text-lg text-[#a0a5ba]">
            {PAIN_AVATAR.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {PAIN_AVATAR.points.map((point, index) => (
            <div
              key={index}
              className="group relative bg-[#12141f] border border-[#232738] hover:border-[#9a3412]/60 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#9a3412]/10"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#261310] border border-[#9a3412]/40 flex items-center justify-center shrink-0 text-[#f97316] group-hover:scale-110 transition-transform">
                  <XCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white mb-2 group-hover:text-[#f97316] transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-sm text-[#9298ad] leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* PARA QUEM É / NÃO É */}
        <div className="mt-12 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#18231c]/40 border border-[#10b981]/20 rounded-2xl p-6">
            <h4 className="text-[#10b981] font-bold text-sm uppercase tracking-wider mb-3">PARA QUEM É:</h4>
            <ul className="text-xs sm:text-sm text-[#b0b6cc] space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#10b981] shrink-0 mt-0.5" />
                <span>Quem recebe a galera em casa e quer mandar bem na hora de servir.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#10b981] shrink-0 mt-0.5" />
                <span>Quem quer aprender um método prático em 15 minutos sem curso chato.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#10b981] shrink-0 mt-0.5" />
                <span>Quem quer transformar o gin comum do mercado em drink foda.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#10b981] shrink-0 mt-0.5" />
                <span>Quem faz churrasco ou esquenta e não quer passar vergonha.</span>
              </li>
            </ul>
          </div>
          <div className="bg-[#261310]/40 border border-[#ef4444]/20 rounded-2xl p-6">
            <h4 className="text-[#ef4444] font-bold text-sm uppercase tracking-wider mb-3">PARA QUEM NÃO É:</h4>
            <ul className="text-xs sm:text-sm text-[#b0b6cc] space-y-2">
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-[#ef4444] shrink-0 mt-0.5" />
                <span>Quem quer virar bartender profissional.</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-[#ef4444] shrink-0 mt-0.5" />
                <span>Quem quer gastar rios de dinheiro com xarope importado.</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-[#ef4444] shrink-0 mt-0.5" />
                <span>Quem prefere continuar servindo drink morno e aguado.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
