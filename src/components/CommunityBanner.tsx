'use client';

import { motion } from 'framer-motion';

export default function CommunityBanner() {
  return (
    <section id="community" className="py-24 bg-zinc-900 text-white px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border border-white/10 p-12 md:p-16 relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <h2 className="relative z-10 text-4xl md:text-5xl font-bold mb-6 tracking-tight">JOIN THE FAMILY</h2>
          <p className="relative z-10 text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Sign up for exclusive access to unreleased mixes, early bird tickets, and merchandise drops.
          </p>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-3xl mx-auto text-sm font-mono tracking-widest uppercase text-gray-300">
            <div className="flex flex-col items-center gap-2">
              <span className="w-12 h-1 bg-white/20 mb-2"></span>
              Exclusive Mixes
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="w-12 h-1 bg-white/20 mb-2"></span>
              Early Tickets
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="w-12 h-1 bg-white/20 mb-2"></span>
              Member Only Merch
            </div>
          </div>

          <button className="relative z-10 px-10 py-4 bg-white text-black font-bold tracking-widest hover:bg-gray-200 transition-colors uppercase">
            Join The Family
          </button>
        </motion.div>
      </div>
    </section>
  );
}
