import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';
import { updateQuantity, removeFromCart } from '@/store/slices/cartSlice';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { FiMinus, FiPlus, FiTrash2, FiShoppingBag } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { items, total, itemCount } = useSelector((state: RootState) => state.cart);
  const [promoCode, setPromoCode] = useState('');

  const handleQuantityUpdate = (id: string, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const handleRemoveItem = (id: string) => {
    dispatch(removeFromCart(id));
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-md mx-auto">
            <FiShoppingBag className="w-24 h-24 text-muted-foreground mx-auto mb-6" />
            <h1 className="font-display text-3xl font-bold text-primary mb-4">
              Your Cart is Empty
            </h1>
            <p className="text-muted-foreground mb-8">
              Looks like you haven't added any fresh produce to your cart yet. 
              Start shopping for organic goodies!
            </p>
            <Button
              size="lg"
              onClick={() => navigate('/products')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            >
              Start Shopping
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-primary mb-2">
            Shopping Cart
          </h1>
          <p className="text-muted-foreground">
            {itemCount} item{itemCount !== 1 ? 's' : ''} in your cart
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <Card key={item.id} className="card-gradient">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    {/* Product Image */}
                    <div className="w-20 h-20 bg-gradient-to-br from-secondary to-accent/20 rounded-lg flex items-center justify-center text-3xl flex-shrink-0">
                      {item.image}
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-primary mb-1">{item.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">by {item.seller}</p>
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold text-primary">${item.price}</span>
                        <span className="text-sm text-muted-foreground">{item.unit}</span>
                      </div>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleQuantityUpdate(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          <FiMinus size={14} />
                        </Button>
                        <span className="w-12 text-center font-medium">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleQuantityUpdate(item.id, item.quantity + 1)}
                        >
                          <FiPlus size={14} />
                        </Button>
                      </div>

                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleRemoveItem(item.id)}
                        className="text-destructive hover:text-destructive/80 hover:bg-destructive/10"
                      >
                        <FiTrash2 size={16} />
                      </Button>
                    </div>

                    {/* Item Total */}
                    <div className="text-right">
                      <div className="font-semibold text-primary">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <Card className="card-gradient sticky top-24">
              <CardContent className="p-6">
                <h2 className="font-display text-xl font-semibold text-primary mb-6">
                  Order Summary
                </h2>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Subtotal ({itemCount} items)</span>
                    <span className="font-medium">${total.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="font-medium text-fresh">Free</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span className="font-medium">${(total * 0.08).toFixed(2)}</span>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span className="text-primary">${(total * 1.08).toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {/* Promo Code */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Promo Code</label>
                    <div className="flex space-x-2">
                      <Input
                        placeholder="Enter code"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                      />
                      <Button variant="outline" size="sm">
                        Apply
                      </Button>
                    </div>
                  </div>

                  <Button
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                    onClick={() => {
                      // Checkout logic would go here
                      alert('Checkout functionality coming soon!');
                    }}
                  >
                    Proceed to Checkout
                  </Button>
                </div>

                <div className="mt-4 text-center">
                  <Button
                    variant="ghost"
                    onClick={() => navigate('/products')}
                    className="text-primary hover:text-primary/80"
                  >
                    Continue Shopping
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;