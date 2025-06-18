
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Contact Us</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Ready to start your project? Get in touch with us and let's discuss 
              how we can help transform your ideas into reality.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Information */}
              <div className="lg:col-span-1">
                <div className="space-y-6">
                  <Card className="border-orange-100">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-orange-600" />
                        Email
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">info@boddapati.com</p>
                      <p className="text-gray-600">hello@boddapati.com</p>
                    </CardContent>
                  </Card>

                  <Card className="border-orange-100">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-orange-600" />
                        Phone
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                      <p className="text-gray-600">+1 (555) 987-6543</p>
                    </CardContent>
                  </Card>

                  <Card className="border-orange-100">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-orange-600" />
                        Location
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        123 Tech Street<br />
                        Innovation District<br />
                        Tech City, TC 12345
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-orange-100">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-orange-600" />
                        Business Hours
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="border-orange-100">
                  <CardHeader>
                    <CardTitle className="text-2xl gradient-text">Send us a Message</CardTitle>
                    <CardDescription>
                      Fill out the form below and we'll get back to you within 24 hours.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                            First Name *
                          </label>
                          <Input 
                            id="firstName" 
                            type="text" 
                            required 
                            className="border-orange-200 focus:border-orange-500"
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                            Last Name *
                          </label>
                          <Input 
                            id="lastName" 
                            type="text" 
                            required 
                            className="border-orange-200 focus:border-orange-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <Input 
                          id="email" 
                          type="email" 
                          required 
                          className="border-orange-200 focus:border-orange-500"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <Input 
                          id="phone" 
                          type="tel" 
                          className="border-orange-200 focus:border-orange-500"
                        />
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                          Subject *
                        </label>
                        <Input 
                          id="subject" 
                          type="text" 
                          required 
                          className="border-orange-200 focus:border-orange-500"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          Message *
                        </label>
                        <Textarea 
                          id="message" 
                          rows={6} 
                          required 
                          className="border-orange-200 focus:border-orange-500"
                          placeholder="Tell us about your project..."
                        />
                      </div>

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full bg-gradient-sunset hover:opacity-90 text-white"
                      >
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
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
