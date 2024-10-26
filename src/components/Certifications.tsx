import { motion } from 'framer-motion';
import { Award, Shield, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: "ISO 9001:2015",
      description: "Certified for Quality Management Systems"
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "KEBS Certified",
      description: "Kenya Bureau of Standards Approved"
    },
    {
      icon: <CheckCircle className="w-12 h-12" />,
      title: "NEMA Compliance",
      description: "Environmental Management Certification"
    }
  ];

  const partners = [
    {
      name: "Ministry of Agriculture",
      logo: "https://example.com/logo1.png"
    },
    {
      name: "Kenya Agricultural Research Institute",
      logo: "https://example.com/logo2.png"
    },
    {
      name: "Agricultural Finance Corporation",
      logo: "https://example.com/logo3.png"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Certifications</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recognized and certified by leading agricultural and quality assurance institutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div className="text-green-600 mb-4 flex justify-center">{cert.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{cert.title}</h3>
              <p className="text-gray-600">{cert.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Our Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-12 w-auto mx-auto grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;