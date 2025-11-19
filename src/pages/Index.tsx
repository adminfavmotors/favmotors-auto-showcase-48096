import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PromotionsSection from '@/components/PromotionsSection';
import OrderStepsSection from '@/components/OrderStepsSection';
import ProductsSection from '@/components/ProductsSection';
import BlogSection from '@/components/BlogSection';
import FAQSection from '@/components/FAQSection';
import BrandTicker from '@/components/BrandTicker';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main role="main">
        <HeroSection />
        <PromotionsSection />
        <OrderStepsSection />
        <ProductsSection />
        <BlogSection />
        <FAQSection />
        <BrandTicker />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
