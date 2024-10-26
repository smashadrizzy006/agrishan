import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img src="/src/assets/logo.png" alt="Agrishan Limited" className="h-12 mb-4" />
            <p className="text-gray-400 mt-2">
              Leading provider of agricultural solutions and services in the region.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone size={20} className="mr-2" />
                <span>+254 791610136</span>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="mr-2" />
                <a href="mailto:agrishanlimited@gmail.com">agrishanlimited@gmail.com</a>
              </div>
              <div className="flex items-center">
                <MapPin size={20} className="mr-2" />
                <span>Nairobi, Kenya</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-500 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-green-500 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-green-500 transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Agrishan Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;