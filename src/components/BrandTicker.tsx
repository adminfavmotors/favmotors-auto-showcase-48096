import { useEffect, useRef } from 'react';

const brands = [
  'Bosch',
  'Mann Filter',
  'Mahle',
  'Valeo',
  'Denso',
  'Brembo',
  'ATE',
  'TRW',
  'Febi Bilstein',
  'Sachs',
  'Lemförder',
  'Hengst',
  'Filtron',
  'NGK',
  'Delphi',
  'Gates',
  'Continental',
  'INA',
  'SKF',
  'Monroe',
  'KYB',
  'Castrol',
  'Mobil',
  'Total',
  'Liqui Moly',
  'ELF',
  'Shell',
  'Champion',
  'Hella',
  'Nissens',
];

const BrandTicker = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const scroll = () => {
      scrollPosition += scrollSpeed;
      
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      requestAnimationFrame(scroll);
    };

    const animationFrame = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const duplicatedBrands = [...brands, ...brands, ...brands];

  return (
    <section className="py-10 lg:py-12 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 mb-5">
        <p className="text-center text-white/70 text-sm font-semibold tracking-wider uppercase stable-text">
          Współpracujemy z najlepszymi markami
        </p>
      </div>
      
      <div 
        ref={scrollRef}
        className="flex gap-1 overflow-hidden whitespace-nowrap gpu-fix"
        style={{ 
          scrollBehavior: 'auto',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {duplicatedBrands.map((brand, index) => (
          <div
            key={`${brand}-${index}`}
            className="brand-ticker-item inline-flex items-center justify-center min-w-[100px] sm:min-w-[120px] px-3 sm:px-4"
          >
            <span className="text-lg sm:text-xl lg:text-2xl font-display font-bold text-white/90 hover:text-primary transition-smooth stable-text">
              {brand}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandTicker;
