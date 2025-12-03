import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TourTeaser from '@/components/TourTeaser';
import DiscographyPreview from '@/components/DiscographyPreview';
import RadioSection from '@/components/RadioSection';
import CommunityBanner from '@/components/CommunityBanner';
import JournalPreview from '@/components/JournalPreview';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navbar />
      <Hero />
      <TourTeaser />
      <DiscographyPreview />
      <RadioSection />
      <CommunityBanner />
      <JournalPreview />

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 text-center text-zinc-500 text-sm font-mono uppercase tracking-widest">
        <p>&copy; {new Date().getFullYear()} Juany Bravo. All Rights Reserved.</p>
      </footer>
    </main>
export default function Home() {
  return (
    <div>Portfolio Initialized</div>
  );
}
