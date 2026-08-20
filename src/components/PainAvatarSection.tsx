import React from 'react';
import { PAIN_AVATAR } from '../data/landingData';
import { XCircle, Frown } from 'lucide-react';

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
          <h2 className="font-serif-display font-bold text-3xl sm:text-4xl text-[#F5F5F0] mb-4">
            {PAIN_AVATAR.title}
          </h2>
          <p className="text-base sm:text-lg text-[#B8B8B8] max-w-2xl mx-auto">
            {PAIN_AVATAR.subtitle}
          </p>
        </div>

        {/* 4 Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {PAIN_AVATAR.points.map((point, index) => (
            <div
              key={index}
              className="group relative bg-[#171717] border border-[#262626] rounded-2xl p-5 sm:p-6 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <XCircle className="w-6 h-6 text-[#E50920] shrink-0" />
                <div>
                  <h3 className="font-bold text-base sm:text-lg text-[#F5F5F0] group-hover:text-[#E50920] transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#B8B8B8] leading-relaxed">
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


