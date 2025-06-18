
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
        <section className="py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Let's Connect</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6 leading-relaxed font-bold">
              Ready to transform your ideas into digital reality? Get in touch with us today 
              and let's discuss your next project.
            </p>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="py-6">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Email Card */}
              <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-orange-200 bg-white/90 backdrop-blur-sm shadow-lg">
                <CardHeader className="text-center pb-3">
                  <div className="mx-auto mb-3 p-3 bg-gradient-vibrant rounded-xl w-14 h-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl gradient-text">Email Us</CardTitle>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  <p className="text-gray-600 mb-3 text-sm font-bold">
                    Drop us a line and we'll get back to you promptly
                  </p>
                  <a 
                    href="mailto:info@boddapati.com"
                    className="text-orange-600 hover:text-orange-700 font-bold text-lg transition-colors hover:underline"
                  >
                    info@boddapati.com
                  </a>
                </CardContent>
              </Card>

              {/* Phone Card */}
              <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-orange-200 bg-white/90 backdrop-blur-sm shadow-lg">
                <CardHeader className="text-center pb-3">
                  <div className="mx-auto mb-3 p-3 bg-gradient-vibrant rounded-xl w-14 h-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl gradient-text">Call Us</CardTitle>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  <p className="text-gray-600 mb-3 text-sm font-bold">
                    Speak directly with our team of experts
                  </p>
                  <a 
                    href="tel:+1-555-BODDAPATI"
                    className="text-orange-600 hover:text-orange-700 font-bold text-lg transition-colors hover:underline"
                  >
                    +1-555-BODDAPATI
                  </a>
                </CardContent>
              </Card>
            </div>

            {/* Additional Info Cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Response Time */}
              <Card className="border-orange-100 bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <Clock className="w-5 h-5 text-orange-600" />
                    Response Time
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-700 text-sm font-bold">
                    We typically respond within 24 hours during business days.
                  </p>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card className="border-orange-100 bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <MessageCircle className="w-5 h-5 text-orange-600" />
                    Let's Discuss
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-700 text-sm font-bold">
                    Tell us about your project requirements and business goals.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <div id="get-started-section" className="bg-gradient-vibrant p-6 rounded-2xl text-white shadow-xl">
                <h3 className="text-2xl font-bold mb-3">Ready to Get Started?</h3>
                <p className="text-base mb-4 text-orange-100 font-bold">
                  Contact us today and let's bring your vision to life with innovative technology solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="mailto:info@boddapati.com" 
                    className="bg-white text-orange-600 px-6 py-2 rounded-lg font-bold hover:bg-orange-50 transition-colors shadow-md hover:shadow-lg"
                  >
                    Send Email
                  </a>
                  <a 
                    href="tel:+1-555-BODDAPATI" 
                    className="border-2 border-white text-white px-6 py-2 rounded-lg font-bold hover:bg-white hover:text-orange-600 transition-colors shadow-md hover:shadow-lg"
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
