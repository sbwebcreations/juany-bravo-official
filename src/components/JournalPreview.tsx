'use client';

import { motion } from 'framer-motion';
import { BLOG_POSTS } from '@/lib/constants';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function JournalPreview() {
  return (
    <section className="py-24 bg-black text-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">JOURNAL</h2>
          <Link href="#" className="hidden md:flex items-center gap-2 text-sm font-bold tracking-widest uppercase hover:text-gray-300 transition-colors">
            Read All News <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/3] bg-zinc-900 mb-6 border border-white/5 overflow-hidden">
                {/* Placeholder Image Block */}
                <div className="w-full h-full bg-zinc-800 group-hover:bg-zinc-700 transition-colors" />
              </div>

              <div className="space-y-3">
                <span className="text-xs font-mono text-gray-500 block">{post.date}</span>
                <h3 className="text-xl font-bold uppercase leading-tight group-hover:text-gray-300 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <span className="inline-block mt-2 text-xs font-bold uppercase tracking-widest border-b border-transparent group-hover:border-white transition-all">
                  Read More
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 md:hidden text-center">
          <Link href="#" className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase hover:text-gray-300 transition-colors">
            Read All News <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
