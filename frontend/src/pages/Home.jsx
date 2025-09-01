import HeroSection from '@/components/home/HeroSection';
import CategoriesSection from '@/components/home/CategoriesSection';
import FeaturedProducts from '@/components/home/FeaturedProducts';

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CategoriesSection />
      <FeaturedProducts />
      
      {/* Additional Section - Why Choose Us */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 animate-slide-up">
            Why Choose D-Root organics?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="font-semibold text-xl mb-2">100% Organic</h3>
              <p className="text-primary-foreground/80">
                All our products are certified organic and sustainably grown
              </p>
            </div>
            
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="font-semibold text-xl mb-2">Fast Delivery</h3>
              <p className="text-primary-foreground/80">
                Fresh produce delivered within 24 hours of harvest
              </p>
            </div>
            
            <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="font-semibold text-xl mb-2">Support Local</h3>
              <p className="text-primary-foreground/80">
                Direct connection with local farmers and organic stores
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;