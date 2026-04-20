export function ReelFemaleLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Film reel circle with female symbol */}
      <circle
        cx="50"
        cy="40"
        r="25"
        stroke="currentColor"
        strokeWidth="4"
        fill="none"
      />

      {/* Film reel holes */}
      <circle cx="50" cy="40" r="6" fill="currentColor" />
      <circle cx="38" cy="30" r="4" fill="currentColor" />
      <circle cx="62" cy="30" r="4" fill="currentColor" />
      <circle cx="38" cy="50" r="4" fill="currentColor" />
      <circle cx="62" cy="50" r="4" fill="currentColor" />

      {/* Female symbol cross extending from bottom */}
      <line
        x1="50"
        y1="65"
        x2="50"
        y2="90"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <line
        x1="40"
        y1="80"
        x2="60"
        y2="80"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}
