import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SDG } from '@/assets/lib/types';

interface SDGPopupProps {
  sdg: SDG | null;
  isOpen: boolean;
  onClose: () => void;
}

const SDGPopup: React.FC<SDGPopupProps> = ({ sdg, isOpen, onClose }) => {
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && sdg && (
        <>
          <motion.div
            className="popup-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />
          <motion.div
            className="popup-container"
            ref={popupRef}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}            
          >
            <div className="content">
                <button className="popup-close" onClick={onClose}>×</button>
                <div className="sdg-gif-container">
                    <img src={sdg.gif} alt={sdg.title} />
                </div>
                <div className="sdg-description">                    
                    <h2>{sdg.title}</h2>
                    <p>{sdg.description}</p>
                    <a href={`${sdg.pdf}`} target="_blank">Resource</a>            
                </div>       
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SDGPopup;
