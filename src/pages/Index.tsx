
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import StatsSection from '@/components/StatsSection';
import { Globe, Smartphone, Database, Settings, Code, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  const services = [
    {
      icon: <Globe className="w-8 h-8 text-white" />,
      title: "Web Applications",
      description: "Modern, responsive web applications built with cutting-edge technologies and best practices.",
      features: ["React & Next.js", "Progressive Web Apps", "E-commerce Solutions"]
    },
    {
      icon: <Smartphone className="w-8 h-8 text-white" />,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps designed for exceptional user experiences.",
      features: ["React Native", "iOS & Android Native", "Cross-platform Solutions"]
    },
    {
      icon: <Database className="w-8 h-8 text-white" />,
      title: "CRM Systems",
      description: "Customer relationship management solutions to streamline and optimize your business.",
      features: ["Custom CRM Development", "Lead Management", "Customer Analytics"]
    },
    {
      icon: <Settings className="w-8 h-8 text-white" />,
      title: "ERP Solutions",
      description: "Enterprise resource planning systems for efficient and integrated business management.",
      features: ["Business Process Automation", "Inventory Management", "Financial Management"]
    },
    {
      icon: <Code className="w-8 h-8 text-white" />,
      title: "Custom Software",
      description: "Tailored software solutions designed specifically for your unique business requirements.",
      features: ["Custom Applications", "Legacy Modernization", "API Development"]
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Consulting & Support",
      description: "Expert consulting and comprehensive ongoing support for all your technology initiatives.",
      features: ["Technology Consulting", "System Architecture", "24/7 Support"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      
      {/* Stats Section */}
      <StatsSection />
      
      {/* Services Section - Enhanced Premium Design */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Our Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-bold">
              We provide comprehensive software development services designed to help your business 
              thrive and succeed in today's competitive digital landscape.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="animate-fade-in" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/services">
              <Button size="lg" className="bg-gradient-vibrant hover:opacity-90 text-white shadow-xl px-10 py-4 text-lg font-bold">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-16 bg-gradient-vibrant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-orange-100 mb-10 max-w-3xl mx-auto leading-relaxed font-bold">
            Let's discuss your project and discover how we can help you achieve your goals 
            with innovative, cutting-edge technology solutions that drive results.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="outline" className="bg-white text-orange-600 hover:bg-orange-50 border-white font-bold px-10 py-4 text-lg">
                Get Started Today
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 font-bold px-10 py-4 text-lg">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
