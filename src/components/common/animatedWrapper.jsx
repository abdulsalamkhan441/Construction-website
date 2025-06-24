
import { motion } from 'framer-motion';

const fadeInVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
};

const AnimatedWrapper = ({ children, className = "" }) => {
  return (
    <motion.div
      className={className}
      variants={fadeInVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedWrapper;


