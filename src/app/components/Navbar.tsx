import { Link, useLocation } from 'react-router';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ReelFemaleLogo } from './ReelFemaleLogo';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const basePath = import.meta.env.BASE_URL ?? '/';
  const homePath = basePath.endsWith('/') ? basePath.slice(0, -1) : basePath;
  const timelineHref = `${basePath}#timeline`;

  const scrollToTimeline = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (location.pathname !== homePath && location.pathname !== `${homePath}/`) {
      window.location.href = timelineHref;
    } else {
      const timelineSection = document.getElementById('timeline');
      timelineSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-4 border-[#009246]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity flex-shrink-0">
          <ReelFemaleLogo className="w-8 md:w-10 h-8 md:h-10 text-[#CE2B37]" />
          <h1 className="text-xs md:text-lg lg:text-2xl text-black" style={{ fontFamily: 'Rye, cursive' }}>
            Reel Housewives of Italy
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <a
            href="#timeline"
            onClick={scrollToTimeline}
            className="text-sm lg:text-lg text-[#009246] hover:text-[#CE2B37] transition-colors"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            Timeline
          </a>
          <Link
            to="/films"
            className="text-sm lg:text-lg text-[#009246] hover:text-[#CE2B37] transition-colors"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            Films
          </Link>
          <Link
            to="/quiz"
            className="text-sm lg:text-lg text-[#009246] hover:text-[#CE2B37] transition-colors"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            Spotlight Quiz
          </Link>
          <Link
            to="/sources"
            className="text-sm lg:text-lg text-[#009246] hover:text-[#CE2B37] transition-colors"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            Sources
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#009246] hover:text-[#CE2B37] transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t-2 border-[#009246]">
          <div className="px-4 py-4 space-y-3 flex flex-col">
            <a
              href="#timeline"
              onClick={scrollToTimeline}
              className="text-base text-[#009246] hover:text-[#CE2B37] transition-colors py-2"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              Timeline
            </a>
            <Link
              to="/films"
              onClick={handleNavClick}
              className="text-base text-[#009246] hover:text-[#CE2B37] transition-colors py-2"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              Films
            </Link>
            <Link
              to="/quiz"
              onClick={handleNavClick}
              className="text-base text-[#009246] hover:text-[#CE2B37] transition-colors py-2"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              Spotlight Quiz
            </Link>
            <Link
              to="/sources"
              onClick={handleNavClick}
              className="text-base text-[#009246] hover:text-[#CE2B37] transition-colors py-2"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              Sources
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
