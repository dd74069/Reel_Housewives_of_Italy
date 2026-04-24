export function Footer() {
  return (
    <footer className="bg-[#009246] text-white py-3 md:py-4 px-4 md:px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
        <p className="text-sm md:text-base text-center md:text-left" style={{ fontFamily: 'Cinzel, serif' }}>
          © {new Date().getFullYear()} Dante Dunham
        </p>

        <div className="flex items-center gap-3 md:gap-4 flex-wrap justify-center">
          <a
            href="https://www.linkedin.com/in/dante-dunham-916982320/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 md:gap-3 hover:opacity-90 transition-opacity text-xs md:text-sm"
          >
            <div className="relative w-8 md:w-10 h-8 md:h-10 bg-white rounded-full flex items-center justify-center transition-transform duration-500 group-hover:[transform:rotateY(360deg)] flex-shrink-0">
              <span className="text-[#0077B5] text-sm md:text-lg font-bold">in</span>
            </div>
            <span className="hidden sm:inline" style={{ fontFamily: 'Cinzel, serif' }}>
              Connect on LinkedIn
            </span>
          </a>

          <a
            href="https://www.instagram.com/dante__dunham/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 md:gap-3 text-xs md:text-sm"
          >
            <div className="relative w-8 md:w-10 h-8 md:h-10 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-xl flex items-center justify-center transition-transform duration-500 group-hover:[transform:rotateY(360deg)] flex-shrink-0">
              <div className="w-7 md:w-9 h-7 md:h-9 bg-white rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 md:w-6 h-5 md:h-6" fill="url(#instagram-gradient)">
                  <defs>
                    <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" style={{ stopColor: '#FD5949' }} />
                      <stop offset="50%" style={{ stopColor: '#D6249F' }} />
                      <stop offset="100%" style={{ stopColor: '#285AEB' }} />
                    </linearGradient>
                  </defs>
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
            </div>
            <span className="hidden sm:inline" style={{ fontFamily: 'Cinzel, serif' }}>
              Follow on Instagram
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
