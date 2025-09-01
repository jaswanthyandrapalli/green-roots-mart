import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { FiStar, FiShoppingCart, FiHeart } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/store/slices/cartSlice';
import { useToast } from '@/hooks/use-toast';
import { useState, useEffect } from 'react';
import { productsAPI } from '@/services/api';

// Mock featured products
const featuredProducts = [
  {
    id: '1',
    name: 'Organic Heirloom Tomatoes',
    price: 4.99,
    image: '🍅',
    seller: { name: 'Green Valley Farm', type: 'farmer'},
    rating: 4.8,
    reviews: 156,
    unit: 'per lb',
  },
  {
    id: '2',
    name: 'Fresh Spinach Bundle',
    price: 3.49,
    image: '🥬',
    seller: { name: 'Organic Harvest Store', type: 'store' },
    rating: 4.9,
    reviews: 89,
    unit: 'per bunch',
  },
  {
    id: '3',
    name: 'Quinoa Ancient Grain',
    price: 8.99,
    image: '🌾',
    seller: { name: 'Grain Masters Co.', type: 'store' },
    rating: 4.7,
    reviews: 234,
    unit: 'per 2lb bag',
  },
  {
    id: '4',
    name: 'Organic Honey',
    price: 12.99,
    image: '🍯',
    seller: { name: 'Bee Happy Apiary', type: 'farmer' },
    rating: 5.0,
    reviews: 67,
    unit: 'per 16oz jar',
  },
];

const FeaturedProducts = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { toast } = useToast();
  const [wishlist, setWishlist] = useState(new Set());
  const [loadingStates, setLoadingStates] = useState(new Set());
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await productsAPI.getAllProducts();
        // Take first 4 products as featured
        setProducts(data.slice(0, 4));
      } catch (error) {
        console.error('Error fetching products:', error);
        // Fallback to mock data if API fails
        setProducts(featuredProducts);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    setLoadingStates(prev => new Set(prev).add(product.id));

    // Simulate API call delay
    setTimeout(() => {
      dispatch(addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        seller: product.seller,
        unit: product.unit,
      }));

      setLoadingStates(prev => {
        const newSet = new Set(prev);
        newSet.delete(product.id);
        return newSet;
      });

      toast({
        title: "Added to cart!",
        description: `${product.name} has been added to your cart.`,
      });
    }, 500);
  };

  const toggleWishlist = (e, productId) => {
    e.stopPropagation();
    setWishlist(prev => {
      const newWishlist = new Set(prev);
      if (newWishlist.has(productId)) {
        newWishlist.delete(productId);
        toast({
          title: "Removed from wishlist",
          description: "Product removed from your wishlist.",
        });
      } else {
        newWishlist.add(productId);
        toast({
          title: "Added to wishlist!",
          description: "Product added to your wishlist.",
        });
      }
      return newWishlist;
    });
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
            Featured Products
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hand-picked selections from our trusted farmers and organic stores
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {products.map((product, index) => (
            <Card 
              key={product.id}
              className="group cursor-pointer transition-all duration-300 hover:shadow-medium hover:-translate-y-1 border card-gradient overflow-hidden"
              onClick={() => navigate(`/product/${product.id}`)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="aspect-square bg-gradient-to-br from-secondary to-accent/20 flex items-center justify-center text-6xl">
                  {product.image}
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant={product.seller.type === 'farmer' ? 'default' : 'secondary'} className="text-xs">
                      {product.seller.type === 'farmer' ? '🚜 Farm Direct' : '🏪 Store'}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <FiStar className="w-4 h-4 fill-golden text-golden mr-1" />
                      <span>{product.rating}</span>
                      <span className="ml-1">({product.reviews})</span>
                    </div>
                  </div>

                  <h3 className="font-semibold text-primary mb-1 group-hover:text-primary/80 transition-colors line-clamp-2">
                    {product.name}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-2">
                    by {product.seller.name}
                  </p>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-bold text-lg text-primary">${product.price}</span>
                      <span className="text-sm text-muted-foreground ml-1">{product.unit}</span>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="ghost"
                        className={`p-2 ${wishlist.has(product.id) ? 'text-red-500' : 'text-muted-foreground hover:text-red-500'}`}
                        onClick={(e) => toggleWishlist(e, product.id)}
                      >
                        <FiHeart size={16} className={wishlist.has(product.id) ? 'fill-current' : ''} />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-primary hover:text-primary/80 hover:bg-primary/5 p-2"
                        onClick={(e) => handleAddToCart(e, product)}
                        disabled={loadingStates.has(product.id)}
                      >
                        {loadingStates.has(product.id) ? (
                          <div className="animate-spin rounded-full h-4 w-4 border-2 border-primary border-t-transparent" />
                        ) : (
                          <FiShoppingCart size={16} />
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            onClick={() => navigate('/products')}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;