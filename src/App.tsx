/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ShieldCheck, ArrowRight, Flame, Cross } from 'lucide-react';

export default function App() {
  const handlePurchase = () => {
    console.log('Redirecting to checkout with R$ 19,90 offer...');
  };

  return (
    <div className="min-h-screen bg-black font-sans text-white flex flex-col items-center overflow-x-hidden">
      {/* Background Image Overlay */}
      <div className="fixed inset-0 z-0 opacity-30">
        <img
          src="https://picsum.photos/seed/faith/1920/1080?blur=8"
          alt="Background"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
      </div>

      {/* Main Content */}
      <main className="relative z-10 w-full max-w-lg px-4 py-12 md:py-20 flex flex-col items-center">
        
        {/* Top Icon */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 p-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
        >
          <Cross className="w-8 h-8 text-emerald-500" />
        </motion.div>

        {/* Headline Section */}
        <div className="text-center mb-12">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-block px-4 py-1 bg-emerald-500/10 text-emerald-400 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full mb-6 border border-emerald-500/20"
          >
            Oportunidade Final
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-6"
          >
            Sua caminhada <br />
            <span className="font-serif italic text-emerald-500">não precisa parar.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-stone-400 font-light leading-relaxed max-w-sm mx-auto"
          >
            Entendemos que o momento pode ser difícil. Por isso, liberamos um acesso especial para você hoje.
          </motion.p>
        </div>

        {/* Feature Image Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="w-full aspect-video rounded-3xl overflow-hidden mb-12 border border-white/10 relative group"
        >
          <img
            src="https://picsum.photos/seed/bible/800/450"
            alt="Jornada Cristã"
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          <div className="absolute bottom-4 left-6">
            <p className="text-xs font-bold tracking-widest uppercase text-white/60">Jornada Cristã</p>
            <p className="text-lg font-serif italic">Renove sua fé diariamente</p>
          </div>
        </motion.div>

        {/* Offer Box */}
        <div className="w-full bg-stone-900/50 backdrop-blur-md rounded-[2.5rem] p-8 border border-white/5 shadow-2xl">
          
          {/* Benefits */}
          <div className="space-y-4 mb-10">
            {[
              "Acesso Vitalício (Sem Mensalidades)",
              "Devocionais e Planos de Leitura",
              "Comunidade Exclusiva de Fé",
              "Suporte e Progresso Espiritual"
            ].map((text, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + (i * 0.1) }}
                className="flex items-center gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="text-stone-300 text-sm font-medium">{text}</span>
              </motion.div>
            ))}
          </div>

          {/* Pricing */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center mb-8"
          >
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="h-[1px] w-8 bg-white/10" />
              <p className="text-stone-500 line-through text-sm">De R$ 27,90</p>
              <span className="h-[1px] w-8 bg-white/10" />
            </div>
            
            <div className="relative inline-block">
              <p className="text-7xl font-black tracking-tighter text-white">
                R$ 19,90
              </p>
              <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute -top-4 -right-8 bg-emerald-500 text-black text-[10px] font-black px-2 py-1 rounded-md rotate-12"
              >
                ÚNICO
              </motion.div>
            </div>
            
            <p className="mt-4 text-emerald-400 text-[10px] font-bold tracking-widest uppercase">
              Oferta válida apenas para esta tentativa
            </p>
          </motion.div>

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.02, backgroundColor: '#10b981' }}
            whileTap={{ scale: 0.98 }}
            onClick={handlePurchase}
            className="w-full bg-emerald-600 text-white font-bold text-lg py-5 rounded-2xl shadow-xl shadow-emerald-900/20 transition-all flex items-center justify-center gap-3 group"
          >
            SIM, QUERO GARANTIR AGORA
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          {/* Guarantee */}
          <div className="mt-6 flex flex-col items-center gap-2">
            <div className="flex items-center gap-2 text-stone-500">
              <ShieldCheck className="w-4 h-4" />
              <p className="text-[10px] font-bold tracking-widest uppercase">Segurança Total & 7 Dias de Garantia</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center space-y-4">
          <p className="text-stone-600 text-[10px] font-medium tracking-widest uppercase">
            Jornada Cristã © 2026 • Todos os direitos reservados
          </p>
        </footer>
      </main>
    </div>
  );
}
