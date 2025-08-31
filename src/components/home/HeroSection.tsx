import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import heroImage from '@/assets/hero-organic.jpg';

const HeroSection = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Fresh organic produce" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Fresh from Farm
            <span className="block text-golden">to Your Table</span>
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Connect directly with local farmers and organic stores. 
            Discover fresh, sustainable produce delivered right to your door.
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Input
                  type="text"
                  placeholder="Search for fresh produce, grains, or organic products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-12 text-base bg-white/95 border-0 text-foreground placeholder:text-muted-foreground pr-12"
                />
                <FiSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              </div>
              <Button 
                type="submit" 
                size="lg" 
                className="h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              >
                Search
              </Button>
            </div>
          </form>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => navigate('/products')}
              className="h-12 px-8 bg-harvest hover:bg-harvest/90 text-white font-semibold shadow-medium"
            >
              Shop Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate('/about')}
              className="h-12 px-8 border-2 border-white text-white hover:bg-white hover:text-foreground font-semibold"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;