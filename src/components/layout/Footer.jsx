import { Link } from 'react-router-dom';
import { FiFacebook, FiTwitter, FiInstagram, FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 font-display font-bold text-xl">
              <div className="w-8 h-8 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground text-sm font-bold">GR</span>
              </div>
              <span>Green Roots</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Connecting communities with fresh, sustainable, and locally-sourced organic produce.
            </p>
            <div className="flex space-x-4">
              <FiFacebook className="w-5 h-5 hover:text-accent cursor-pointer transition-colors" />
              <FiTwitter className="w-5 h-5 hover:text-accent cursor-pointer transition-colors" />
              <FiInstagram className="w-5 h-5 hover:text-accent cursor-pointer transition-colors" />
              <FiMail className="w-5 h-5 hover:text-accent cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <Link to="/" className="block hover:text-accent transition-colors">
                Home
              </Link>
              <Link to="/products" className="block hover:text-accent transition-colors">
                Products
              </Link>
              <Link to="/categories" className="block hover:text-accent transition-colors">
                Categories
              </Link>
              <Link to="/about" className="block hover:text-accent transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="block hover:text-accent transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <div className="space-y-2 text-sm">
              <Link to="/products?category=fruits" className="block hover:text-accent transition-colors">
                Fresh Fruits
              </Link>
              <Link to="/products?category=vegetables" className="block hover:text-accent transition-colors">
                Vegetables
              </Link>
              <Link to="/products?category=grains" className="block hover:text-accent transition-colors">
                Grains & Cereals
              </Link>
              <Link to="/products?category=organic-products" className="block hover:text-accent transition-colors">
                Organic Products
              </Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <div className="space-y-2 text-sm">
              <Link to="/help" className="block hover:text-accent transition-colors">
                Help Center
              </Link>
              <Link to="/shipping" className="block hover:text-accent transition-colors">
                Shipping Info
              </Link>
              <Link to="/returns" className="block hover:text-accent transition-colors">
                Returns
              </Link>
              <Link to="/privacy" className="block hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="block hover:text-accent transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Green Roots Mart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;