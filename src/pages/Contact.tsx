
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MessageCircle, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Let's Connect</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
              Ready to transform your ideas into digital reality? Get in touch with us today 
              and let's discuss your next project.
            </p>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* Email Card */}
              <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-orange-200 bg-white/80 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-4 bg-gradient-vibrant rounded-2xl w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl gradient-text">Email Us</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-4 text-base">
                    Drop us a line and we'll get back to you promptly
                  </p>
                  <a 
                    href="mailto:info@boddapati.com"
                    className="text-orange-600 hover:text-orange-700 font-bold text-lg transition-colors"
                  >
                    info@boddapati.com
                  </a>
                </CardContent>
              </Card>

              {/* Phone Card */}
              <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-orange-200 bg-white/80 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-4 bg-gradient-vibrant rounded-2xl w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl gradient-text">Call Us</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-4 text-base">
                    Speak directly with our team of experts
                  </p>
                  <a 
                    href="tel:+1-555-BODDAPATI"
                    className="text-orange-600 hover:text-orange-700 font-bold text-lg transition-colors"
                  >
                    +1-555-BODDAPATI
                  </a>
                </CardContent>
              </Card>
            </div>

            {/* Additional Info Cards */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Response Time */}
              <Card className="border-orange-100 bg-white/60 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <Clock className="w-6 h-6 text-orange-600" />
                    Response Time
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-base font-medium">
                    We typically respond within 24 hours during business days.
                  </p>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card className="border-orange-100 bg-white/60 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <MessageCircle className="w-6 h-6 text-orange-600" />
                    Let's Discuss
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-base font-medium">
                    Tell us about your project requirements and business goals.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <div className="bg-gradient-vibrant p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-lg mb-6 text-orange-100">
                  Contact us today and let's bring your vision to life with innovative technology solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="mailto:info@boddapati.com" 
                    className="bg-white text-orange-600 px-8 py-3 rounded-lg font-bold hover:bg-orange-50 transition-colors"
                  >
                    Send Email
                  </a>
                  <a 
                    href="tel:+1-555-BODDAPATI" 
                    className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-orange-600 transition-colors"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
