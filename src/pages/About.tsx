
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import StatsSection from '@/components/StatsSection';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="gradient-text">About Boddapati</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-bold">
                We are a forward-thinking software development company dedicated to transforming 
                your ideas into powerful digital solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-orange-100">
                <h2 className="text-3xl font-bold mb-4 gradient-text">Our Mission</h2>
                <p className="text-gray-600 text-lg leading-relaxed font-bold">
                  To deliver innovative, reliable, and scalable software solutions that help 
                  businesses thrive in the digital age. We are committed to excellence, 
                  transparency, and building long-term partnerships with our clients.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-orange-100">
                <h2 className="text-3xl font-bold mb-4 gradient-text">Our Vision</h2>
                <p className="text-gray-600 text-lg leading-relaxed font-bold">
                  To be the leading software development partner that empowers businesses 
                  worldwide through cutting-edge technology solutions, fostering innovation 
                  and digital transformation across industries.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <StatsSection />
      </main>

      <Footer />
    </div>
  );
};

export default About;
