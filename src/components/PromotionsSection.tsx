import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import promo1 from '@/assets/promo-1.jpg';
import promo2 from '@/assets/promo-2.jpg';
import promo3 from '@/assets/promo-3.jpg';
import promo4 from '@/assets/promo-4.jpg';

const promotions = [
  {
    id: 1,
    image: promo1,
    title: 'Oleje',
    description: 'Oleje silnikowe od wiodących producentów',
    link: '/category/oil',
  },
  {
    id: 2,
    image: promo2,
    title: 'Produkty do pielęgnacji samochodu',
    description: 'Profesjonalna kosmetyka samochodowa',
    link: '/category/carcare',
  },
  {
    id: 3,
    image: promo3,
    title: 'Zestawy filtrów',
    description: 'Komplety filtrów do przeglądu',
    link: '/category/filters',
  },
  {
    id: 4,
    image: promo4,
    title: 'Chemia samochodowa',
    description: 'Płyny i dodatki najwyższej jakości',
    link: '/category/chemistry',
  },
];

const PromotionsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % promotions.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="promocje" className="py-16 lg:py-20 gradient-dark">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 
          className="font-bold mb-10 lg:mb-12 text-center text-white stable-text"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}
        >
          Nasze <span className="text-primary">promocje</span>
        </h2>

        {/* Auto-carousel */}
        <div className="relative overflow-hidden rounded-xl shadow-elegant gpu-fix">
          <div
            className="flex transition-transform duration-700 ease-in-out gpu-fix"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {promotions.map((promo) => (
              <Link key={promo.id} to={promo.link} className="w-full flex-shrink-0 gpu-fix">
                <div 
                  className="relative cursor-pointer group"
                  style={{ height: 'clamp(300px, 50vw, 500px)' }}
                >
                  <img
                    src={promo.image}
                    alt={`${promo.title} - promocje FAVMOTORS`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth gpu-fix"
                    loading="lazy"
                    width="1200"
                    height="500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/70 to-transparent flex items-end">
                    <div className="p-6 sm:p-8 lg:p-12">
                      <h3 
                        className="font-bold mb-2 text-white group-hover:text-primary transition-smooth stable-text"
                        style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}
                      >
                        {promo.title}
                      </h3>
                      <p 
                        className="text-white/90 stable-text"
                        style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}
                      >
                        {promo.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Dots indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {promotions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-smooth gpu-fix ${
                  index === currentIndex ? 'bg-primary w-8' : 'bg-foreground/30'
                }`}
                aria-label={`Przejdź do slajdu ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionsSection;
