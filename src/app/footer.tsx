import React from 'react';
import { Instagram, Facebook, Twitter, Music } from 'lucide-react';
import { SOCIAL_LINKS } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 text-center text-zinc-500 text-sm font-mono uppercase tracking-widest bg-black">
      <div className="flex justify-center space-x-8 mb-8">
         {SOCIAL_LINKS.map((link) => (
            <a key={link.platform} href={link.url} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
               {link.platform}
            </a>
         ))}
      </div>
      <p>&copy; {new Date().getFullYear()} Juany Bravo. All Rights Reserved.</p>
    </footer>
  );
}
