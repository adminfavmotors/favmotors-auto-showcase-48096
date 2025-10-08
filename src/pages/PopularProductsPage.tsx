import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Header from '@/components/Header';
import ContactSection from '@/components/ContactSection';
import { useRef } from 'react';

// Import product images
import product1 from '@/assets/product-1.jpg';
import product2 from '@/assets/product-2.jpg';
import product3 from '@/assets/product-3.jpg';
import product4 from '@/assets/product-4.jpg';
import product5 from '@/assets/product-5.jpg';
import product6 from '@/assets/product-6.jpg';

const PopularProductsPage = () => {
  const oilScrollRef = useRef<HTMLDivElement>(null);
  const careScrollRef = useRef<HTMLDivElement>(null);
  const filtersScrollRef = useRef<HTMLDivElement>(null);
  const generalScrollRef = useRef<HTMLDivElement>(null);

  const scroll = (ref: React.RefObject<HTMLDivElement>, direction: 'left' | 'right') => {
    if (ref.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Oleje - Oils
  const oilProducts = [
    { id: 1, name: 'Olej silnikowy 5W-30', price: '120 PLN', image: product1 },
    { id: 2, name: 'Olej przekładniowy ATF', price: '95 PLN', image: product2 },
    { id: 3, name: 'Olej hydrauliczny', price: '85 PLN', image: product3 },
    { id: 4, name: 'Olej silnikowy 10W-40', price: '110 PLN', image: product4 },
    { id: 5, name: 'Olej syntetyczny 0W-20', price: '145 PLN', image: product5 },
    { id: 6, name: 'Olej półsyntetyczny', price: '98 PLN', image: product6 },
  ];

  // Środki po uchodzie - Care products
  const careProducts = [
    { id: 7, name: 'Szampon samochodowy', price: '45 PLN', image: product4 },
    { id: 8, name: 'Wosk ochronny', price: '68 PLN', image: product5 },
    { id: 9, name: 'Pasta polerska', price: '55 PLN', image: product6 },
    { id: 10, name: 'Płyn do szyb', price: '28 PLN', image: product1 },
    { id: 11, name: 'Czyszczenie felg', price: '38 PLN', image: product2 },
    { id: 12, name: 'Odtłuszczacz', price: '32 PLN', image: product3 },
  ];

  // Komplety filtrów - Filter sets
  const filterProducts = [
    { id: 13, name: 'Komplet filtrów VW/Audi', price: '180 PLN', image: product2 },
    { id: 14, name: 'Komplet filtrów BMW', price: '210 PLN', image: product3 },
    { id: 15, name: 'Komplet filtrów Mercedes', price: '225 PLN', image: product4 },
    { id: 16, name: 'Komplet filtrów Ford', price: '165 PLN', image: product5 },
    { id: 17, name: 'Komplet filtrów Toyota', price: '175 PLN', image: product6 },
    { id: 18, name: 'Komplet filtrów Opel', price: '155 PLN', image: product1 },
  ];

  // Ogólne popularne - General popular
  const generalProducts = [
    { id: 19, name: 'Klocki hamulcowe', price: '195 PLN', image: product3 },
    { id: 20, name: 'Tarcze hamulcowe', price: '280 PLN', image: product1 },
    { id: 21, name: 'Akumulator 60Ah', price: '320 PLN', image: product2 },
    { id: 22, name: 'Świece zapłonowe', price: '45 PLN', image: product4 },
    { id: 23, name: 'Amortyzatory przód', price: '380 PLN', image: product5 },
    { id: 24, name: 'Wycieraczki', price: '68 PLN', image: product6 },
  ];

  const renderCarousel = (
    title: string,
    subtitle: string,
    products: typeof oilProducts,
    scrollRef: React.RefObject<HTMLDivElement>
  ) => (
    <section className="py-16 px-4 lg:px-8">
      <div className="container mx-auto">
        <div className="mb-8">
          <h2 className="text-4xl font-bold mb-2">{title}</h2>
          <p className="text-muted-foreground text-lg">{subtitle}</p>
        </div>

        <div className="relative">
          <button
            onClick={() => scroll(scrollRef, 'left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-card/80 backdrop-blur-sm p-3 rounded-full shadow-elegant hover:bg-card transition-smooth"
            aria-label="Przewiń w lewo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 w-72 bg-card rounded-lg overflow-hidden shadow-elegant hover:shadow-glow transition-smooth hover:scale-105"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-smooth hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-2xl font-bold text-primary">{product.price}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll(scrollRef, 'right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-card/80 backdrop-blur-sm p-3 rounded-full shadow-elegant hover:bg-card transition-smooth"
            aria-label="Przewiń w prawo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4 lg:px-8 gradient-dark">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Najpopularniejsze <span className="text-primary">Produkty</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Odkryj nasze najczęściej wybierane części samochodowe. Produkty sprawdzone przez tysiące zadowolonych klientów.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-primary hover:underline transition-smooth"
            >
              <ChevronLeft className="w-5 h-5" />
              Powrót do strony głównej
            </Link>
          </div>
        </section>

        {/* Oil Products Carousel */}
        {renderCarousel(
          'Oleje',
          'Najpopularniejsze oleje w tej kategorii',
          oilProducts,
          oilScrollRef
        )}

        {/* Care Products Carousel */}
        {renderCarousel(
          'Środki po uchodzie',
          'Najpopularniejsze produkty pielęgnacyjne w tej kategorii',
          careProducts,
          careScrollRef
        )}

        {/* Filter Sets Carousel */}
        {renderCarousel(
          'Komplety filtrów',
          'Najpopularniejsze zestawy filtrów w tej kategorii',
          filterProducts,
          filtersScrollRef
        )}

        {/* General Popular Carousel */}
        {renderCarousel(
          'Popularne produkty',
          'Najczęściej wybierane części samochodowe',
          generalProducts,
          generalScrollRef
        )}

        <ContactSection />
      </main>
    </div>
  );
};

export default PopularProductsPage;
