'use client';

import React from 'react';
import { Instagram, Facebook, Twitter, Music } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 py-12 border-t border-neutral-800">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <div className="flex space-x-8 mb-8">
           <a href="#" className="text-neutral-400 hover:text-white transition"><Instagram size={24} /></a>
           <a href="#" className="text-neutral-400 hover:text-white transition"><Facebook size={24} /></a>
           <a href="#" className="text-neutral-400 hover:text-white transition"><Twitter size={24} /></a>
           <a href="#" className="text-neutral-400 hover:text-white transition"><Music size={24} /></a>
        </div>
        <p className="text-neutral-500 text-sm uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Juany Bravo. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
