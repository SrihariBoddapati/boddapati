
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [stats, setStats] = useState([
    { value: 0, target: 50, label: 'Projects Completed' },
    { value: 0, target: 5, label: 'Years Experience' },
    { value: 0, target: 40, label: 'Happy Clients' },
    { value: 0, target: 24, label: '24/7 Support' },
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStats(prevStats => 
        prevStats.map(stat => ({
          ...stat,
          value: stat.target
        }))
      );
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-100"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-vibrant rounded-full opacity-20 animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-vibrant-soft rounded-full opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-warm rounded-full opacity-25 animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="gradient-text">Transform Ideas</span>
            <br />
            <span className="text-gray-800">Into Digital Reality</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Boddapati delivers cutting-edge software solutions including web applications, 
            mobile apps, CRM systems, ERP solutions, and custom software development.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-vibrant hover:opacity-90 text-white shadow-xl text-lg px-8 py-4 font-semibold">
                Start Your Project
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button size="lg" variant="outline" className="border-2 border-orange-600 text-orange-600 hover:bg-orange-50 text-lg px-8 py-4 font-semibold">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>

        {/* Enhanced Stats with Animation */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center bounce-in"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2 count-up">
                {stat.value}{stat.label.includes('24/7') ? '/7' : '+'}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
