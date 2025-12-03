'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DISCOGRAPHY } from '@/lib/constants';
import { Play } from 'lucide-react';
import Image from 'next/image';

type Tab = 'Singles' | 'EPs' | 'Albums' | 'Remixes';

export default function DiscographyPreview() {
  const [activeTab, setActiveTab] = useState<Tab>('Singles');
  const tabs: Tab[] = ['Singles', 'EPs', 'Albums', 'Remixes'];

  return (
    <section id="music" className="py-20 bg-zinc-950 text-white px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 md:mb-0">DISCOGRAPHY</h2>

            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-white text-black'
                      : 'text-gray-400 hover:text-white border border-white/10 hover:border-white/30'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                {DISCOGRAPHY[activeTab]?.map((item, index) => (
                  <div key={index} className="group relative aspect-square bg-zinc-900 overflow-hidden cursor-pointer">
                    <Image
                      src={item.cover}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                        <Play className="w-8 h-8 text-white fill-white ml-1" />
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-bold uppercase">{item.title}</h3>
                      <p className="text-sm text-gray-300 font-mono">{item.year}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
