import { Link, useLocation } from 'react-router';
import { ReelFemaleLogo } from './ReelFemaleLogo';

export function Navbar() {
  const location = useLocation();
  const basePath = import.meta.env.BASE_URL ?? '/';
  const homePath = basePath.endsWith('/') ? basePath.slice(0, -1) : basePath;
  const timelineHref = `${basePath}#timeline`;

  const scrollToTimeline = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== homePath && location.pathname !== `${homePath}/`) {
      window.location.href = timelineHref;
    } else {
      const timelineSection = document.getElementById('timeline');
      timelineSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-4 border-[#009246]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <ReelFemaleLogo className="w-10 h-10 text-[#CE2B37]" />
          <h1 className="text-2xl text-black" style={{ fontFamily: 'Rye, cursive' }}>
            Reel Housewives of Italy
          </h1>
        </Link>

        <div className="flex items-center gap-8">
          <a
            href="#timeline"
            onClick={scrollToTimeline}
            className="text-lg text-[#009246] hover:text-[#CE2B37] transition-colors"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            Timeline
          </a>
          <Link
            to="/films"
            className="text-lg text-[#009246] hover:text-[#CE2B37] transition-colors"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            Films
          </Link>
          <Link
            to="/quiz"
            className="text-lg text-[#009246] hover:text-[#CE2B37] transition-colors"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            Spotlight Quiz
          </Link>
          <Link
            to="/sources"
            className="text-lg text-[#009246] hover:text-[#CE2B37] transition-colors"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            Sources
          </Link>
        </div>
      </div>
    </nav>
  );
}
