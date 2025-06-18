
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const scrollToGetStarted = () => {
    if (location.pathname === '/' || location.pathname === '/contact') {
      const element = document.getElementById('get-started-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else if (location.pathname === '/') {
        // If on home page but section not found, scroll to CTA section
        const ctaElement = document.querySelector('.bg-gradient-vibrant');
        if (ctaElement) {
          ctaElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      // Navigate to contact page if not on home page
      window.location.href = '/contact';
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-orange-100 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-vibrant rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-xl">B</span>
            </div>
            <span className="text-2xl font-bold gradient-text">Boddapati</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-base font-bold transition-colors duration-200 hover:text-orange-600 ${
                  isActive(item.path)
                    ? 'text-orange-600 border-b-2 border-orange-600 pb-1'
                    : 'text-gray-800'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button 
              onClick={scrollToGetStarted}
              className="bg-gradient-vibrant hover:opacity-90 text-white shadow-lg font-bold hover:shadow-xl transition-all duration-300"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-orange-100 py-4 animate-fade-in">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-4 py-2 text-base font-bold transition-colors duration-200 hover:text-orange-600 hover:bg-orange-50 ${
                  isActive(item.path) ? 'text-orange-600 bg-orange-50' : 'text-gray-800'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-4 py-2">
              <Button 
                onClick={() => {
                  setIsOpen(false);
                  scrollToGetStarted();
                }}
                className="w-full bg-gradient-vibrant hover:opacity-90 text-white font-bold"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
