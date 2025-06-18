
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import { Globe, Smartphone, Database, Settings, Code, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Globe className="w-8 h-8 text-white" />,
      title: "Web Applications",
      description: "Modern, responsive web applications built with cutting-edge technologies.",
      features: [
        "React & Next.js Development",
        "Progressive Web Apps (PWA)",
        "E-commerce Solutions",
        "Content Management Systems"
      ]
    },
    {
      icon: <Smartphone className="w-8 h-8 text-white" />,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps for iOS and Android.",
      features: [
        "React Native Development",
        "iOS & Android Native Apps",
        "Cross-platform Solutions",
        "App Store Optimization"
      ]
    },
    {
      icon: <Database className="w-8 h-8 text-white" />,
      title: "CRM Systems",
      description: "Customer relationship management solutions to streamline your business.",
      features: [
        "Custom CRM Development",
        "Salesforce Integration",
        "Lead Management Systems",
        "Customer Analytics"
      ]
    },
    {
      icon: <Settings className="w-8 h-8 text-white" />,
      title: "ERP Solutions",
      description: "Enterprise resource planning systems for efficient business management.",
      features: [
        "Custom ERP Development",
        "Business Process Automation",
        "Inventory Management",
        "Financial Management"
      ]
    },
    {
      icon: <Code className="w-8 h-8 text-white" />,
      title: "Custom Software",
      description: "Tailored software solutions designed specifically for your business needs.",
      features: [
        "Custom Application Development",
        "Legacy System Modernization",
        "API Development & Integration",
        "Database Design & Optimization"
      ]
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: "Consulting & Support",
      description: "Expert consulting and ongoing support for your technology initiatives.",
      features: [
        "Technology Consulting",
        "System Architecture Design",
        "Performance Optimization",
        "24/7 Technical Support"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Our Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 font-bold">
              Comprehensive software development services to help your business grow and succeed 
              in the digital landscape.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <ServiceCard {...service} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
