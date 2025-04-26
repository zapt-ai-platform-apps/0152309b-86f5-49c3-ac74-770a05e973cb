import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5,
      ease: "easeOut"
    }
  },
  hover: {
    y: -8,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: { 
      duration: 0.2,
      ease: "easeOut"
    }
  }
};

const iconContainerVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { 
      delay: 0.2,
      duration: 0.3
    }
  },
  hover: {
    rotate: [0, -10, 10, -5, 0],
    transition: { 
      duration: 0.5,
      ease: "easeInOut"
    }
  }
};

function FeatureCard({ icon, title, description, linkTo }) {
  return (
    <Link to={linkTo}>
      <motion.div
        className="block p-6 border border-gray-200 rounded-xl bg-white transition-all"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        whileHover="hover"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div 
          className="h-12 w-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 text-primary-600 transition-colors"
          variants={iconContainerVariants}
        >
          {icon}
        </motion.div>
        <motion.h3 
          className="text-lg font-semibold mb-2 text-gray-900 transition-colors"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h3>
        <motion.p 
          className="text-gray-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          {description}
        </motion.p>
      </motion.div>
    </Link>
  );
}

export default FeatureCard;