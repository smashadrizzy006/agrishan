import { motion } from 'framer-motion';
import { Award, Users, Globe } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Agrishan Limited</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With years of experience in agricultural solutions, we're committed to revolutionizing farming practices across Kenya and East Africa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src=" /src/assets/images/about 1.jpeg"
              alt="Modern Farming"
              className="rounded-lg shadow-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-start space-x-4">
              <Award className="w-8 h-8 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Excellence in Service</h3>
                <p className="text-gray-600">Our commitment to quality and innovation has made us a trusted name in agricultural solutions.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Users className="w-8 h-8 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                <p className="text-gray-600">Our team of agricultural experts brings decades of combined experience to every project.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Globe className="w-8 h-8 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Wide Coverage</h3>
                <p className="text-gray-600">Serving clients across Kenya with sustainable and innovative agricultural solutions.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;