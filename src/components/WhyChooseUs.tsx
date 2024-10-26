import { motion } from 'framer-motion';
import { Award, Shield, Clock, Target, Wrench, ThumbsUp } from 'lucide-react';

const features = [
  {
    icon: <Award className="w-12 h-12" />,
    title: 'Industry Leaders',
    description: 'Over 7 years of excellence in agricultural solutions with a proven track record of success.'
  },
  {
    icon: <Shield className="w-12 h-12" />,
    title: 'Quality Guaranteed',
    description: 'ISO 9001:2015 certified, ensuring international standards in all our installations and services.'
  },
  {
    icon: <Clock className="w-12 h-12" />,
    title: 'On-Time Delivery',
    description: '98% project completion rate within agreed timelines, minimizing disruptions to your operations.'
  },
  {
    icon: <Target className="w-12 h-12" />,
    title: 'Cost-Effective',
    description: 'Competitive pricing with flexible payment terms and the best value for your investment.'
  },
  {
    icon: <Wrench className="w-12 h-12" />,
    title: 'Expert Team',
    description: 'Certified agricultural engineers and technicians with extensive field experience.'
  },
  {
    icon: <ThumbsUp className="w-12 h-12" />,
    title: 'After-Sales Support',
    description: '24/7 technical support and maintenance services to ensure your systems run optimally.'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Agrishan Limited?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We deliver excellence in every project, backed by industry certifications and a commitment to your success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="text-green-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Success Metrics</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">200+</div>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
                <p className="text-gray-600">Client Satisfaction</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">15+</div>
                <p className="text-gray-600">Counties Served</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
                <p className="text-gray-600">Support Available</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;