import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FiStar, FiShoppingCart, FiMinus, FiPlus, FiArrowLeft, FiHeart, FiShare2 } from 'react-icons/fi';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  // Mock product data
  const product = {
    id: '1',
    name: 'Organic Heirloom Tomatoes',
    price: 4.99,
    image: '🍅',
    category: 'vegetables',
    seller: { 
      name: 'Green Valley Farm', 
      type: 'farmer' as const, 
      location: 'California',
      established: '2015',
      certifications: ['USDA Organic', 'Non-GMO']
    },
    rating: 4.8,
    reviews: 156,
    unit: 'per lb',
    inStock: true,
    description: 'These beautiful heirloom tomatoes are grown using traditional organic farming methods. Each tomato is hand-picked at peak ripeness to ensure maximum flavor and nutritional value. Perfect for salads, sandwiches, or cooking.',
    nutritionalInfo: [
      { label: 'Calories', value: '18 per 100g' },
      { label: 'Vitamin C', value: '14mg' },
      { label: 'Potassium', value: '237mg' },
      { label: 'Fiber', value: '1.2g' }
    ],
    storage: 'Store at room temperature until ripe, then refrigerate for up to 1 week.',
    origin: 'Grown in Sonoma County, California using sustainable farming practices.',
  };

  const handleQuantityChange = (change: number) => {
    setQuantity(Math.max(1, quantity + change));
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6 text-primary hover:text-primary/80"
        >
          <FiArrowLeft className="mr-2" />
          Back to Products
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="aspect-square bg-gradient-to-br from-secondary to-accent/20 rounded-lg flex items-center justify-center text-[200px] shadow-soft">
              {product.image}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <Badge variant={product.seller.type === 'farmer' ? 'default' : 'secondary'}>
                  {product.seller.type === 'farmer' ? '🚜 Farm Direct' : '🏪 Store'}
                </Badge>
                <Badge variant="outline" className="text-fresh border-fresh">
                  ✓ Organic Certified
                </Badge>
              </div>
              
              <h1 className="font-display text-3xl md:text-4xl font-bold text-primary mb-2">
                {product.name}
              </h1>

              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center text-muted-foreground">
                  <FiStar className="w-5 h-5 fill-golden text-golden mr-1" />
                  <span className="font-medium">{product.rating}</span>
                  <span className="ml-1">({product.reviews} reviews)</span>
                </div>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground">📍 {product.seller.location}</span>
              </div>

              <div className="flex items-baseline space-x-2 mb-6">
                <span className="font-bold text-3xl text-primary">${product.price}</span>
                <span className="text-muted-foreground text-lg">{product.unit}</span>
              </div>

              <p className="text-muted-foreground text-lg mb-6">
                {product.description}
              </p>
            </div>

            {/* Seller Info */}
            <Card className="card-gradient">
              <CardContent className="p-4">
                <h3 className="font-semibold text-primary mb-2">Sold by {product.seller.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  🏛️ Est. {product.seller.established} • 📍 {product.seller.location}
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.seller.certifications.map((cert, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {cert}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Purchase Options */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="font-medium">Quantity:</span>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                  >
                    <FiMinus size={16} />
                  </Button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuantityChange(1)}
                  >
                    <FiPlus size={16} />
                  </Button>
                </div>
              </div>

              <div className="flex space-x-3">
                <Button
                  size="lg"
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                >
                  <FiShoppingCart className="mr-2" />
                  Add to Cart - ${(product.price * quantity).toFixed(2)}
                </Button>
                <Button variant="outline" size="lg">
                  <FiHeart size={20} />
                </Button>
                <Button variant="outline" size="lg">
                  <FiShare2 size={20} />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Tabs defaultValue="details" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>

          <TabsContent value="details" className="mt-6">
            <Card className="card-gradient">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-primary mb-3">Product Information</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Category:</span>
                        <span className="capitalize">{product.category}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Unit:</span>
                        <span>{product.unit}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Availability:</span>
                        <span className={product.inStock ? 'text-fresh' : 'text-destructive'}>
                          {product.inStock ? 'In Stock' : 'Out of Stock'}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-3">Storage & Origin</h3>
                    <div className="space-y-3 text-sm">
                      <div>
                        <span className="text-muted-foreground block mb-1">Storage:</span>
                        <p>{product.storage}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground block mb-1">Origin:</span>
                        <p>{product.origin}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="nutrition" className="mt-6">
            <Card className="card-gradient">
              <CardContent className="p-6">
                <h3 className="font-semibold text-primary mb-4">Nutritional Information</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {product.nutritionalInfo.map((item, index) => (
                    <div key={index} className="text-center p-4 bg-background rounded-lg">
                      <div className="font-semibold text-primary">{item.value}</div>
                      <div className="text-sm text-muted-foreground">{item.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="mt-6">
            <Card className="card-gradient">
              <CardContent className="p-6">
                <div className="text-center py-8">
                  <h3 className="font-semibold text-primary mb-2">Customer Reviews Coming Soon</h3>
                  <p className="text-muted-foreground">
                    Be the first to review this product and help other customers make informed decisions.
                  </p>
                  <Button variant="outline" className="mt-4">
                    Write a Review
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProductDetail;