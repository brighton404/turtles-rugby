import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type AlertProps = {
  type?: 'info' | 'success' | 'warning' | 'error';
  message: string;
  isOpen: boolean;
  onClose: () => void;
};

const Alert: React.FC<AlertProps> = ({
  type = 'info',
  message,
  isOpen,
  onClose,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={`alert alert-${type}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <span className="alert-message">{message}</span>
          <button className="alert-close" onClick={onClose}>
            ×
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Alert;
