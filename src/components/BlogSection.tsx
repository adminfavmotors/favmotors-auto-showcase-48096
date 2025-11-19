import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { BookOpen, Calendar } from 'lucide-react';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  keywords: string[];
}

const articles: Article[] = [
  {
    id: '1',
    title: 'Jak dobrać części samochodowe do swojego auta?',
    excerpt: 'Dowiedz się, jak wybrać odpowiednie części zamienne dla swojego samochodu, aby zapewnić mu długowieczność i bezpieczeństwo.',
    content: `
      <p>Wybór odpowiednich części samochodowych to kluczowy element utrzymania pojazdu w dobrym stanie technicznym. Wiele osób zastanawia się, czy warto inwestować w oryginalne części OEM, czy lepiej wybrać zamienniki.</p>
      
      <h3>1. Sprawdź numer VIN swojego pojazdu</h3>
      <p>Numer VIN zawiera wszystkie informacje o Twoim aucie - rok produkcji, model silnika, wyposażenie. Dzięki niemu możesz być pewien, że zamówisz dokładnie te części, które pasują do Twojego pojazdu.</p>
      
      <h3>2. Zwróć uwagę na jakość części</h3>
      <p>Nie zawsze najtańsze części są najlepszym wyborem. Renomowani producenci jak Bosch, Valeo czy Mann Filter oferują części wysokiej jakości, które zapewnią długą i bezawaryjną eksploatację.</p>
      
      <h3>3. Konsultuj się z mechanikiem</h3>
      <p>Jeśli nie jesteś pewien, jakie części wybrać, skontaktuj się z naszym zespołem. Doradzimy i pomożemy dobrać optymalne rozwiązanie dla Twojego auta i budżetu.</p>
      
      <h3>4. Oryginał czy zamiennik?</h3>
      <p>Części OEM to gwarancja jakości, ale zamienniki premium od renomowanych producentów często nie ustępują im jakością, a są znacznie tańsze. Wszystko zależy od wieku auta i intensywności użytkowania.</p>
    `,
    image: '/placeholder.svg',
    date: '2025-01-15',
    keywords: ['części samochodowe', 'dobór części', 'OEM', 'zamienniki', 'VIN']
  },
  {
    id: '2',
    title: 'Popularne marki części – co wybrać?',
    excerpt: 'Przegląd najpopularniejszych marek części samochodowych dostępnych w naszej ofercie. Poznaj zalety poszczególnych producentów.',
    content: `
      <p>Na rynku motoryzacyjnym dostępnych jest wiele marek części samochodowych. Oto przegląd tych, które wyróżniają się jakością i niezawodnością.</p>
      
      <h3>Bosch - lider technologii</h3>
      <p>Bosch to jeden z największych producentów części samochodowych na świecie. Oferuje kompletną gamę produktów - od układów zapłonowych, przez hamulce, filtry, po elementy zawieszenia. Znany z innowacyjności i najwyższej jakości.</p>
      
      <h3>Valeo - French precision</h3>
      <p>Valeo specjalizuje się w systemach elektrycznych i elektronicznych, klimatyzacji oraz układach chłodzenia. Francuski producent cieszy się doskonałą reputacją wśród mechaników na całym świecie.</p>
      
      <h3>Mann Filter - ekspert w filtracji</h3>
      <p>Mann Filter to niemiecki producent specjalizujący się w systemach filtracji. Ich filtry oleju, powietrza i kabinowe to gwarancja czystości i długowieczności silnika.</p>
      
      <h3>Febi Bilstein - sprawdzone rozwiązania</h3>
      <p>Febi Bilstein oferuje szeroką gamę części zawieszenia, układu kierowniczego i hamulcowego. Producent znany z doskonałego stosunku jakości do ceny.</p>
      
      <h3>Brembo - hamulce premium</h3>
      <p>Brembo to włoska marka premium, która produkuje układy hamulcowe dla sportowych i luksusowych samochodów. Najwyższa jakość i wydajność.</p>
    `,
    image: '/placeholder.svg',
    date: '2025-01-10',
    keywords: ['Bosch', 'Valeo', 'Mann Filter', 'Febi Bilstein', 'Brembo', 'marki części']
  },
  {
    id: '3',
    title: 'Dlaczego warto kupować części w Polsce?',
    excerpt: 'Kupno części samochodowych w Polsce ma wiele zalet - szybka dostawa, niskie koszty transportu i wsparcie lokalnych firm.',
    content: `
      <p>Coraz więcej kierowców decyduje się na zakup części samochodowych w Polsce, zamiast zamawiać je z zagranicy. Oto główne powody tej decyzji.</p>
      
      <h3>1. Szybka dostawa</h3>
      <p>Zamawiając części w Polsce, możesz liczyć na dostawę już następnego dnia. W przypadku zamówień zagranicznych czas oczekiwania może wynosić nawet kilka tygodni.</p>
      
      <h3>2. Brak problemów celnych</h3>
      <p>Od czasu Brexitu zakup części z Wielkiej Brytanii wiąże się z dodatkowymi opłatami celnymi i skomplikowanymi procedurami. Kupując w Polsce, unikasz tych problemów.</p>
      
      <h3>3. Łatwiejsze reklamacje</h3>
      <p>W przypadku wady towaru znacznie łatwiej dokonać reklamacji u polskiego sprzedawcy. Proces jest szybszy i nie wiąże się z dodatkowymi kosztami wysyłki zagranicznej.</p>
      
      <h3>4. Wsparcie w języku polskim</h3>
      <p>Kontakt z polskimi dostawcami eliminuje bariery językowe. Możesz liczyć na fachowe doradztwo i pomoc w doborze właściwych części.</p>
      
      <h3>5. Wspierasz lokalną gospodarkę</h3>
      <p>Kupując w Polsce, wspierasz polskie firmy i miejsca pracy. To również korzystne dla krajowej gospodarki.</p>
      
      <h3>6. Konkurencyjne ceny</h3>
      <p>Wbrew pozorom, ceny części w Polsce są często porównywalne lub niższe niż w innych krajach, szczególnie po uwzględnieniu kosztów wysyłki i ceł.</p>
    `,
    image: '/placeholder.svg',
    date: '2025-01-08',
    keywords: ['części w Polsce', 'zakupy lokalne', 'szybka dostawa', 'Kraków', 'polski sklep']
  },
  {
    id: '4',
    title: 'Najczęstsze awarie samochodów i ich szybkie rozwiązania',
    excerpt: 'Poznaj najczęstsze problemy techniczne i dowiedz się, jakie części mogą pomóc w ich rozwiązaniu.',
    content: `
      <p>Każdy kierowca prędzej czy później spotyka się z awariami swojego pojazdu. Oto najczęstsze problemy i sposoby ich rozwiązania.</p>
      
      <h3>1. Rozładowany akumulator</h3>
      <p>Objaw: Auto nie odpala, słychać klikanie rozrusznika.</p>
      <p>Rozwiązanie: Wymień akumulator na nowy. Sprawdź również alternator - może nie ładować prawidłowo akumulatora.</p>
      
      <h3>2. Zużyte klocki hamulcowe</h3>
      <p>Objaw: Piszczenie podczas hamowania, dłuższa droga hamowania, wibracje.</p>
      <p>Rozwiązanie: Wymień klocki i tarcze hamulcowe. Regularna wymiana co 30-40 tys. km to klucz do bezpieczeństwa.</p>
      
      <h3>3. Zużyte świece zapłonowe</h3>
      <p>Objaw: Trudności z odpaleniem, nierówna praca silnika, zwiększone spalanie.</p>
      <p>Rozwiązanie: Wymień świece zapłonowe. W benzynowych silnikach wymiana co 30-60 tys. km to standard.</p>
      
      <h3>4. Zabrudzone filtry</h3>
      <p>Objaw: Spadek mocy, zwiększone spalanie, czarny dym z wydechu.</p>
      <p>Rozwiązanie: Regularnie wymieniaj filtry powietrza (co 15-30 tys. km) i paliwa (co 30-60 tys. km).</p>
      
      <h3>5. Przecieki płynów</h3>
      <p>Objaw: Plamy pod autem, spadek poziomu płynów.</p>
      <p>Rozwiązanie: Zidentyfikuj źródło wycieku. Może to być uszczelka, przewód lub uszkodzony zbiornik. Wymień uszkodzony element.</p>
      
      <h3>6. Zużyte amortyzatory</h3>
      <p>Objaw: Kołysanie podczas jazdy, nierównomierne zużycie opon, hałas podczas przejazdu przez nierówności.</p>
      <p>Rozwiązanie: Wymień amortyzatory parami (oś przednia lub tylna). Zalecana wymiana co 80-100 tys. km.</p>
      
      <p><strong>Potrzebujesz pomocy?</strong> Skontaktuj się z nami - pomożemy dobrać odpowiednie części do Twojego auta.</p>
    `,
    image: '/placeholder.svg',
    date: '2025-01-05',
    keywords: ['awarie samochodów', 'naprawa', 'diagnostyka', 'części zamienne', 'serwis']
  }
];

