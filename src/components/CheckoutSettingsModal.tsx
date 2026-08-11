import React, { useState } from 'react';
import { X, Link2, Check, Settings, ExternalLink } from 'lucide-react';

interface CheckoutSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  checkoutBasic: string;
  checkoutComplete: string;
  onSave: (basic: string, complete: string) => void;
}

export const CheckoutSettingsModal: React.FC<CheckoutSettingsModalProps> = ({
  isOpen,
  onClose,
  checkoutBasic,
  checkoutComplete,
  onSave,
}) => {
  const [basicUrl, setBasicUrl] = useState(checkoutBasic);
  const [completeUrl, setCompleteUrl] = useState(checkoutComplete);
  const [saved, setSaved] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(basicUrl, completeUrl);
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#101320] border border-[#d4af37]/40 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#1e2236] text-[#a0a5ba] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-[#201d12] border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37]">
            <Settings className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-serif-display font-bold text-lg text-white">Configurar Links de Checkout</h3>
            <p className="text-xs text-[#a0a5ba]">Insira os links da sua plataforma de vendas (Kiwify, Hotmart, Eduzz, etc.)</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-[#e5c158] uppercase tracking-wider mb-1">
              Link Checkout Plano Básico (R$ 14,90):
            </label>
            <div className="relative">
              <Link2 className="w-4 h-4 text-[#81879c] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="url"
                value={basicUrl}
                onChange={(e) => setBasicUrl(e.target.value)}
                placeholder="https://pay.kiwify.com.br/seulink-14-90"
                className="w-full bg-[#0b0c10] border border-[#272c42] focus:border-[#d4af37] rounded-xl py-2.5 pl-9 pr-3 text-xs text-white outline-none transition-colors"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#e5c158] uppercase tracking-wider mb-1">
              Link Checkout Combo Completo (R$ 27,90):
            </label>
            <div className="relative">
              <Link2 className="w-4 h-4 text-[#81879c] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="url"
                value={completeUrl}
                onChange={(e) => setCompleteUrl(e.target.value)}
                placeholder="https://pay.kiwify.com.br/seulink-27-90"
                className="w-full bg-[#0b0c10] border border-[#272c42] focus:border-[#d4af37] rounded-xl py-2.5 pl-9 pr-3 text-xs text-white outline-none transition-colors"
                required
              />
            </div>
          </div>

          <div className="bg-[#181a29] p-3 rounded-xl border border-[#2a2e45] text-[11px] text-[#9298ad] space-y-1">
            <p className="font-semibold text-white flex items-center gap-1">
              <ExternalLink className="w-3.5 h-3.5 text-[#d4af37]" />
              Atributos de rastreamento configurados:
            </p>
            <p>Todos os botões de CTA da página possuem atributos <code className="text-[#d4af37]">data-checkout</code> e IDs explícitos (<code className="text-[#d4af37]">btn-checkout-basic</code> / <code className="text-[#d4af37]">btn-checkout-premium</code>) para integrar com o seu rastreamento do Facebook Pixel, Google Ads ou Kwai Ads.</p>
          </div>

          <div className="pt-2 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl bg-[#1d2030] hover:bg-[#272b42] text-xs font-bold text-[#b0b6cc] cursor-pointer"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#aa771c] text-[#0b0c10] font-black text-xs uppercase tracking-wider gold-glow flex items-center gap-1.5 cursor-pointer"
            >
              {saved ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Salvo com Sucesso!</span>
                </>
              ) : (
                <span>Salvar Links</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
