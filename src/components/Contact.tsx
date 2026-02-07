import { Mail, Phone, MapPin, MessageCircle, CheckCircle } from 'lucide-react';

export function Contact() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">Get In Touch</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ready to start your sourcing journey? Contact us today for a free consultation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg mb-1 text-gray-900">Phone</h3>
                <p className="text-gray-600">+86 156 2063 3734</p>
                <p className="text-sm text-gray-500 mt-1">Mon-Fri, 7AM-9PM (Beijing Time)</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg mb-1 text-gray-900">Email</h3>
                <p className="text-gray-600">wenhao1411@gmail.com</p>
                <p className="text-sm text-gray-500 mt-1">We'll reply within 24 hours</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg mb-1 text-gray-900">WhatsApp</h3>
                <p className="text-gray-600">+86 156 2063 3734</p>
                <p className="text-sm text-gray-500 mt-1">Available 24/7 on weekends</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg mb-1 text-gray-900">Office Locations</h3>
                <p className="text-gray-600">Shenzhen, Guangdong, Beijing</p>
                <p className="text-sm text-gray-500 mt-1">Visit by appointment</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl mb-6 text-center text-gray-900">Working Hours</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <span className="text-gray-700">Monday - Friday</span>
                <span className="text-gray-900">7:00 AM - 9:00 PM</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <span className="text-gray-700">Saturday</span>
                <span className="text-gray-900">24 Hours</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <span className="text-gray-700">Sunday</span>
                <span className="text-gray-900">24 Hours</span>
              </div>
              <div className="mt-6 p-4 bg-green-50 rounded-lg border-2 border-green-200">
                <p className="text-sm text-gray-700 text-center">
                  <strong>Beijing Time Zone (GMT+8)</strong><br/>
                  Extended weekend service for international clients
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg mt-8">
            <h3 className="text-2xl mb-6 text-center text-gray-900">Our Location</h3>
            <div className="space-y-4">
              <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 mx-auto mb-2 text-green-600" />
                    <p className="text-lg">Shenzhen | Guangdong | Beijing</p>
                    <p className="text-sm">China's Key Business Hubs</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-xl mb-1 text-green-600">Shenzhen</div>
                  <div className="text-sm text-gray-600">Manufacturing Hub</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-xl mb-1 text-blue-600">Guangdong</div>
                  <div className="text-sm text-gray-600">Trade Center</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-xl mb-1 text-purple-600">Beijing</div>
                  <div className="text-sm text-gray-600">Business Capital</div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h4 className="text-lg mb-3 text-gray-900">Strategic Location Benefits</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Direct access to major manufacturing clusters</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Close to Shenzhen Port for efficient shipping</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Easy factory visits and quality inspections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Hub for electronics, furniture, and consumer goods</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}