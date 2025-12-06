import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'O nas', href: '#o-nas' },
    { label: 'Nasze promocje', href: '#promocje' },
    { label: 'Jak złożyć zamówienie', href: '#zamowienie' },
    { label: 'Nasze propozycje', href: '#propozycje' },
    { label: 'Kontakt', href: '#kontakt' },
  ];

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    
    if (location.pathname === '/') {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-secondary/95 backdrop-blur-md shadow-lg' 
          : 'bg-secondary'
      }`}
      style={{ 
        backgroundColor: isScrolled ? 'hsl(220 35% 20% / 0.97)' : 'hsl(220 35% 20%)',
      }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gpu-fix">
            <h1 className="text-2xl lg:text-3xl font-bold tracking-tight stable-text">
              <span className="text-white">FAV</span>
              <span className="text-primary">MOTORS</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-medium text-white/90 hover:text-primary transition-fast relative group gpu-fix font-stable"
              >
                <span className="stable-text">{item.label}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-primary transition-fast gpu-fix"
            aria-label={isMobileMenuOpen ? 'Zamknij menu' : 'Otwórz menu'}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav 
            className="lg:hidden py-4 border-t border-white/20"
            style={{ backgroundColor: 'hsl(220 35% 20%)' }}
          >
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-3 text-sm font-medium text-white/90 hover:text-primary hover:bg-white/10 transition-fast gpu-fix font-stable"
              >
                <span className="stable-text">{item.label}</span>
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
