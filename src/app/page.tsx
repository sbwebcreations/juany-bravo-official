'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TourTeaser from '@/components/TourTeaser';
import DiscographyPreview from '@/components/DiscographyPreview';
import RadioSection from '@/components/RadioSection';
import CommunityBanner from '@/components/CommunityBanner';
import JournalPreview from '@/components/JournalPreview';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navbar />

      <div id="home">
        <Hero />
      </div>

      {/* Tour Section - Immediate Priority */}
      <div id="tour" className="relative z-10">
        <TourTeaser />
      </div>

      {/* Music Section */}
      <div id="music" className="relative z-10">
        <DiscographyPreview />
      </div>

      {/* Radio Section */}
      <div id="radio" className="relative z-10">
        <RadioSection />
      </div>

      {/* Community & Blog */}
      <div id="community" className="relative z-10">
        <CommunityBanner />
        <JournalPreview />
      </div>

      <Footer />
    </main>
  );
}
