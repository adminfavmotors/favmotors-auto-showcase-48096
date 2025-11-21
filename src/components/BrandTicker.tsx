import { useEffect, useRef } from 'react';

const brands = [
  'Bosch',
  'Febi Bilstein',
  'SKF',
  'Mann Filter',
  'Mahle',
  'Castrol',
  'Mobil',
  'Motul',
  'Valeo',
  'TRW',
  'Brembo',
  'Sachs',
  'Lemförder',
  'INA',
  'Gates',
  'Dayco',
  'NGK',
  'Denso',
  'Textar',
  'ATE',
  'Continental',
  'Ferodo',
  'TotalEnergies',
  'Shell',
  'Petronas',
  'Hella',
  'Philips',
  'Liqui Moly',
  'K&N',
  'Hengst'
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
    <section className="py-12 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 mb-6">
        <p className="text-center text-white/70 text-sm font-semibold tracking-wider uppercase">
          Współpracujemy z najlepszymi markami
        </p>
      </div>
      
      <div 
        ref={scrollRef}
        className="flex gap-3 overflow-hidden whitespace-nowrap"
        style={{ 
          scrollBehavior: 'auto',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {duplicatedBrands.map((brand, index) => (
          <div
            key={`${brand}-${index}`}
            className="inline-flex items-center justify-center min-w-[160px] px-6"
          >
            <span className="text-2xl font-display font-bold text-white/90 hover:text-primary transition-smooth">
              {brand}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandTicker;