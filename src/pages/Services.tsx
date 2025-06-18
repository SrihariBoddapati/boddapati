
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import { Globe, Smartphone, Database, Settings, Code, Users, Zap, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: <Globe className="w-8 h-8 text-white" />,
      title: "Web Applications",
      description: "Modern, responsive web applications built with cutting-edge technologies and best practices for optimal performance.",
      features: ["React & Next.js Development", "Progressive Web Apps (PWA)", "E-commerce Solutions", "Custom Web Portals"]
    },
    {
      icon: <Smartphone className="w-8 h-8 text-white" />,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps designed for exceptional user experiences across all devices.",
      features: ["React Native Development", "iOS & Android Native Apps", "Cross-platform Solutions", "Mobile UI/UX Design"]
    },
    {
      icon: <Database className="w-8 h-8 text-white" />,
      title: "CRM Systems",
      description: "Comprehensive customer relationship management solutions to streamline and optimize your business operations.",
      features: ["Custom CRM Development", "Lead Management Systems", "Customer Analytics Dashboard", "Sales Pipeline Automation"]
    },
    {
      icon: <Settings className="w-8 h-8 text-white" />,
      title: "ERP Solutions",
      description: "Enterprise resource planning systems for efficient and integrated business management across all departments.",
      features: ["Business Process Automation", "Inventory Management", "Financial Management", "HR Management Systems"]
    },
    {
      icon: <Code className="w-8 h-8 text-white" />,
      title: "Custom Software",
      description: "Tailored software solutions designed specifically for your unique business requirements and workflows.",
      features: ["Custom Applications", "Legacy System Modernization", "API Development & Integration", "Database Design"]
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Consulting & Support",
      description: "Expert consulting and comprehensive ongoing support for all your technology initiatives and digital transformation.",
      features: ["Technology Consulting", "System Architecture Design", "24/7 Technical Support", "Performance Optimization"]
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services to modernize your business operations and reduce costs.",
      features: ["Cloud Migration", "Infrastructure as Code", "DevOps Implementation", "Cloud Security"]
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: "Security & Compliance",
      description: "Comprehensive security solutions and compliance frameworks to protect your business and customer data.",
      features: ["Security Audits", "GDPR Compliance", "Data Protection", "Penetration Testing"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="gradient-text">Our Services</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-bold leading-relaxed">
                Comprehensive software development services designed to help your business 
                thrive in today's competitive digital landscape.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="animate-fade-in hover:scale-105 transition-transform duration-300" 
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ServiceCard {...service} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="get-started-section" className="py-12 bg-gradient-vibrant">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-orange-100 mb-8 max-w-2xl mx-auto leading-relaxed font-bold">
              Let's discuss your project and discover how we can help you achieve your goals 
              with innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="outline" className="bg-white text-orange-600 hover:bg-orange-50 border-white font-bold px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                  Contact Us Today
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 font-bold px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
