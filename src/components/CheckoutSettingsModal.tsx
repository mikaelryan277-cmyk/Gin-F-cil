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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#171717] border border-[#262626] rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#222222] text-[#888888] hover:text-[#F5F5F0] flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-[#231215] border border-[#E50920]/40 flex items-center justify-center text-[#E50920]">
            <Settings className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-serif-display font-bold text-lg text-[#F5F5F0]">Configurar Links de Checkout</h3>
            <p className="text-xs text-[#888888]">Insira os links da sua plataforma de vendas (GGCheckout, Kiwify, Hotmart, etc.)</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-[#E50920] uppercase tracking-wider mb-1">
              Link Checkout Plano Básico (R$ 14,90):
            </label>
            <div className="relative">
              <Link2 className="w-4 h-4 text-[#888888] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="url"
                value={basicUrl}
                onChange={(e) => setBasicUrl(e.target.value)}
                placeholder="https://ggcheckout.app/checkout/v4/akNASSdlT23O50Jx6P0p"
                className="w-full bg-[#090909] border border-[#262626] focus:border-[#E50920] rounded-xl py-2.5 pl-9 pr-3 text-xs text-[#F5F5F0] outline-none transition-colors"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#E50920] uppercase tracking-wider mb-1">
              Link Checkout Combo Completo (R$ 27,90):
            </label>
            <div className="relative">
              <Link2 className="w-4 h-4 text-[#888888] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="url"
                value={completeUrl}
                onChange={(e) => setCompleteUrl(e.target.value)}
                placeholder="https://ggcheckout.app/checkout/v4/w8WpOvBkzPNAtTxTOXuE"
                className="w-full bg-[#090909] border border-[#262626] focus:border-[#E50920] rounded-xl py-2.5 pl-9 pr-3 text-xs text-[#F5F5F0] outline-none transition-colors"
                required
              />
            </div>
          </div>

          <div className="bg-[#111111] p-3 rounded-xl border border-[#262626] text-[11px] text-[#888888] space-y-1">
            <p className="font-semibold text-[#F5F5F0] flex items-center gap-1">
              <ExternalLink className="w-3.5 h-3.5 text-[#E50920]" />
              Atributos de rastreamento configurados:
            </p>
            <p>Todos os botões de CTA da página possuem atributos <code className="text-[#E50920]">data-checkout</code> e IDs explícitos (<code className="text-[#E50920]">btn-checkout-basic</code> / <code className="text-[#E50920]">btn-checkout-premium</code>) e disparam o evento <code className="text-[#E50920]">InitiateCheckout</code> no Meta Pixel.</p>
          </div>

          <div className="pt-2 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl bg-[#222222] hover:bg-[#2c2c2c] text-xs font-bold text-[#B8B8B8] cursor-pointer"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-[#E50920] hover:bg-[#B80818] text-white font-black text-xs uppercase tracking-wider red-glow flex items-center gap-1.5 cursor-pointer"
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

