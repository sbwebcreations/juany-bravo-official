'use client';

import Link from 'next/link';
import { ARTIST_NAME } from '@/lib/constants';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Music', href: '#music' },
  { name: 'Radio', href: '#radio' },
  { name: 'Video', href: '#video' },
  { name: 'Tour', href: '#tour' },
  { name: 'Shop', href: '#' },
  { name: 'Community', href: '#community' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-widest text-white hover:text-gray-300 transition-colors">
          {ARTIST_NAME}
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium tracking-wide text-gray-300 hover:text-white transition-colors uppercase"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button Placeholder - could be expanded later */}
        <button className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </nav>
  );
}
