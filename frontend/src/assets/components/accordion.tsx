import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQAccordion: React.FC<{ question: string; 
    answer: string; 
    isOpen: boolean; 
    onToggle: () => void; 
  }> = ({ question, answer, isOpen, onToggle }) => {

  return (
    <div className="Accordion-wrap">
      <div className="child1" onClick={onToggle}>
        <h2 className="text-lg font-semibold">{question}</h2>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.p
            className="span"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.1, ease: 'easeInOut' }}
          >
            {answer}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQAccordion;