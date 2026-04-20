export function Footer() {
  return (
    <footer className="bg-[#009246] text-white py-4 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p style={{ fontFamily: 'Cinzel, serif' }}>
          © {new Date().getFullYear()} Dante Dunham
        </p>

        <a
          href="https://www.linkedin.com/in/dante-dunham-916982320/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 hover:opacity-90 transition-opacity"
        >
          <div className="relative w-10 h-10 bg-white rounded-full flex items-center justify-center transition-transform duration-500 group-hover:[transform:rotateY(360deg)]">
            <span className="text-[#0077B5] text-xl font-bold">in</span>
          </div>
          <span style={{ fontFamily: 'Cinzel, serif' }}>
            Connect on LinkedIn
          </span>
        </a>
      </div>
    </footer>
  );
}
