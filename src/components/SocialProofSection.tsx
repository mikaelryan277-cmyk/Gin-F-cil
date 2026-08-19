import React from 'react';
import { STATS, REAL_REVIEWS } from '../data/landingData';
import { Star, DollarSign, BarChart3, Award } from 'lucide-react';

export const SocialProofSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#090909] relative border-b border-[#1c1c1c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Animated Counter Stats Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-20">
          {STATS.map((stat) => (
            <div
              key={stat.id}
              className="bg-[#171717] border border-[#262626] rounded-2xl p-6 text-center hover:border-[#E50920]/40 transition-all duration-300 hover:-translate-y-1 shadow-xl"
            >
              <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-[#231215] border border-[#E50920]/30 flex items-center justify-center text-[#E50920]">
                {stat.iconName === 'DollarSign' && <DollarSign className="w-5 h-5" />}
                {stat.iconName === 'BarChart3' && <BarChart3 className="w-5 h-5" />}
              </div>
              <h3 className="font-serif-display font-black text-3xl sm:text-4xl text-red-gradient mb-1">
                {stat.number}
              </h3>
              <p className="font-bold text-xs sm:text-sm text-[#F5F5F0] mb-1">
                {stat.label}
              </p>
              <p className="text-[11px] text-[#888888]">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1c1214] border border-[#E50920]/40 text-xs font-semibold text-[#E50920] mb-4">
            <Award className="w-4 h-4 text-[#E50920]" />
            <span>QUEM JÁ TESTOU O MÉTODO</span>
          </div>
          <h2 className="font-serif-display font-bold text-2xl sm:text-4xl text-[#F5F5F0] mb-4">
            Sem promessa bonita. Olha o que os próprios compradores disseram.
          </h2>
        </div>

        {/* Real Reviews Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 max-w-6xl mx-auto">
          {REAL_REVIEWS.map((imgUrl, idx) => (
            <div
              key={idx}
              className="break-inside-avoid bg-[#171717] border border-[#262626] hover:border-[#E50920]/40 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-2xl"
            >
              <img
                src={imgUrl}
                alt={`Avaliação Real ${idx + 1}`}
                className="w-full h-auto object-contain"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

