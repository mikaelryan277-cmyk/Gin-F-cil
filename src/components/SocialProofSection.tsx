import React from 'react';
import { STATS, TESTIMONIALS } from '../data/landingData';
import { Star, CheckCircle, Users, GlassWater, Flame, Award, Quote } from 'lucide-react';

export const SocialProofSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#090909] relative border-b border-[#1c1c1c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Animated Counter Stats Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {STATS.map((stat) => (
            <div
              key={stat.id}
              className="bg-[#171717] border border-[#262626] rounded-2xl p-6 text-center hover:border-[#E50920]/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-[#231215] border border-[#E50920]/30 flex items-center justify-center text-[#E50920]">
                {stat.iconName === 'Users' && <Users className="w-5 h-5" />}
                {stat.iconName === 'GlassWater' && <GlassWater className="w-5 h-5" />}
                {stat.iconName === 'Star' && <Star className="w-5 h-5" />}
                {stat.iconName === 'Flame' && <Flame className="w-5 h-5" />}
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
            <span>DEPOIMENTOS DE ANFITRIÕES REAIS</span>
          </div>
          <h2 className="font-serif-display font-bold text-2xl sm:text-4xl text-[#F5F5F0] mb-4">
            Quem Já Usou O Método no Fim de Semana
          </h2>
          <p className="text-base sm:text-lg text-[#B8B8B8]">
            Histórias reais de quem saiu da mesmice e virou a referência de drinks da galera:
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#171717] border border-[#262626] hover:border-[#E50920]/40 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-xl relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-[#262626] pointer-events-none" />

              <div>
                {/* Star rating */}
                <div className="flex text-[#E50920] gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="font-serif-display font-bold text-sm text-[#F5F5F0] mb-3 leading-snug">
                  "{t.highlight}"
                </p>

                <p className="text-xs sm:text-sm text-[#B8B8B8] leading-relaxed mb-6">
                  {t.comment}
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#262626]">
                <img
                  src={t.avatar}
                  alt={t.name}
                  referrerPolicy="no-referrer"
                  className="w-11 h-11 rounded-full object-cover border-2 border-[#E50920]/50"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-sm text-[#F5F5F0]">{t.name}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-[#E50920]" />
                  </div>
                  <p className="text-[11px] text-[#888888]">
                    {t.age} anos • {t.city} • <span className="text-[#E50920]">Comprador Verificado</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

