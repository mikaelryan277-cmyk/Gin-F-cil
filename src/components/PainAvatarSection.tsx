import React from 'react';
import { TARGET_AUDIENCE_PROBLEMS } from '../data/landingData';
import { CheckCircle2, UserCheck } from 'lucide-react';

export const PainAvatarSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#0c0c0c] relative border-b border-[#1c1c1c]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1c1214] border border-[#E50920]/40 text-xs font-semibold text-[#E50920] mb-3">
            <UserCheck className="w-4 h-4" />
            <span>IDENTIFICAÇÃO</span>
          </div>
          <h2 className="font-serif-display font-bold text-2xl sm:text-4xl text-[#F5F5F0]">
            Esse método é pra você que:
          </h2>
        </div>

        {/* 6 Direct Pain Points Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {TARGET_AUDIENCE_PROBLEMS.map((problem, index) => (
            <div
              key={index}
              className="bg-[#141414] border border-[#222222] hover:border-[#E50920]/40 rounded-2xl p-4 sm:p-5 flex items-center gap-3.5 transition-colors"
            >
              <div className="w-8 h-8 rounded-xl bg-[#231215] border border-[#E50920]/30 flex items-center justify-center shrink-0 text-[#E50920]">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <p className="text-sm sm:text-base text-[#E5E5E5] font-medium leading-snug">
                {problem}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



