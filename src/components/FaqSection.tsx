import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/landingData';
import { HelpCircle, ChevronDown, MessageCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 sm:py-24 bg-[#090a0d] relative border-b border-[#212433]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1b1d2b] border border-[#d4af37]/40 text-xs font-semibold text-[#f3e5ab] mb-4">
            <HelpCircle className="w-4 h-4 text-[#d4af37]" />
            <span>TIRA DÚVIDAS</span>
          </div>
          <h2 className="font-serif-display font-bold text-2xl sm:text-4xl text-white mb-3">
            Perguntas Frequentes
          </h2>
          <p className="text-sm sm:text-base text-[#a0a5ba]">
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
                className="bg-[#10121b] border border-[#23273a] rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-[#151824] transition-colors"
                >
                  <span className="font-serif-display font-bold text-base sm:text-lg text-white">
                    {item.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-[#1e2233] flex items-center justify-center text-[#d4af37] transition-transform duration-300 shrink-0 ${
                    isOpen ? 'rotate-180 bg-[#d4af37] text-[#0b0c10]' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#b0b6cc] leading-relaxed border-t border-[#1a1d2e] animate-fade-in">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support note & WhatsApp CTA */}
        <div className="mt-10 text-center flex flex-col items-center justify-center gap-4">
          <div className="text-xs text-[#81879c] flex items-center justify-center gap-2">
            <MessageCircle className="w-4 h-4 text-[#d4af37]" />
            <span>Ficou com alguma dúvida sobre o método ou pagamento?</span>
          </div>
          <a
            href="https://wa.me/5599991572372?text=Ol%C3%A1%2C%20tenho%20uma%20d%C3%BAvida%20sobre%20o%20Gin%20F%C3%A1cil"
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
