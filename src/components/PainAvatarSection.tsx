import React from 'react';
import { PAIN_AVATAR, TARGET_AUDIENCE } from '../data/landingData';
import { XCircle, Frown, CheckCircle2, UserCheck, UserX } from 'lucide-react';

export const PainAvatarSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#090909] relative border-b border-[#1c1c1c]">
      {/* Background grain texture */}
      <div className="absolute inset-0 bg-grain pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1c1214] border border-[#E50920]/40 text-xs font-semibold text-[#E50920] mb-4">
            <Frown className="w-4 h-4" />
            <span>A REALIDADE DO FIM DE SEMANA</span>
          </div>
          <h2 className="font-serif-display font-bold text-2xl sm:text-4xl text-[#F5F5F0] mb-4">
            {PAIN_AVATAR.title}
          </h2>
          <p className="text-base sm:text-lg text-[#B8B8B8]">
            {PAIN_AVATAR.subtitle}
          </p>
        </div>

        {/* 4 Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {PAIN_AVATAR.points.map((point, index) => (
            <div
              key={index}
              className="group relative bg-[#171717] border border-[#262626] hover:border-[#E50920]/60 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#E50920]/10"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#231215] border border-[#E50920]/40 flex items-center justify-center shrink-0 text-[#E50920] group-hover:scale-110 transition-transform">
                  <XCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-[#F5F5F0] mb-2 group-hover:text-[#E50920] transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-sm text-[#B8B8B8] leading-relaxed">
                    {point.desc}
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


