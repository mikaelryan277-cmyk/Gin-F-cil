import React from 'react';
import { GlassWater, ArrowRight, ShieldCheck, Lock, Sparkles } from 'lucide-react';

interface FinalCtaFooterProps {
  onScrollToOffer: () => void;
  checkoutUrlComplete?: string;
}

export const FinalCtaFooter: React.FC<FinalCtaFooterProps> = ({ onScrollToOffer, checkoutUrlComplete }) => {
  return (
    <>
      {/* Final Urgency Call to Action Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#0b0c10] via-[#151828] to-[#08090c] relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#d4af37]/15 via-transparent to-[#9a3412]/15 pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#d4af37] to-[#9a3412] p-[1px] shadow-2xl gold-glow">
            <div className="w-full h-full bg-[#0b0c10] rounded-[15px] flex items-center justify-center text-[#d4af37]">
              <GlassWater className="w-8 h-8" />
            </div>
          </div>

          <h2 className="font-serif-display font-extrabold text-3xl sm:text-5xl text-white mb-6 leading-tight">
            Neste Fim de Semana, Deixe a Cerveja Morna de Lado e <span className="text-gold-gradient">Surpreenda a Turma</span>
          </h2>

          <p className="font-sans-body text-base sm:text-lg text-[#b0b6cc] max-w-2xl mx-auto mb-8 leading-relaxed">
            Acesse as 30 receitas do Guia Gin Fácil imediatamente por apenas <strong className="text-white">R$ 14,90</strong> no PIX ou cartão. Seu próximo rolê nunca mais será o mesmo.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-8">
            <button
              onClick={onScrollToOffer}
              id="btn-final-cta"
              data-checkout="final"
              className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 px-8 py-4.5 rounded-2xl bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#aa771c] text-[#0b0c10] font-black text-base sm:text-lg uppercase tracking-wider transition-all duration-300 hover:scale-105 gold-glow-lg cursor-pointer"
            >
              <span>VIRAR O BARTENDER DA TURMA</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#a0a5ba]">
            <div className="flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-[#d4af37]" />
              <span>Acesso Imediato & Seguro</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#10b981]" />
              <span>Garantia Incondicional de 7 Dias</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#06070a] border-t border-[#1a1d2c] py-10 text-xs text-[#70768c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-sm font-serif-display font-bold text-white">
            <GlassWater className="w-4 h-4 text-[#d4af37]" />
            <span>Gin Fácil: O Efeito Bartender</span>
          </div>

          <p className="max-w-2xl mx-auto leading-relaxed">
            Este produto digital é de caráter estritamente educativo e recreativo sobre coquetelaria responsável. Beba com moderação e não compartilhe com menores de 18 anos.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-[11px] pt-2">
            <a href="#privacy" onClick={(e) => { e.preventDefault(); alert("Aviso de Privacidade: Seus dados estão seguros e nunca serão repassados a terceiros."); }} className="hover:text-[#d4af37] transition-colors">Termos de Uso</a>
            <span>•</span>
            <a href="#terms" onClick={(e) => { e.preventDefault(); alert("Privacidade: Acesso 100% criptografado com garantia de reembolso em 7 dias."); }} className="hover:text-[#d4af37] transition-colors">Políticas de Privacidade</a>
            <span>•</span>
            <a
              href="https://wa.me/5599991572372?text=Ol%C3%A1%2C%20tenho%20uma%20d%C3%BAvida%20sobre%20o%20Gin%20F%C3%A1cil"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#25D366] transition-colors font-semibold"
            >
              Falar com Suporte (WhatsApp)
            </a>
          </div>

          <p className="text-[10px] text-[#555a6d] pt-2">
            © {new Date().getFullYear()} Gin Fácil: O Efeito Bartender. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </>
  );
};
