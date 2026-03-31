export default function Logo({ variant = 'dark', className = "h-8" }: { variant?: 'dark' | 'light', className?: string }) {
  const primaryColor = variant === 'dark' ? '#0F172A' : '#FFFFFF';
  const secondaryColor = variant === 'dark' ? '#FFFFFF' : '#0F172A';

  return (
    <svg 
      viewBox="0 0 450 180" 
      className={className} 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M 140 20 A 70 70 0 0 0 140 160 L 140 20 Z" 
        fill={primaryColor} 
      />
      <text 
        x="72" 
        y="114" 
        fontFamily="sans-serif" 
        fontWeight="300" 
        fontSize="76" 
        fill={secondaryColor} 
        letterSpacing="2"
      >
        FI
      </text>
      <text 
        x="150" 
        y="114" 
        fontFamily="sans-serif" 
        fontWeight="300" 
        fontSize="76" 
        fill={primaryColor} 
        letterSpacing="4"
      >
        NANCE
      </text>
    </svg>
  );
}
