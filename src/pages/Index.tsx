
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import { Globe, Smartphone, Database, Settings, Code, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  const services = [
    {
      icon: <Globe className="w-8 h-8 text-white" />,
      title: "Web Applications",
      description: "Modern, responsive web applications built with cutting-edge technologies.",
      features: ["React & Next.js", "Progressive Web Apps", "E-commerce Solutions"]
    },
    {
      icon: <Smartphone className="w-8 h-8 text-white" />,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps for iOS and Android.",
      features: ["React Native", "iOS & Android Native", "Cross-platform Solutions"]
    },
    {
      icon: <Database className="w-8 h-8 text-white" />,
      title: "CRM Systems",
      description: "Customer relationship management solutions to streamline your business.",
      features: ["Custom CRM Development", "Lead Management", "Customer Analytics"]
    },
    {
      icon: <Settings className="w-8 h-8 text-white" />,
      title: "ERP Solutions",
      description: "Enterprise resource planning systems for efficient business management.",
      features: ["Business Process Automation", "Inventory Management", "Financial Management"]
    },
    {
      icon: <Code className="w-8 h-8 text-white" />,
      title: "Custom Software",
      description: "Tailored software solutions designed specifically for your business needs.",
      features: ["Custom Applications", "Legacy Modernization", "API Development"]
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Consulting & Support",
      description: "Expert consulting and ongoing support for your technology initiatives.",
      features: ["Technology Consulting", "System Architecture", "24/7 Support"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      
      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Our Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive software development services to help your business 
              grow and succeed in the digital landscape.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/services">
              <Button size="lg" className="bg-gradient-sunset hover:opacity-90 text-white">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and see how we can help you achieve your goals 
            with innovative technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="outline" className="bg-white text-orange-600 hover:bg-orange-50 border-white">
                Get Started Today
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
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
