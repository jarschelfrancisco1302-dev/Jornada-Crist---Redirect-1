/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ShieldCheck, ArrowRight, Flame, Cross } from 'lucide-react';

export default function App() {
  const targetUrl = 'https://jornadacrista-ultimachance.vercel.app/';

  useEffect(() => {
    // 1. Back-Redirect Logic (Aggressive for Mobile)
    // We push states to trap the back button/gesture
    const pushState = () => {
      window.history.pushState(null, '', window.location.href);
    };

    pushState();

    const handlePopState = () => {
      // Redirect to the target URL when back button/gesture is used
      window.location.replace(targetUrl);
    };

    window.addEventListener('popstate', handlePopState);

    // 2. Exit Intent for Mobile (Visibility Change)
    // On mobile, "leaving" often means switching tabs or minimizing the browser
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        // Optional: Some aggressive scripts redirect even when hidden
        // window.location.replace(targetUrl);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // 3. Desktop Exit Intent (Mouse Leave) - Keep for hybrid devices
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        window.location.replace(targetUrl);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    // 4. Touch Start Detection (Optional: can be used to detect rapid scroll up)
    let lastY = 0;
    const handleTouchMove = (e: TouchEvent) => {
      const currentY = e.touches[0].clientY;
      if (lastY > currentY + 50 && window.scrollY === 0) {
        // User is swiping down at the top of the page (intent to see address bar)
        // window.location.replace(targetUrl);
      }
      lastY = currentY;
    };
    document.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  const handlePurchase = () => {
    window.location.href = targetUrl;
  };

  return (
    <div className="min-h-screen bg-black font-sans text-white flex flex-col items-center overflow-x-hidden selection:bg-emerald-500/30">
      {/* Background Image Overlay */}
      <div className="fixed inset-0 z-0 opacity-20">
        <img
          src="https://picsum.photos/seed/faith/1920/1080?blur=10"
          alt="Background"
          className="w-full h-full object-cover scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
      </div>

      {/* Main Content */}
      <main className="relative z-10 w-full max-w-md px-5 py-10 md:py-20 flex flex-col items-center">
        
        {/* Top Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-6 p-5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
        >
          <Cross className="w-10 h-10 text-emerald-500" />
        </motion.div>

        {/* Headline Section */}
        <div className="text-center mb-10 w-full">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-block px-5 py-1.5 bg-emerald-500/10 text-emerald-400 text-[11px] font-black uppercase tracking-[0.25em] rounded-full mb-6 border border-emerald-500/20"
          >
            Atenção: Oferta Única
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-light tracking-tight leading-[1.1] mb-6"
          >
            Sua jornada <br />
            <span className="font-serif italic text-emerald-500">não termina aqui.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-base text-stone-400 font-light leading-relaxed max-w-[280px] mx-auto"
          >
            Preparamos uma condição exclusiva para você não desistir do seu crescimento espiritual hoje.
          </motion.p>
        </div>

        {/* Feature Image Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="w-full aspect-[4/3] rounded-[2rem] overflow-hidden mb-10 border border-white/10 relative shadow-2xl shadow-emerald-900/10"
        >
          <img
            src="https://picsum.photos/seed/bible/800/600"
            alt="Jornada Cristã"
            className="w-full h-full object-cover grayscale brightness-75"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <p className="text-[10px] font-black tracking-widest uppercase text-emerald-500 mb-1">Acesso Imediato</p>
            <p className="text-xl font-serif italic text-white leading-tight">Tudo o que você precisa para uma rotina com Deus.</p>
          </div>
        </motion.div>

        {/* Offer Box */}
        <div className="w-full bg-stone-900/40 backdrop-blur-xl rounded-[3rem] p-8 md:p-10 border border-white/5 shadow-2xl">
          
          {/* Benefits */}
          <div className="space-y-5 mb-10">
            {[
              "Acesso Vitalício e Imediato",
              "Devocionais e Planos de Leitura",
              "Comunidade Exclusiva",
              "Sistema de Progresso"
            ].map((text, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + (i * 0.1) }}
                className="flex items-center gap-4"
              >
                <div className="bg-emerald-500/20 p-1 rounded-full">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                </div>
                <span className="text-stone-200 text-sm font-semibold tracking-wide">{text}</span>
              </motion.div>
            ))}
          </div>

          {/* Pricing */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center mb-10"
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="h-[1px] w-6 bg-white/10" />
              <p className="text-stone-500 line-through text-sm font-medium">De R$ 27,90</p>
              <span className="h-[1px] w-6 bg-white/10" />
            </div>
            
            <div className="relative inline-block">
              <p className="text-7xl font-black tracking-tighter text-white">
                R$ 19,90
              </p>
              <motion.div 
                animate={{ 
                  scale: [1, 1.15, 1],
                  rotate: [12, 15, 12]
                }}
                transition={{ repeat: Infinity, duration: 2.5 }}
                className="absolute -top-5 -right-10 bg-emerald-500 text-black text-[10px] font-black px-3 py-1.5 rounded-lg"
              >
                OFERTA
              </motion.div>
            </div>
            
            <p className="mt-6 text-emerald-400 text-[11px] font-black tracking-[0.15em] uppercase bg-emerald-500/5 py-2 rounded-xl">
              Pagamento Único • Sem Mensalidades
            </p>
          </motion.div>

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePurchase}
            className="w-full bg-emerald-600 text-white font-black text-lg py-6 rounded-[2rem] shadow-2xl shadow-emerald-900/40 transition-all flex flex-col items-center justify-center gap-1 group"
          >
            <span className="flex items-center gap-2">
              QUERO MEU ACESSO AGORA
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <span className="text-[10px] opacity-70 font-bold uppercase tracking-widest">Clique para garantir o desconto</span>
          </motion.button>

          {/* Guarantee */}
          <div className="mt-8 flex flex-col items-center gap-3">
            <div className="flex items-center gap-2 text-stone-500">
              <ShieldCheck className="w-5 h-5 text-emerald-500/50" />
              <p className="text-[10px] font-black tracking-[0.2em] uppercase">Garantia de 7 Dias</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center pb-10">
          <p className="text-stone-600 text-[10px] font-bold tracking-[0.3em] uppercase">
            Jornada Cristã • 2026
          </p>
        </footer>
      </main>
    </div>
  );
}
