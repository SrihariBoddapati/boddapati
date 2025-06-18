
import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-vibrant rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <span className="text-2xl font-bold">Boddapati</span>
            </div>
          </div>

          {/* Contact Info - Center */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <a 
              href="mailto:info@boddapati.com" 
              className="flex items-center space-x-2 text-gray-300 hover:text-orange-400 transition-colors group"
            >
              <Mail size={18} className="group-hover:scale-110 transition-transform" />
              <span className="font-bold">info@boddapati.com</span>
            </a>
            <a 
              href="tel:+1-555-BODDAPATI" 
              className="flex items-center space-x-2 text-gray-300 hover:text-orange-400 transition-colors group"
            >
              <Phone size={18} className="group-hover:scale-110 transition-transform" />
              <span className="font-bold">+1-555-BODDAPATI</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-orange-400 transition-colors font-bold">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-orange-400 transition-colors font-bold">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-300 hover:text-orange-400 transition-colors font-bold">
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright - Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 font-bold">
            © {new Date().getFullYear()} Boddapati. All rights reserved. Built with excellence and innovation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
