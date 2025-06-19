
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Plug, Home, RefreshCw } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">
      <Navigation />
      
      {/* 404 Content */}
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* Animated Background Elements */}
          <div className="absolute top-20 left-10 w-16 h-16 bg-gradient-vibrant rounded-full opacity-20 animate-float"></div>
          <div className="absolute top-40 right-20 w-12 h-12 bg-gradient-vibrant-soft rounded-full opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-40 left-20 w-20 h-20 bg-gradient-warm rounded-full opacity-25 animate-float" style={{ animationDelay: '4s' }}></div>

          {/* Disconnect Illustration */}
          <div className="relative mb-8 animate-fade-in">
            <div className="flex items-center justify-center space-x-8 mb-6">
              {/* Left Plug */}
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-vibrant rounded-2xl flex items-center justify-center shadow-xl transform rotate-12 animate-float">
                  <Plug size={40} className="text-white" />
                </div>
                <div className="absolute -right-6 top-1/2 transform -translate-y-1/2">
                  <div className="w-12 h-1 bg-gradient-vibrant rounded-full opacity-60"></div>
                </div>
              </div>

              {/* Disconnection Gap */}
              <div className="flex flex-col items-center space-y-2">
                <div className="w-8 h-1 bg-gray-300 rounded-full"></div>
                <div className="w-6 h-1 bg-gray-300 rounded-full"></div>
                <div className="w-4 h-1 bg-gray-300 rounded-full"></div>
              </div>

              {/* Right Plug */}
              <div className="relative">
                <div className="absolute -left-6 top-1/2 transform -translate-y-1/2">
                  <div className="w-12 h-1 bg-gray-300 rounded-full opacity-60"></div>
                </div>
                <div className="w-24 h-24 bg-gray-300 rounded-2xl flex items-center justify-center shadow-lg transform -rotate-12 animate-float" style={{ animationDelay: '1s' }}>
                  <Plug size={40} className="text-gray-500" />
                </div>
              </div>
            </div>

            {/* Sparks Effect */}
            <div className="absolute top-12 left-1/2 transform -translate-x-1/2">
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
            </div>
            <div className="absolute top-16 left-1/2 transform -translate-x-1/2 translate-x-4">
              <div className="w-1 h-1 bg-orange-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>

          {/* 404 Text */}
          <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-8xl md:text-9xl font-bold mb-4">
              <span className="gradient-text">404</span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Connection Lost!
            </h2>
            <p className="text-xl text-gray-600 mb-2 font-medium">
              Oops! The page you're looking for seems to be unplugged.
            </p>
            <p className="text-lg text-gray-500">
              Don't worry, let's get you reconnected to the right place.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Link to="/">
              <Button 
                size="lg" 
                className="bg-gradient-vibrant hover:opacity-90 text-white shadow-xl text-lg px-8 py-4 font-bold group"
              >
                <Home size={20} className="mr-2 group-hover:scale-110 transition-transform" />
                Back to Home
              </Button>
            </Link>
            
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => window.location.reload()}
              className="border-2 border-orange-600 text-orange-600 hover:bg-orange-50 hover:text-orange-700 text-lg px-8 py-4 font-bold transition-all duration-300 group"
            >
              <RefreshCw size={20} className="mr-2 group-hover:rotate-180 transition-transform duration-500" />
              Try Again
            </Button>
          </div>

          {/* Additional Help Text */}
          <div className="mt-12 p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-orange-100 shadow-lg animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <p className="text-gray-700 font-medium">
              Still having trouble? 
              <Link to="/contact" className="text-orange-600 hover:text-orange-700 font-bold ml-1 underline hover:no-underline transition-all">
                Contact our support team
              </Link>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
