import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { FiSearch, FiFilter, FiStar, FiShoppingCart } from 'react-icons/fi';

const Products = () => {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [categoryFilter, setCategoryFilter] = useState(searchParams.get('category') || '');
  const [sellerTypeFilter, setSellerTypeFilter] = useState('');
  const [sortBy, setSortBy] = useState('name');

  // Mock products data
  const mockProducts = [
    {
      id: '1',
      name: 'Organic Heirloom Tomatoes',
      price: 4.99,
      image: '🍅',
      category: 'vegetables',
      seller: { name: 'Green Valley Farm', type: 'farmer' as const, location: 'California' },
      rating: 4.8,
      reviews: 156,
      unit: 'per lb',
      inStock: true,
    },
    {
      id: '2',
      name: 'Fresh Spinach Bundle',
      price: 3.49,
      image: '🥬',
      category: 'vegetables',
      seller: { name: 'Organic Harvest Store', type: 'store' as const, location: 'Oregon' },
      rating: 4.9,
      reviews: 89,
      unit: 'per bunch',
      inStock: true,
    },
    {
      id: '3',
      name: 'Quinoa Ancient Grain',
      price: 8.99,
      image: '🌾',
      category: 'grains',
      seller: { name: 'Grain Masters Co.', type: 'store' as const, location: 'Colorado' },
      rating: 4.7,
      reviews: 234,
      unit: 'per 2lb bag',
      inStock: true,
    },
    {
      id: '4',
      name: 'Organic Honey',
      price: 12.99,
      image: '🍯',
      category: 'organic-products',
      seller: { name: 'Bee Happy Apiary', type: 'farmer' as const, location: 'Vermont' },
      rating: 5.0,
      reviews: 67,
      unit: 'per 16oz jar',
      inStock: true,
    },
    {
      id: '5',
      name: 'Fresh Blueberries',
      price: 6.99,
      image: '🫐',
      category: 'fruits',
      seller: { name: 'Berry Fields Farm', type: 'farmer' as const, location: 'Maine' },
      rating: 4.6,
      reviews: 178,
      unit: 'per pint',
      inStock: true,
    },
    {
      id: '6',
      name: 'Organic Carrots',
      price: 2.99,
      image: '🥕',
      category: 'vegetables',
      seller: { name: 'Root & Branch Farm', type: 'farmer' as const, location: 'Washington' },
      rating: 4.5,
      reviews: 203,
      unit: 'per lb',
      inStock: true,
    },
  ];

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
            Fresh Organic Products
          </h1>
          <p className="text-muted-foreground text-lg">
            Discover fresh, sustainable produce from local farmers and organic stores
          </p>
        </div>

        {/* Filters */}
        <div className="bg-card rounded-lg p-6 mb-8 shadow-soft">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-10"
              />
              <FiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            </div>

            {/* Category Filter */}
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger>
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fruits">Fruits</SelectItem>
                <SelectItem value="vegetables">Vegetables</SelectItem>
                <SelectItem value="grains">Grains</SelectItem>
                <SelectItem value="organic-products">Organic Products</SelectItem>
              </SelectContent>
            </Select>

            {/* Seller Type Filter */}
            <Select value={sellerTypeFilter} onValueChange={setSellerTypeFilter}>
              <SelectTrigger>
                <SelectValue placeholder="All Sellers" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="farmer">Farmers</SelectItem>
                <SelectItem value="store">Stores</SelectItem>
              </SelectContent>
            </Select>

            {/* Sort By */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Rating</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mockProducts.map((product) => (
            <Card 
              key={product.id}
              className="group cursor-pointer transition-all duration-300 hover:shadow-medium hover:-translate-y-1 border card-gradient overflow-hidden"
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

                  <p className="text-xs text-muted-foreground mb-3">
                    📍 {product.seller.location}
                  </p>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-bold text-lg text-primary">${product.price}</span>
                      <span className="text-sm text-muted-foreground ml-1">{product.unit}</span>
                    </div>
                    <Button
                      size="sm"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      <FiShoppingCart size={16} className="mr-1" />
                      Add
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Load More Products
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Products;