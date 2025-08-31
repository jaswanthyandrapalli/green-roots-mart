import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const categories = [
  {
    id: 'fruits',
    name: 'Fresh Fruits',
    description: 'Organic seasonal fruits from local orchards',
    icon: '🍎',
    color: 'from-red-100 to-orange-100',
  },
  {
    id: 'vegetables',
    name: 'Vegetables',
    description: 'Farm-fresh vegetables grown sustainably',
    icon: '🥬',
    color: 'from-green-100 to-emerald-100',
  },
  {
    id: 'grains',
    name: 'Grains & Cereals',
    description: 'Whole grains and ancient cereals',
    icon: '🌾',
    color: 'from-amber-100 to-yellow-100',
  },
  {
    id: 'organic-products',
    name: 'Organic Products',
    description: 'Certified organic and specialty items',
    icon: '🌱',
    color: 'from-green-100 to-teal-100',
  },
];

const CategoriesSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
            Shop by Category
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover fresh, organic produce across our carefully curated categories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card 
              key={category.id} 
              className="group cursor-pointer transition-all duration-300 hover:shadow-medium hover:-translate-y-1 border-0 card-gradient"
              onClick={() => navigate(`/products?category=${category.id}`)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="font-display font-semibold text-xl text-primary mb-2 group-hover:text-primary/80 transition-colors">
                  {category.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {category.description}
                </p>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="text-primary hover:text-primary/80 hover:bg-primary/5"
                >
                  Browse →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;