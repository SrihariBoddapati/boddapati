
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce solution with payment integration and inventory management.",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Web Application"
    },
    {
      title: "CRM Dashboard",
      description: "Customer relationship management system with analytics and reporting features.",
      image: "/placeholder.svg",
      technologies: ["React", "TypeScript", "PostgreSQL", "Chart.js"],
      category: "CRM System"
    },
    {
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication.",
      image: "/placeholder.svg",
      technologies: ["React Native", "Firebase", "Biometrics"],
      category: "Mobile App"
    },
    {
      title: "ERP Solution",
      description: "Enterprise resource planning system for manufacturing companies.",
      image: "/placeholder.svg",
      technologies: ["Vue.js", "Laravel", "MySQL", "Docker"],
      category: "ERP System"
    },
    {
      title: "Healthcare Management",
      description: "Patient management system for healthcare providers with appointment scheduling.",
      image: "/placeholder.svg",
      technologies: ["Angular", "Spring Boot", "PostgreSQL"],
      category: "Custom Software"
    },
    {
      title: "Real Estate Platform",
      description: "Property listing and management platform with advanced search features.",
      image: "/placeholder.svg",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Mapbox"],
      category: "Web Application"
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
              <span className="gradient-text">Our Portfolio</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 font-bold">
              Explore our successful projects and see how we've helped businesses 
              transform their digital presence.
            </p>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-orange-100 hover:border-orange-300 animate-fade-in shadow-lg" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <div className="aspect-video bg-gradient-vibrant rounded-lg mb-4 flex items-center justify-center shadow-md">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover rounded-lg opacity-80"
                      />
                    </div>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl font-bold text-gray-800">{project.title}</CardTitle>
                      <Badge variant="outline" className="text-xs font-bold shadow-sm">{project.category}</Badge>
                    </div>
                    <CardDescription className="text-gray-600 font-bold">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs font-bold shadow-sm">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;
