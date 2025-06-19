
import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-vibrant rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <span className="text-2xl font-bold">Boddapati</span>
            </div>
            <p className="text-gray-400 font-bold text-sm">
              Transforming ideas into digital reality with innovative software solutions.
            </p>
          </div>

          {/* Contact Info - Center */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-bold mb-2">Contact Info</h3>
            <div className="space-y-3">
              <a 
                href="mailto:support@boddapati.com" 
                className="flex items-start space-x-2 text-gray-300 hover:text-orange-400 transition-colors group"
              >
                <Mail size={18} className="group-hover:scale-110 transition-transform mt-0.5" />
                <div className="flex flex-col">
                  <span className="font-bold text-sm">Email</span>
                  <span className="text-sm">support@boddapati.com</span>
                </div>
              </a>
              <a 
                href="tel:+919966773214" 
                className="flex items-start space-x-2 text-gray-300 hover:text-orange-400 transition-colors group"
              >
                <Phone size={18} className="group-hover:scale-110 transition-transform mt-0.5" />
                <div className="flex flex-col">
                  <span className="font-bold text-sm">Phone</span>
                  <span className="text-sm">+91 9966773214</span>
                </div>
              </a>
            </div>
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
                <Link to="/services" className="text-gray-300 hover:text-orange-400 transition-colors font-bold">
                  Services
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
