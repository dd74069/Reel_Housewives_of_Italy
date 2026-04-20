import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CommediaSection } from './components/CommediaSection';
import { TimelineCarousel } from './components/TimelineCarousel';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <CommediaSection />
      <TimelineCarousel />
      <Footer />
    </div>
  );
}