'use client';

import { motion } from 'framer-motion';
import { RADIO_EPISODES } from '@/lib/constants';
import { Play, Clock } from 'lucide-react';

export default function RadioSection() {
  const latestEpisode = RADIO_EPISODES[0];
  const recentEpisodes = RADIO_EPISODES.slice(1, 4);

  return (
    <section id="radio" className="py-24 bg-black text-white px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">

          {/* Featured Episode (Left Column) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">RADIO & MEDIA</h2>

            <div className="relative aspect-video bg-zinc-900 overflow-hidden group cursor-pointer border border-white/10">
              {/* Placeholder graphic for radio */}
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-black p-8 flex flex-col justify-end">
                <span className="text-xs font-mono text-zinc-400 mb-2">{latestEpisode.date}</span>
                <h3 className="text-3xl md:text-4xl font-bold uppercase mb-1">{latestEpisode.title}</h3>
                <p className="text-xl text-zinc-400 mb-6">feat. {latestEpisode.guest}</p>

                <button className="flex items-center gap-3 px-6 py-3 bg-white text-black font-bold uppercase tracking-wider w-max hover:bg-gray-200 transition-colors">
                  <Play className="w-5 h-5 fill-black" />
                  Listen Now
                </button>
              </div>
            </div>
          </motion.div>

          {/* Recent Episodes (Right Column) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold text-gray-400 mb-8 tracking-widest uppercase">Recent Episodes</h3>

              <div className="space-y-6">
                {recentEpisodes.map((episode) => (
                  <div key={episode.id} className="group flex items-center justify-between py-4 border-b border-white/10 hover:border-white/30 transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-zinc-800 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors rounded-full">
                        <Play className="w-4 h-4 ml-0.5 fill-current" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg uppercase group-hover:text-gray-300 transition-colors">{episode.title}</h4>
                        <span className="text-sm text-gray-500 font-mono">feat. {episode.guest}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 font-mono text-sm">
                      <Clock className="w-4 h-4" />
                      {episode.duration}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 lg:mt-0">
              <button className="text-white border-b border-white pb-1 hover:text-gray-300 hover:border-gray-300 transition-colors font-bold tracking-widest uppercase text-sm">
                View All Episodes
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
