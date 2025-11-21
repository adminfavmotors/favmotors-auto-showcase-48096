import { MapPin, Phone, Mail, Instagram, Facebook, Package, Truck, Users } from 'lucide-react';

// <!-- Sekcja Kontakt -->
const ContactSection = () => {
  return (
    <section id="kontakt" className="py-20 bg-secondary border-t border-white/10">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-center">
          <span className="text-primary">Kontakt</span> <span className="text-white">z nami</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Dane kontaktowe</h3>
              
              <div className="space-y-4">
                {/* EDYTUJ: Adres */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1 text-white">Adres</div>
                    <div className="text-white/80">Kraków, Polska</div>
                  </div>
                </div>

                {/* EDYTUJ: Telefon */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1 text-white">Telefon</div>
                    <a href="tel:+48788554887" className="text-white/80 hover:text-primary transition-fast">
                      +48 788 554 887
                    </a>
                  </div>
                </div>

                {/* EDYTUJ: Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1 text-white">E-mail</div>
                    <a href="mailto:admin@favmotors.pl" className="text-white/80 hover:text-primary transition-fast">
                      admin@favmotors.pl
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Znajdź nas w social media</h3>
              <div className="flex gap-4">
                {/* EDYTUJ: Link do Instagrama */}
                <a
                  href="https://www.instagram.com/favmotors.com_pl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-500 rounded-xl flex items-center justify-center hover:scale-110 transition-smooth shadow-elegant"
                >
                  <Instagram className="w-8 h-8 text-white" />
                </a>
                
                {/* EDYTUJ: Link do Facebooka */}
                <a
                  href="https://www.facebook.com/profile.php?id=61563873141123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center hover:scale-110 transition-smooth shadow-elegant"
                >
                  <Facebook className="w-8 h-8 text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Delivery Options */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">Opcje dostawy</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Package className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold mb-1 text-white">InPost Paczkomat</div>
                  <div className="text-sm text-white/70">Szybka i wygodna dostawa do wybranego paczkomatu</div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Truck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold mb-1 text-white">Kurier (pobranie)</div>
                  <div className="text-sm text-white/70">Dostawa kurierem z możliwością płatności przy odbiorze</div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold mb-1 text-white">Odbiór osobisty</div>
                  <div className="text-sm text-white/70">Odbierz zamówienie osobiście w Krakowie</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-4 lg:px-8 mt-20 pt-8 border-t border-white/10">
        <div className="text-center text-sm text-white/60">
          <p>© 2025 FAVMOTORS. Wszystkie prawa zastrzeżone.</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
