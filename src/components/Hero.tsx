'use client';

import { motion } from 'framer-motion';
import { ARTIST_NAME } from '@/lib/constants';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          {/* Placeholder abstract dark video */}
          <source src="https://videos.pexels.com/video-files/3163534/3163534-uhd_2560_1440_30fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-9xl font-bold tracking-tighter text-white mb-4"
        >
          {ARTIST_NAME}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 tracking-widest mb-12 uppercase"
        >
          Video Loop
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col md:flex-row gap-6"
        >
          <Link
            href="#tour"
            className="px-8 py-4 bg-white text-black font-bold tracking-wider hover:bg-gray-200 transition-colors uppercase min-w-[200px]"
          >
            Upcoming Shows
          </Link>
          <Link
            href="#music"
            className="px-8 py-4 border border-white text-white font-bold tracking-wider hover:bg-white/10 transition-colors uppercase min-w-[200px]"
          >
            Latest Releases
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
