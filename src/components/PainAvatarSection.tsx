import React from 'react';
import { PAIN_AVATAR } from '../data/landingData';
import { XCircle, AlertCircle, WineOff, Beer, Sparkles, Frown } from 'lucide-react';

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

        {/* Bottom Callout Banner */}
        <div className="mt-12 max-w-3xl mx-auto bg-gradient-to-r from-[#171926] via-[#1f1d2b] to-[#171926] border border-[#d4af37]/30 rounded-2xl p-6 text-center shadow-lg">
          <p className="text-sm sm:text-base text-[#e0e2ec] font-medium leading-relaxed">
            <span className="text-[#d4af37] font-bold">A boa notícia?</span> Fazer um drink digno de speakeasy em Havana não exige 5 anos de gastronomia nem facas importadas. Você só precisa das <strong className="text-white">proporções certas</strong> e dos <strong className="text-[#f3e5ab]">segredos de montagem de copo</strong> do nosso método.
          </p>
        </div>
      </div>
    </section>
  );
};
