import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FiUser, FiShoppingBag, FiHeart, FiSettings } from 'react-icons/fi';

const Profile = () => {
  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <div className="mb-8">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                <FiUser size={32} className="text-primary-foreground" />
              </div>
              <div>
                <h1 className="font-display text-3xl font-bold text-primary">John Doe</h1>
                <p className="text-muted-foreground">Customer since March 2024</p>
                <p className="text-sm text-muted-foreground">📍 San Francisco, CA</p>
              </div>
            </div>
          </div>

          {/* Profile Tabs */}
          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="orders">Orders</TabsTrigger>
              <TabsTrigger value="favorites">Favorites</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="card-gradient">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <FiUser size={20} />
                      <span>Personal Information</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input id="fullName" defaultValue="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" defaultValue="john.doe@email.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" defaultValue="+1 (555) 123-4567" />
                    </div>
                    <Button className="w-full">Update Information</Button>
                  </CardContent>
                </Card>

                <Card className="card-gradient">
                  <CardHeader>
                    <CardTitle>Delivery Address</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="address">Street Address</Label>
                      <Input id="address" defaultValue="123 Market Street" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input id="city" defaultValue="San Francisco" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="zip">ZIP Code</Label>
                        <Input id="zip" defaultValue="94102" />
                      </div>
                    </div>
                    <Button className="w-full">Update Address</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="orders" className="mt-6">
              <Card className="card-gradient">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FiShoppingBag size={20} />
                    <span>Order History</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <FiShoppingBag className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="font-semibold text-lg text-primary mb-2">No Orders Yet</h3>
                    <p className="text-muted-foreground mb-4">
                      You haven't placed any orders yet. Start shopping for fresh organic produce!
                    </p>
                    <Button>Start Shopping</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="favorites" className="mt-6">
              <Card className="card-gradient">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FiHeart size={20} />
                    <span>Favorite Products</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <FiHeart className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="font-semibold text-lg text-primary mb-2">No Favorites Yet</h3>
                    <p className="text-muted-foreground mb-4">
                      Save products to your favorites for quick access later.
                    </p>
                    <Button>Browse Products</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings" className="mt-6">
              <div className="space-y-6">
                <Card className="card-gradient">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <FiSettings size={20} />
                      <span>Notification Preferences</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Order Updates</div>
                        <div className="text-sm text-muted-foreground">
                          Get notified about your order status
                        </div>
                      </div>
                      <input type="checkbox" defaultChecked className="rounded" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">New Products</div>
                        <div className="text-sm text-muted-foreground">
                          Learn about new seasonal products
                        </div>
                      </div>
                      <input type="checkbox" defaultChecked className="rounded" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Promotions</div>
                        <div className="text-sm text-muted-foreground">
                          Special offers and discounts
                        </div>
                      </div>
                      <input type="checkbox" className="rounded" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-gradient">
                  <CardHeader>
                    <CardTitle>Account Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      Change Password
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      Download My Data
                    </Button>
                    <Button variant="destructive" className="w-full justify-start">
                      Delete Account
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Profile;