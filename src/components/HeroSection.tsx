import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  return (
    <section 
      id="o-nas" 
      className="relative flex items-center pt-20 pb-8 lg:pb-12"
      style={{
        minHeight: 'clamp(500px, 75vh, 800px)',
      }}
    >
      {/* Background Image - not lazy loaded as it's above the fold */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroBg})`,
        }}
        role="img"
        aria-label="Tło przedstawiające części samochodowe"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/60"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* Tytuł sekcji O nas */}
          <h2 
            className="font-display font-bold mb-4 lg:mb-6 leading-tight stable-text"
            style={{ fontSize: 'clamp(1.75rem, 4.5vw, 3.5rem)' }}
          >
            Profesjonalne części samochodowe
            <span className="text-primary"> w najlepszych cenach</span>
          </h2>
          
          {/* Opis firmy */}
          <p 
            className="text-foreground/80 mb-6 lg:mb-8 leading-relaxed stable-text"
            style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.35rem)' }}
          >
            FAVMOTORS to zaufany partner w zakresie części zamiennych do wszystkich marek samochodów. 
            Oferujemy szeroki asortyment produktów najwyższej jakości, konkurencyjne ceny oraz 
            profesjonalną obsługę. Działamy na terenie całej Polski, zapewniając szybką dostawę 
            i fachowe doradztwo.
          </p>

          <div className="flex flex-wrap gap-3 sm:gap-4">
            <a
              href="/#/popular-products"
              className="px-6 sm:px-8 py-3 sm:py-4 gradient-primary text-white font-semibold rounded-lg shadow-glow hover:scale-105 transition-smooth gpu-fix font-stable"
              style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1rem)' }}
            >
              <span className="stable-text">Zobacz ofertę</span>
            </a>
            <button
              onClick={() => {
                const element = document.getElementById('kontakt');
                element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-foreground font-semibold rounded-lg hover:bg-white/90 shadow-elegant transition-smooth gpu-fix font-stable"
              style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1rem)' }}
            >
              <span className="stable-text">Skontaktuj się</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
