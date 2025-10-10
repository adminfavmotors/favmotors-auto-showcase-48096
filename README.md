# FAVMOTORS - Sklep z Częściami Samochodowymi Online

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite)](https://vitejs.dev/)

> Profesjonalna platforma e-commerce dla branży motoryzacyjnej. Nowoczesny, responsywny i zoptymalizowany pod kątem wydajności oraz SEO.

## 📋 Spis Treści

- [O Projekcie](#o-projekcie)
- [Funkcjonalności](#funkcjonalności)
- [Technologie](#technologie)
- [Struktura Projektu](#struktura-projektu)
- [Instalacja](#instalacja)
- [Konfiguracja](#konfiguracja)
- [Uruchomienie](#uruchomienie)
- [Deployment](#deployment)
- [SEO i Optymalizacja](#seo-i-optymalizacja)
- [Bezpieczeństwo](#bezpieczeństwo)
- [Wytyczne dla Programistów](#wytyczne-dla-programistów)
- [Git Workflow](#git-workflow)
- [Wsparcie](#wsparcie)

## 🚀 O Projekcie

FAVMOTORS to nowoczesna platforma e-commerce stworzona dla sklepu z częściami samochodowymi. Projekt charakteryzuje się:

- **Responsywnym designem** - pełna optymalizacja dla urządzeń mobilnych, tabletów i desktopów
- **Wysoką wydajnością** - zoptymalizowane obrazy, lazy loading, code splitting
- **SEO-friendly** - structured data, meta tags, sitemap
- **Bezpieczeństwem** - Content Security Policy, XSS protection, HTTPS
- **Accessibility** - zgodność z WCAG 2.1 AA

## ✨ Funkcjonalności

### Dla Użytkowników

- 🏠 **Strona Główna** - hero section z najważniejszymi informacjami
- 🎯 **Sekcja Promocji** - dynamiczny carousel z aktualnymi ofertami
- 📦 **Kroki Zamówienia** - przejrzysty proces zakupowy
- 🛍️ **Produkty** - karta produktów z obrazami i cenami
- 📞 **Kontakt** - kompletne informacje kontaktowe i opcje dostawy
- 🍪 **Cookie Consent** - zgodność z RODO/GDPR
- 📱 **Social Media** - integracja z Instagram i Facebook

### Dla Administratorów

- 🔄 **Łatwa aktualizacja treści** - komponenty z oznaczonymi sekcjami do edycji
- 📊 **Analityka** - przygotowane do integracji z Google Analytics
- 🔍 **SEO Dashboard** - structured data dla lepszej widoczności

## 🛠️ Technologie

### Core Stack

```json
{
  "frontend": "React 18.3.1",
  "language": "TypeScript 5.x",
  "build": "Vite 5.x",
  "routing": "React Router v6",
  "styling": "Tailwind CSS 3.x"
}
```

### Biblioteki UI

- **shadcn/ui** - komponenty UI oparte na Radix UI
- **Lucide React** - zestaw ikon
- **Embla Carousel** - karuzele produktów
- **React Hook Form** - zarządzanie formularzami
- **Sonner** - notyfikacje toast

### Developer Tools

- **ESLint** - linting kodu
- **TypeScript** - type checking
- **PostCSS** - przetwarzanie CSS

## 📁 Struktura Projektu

```
favmotors/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions - automatyczny deployment
├── public/
│   ├── robots.txt              # Konfiguracja crawlerów
│   ├── sitemap.xml             # Mapa strony dla SEO
│   └── CNAME                   # Domena niestandardowa
├── src/
│   ├── assets/                 # Obrazy i statyczne zasoby
│   │   ├── hero-bg.jpg
│   │   ├── product-*.jpg
│   │   └── promo-*.jpg
│   ├── components/
│   │   ├── ui/                 # Komponenty shadcn/ui
│   │   ├── Header.tsx          # Główna nawigacja
│   │   ├── HeroSection.tsx     # Sekcja hero
│   │   ├── PromotionsSection.tsx
│   │   ├── OrderStepsSection.tsx
│   │   ├── ProductsSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── CookieConsent.tsx
│   │   └── ScrollToTop.tsx
│   ├── hooks/                  # Custom React hooks
│   ├── lib/
│   │   └── utils.ts            # Funkcje pomocnicze
│   ├── pages/
│   │   ├── Index.tsx           # Strona główna
│   │   ├── CategoryPage.tsx
│   │   ├── PopularProductsPage.tsx
│   │   ├── RequestPage.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx                 # Root component
│   ├── index.css               # Design system & style tokens
│   └── main.tsx                # Entry point
├── index.html                  # HTML template z SEO meta tags
├── tailwind.config.ts          # Konfiguracja Tailwind
├── vite.config.ts              # Konfiguracja Vite
├── tsconfig.json               # Konfiguracja TypeScript
├── package.json                # Dependencies
└── README.md                   # Dokumentacja
```

## 🔧 Instalacja

### Wymagania Systemowe

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0 lub **yarn** >= 1.22.0
- **Git** >= 2.0.0

### Kroki Instalacji

1. **Klonowanie repozytorium**

```bash
git clone https://github.com/your-username/favmotors.git
cd favmotors
```

2. **Instalacja zależności**

```bash
npm install
# lub
yarn install
```

3. **Weryfikacja instalacji**

```bash
npm run dev
```

Aplikacja powinna być dostępna pod adresem `http://localhost:8080`

## ⚙️ Konfiguracja

### Zmienne Środowiskowe

Utwórz plik `.env.local` w głównym katalogu:

```env
# Podstawowa konfiguracja
VITE_APP_NAME=FAVMOTORS
VITE_APP_URL=https://favmotors.pl

# Google Analytics (opcjonalnie)
VITE_GA_TRACKING_ID=UA-XXXXXXXXX-X

# Social Media Links
VITE_INSTAGRAM_URL=https://instagram.com/favmotors
VITE_FACEBOOK_URL=https://facebook.com/favmotors
```

### Konfiguracja SEO

Edytuj `index.html` aby zaktualizować:

- Meta title i description
- Open Graph tags
- Structured data (JSON-LD)
- Canonical URLs

### Konfiguracja Design System

Design system znajduje się w `src/index.css`:

```css
:root {
  --background: 220 15% 96%;          /* Jasny niebieski-szary */
  --foreground: 220 25% 15%;          /* Ciemny niebieski tekst */
  --primary: 25 95% 53%;              /* Pomarańczowy akcent */
  --secondary: 220 35% 25%;           /* Ciemny niebieski */
  /* ... więcej tokenów */
}
```

## 🚀 Uruchomienie

### Development Mode

```bash
npm run dev
```

Aplikacja będzie dostępna na `http://localhost:8080` z hot module replacement.

### Production Build

```bash
npm run build
```

Build zostanie wygenerowany w katalogu `dist/`.

### Preview Production Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## 📦 Deployment

### GitHub Pages (Automatyczny)

Projekt jest skonfigurowany do automatycznego deploymentu na GitHub Pages przez GitHub Actions.

**Workflow:**

1. Push do brancha `main`
2. GitHub Actions automatycznie buduje projekt
3. Deploy na GitHub Pages

**Konfiguracja:**

- Workflow: `.github/workflows/deploy.yml`
- Branch: `gh-pages` (tworzone automatycznie)
- URL: `https://your-username.github.io/favmotors/`

### Domena Niestandardowa

1. Dodaj plik `public/CNAME` z Twoją domeną:
```
favmotors.pl
```

2. Skonfiguruj DNS u dostawcy domeny:
```
Type: A
Host: @
Value: 185.199.108.153
       185.199.109.153
       185.199.110.153
       185.199.111.153

Type: CNAME
Host: www
Value: your-username.github.io
```

3. W ustawieniach repozytorium GitHub: Settings → Pages → Custom domain

### Inne Platformy

#### Vercel

```bash
npm install -g vercel
vercel
```

#### Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod
```

## 🔍 SEO i Optymalizacja

### Implemented SEO Features

#### 1. Meta Tags
- ✅ Title tags (< 60 znaków)
- ✅ Meta descriptions (< 160 znaków)
- ✅ Canonical URLs
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ Language tags (lang="pl")

#### 2. Structured Data (JSON-LD)
- ✅ Organization schema
- ✅ WebSite schema
- ✅ LocalBusiness schema

#### 3. Technical SEO
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Semantic HTML5
- ✅ Mobile-friendly design
- ✅ Fast loading times

#### 4. Performance Optimization
- ✅ Image optimization
- ✅ Lazy loading
- ✅ Code splitting
- ✅ Minification
- ✅ Gzip compression

### SEO Best Practices

**Obrazy:**
```tsx
<img 
  src="product.jpg" 
  alt="Tarcze hamulcowe dla BMW E46" 
  loading="lazy"
  width="300"
  height="200"
/>
```

**Internal Linking:**
```tsx
<a href="/#kontakt" className="story-link">
  Skontaktuj się z nami
</a>
```

**Headers:**
- H1 - jeden na stronę, główny keyword
- H2-H6 - hierarchia treści

## 🔒 Bezpieczeństwo

### Implemented Security Features

#### 1. Content Security Policy (CSP)
```html
<meta http-equiv="Content-Security-Policy" 
  content="default-src 'self'; script-src 'self' 'unsafe-inline';">
```

#### 2. HTTP Security Headers
- ✅ X-Content-Type-Options: nosniff
- ✅ X-Frame-Options: SAMEORIGIN
- ✅ Permissions-Policy

#### 3. Input Validation
- Wszystkie formularze używają React Hook Form + Zod
- Sanityzacja danych użytkownika
- CSRF protection (dla przyszłych form)

#### 4. Dependencies
```bash
# Regularnie aktualizuj zależności
npm audit
npm audit fix
```

### Security Checklist

- [ ] HTTPS włączony
- [ ] CSP skonfigurowany
- [ ] Dependencies aktualne
- [ ] No sensitive data in code
- [ ] Environment variables zabezpieczone
- [ ] Rate limiting (dla API)
- [ ] Input validation
- [ ] XSS protection

## 👨‍💻 Wytyczne dla Programistów

### Code Style

**TypeScript:**
```typescript
// ✅ DOBRZE
interface Product {
  id: string;
  name: string;
  price: number;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return <div>{product.name}</div>;
};

// ❌ ŹLE
function productCard(product) {
  return <div>{product.name}</div>;
}
```

**Tailwind CSS:**
```tsx
// ✅ DOBRZE - używaj design tokens
<button className="bg-primary text-white hover:bg-primary/90">

// ❌ ŹLE - nie używaj bezpośrednich kolorów
<button className="bg-orange-500 text-white">
```

### Component Guidelines

1. **Single Responsibility** - jeden komponent = jedna odpowiedzialność
2. **Props Interface** - zawsze definiuj typy dla props
3. **Accessibility** - używaj semantycznych tagów HTML
4. **Performance** - używaj React.memo() dla drogich komponentów

### Naming Conventions

- **Komponenty:** PascalCase (`ProductCard.tsx`)
- **Utility functions:** camelCase (`formatPrice.ts`)
- **CSS classes:** kebab-case lub Tailwind utility
- **Constants:** UPPER_SNAKE_CASE (`API_URL`)

### Commit Messages

Używamy [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: dodaj komponent ProductCard
fix: napraw bug w kalkulacji ceny
docs: aktualizuj README
style: popraw formatowanie Header
refactor: przenieś utility functions
test: dodaj testy dla ProductCard
chore: aktualizuj dependencies
```

## 🔄 Git Workflow

### Branch Strategy

```
main (production)
  ↓
develop (staging)
  ↓
feature/nazwa-funkcji
```

### Development Workflow

1. **Utwórz nowy branch z develop:**
```bash
git checkout develop
git pull origin develop
git checkout -b feature/nowa-funkcja
```

2. **Dokonaj zmian i commit:**
```bash
git add .
git commit -m "feat: dodaj nową funkcję"
```

3. **Push i utwórz Pull Request:**
```bash
git push origin feature/nowa-funkcja
```

4. **Code Review:**
   - Minimum 1 approval required
   - All checks must pass
   - No merge conflicts

5. **Merge do develop:**
```bash
git checkout develop
git merge feature/nowa-funkcja
git push origin develop
```

6. **Release do main:**
```bash
git checkout main
git merge develop
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin main --tags
```

### Protected Branches

**main:**
- Requires pull request
- Requires 1 approval
- Requires passing checks
- No direct commits

**develop:**
- Requires pull request
- Requires passing checks

### Pull Request Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] No new warnings
- [ ] Tests added/updated
```

## 📊 Monitoring i Analytics

### Google Analytics Setup

1. Dodaj tracking ID do `.env.local`
2. Zainstaluj gtag:

```bash
npm install @types/gtag.js
```

3. Dodaj do `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-XXXXXXXXX-X"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-XXXXXXXXX-X');
</script>
```

### Performance Monitoring

```bash
# Lighthouse CI
npm install -g @lhci/cli
lhci autorun
```

## 🐛 Troubleshooting

### Częste Problemy

**Problem:** Błąd przy `npm install`
```bash
# Rozwiązanie
rm -rf node_modules package-lock.json
npm install
```

**Problem:** Obrazy nie ładują się
```bash
# Sprawdź czy obrazy są w public/ lub src/assets/
# Dla public: użyj /image.jpg
# Dla assets: użyj import image from '@/assets/image.jpg'
```

**Problem:** Routing nie działa po deploy
```bash
# Dla GitHub Pages: używamy HashRouter
# Dla innych: zmień na BrowserRouter w App.tsx
```

## 📚 Zasoby

### Dokumentacja

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)
- [shadcn/ui](https://ui.shadcn.com/)

### Learning Resources

- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [Tailwind Components](https://tailwindui.com/components)
- [Web.dev Performance](https://web.dev/performance/)

## 🤝 Contributing

### How to Contribute

1. Fork repozytorium
2. Utwórz feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'feat: add AmazingFeature'`)
4. Push do branch (`git push origin feature/AmazingFeature`)
5. Otwórz Pull Request

### Contribution Guidelines

- Przestrzegaj code style projektu
- Dodaj testy dla nowych funkcji
- Zaktualizuj dokumentację
- Jedna funkcja = jeden PR

## 📄 License

Ten projekt jest objęty licencją MIT. Zobacz plik `LICENSE` dla szczegółów.

## 📞 Wsparcie

### Kontakt

- **Email:** kontakt@favmotors.pl
- **Telefon:** +48 123 456 789
- **Instagram:** [@favmotors](https://instagram.com/favmotors)
- **Facebook:** [FAVMOTORS](https://facebook.com/favmotors)

### Zgłaszanie Błędów

Używaj [GitHub Issues](https://github.com/your-username/favmotors/issues) do zgłaszania:

- 🐛 Bugs
- 💡 Feature requests
- 📝 Documentation improvements
- ❓ Questions

**Template:**
```markdown
**Describe the bug**
Clear description

**To Reproduce**
Steps to reproduce

**Expected behavior**
What should happen

**Screenshots**
If applicable

**Environment:**
- OS: [e.g. Windows 10]
- Browser: [e.g. Chrome 120]
- Version: [e.g. 1.0.0]
```

## 🎉 Acknowledgments

- Design inspiration: Modern automotive e-commerce
- UI Components: [shadcn/ui](https://ui.shadcn.com/)
- Icons: [Lucide](https://lucide.dev/)
- Fonts: [Google Fonts](https://fonts.google.com/)

---

**Made with ❤️ by FAVMOTORS Team**

**Version:** 1.0.0  
**Last Updated:** 2025-01-10  
**Status:** ✅ Production Ready
