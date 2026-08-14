import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/landingData';
import { HelpCircle, ChevronDown, MessageCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 sm:py-24 bg-[#090909] relative border-b border-[#1c1c1c]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1c1214] border border-[#E50920]/40 text-xs font-semibold text-[#E50920] mb-4">
            <HelpCircle className="w-4 h-4 text-[#E50920]" />
            <span>TIRA DÚVIDAS</span>
          </div>
          <h2 className="font-serif-display font-bold text-2xl sm:text-4xl text-[#F5F5F0] mb-3">
            Perguntas Frequentes
          </h2>
          <p className="text-sm sm:text-base text-[#B8B8B8]">
            Tudo o que você precisa saber antes de adquirir seu acesso:
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-[#171717] border border-[#262626] rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-[#202020] transition-colors"
                >
                  <span className="font-serif-display font-bold text-base sm:text-lg text-[#F5F5F0]">
                    {item.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-[#222222] flex items-center justify-center text-[#E50920] transition-transform duration-300 shrink-0 ${
                    isOpen ? 'rotate-180 bg-[#E50920] text-white' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#B8B8B8] leading-relaxed border-t border-[#262626] animate-fade-in">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support note & WhatsApp CTA */}
        <div className="mt-10 text-center flex flex-col items-center justify-center gap-4">
          <div className="text-xs text-[#888888] flex items-center justify-center gap-2">
            <MessageCircle className="w-4 h-4 text-[#E50920]" />
            <span>Ficou com alguma dúvida sobre o método ou pagamento?</span>
          </div>
          <a
            href="https://wa.me/5599991572372?text=Ol%C3%A1%2C%20tenho%20uma%20d%C3%BAvida%20sobre%20o%20Efeito%20Bartender"
            target="_blank"
            rel="noopener noreferrer"
            id="btn-whatsapp-faq"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] font-bold text-xs sm:text-sm transition-all duration-200"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar com Suporte no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};

