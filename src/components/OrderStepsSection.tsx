import { FileText, ListChecks, MessageCircle } from 'lucide-react';

const OrderStepsSection = () => {
  const steps = [
    {
      number: 1,
      title: 'Przygotuj numer VIN',
      description: 'Znajdź numer identyfikacyjny swojego pojazdu (VIN). Pomoże nam to dokładnie dobrać części.',
      icon: FileText,
    },
    {
      number: 2,
      title: 'Przygotuj listę potrzebnych części',
      description: 'Sporządź listę potrzebnych części zamiennych lub opisz problem z pojazdem.',
      icon: ListChecks,
    },
    {
      number: 3,
      title: 'Wybierz dogodny sposób kontaktu',
      description: 'Skontaktuj się z nami telefonicznie, SMS-em, przez komunikator lub e-mail.',
      icon: MessageCircle,
    },
  ];

  return (
    <section id="zamowienie" className="py-12 lg:py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 
          className="font-bold mb-8 lg:mb-12 text-center stable-text"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}
        >
          Jak złożyć <span className="text-primary">zamówienie</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-card p-6 lg:p-8 rounded-xl transition-smooth hover:scale-105 hover:shadow-elegant border border-border gpu-fix product-card-smooth"
              >
                <div className="flex items-center justify-center w-16 h-16 mb-6 gradient-red rounded-full shadow-glow mx-auto">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="text-center">
                  <div className="text-sm font-semibold text-primary mb-2 stable-text">KROK {step.number}</div>
                  <h3 className="text-xl lg:text-2xl font-bold mb-4 text-foreground stable-text">{step.title}</h3>
                  <p className="text-foreground/80 leading-relaxed stable-text">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Przycisk kontaktu */}
        <div className="text-center mt-10 lg:mt-12">
          <button
            onClick={() => {
              const element = document.getElementById('kontakt');
              element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="inline-block px-8 py-4 gradient-red text-white font-semibold rounded-lg shadow-glow hover:scale-105 transition-smooth gpu-fix font-stable"
          >
            <span className="stable-text">Skontaktuj się z nami</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default OrderStepsSection;
