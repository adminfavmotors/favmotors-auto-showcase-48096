import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { HelpCircle, ChevronDown } from "lucide-react";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Czy wysyłacie części w całej Polsce?",
    answer: "Tak, realizujemy dostawy na terenie całej Polski. Współpracujemy z najlepszymi firmami kurierskimi, w tym InPost Paczkomat, aby zapewnić szybką i bezpieczną dostawę. Standardowy czas dostawy to 1-2 dni robocze."
  },
  {
    question: "Jak szybko realizowane są zamówienia?",
    answer: "Zamówienia złożone do godziny 14:00 wysyłamy tego samego dnia roboczego. Dla części, które aktualnie nie są dostępne w magazynie, termin dostawy wynosi zazwyczaj 2-3 dni robocze. W przypadku pilnych zamówień oferujemy również opcję dostawy ekspresowej."
  },
  {
    question: "Czy macie dostęp do części premium i OEM?",
    answer: "Oczywiście! Oferujemy szeroki wybór części zarówno od renomowanych producentów aftermarketowych (Bosch, Valeo, Mann Filter, Mahle, Brembo), jak i oryginalne części OEM. Pomożemy dobrać odpowiednie części zgodnie z Twoim budżetem i wymaganiami."
  },
  {
    question: "Czy można odebrać części osobiście?",
    answer: "Tak, oferujemy możliwość odbioru osobistego w naszym punkcie w Krakowie. Po złożeniu zamówienia skontaktujemy się z Tobą, aby umówić dogodny termin odbioru. Odbiór osobisty jest bezpłatny."
  },
  {
    question: "Jak sprawdzić dostępność części?",
    answer: "Najszybszym sposobem jest kontakt telefoniczny lub przez formularz kontaktowy na naszej stronie. Podaj nam markę, model, rok produkcji i numer VIN pojazdu, a nasi doradcy sprawdzą dostępność i przedstawią ofertę cenową w ciągu kilku minut."
  },
  {
    question: "Czy oferujecie gwarancję na części?",
    answer: "Wszystkie oferowane przez nas części objęte są gwarancją producenta. Czas gwarancji zależy od producenta i typu części – zazwyczaj wynosi od 12 do 24 miesięcy. Szczegółowe informacje o gwarancji dla konkretnej części otrzymasz podczas składania zamówienia."
  },
  {
    question: "Jakie formy płatności akceptujecie?",
    answer: "Akceptujemy różne formy płatności: przelew bankowy, płatność przy odbiorze (pobranie), płatności online oraz płatność gotówką przy odbiorze osobistym. Dla stałych klientów oferujemy również płatność z odroczonym terminem."
  },
  {
    question: "Czy pomożecie dobrać odpowiednie części do mojego auta?",
    answer: "Absolutnie! Nasz zespół doświadczonych doradców pomoże Ci w doborze właściwych części do Twojego pojazdu. Wystarczy, że podasz nam markę, model, rok produkcji i numer VIN. Doradzamy również w kwestii wyboru między częściami oryginalnymi a zamiennikami."
  }
];

const FAQSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="faq" className="py-12 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <HelpCircle className="w-8 h-8 text-primary" />
            </div>
            <CollapsibleTrigger className="group">
              <h2 className="font-display font-bold text-foreground mb-4 flex items-center justify-center gap-3" style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}>
                Najczęściej zadawane <span className="text-primary">pytania</span>
                <ChevronDown className={`w-8 h-8 text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
              </h2>
            </CollapsibleTrigger>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Odpowiedzi na pytania, które najczęściej otrzymujemy od naszych klientów
            </p>
          </div>

          <CollapsibleContent className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
            <div className="max-w-4xl mx-auto mt-8">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="bg-card border border-border rounded-lg px-6 shadow-sm hover:shadow-elegant transition-smooth"
                  >
                    <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/80 pb-5 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="text-center mt-12">
              <p className="text-foreground/70 mb-4">
                Nie znalazłeś odpowiedzi na swoje pytanie?
              </p>
              <button
                onClick={() => {
                  const element = document.getElementById('kontakt');
                  element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="px-8 py-3 gradient-primary text-white font-semibold rounded-lg shadow-glow hover:scale-105 transition-smooth"
              >
                Skontaktuj się z nami
              </button>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </section>
  );
};

export default FAQSection;