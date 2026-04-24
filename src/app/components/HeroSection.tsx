import { ChevronDown } from 'lucide-react';

export function HeroSection() {
  const scrollToTimeline = () => {
    const timelineSection = document.getElementById('timeline');
    timelineSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen pt-20 md:pt-0 flex items-center justify-center px-4 md:px-6">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 146, 70, 0.3), rgba(206, 43, 55, 0.2)), url(https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=1600&q=80)',
        }}
      />

      <div className="relative z-10 w-full max-w-3xl mx-auto">
        <div className="bg-white/95 backdrop-blur-sm p-6 md:p-8 lg:p-12 rounded-lg shadow-2xl border-4 border-[#CE2B37]">
          <h2
            className="text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-6 text-[#009246] text-center"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            Welcome to the Reel
            <br />
            Housewives of Italy
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed text-center">
            A visual journey through Italian cinema and its evolving portrayal of women in society. From the shadows of WWII fascism to the vibrant present day, this interactive timeline explores how Italian filmmakers have depicted women's roles, struggles, and triumphs throughout the nation's transformative history. Discover how the silver screen both reflected and shaped the changing position of women in Italian culture, politics, and domestic life.
          </p>
        </div>
      </div>

      <button
        onClick={scrollToTimeline}
        className="absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white hover:text-[#CE2B37] transition-colors group"
      >
        <span
          className="text-base md:text-lg lg:text-xl tracking-wider"
          style={{ fontFamily: 'Cinzel, serif' }}
        >
          Scroll for Timeline
        </span>
        <ChevronDown className="w-6 md:w-8 h-6 md:h-8 animate-bounce" />
      </button>
    </section>
  );
}
