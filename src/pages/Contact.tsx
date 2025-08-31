import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Mock form submission
    setTimeout(() => {
      setIsLoading(false);
      alert('Thank you for your message! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We'd love to hear from you! Whether you have questions about our products, 
              want to become a seller, or need support, we're here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="card-gradient shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FiMail className="text-primary" />
                    <span>Email Us</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">General inquiries</p>
                  <p className="font-medium">hello@greenroots.com</p>
                  <p className="text-muted-foreground mb-2 mt-3">Support</p>
                  <p className="font-medium">support@greenroots.com</p>
                </CardContent>
              </Card>

              <Card className="card-gradient shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FiPhone className="text-primary" />
                    <span>Call Us</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">Customer Service</p>
                  <p className="font-medium">+1 (555) 123-4567</p>
                  <p className="text-muted-foreground mb-2 mt-3">Seller Support</p>
                  <p className="font-medium">+1 (555) 987-6543</p>
                </CardContent>
              </Card>

              <Card className="card-gradient shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FiMapPin className="text-primary" />
                    <span>Visit Us</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium mb-1">Green Roots HQ</p>
                  <p className="text-muted-foreground">
                    123 Sustainable Street<br />
                    Organic Valley, CA 94102<br />
                    United States
                  </p>
                </CardContent>
              </Card>

              <Card className="card-gradient shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FiClock className="text-primary" />
                    <span>Business Hours</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Saturday</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">
                    * All times in Pacific Standard Time
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="card-gradient shadow-medium">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="What is this regarding?"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us more about your inquiry..."
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                      disabled={isLoading}
                    >
                      {isLoading ? 'Sending Message...' : 'Send Message'}
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      * Required fields. We typically respond within 24 hours.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <h2 className="font-display text-3xl font-bold text-primary text-center mb-8">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="card-gradient">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg text-primary mb-2">
                    How do I become a seller?
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Simply contact us through this form or email sellers@greenroots.com. 
                    We'll guide you through the onboarding process for farmers and organic stores.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-gradient">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg text-primary mb-2">
                    What are your delivery areas?
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    We currently deliver to most major cities on the West Coast. 
                    Enter your ZIP code during checkout to see if we deliver to your area.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-gradient">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg text-primary mb-2">
                    Are all products certified organic?
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    We work with both certified organic producers and farmers who use sustainable, 
                    pesticide-free practices. Product pages clearly indicate certification status.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-gradient">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg text-primary mb-2">
                    What's your return policy?
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    We guarantee the freshness of our produce. If you're not satisfied, 
                    contact us within 24 hours of delivery for a full refund or replacement.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;