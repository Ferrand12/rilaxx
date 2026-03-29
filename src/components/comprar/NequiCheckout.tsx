"use client";

import { useState } from "react";
import type { CartItem } from "./ProductCard";

/* ──────────────────────────────────────────────
   PLACEHOLDERS — Reemplazar con datos reales
   ────────────────────────────────────────────── */
const NEQUI_NUMBER = "300-000-0000"; // REPLACE: numero Nequi real
const WHATSAPP_NUMBER = "57300000000"; // REPLACE: numero WhatsApp con codigo pais
/* ────────────────────────────────────────────── */

interface NequiCheckoutProps {
  items: CartItem[];
  onBack: () => void;
  onComplete: () => void;
}

function generateOrderId() {
  const n = Math.floor(Math.random() * 9000) + 1000;
  return `RLX-${n}`;
}

export default function NequiCheckout({ items, onBack, onComplete }: NequiCheckoutProps) {
  const [step, setStep] = useState<"form" | "pay">("form");
  const [form, setForm] = useState({ nombre: "", celular: "", direccion: "", ciudad: "" });

  const lineItems = items.filter((i) => i.qty > 0);
  const total = lineItems.reduce((sum, i) => sum + i.qty * i.price, 0);
  const orderId = useState(() => generateOrderId())[0];

  const whatsappMsg = encodeURIComponent(
    `Hola! Acabo de hacer un pedido Rilaxx ${orderId} por $${total.toLocaleString("es-CO")} COP.\n\n` +
    lineItems.map((i) => `${i.qty}x ${i.name}`).join("\n") +
    `\n\nNombre: ${form.nombre}\nCelular: ${form.celular}\nDireccion: ${form.direccion}, ${form.ciudad}\n\nAdjunto comprobante de Nequi.`
  );

  const isFormValid = form.nombre.trim() && form.celular.trim() && form.direccion.trim() && form.ciudad.trim();

  return (
    <div className="min-h-screen bg-white pt-20 pb-32">
      <div className="max-w-xl mx-auto px-6">
        {/* Back button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-neutral-400 hover:text-black transition-colors mb-8"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
          <span className="font-mono text-xs uppercase tracking-[0.15em]">Volver</span>
        </button>

        {/* Order summary */}
        <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-8">Tu pedido</h1>

        <div className="border-b border-neutral-100 pb-6 mb-6">
          {lineItems.map((item) => (
            <div key={item.id} className="flex justify-between items-baseline py-2">
              <span className="font-mono text-sm">
                {item.qty}x {item.name}
              </span>
              <span className="font-mono text-sm text-neutral-500">
                ${(item.qty * item.price).toLocaleString("es-CO")}
              </span>
            </div>
          ))}
          <div className="flex justify-between items-baseline pt-4 mt-4 border-t border-neutral-100">
            <span className="font-black uppercase text-sm">Total</span>
            <span className="text-xl font-black">
              ${total.toLocaleString("es-CO")} <span className="text-xs font-mono font-normal text-neutral-400">COP</span>
            </span>
          </div>
        </div>

        {step === "form" && (
          <>
            {/* Shipping form */}
            <h2 className="text-lg font-black uppercase tracking-tight mb-4">Datos de envio</h2>
            <div className="space-y-4 mb-8">
              {([
                { key: "nombre", label: "Nombre completo", type: "text", placeholder: "Tu nombre" },
                { key: "celular", label: "Celular", type: "tel", placeholder: "300 000 0000" },
                { key: "direccion", label: "Direccion", type: "text", placeholder: "Calle, carrera, apto..." },
                { key: "ciudad", label: "Ciudad", type: "text", placeholder: "Bogota" },
              ] as const).map((field) => (
                <div key={field.key}>
                  <label className="block font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-1">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    value={form[field.key]}
                    onChange={(e) => setForm((f) => ({ ...f, [field.key]: e.target.value }))}
                    placeholder={field.placeholder}
                    className="w-full border border-neutral-200 px-4 py-3 font-mono text-sm focus:outline-none focus:border-black transition-colors"
                  />
                </div>
              ))}
            </div>

            <button
              onClick={() => setStep("pay")}
              disabled={!isFormValid}
              className="w-full bg-black text-white font-bold uppercase tracking-widest text-sm py-4 hover:bg-rilaxx-purple transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              Continuar al pago
            </button>
          </>
        )}

        {step === "pay" && (
          <>
            {/* Nequi payment instructions */}
            <h2 className="text-lg font-black uppercase tracking-tight mb-2">Pagar con Nequi</h2>
            <p className="font-mono text-xs text-neutral-400 mb-6">
              Referencia: {orderId}
            </p>

            <div className="bg-neutral-50 border border-neutral-100 p-6 mb-6 space-y-4">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold shrink-0">1</span>
                <div>
                  <p className="font-bold text-sm mb-1">Transfiere a este Nequi:</p>
                  <p className="font-mono text-2xl font-bold tracking-wide">{NEQUI_NUMBER}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold shrink-0">2</span>
                <div>
                  <p className="font-bold text-sm mb-1">Monto exacto:</p>
                  <p className="font-mono text-2xl font-bold">${total.toLocaleString("es-CO")} COP</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold shrink-0">3</span>
                <div>
                  <p className="font-bold text-sm">Envia tu comprobante por WhatsApp</p>
                </div>
              </div>
            </div>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-[#25D366] text-white font-bold uppercase tracking-widest text-sm py-4 text-center hover:brightness-110 transition-all mb-4"
              onClick={() => {
                setTimeout(onComplete, 500);
              }}
            >
              Enviar comprobante por WhatsApp
            </a>

            <button
              onClick={() => setStep("form")}
              className="block w-full text-center font-mono text-xs text-neutral-400 hover:text-black transition-colors py-2"
            >
              Editar datos de envio
            </button>
          </>
        )}
      </div>
    </div>
  );
}
