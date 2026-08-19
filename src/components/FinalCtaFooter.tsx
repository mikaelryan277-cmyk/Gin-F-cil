import React from 'react';
import { GlassWater, ArrowRight, ShieldCheck, Lock } from 'lucide-react';

interface FinalCtaFooterProps {
  onScrollToOffer: () => void;
  checkoutUrlComplete?: string;
}

export const FinalCtaFooter: React.FC<FinalCtaFooterProps> = ({ onScrollToOffer }) => {
  return (
    <>
      {/* Final Urgency Call to Action Section */}
      <section className="py-16 sm:py-24 bg-[#090909] relative overflow-hidden border-t border-[#1c1c1c]">
        {/* Ambient Red Glow */}
        <div className="absolute inset-0 bg-[#E50920]/5 pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-[#171717] border border-[#E50920]/40 flex items-center justify-center text-[#E50920] shadow-2xl red-glow">
            <GlassWater className="w-8 h-8" />
          </div>

          <h2 className="font-serif-display font-bold text-3xl sm:text-5xl text-[#F5F5F0] mb-6 leading-tight">
            Pronto pra mandar bem no próximo encontro ou esquenta?
          </h2>

          <p className="font-sans-body text-base sm:text-lg text-[#B8B8B8] max-w-2xl mx-auto mb-8 leading-relaxed">
            Aprenda a preparar copões melhores usando ingredientes de mercado e gastando uma fração do que gastaria no bar.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-8">
            <button
              onClick={onScrollToOffer}
              id="btn-final-cta"
              data-checkout="final"
              className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 px-8 py-4.5 rounded-xl bg-[#E50920] hover:bg-[#B80818] text-white font-black text-sm sm:text-base uppercase tracking-wider transition-all duration-300 hover:scale-105 red-glow-lg cursor-pointer"
            >
              <span>QUERO O EFEITO BARTENDER</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#888888]">
            <div className="flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-[#E50920]" />
              <span>Acesso Imediato no Celular</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#E50920]" />
              <span>Garantia Incondicional de 7 Dias</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050505] border-t border-[#1a1a1a] py-10 text-xs text-[#666666]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-sm font-serif-display font-bold text-[#F5F5F0]">
            <GlassWater className="w-4 h-4 text-[#E50920]" />
            <span>Efeito Bartender: Copões & Drinks em Casa</span>
          </div>

          <p className="max-w-2xl mx-auto leading-relaxed text-[#777777]">
            Este produto é de caráter estritamente recreativo e educativo sobre coquetelaria em casa. Beba com moderação e não compartilhe com menores de 18 anos.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-[11px] pt-2 text-[#888888]">
            <a href="#terms" className="hover:text-[#E50920] transition-colors">Termos de Uso</a>
            <span>•</span>
            <a href="#privacy" className="hover:text-[#E50920] transition-colors">Políticas de Privacidade</a>
            <span>•</span>
            <a
              href="https://wa.me/5599991572372?text=Ol%C3%A1%2C%20tenho%20uma%20d%C3%BAvida%20sobre%20o%20Efeito%20Bartender"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#25D366] transition-colors font-semibold text-[#25D366]"
            >
              Falar com Suporte (WhatsApp)
            </a>
          </div>

          <p className="text-[10px] text-[#444444] pt-2">
            © {new Date().getFullYear()} Efeito Bartender. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </>
  );
};


