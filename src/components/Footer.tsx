
import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-sunset rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <span className="text-2xl font-bold">Boddapati</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Professional software development company specializing in web applications, 
              mobile apps, CRM systems, ERP solutions, and custom software development.
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:info@boddapati.com" 
                className="flex items-center space-x-2 text-gray-300 hover:text-orange-400 transition-colors"
              >
                <Mail size={16} />
                <span>info@boddapati.com</span>
              </a>
              <a 
                href="tel:+1-555-BODDAPATI" 
                className="flex items-center space-x-2 text-gray-300 hover:text-orange-400 transition-colors"
              >
                <Phone size={16} />
                <span>+1-555-BODDAPATI</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-orange-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-300">Web Applications</span>
              </li>
              <li>
                <span className="text-gray-300">Mobile Apps</span>
              </li>
              <li>
                <span className="text-gray-300">CRM Systems</span>
              </li>
              <li>
                <span className="text-gray-300">ERP Solutions</span>
              </li>
              <li>
                <span className="text-gray-300">Custom Software</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Boddapati. All rights reserved. Built with excellence and innovation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
