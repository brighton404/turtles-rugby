import React from 'react';
import { LucideIcons } from '../lib/lucideIcons';
/* import { motion, AnimatePresence } from 'framer-motion'; */

const FAQAccordion: React.FC<{ question: string; 
    answer: string; 
    isOpen: boolean; 
    onToggle: () => void; 
  }> = ({ question, answer, isOpen, onToggle }) => {

  return (
    <details className="Accordion-wrap">
      <summary className="Text_L_Normal bold child1" onClick={onToggle}>
      {question}
        {/* <h2 className="Text_L_Normal">{question}</h2> */}
        <span>
          {isOpen ? <LucideIcons.chevronUp /> : <LucideIcons.chevronDown />}
        </span>
      </summary>
{/*       <AnimatePresence>
        {isOpen && (
          <motion.p
            className="Text_M_Normal"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.1, ease: 'easeInOut' }}
          >
            {answer}
          </motion.p>
        )}
      </AnimatePresence> */}
      {answer}
    </details>
  );
};

export default FAQAccordion;