const BlogSection = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <>
      <section id="blog" className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
              Porady i <span className="text-primary">Artykuły</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Praktyczne informacje o częściach samochodowych, poradniki i aktualności ze świata motoryzacji
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {articles.map((article) => (
              <article
                key={article.id}
                className="bg-card rounded-lg overflow-hidden shadow-elegant hover:shadow-glow transition-smooth cursor-pointer border border-border"
                onClick={() => setSelectedArticle(article)}
              >
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <div className="absolute inset-0 gradient-dark flex items-center justify-center">
                    <BookOpen className="w-12 h-12 text-white/60" />
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4" />
                    <time dateTime={article.date}>
                      {new Date(article.date).toLocaleDateString('pl-PL', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                  </div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-foreground/70 text-sm line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="mt-4">
                    <span className="text-primary font-semibold text-sm hover:underline">
                      Czytaj więcej →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedArticle} onOpenChange={() => setSelectedArticle(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedArticle && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl font-display font-bold text-foreground pr-8">
                  {selectedArticle.title}
                </DialogTitle>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={selectedArticle.date}>
                    {new Date(selectedArticle.date).toLocaleDateString('pl-PL', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>
              </DialogHeader>
              
              <div className="mt-6">
                <div className="aspect-video bg-muted rounded-lg mb-6 overflow-hidden">
                  <div className="w-full h-full gradient-dark flex items-center justify-center">
                    <BookOpen className="w-20 h-20 text-white/40" />
                  </div>
                </div>
                
                <div 
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
                  style={{
                    color: 'hsl(var(--foreground))',
                  }}
                />

                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-2">Słowa kluczowe:</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedArticle.keywords.map((keyword, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-muted text-foreground text-sm rounded-full"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BlogSection;