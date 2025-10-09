import heroBg from '@/assets/hero-bg.jpg';

// <!-- Sekcja O nas -->
const HeroSection = () => {
  return (
    <section id="o-nas" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/60"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* EDYTUJ: Tytuł sekcji O nas */}
          <h2 className="text-5xl lg:text-7xl font-display font-bold mb-6 leading-tight">
            Profesjonalne części samochodowe
            <span className="text-primary"> w najlepszych cenach</span>
          </h2>
          
          {/* EDYTUJ: Opis firmy */}
          <p className="text-xl lg:text-2xl text-foreground/80 mb-8 leading-relaxed">
            FAVMOTORS to zaufany partner w zakresie części zamiennych do wszystkich marek samochodów. 
            Oferujemy szeroki asortyment produktów najwyższej jakości, konkurencyjne ceny oraz 
            profesjonalną obsługę. Działamy na terenie całej Polski, zapewniając szybką dostawę 
            i fachowe doradztwo.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/#/popular-products"
              className="px-8 py-4 gradient-primary text-white font-semibold rounded-lg shadow-glow hover:scale-105 transition-smooth"
            >
              Zobacz ofertę
            </a>
            <button
              onClick={() => {
                const element = document.getElementById('kontakt');
                element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="px-8 py-4 bg-secondary text-foreground font-semibold rounded-lg hover:bg-secondary/80 transition-smooth"
            >
              Skontaktuj się
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
