
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">About Boddapati</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We are a forward-thinking software development company dedicated to transforming 
                your ideas into powerful digital solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6 gradient-text">Our Mission</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To deliver innovative, reliable, and scalable software solutions that help 
                  businesses thrive in the digital age. We are committed to excellence, 
                  transparency, and building long-term partnerships with our clients.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6 gradient-text">Our Vision</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To be the leading software development partner that empowers businesses 
                  worldwide through cutting-edge technology solutions, fostering innovation 
                  and digital transformation across industries.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold gradient-text mb-2">50+</div>
                <div className="text-gray-600">Projects Delivered</div>
              </div>
              <div>
                <div className="text-4xl font-bold gradient-text mb-2">5+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold gradient-text mb-2">40+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
                <div className="text-gray-600">Support</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
