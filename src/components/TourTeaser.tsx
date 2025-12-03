'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { TOUR_DATES } from '@/lib/constants';

export default function TourTeaser() {
  // Take only the next 5 dates
  const upcomingDates = TOUR_DATES.slice(0, 5);

  return (
    <section id="tour" className="py-20 bg-black text-white px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight text-center md:text-left">ON TOUR</h2>

          <div className="space-y-4">
            {upcomingDates.map((show, index) => (
              <motion.div
                key={`${show.date}-${show.venue}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col md:flex-row items-center justify-between py-6 border-b border-white/10 hover:border-white/30 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 w-full md:w-auto text-center md:text-left">
                  <span className="text-lg font-mono text-gray-400">{show.date}</span>
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold uppercase">{show.venue}</span>
                    <span className="text-gray-400 uppercase text-sm">{show.location}</span>
                  </div>
                </div>

                <div className="mt-4 md:mt-0">
                  {show.soldOut ? (
                    <span className="px-4 py-2 border border-red-500 text-red-500 text-sm font-bold tracking-wider uppercase">
                      Sold Out
                    </span>
                  ) : (
                    <button className="px-6 py-2 bg-white text-black text-sm font-bold tracking-wider hover:bg-gray-200 transition-colors uppercase opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                      Tickets
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/tour"
              className="inline-block px-10 py-4 border border-white/30 text-white font-bold tracking-widest hover:bg-white hover:text-black transition-all duration-300 uppercase"
            >
              View All Dates
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
