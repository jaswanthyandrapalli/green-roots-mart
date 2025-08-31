import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-gradient text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            About Green Roots
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90 animate-slide-up">
            We're connecting communities with fresh, sustainable, and locally-sourced organic produce. 
            Building bridges between farmers, stores, and conscious consumers.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground">
              To create a sustainable food ecosystem that benefits farmers, supports local businesses, 
              and provides families access to the freshest, healthiest produce while caring for our planet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-gradient text-center shadow-soft">
              <CardContent className="p-8">
                <div className="text-5xl mb-4">🌱</div>
                <h3 className="font-display text-xl font-semibold text-primary mb-3">
                  Sustainable Agriculture
                </h3>
                <p className="text-muted-foreground">
                  Supporting farming practices that protect our environment and promote biodiversity 
                  for future generations.
                </p>
              </CardContent>
            </Card>

            <Card className="card-gradient text-center shadow-soft">
              <CardContent className="p-8">
                <div className="text-5xl mb-4">🤝</div>
                <h3 className="font-display text-xl font-semibold text-primary mb-3">
                  Community First
                </h3>
                <p className="text-muted-foreground">
                  Building strong relationships between local farmers, organic stores, and 
                  health-conscious consumers.
                </p>
              </CardContent>
            </Card>

            <Card className="card-gradient text-center shadow-soft">
              <CardContent className="p-8">
                <div className="text-5xl mb-4">🌍</div>
                <h3 className="font-display text-xl font-semibold text-primary mb-3">
                  Planet Positive
                </h3>
                <p className="text-muted-foreground">
                  Reducing food miles and supporting local ecosystems through direct 
                  farm-to-table connections.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Founded in 2024, Green Roots started with a simple idea: make it easier for 
                    people to access fresh, organic produce while supporting local farmers and 
                    sustainable agriculture.
                  </p>
                  <p>
                    We noticed that many consumers wanted to buy organic, locally-grown food, 
                    but faced barriers like limited access, high prices, and lack of connection 
                    to producers. Meanwhile, small-scale farmers struggled to reach customers 
                    directly.
                  </p>
                  <p>
                    Green Roots bridges this gap by creating a digital marketplace that connects 
                    farmers and organic stores directly with conscious consumers, ensuring fair 
                    prices, fresh produce, and sustainable practices.
                  </p>
                </div>
                <Button size="lg" className="mt-6 bg-primary hover:bg-primary/90">
                  Start Shopping
                </Button>
              </div>
              <div className="bg-gradient-to-br from-secondary to-accent/20 rounded-lg aspect-square flex items-center justify-center text-8xl">
                🌾
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              Our Values
            </h2>

            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="text-3xl">🌿</div>
                <div>
                  <h3 className="font-semibold text-xl text-primary mb-2">Transparency</h3>
                  <p className="text-muted-foreground">
                    We believe you have the right to know where your food comes from, how it's grown, 
                    and who grows it. Every product includes detailed information about its origin 
                    and production methods.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="text-3xl">⚖️</div>
                <div>
                  <h3 className="font-semibold text-xl text-primary mb-2">Fair Trade</h3>
                  <p className="text-muted-foreground">
                    We ensure fair compensation for farmers and producers, supporting sustainable 
                    livelihoods and ethical business practices throughout our supply chain.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="text-3xl">🏆</div>
                <div>
                  <h3 className="font-semibold text-xl text-primary mb-2">Quality</h3>
                  <p className="text-muted-foreground">
                    We maintain the highest standards for freshness, taste, and nutritional value. 
                    Every product is carefully curated and quality-checked before reaching your table.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="text-3xl">💚</div>
                <div>
                  <h3 className="font-semibold text-xl text-primary mb-2">Sustainability</h3>
                  <p className="text-muted-foreground">
                    From packaging to delivery, we prioritize environmentally friendly practices 
                    that minimize our carbon footprint and protect our planet's resources.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Join Our Community
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8">
            Whether you're a farmer, store owner, or conscious consumer, 
            there's a place for you in the Green Roots community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              Start Shopping
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Become a Seller
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;