import { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowConsent(false);
  };

  const rejectCookies = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/95 backdrop-blur-sm border-t border-border shadow-elegant animate-fade-in">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-3 flex-1">
            <Cookie className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-lg mb-1">Pliki Cookie</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Używamy plików cookie, aby poprawić Twoje doświadczenia na naszej stronie, 
                analizować ruch i personalizować treści. Kontynuując przeglądanie, wyrażasz 
                zgodę na używanie plików cookie zgodnie z naszą polityką prywatności.
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 flex-shrink-0">
            <Button
              variant="outline"
              onClick={rejectCookies}
              className="whitespace-nowrap"
            >
              Odrzuć
            </Button>
            <Button
              onClick={acceptCookies}
              className="gradient-primary text-white whitespace-nowrap"
            >
              Akceptuj wszystkie
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
