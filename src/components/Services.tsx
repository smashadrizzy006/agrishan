import { motion } from 'framer-motion';
import { Droplets, Construction, Wrench, Home, PenTool, MessageSquare } from 'lucide-react';

const services = [
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: 'Farm Consultations',
    description: 'Expert guidance for optimizing your agricultural operations'
  },
  {
    icon: <Droplets className="w-8 h-8" />,
    title: 'Drip Installation',
    description: 'Efficient irrigation systems for maximum water conservation'
  },
  {
    icon: <Construction className="w-8 h-8" />,
    title: 'Bore Hole Drilling',
    description: 'Professional water source development solutions'
  },
  {
    icon: <Home className="w-8 h-8" />,
    title: 'Green House Construction',
    description: 'Custom greenhouse solutions for controlled environment agriculture'
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: 'Water Pump Services',
    description: 'Installation and maintenance of water pumping systems'
  },
  {
    icon: <Droplets className="w-8 h-8" />,
    title: 'Dam Liners',
    description: 'High-quality dam lining solutions for water retention'
  },
  {
    icon: <PenTool className="w-8 h-8" />,
    title: 'Technical Advice',
    description: 'Professional guidance on agricultural technology and best practices'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive agricultural solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-green-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;