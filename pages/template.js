'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

const Template = ({ children }) => {
  const router = useRouter();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={router.pathname}
        initial={{ y: -600, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: 'easeOut', duration: 3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Template;
