import React, { useEffect, useRef, ReactNode } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence, PanInfo } from "framer-motion";

interface SheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  zIndex?: number;
}

export const Sheet: React.FC<SheetProps> = ({
  isOpen,
  onClose,
  children,
  zIndex = 1000,
}) => {
  const sheetRef = useRef<HTMLDivElement>(null);

  // Scroll lock
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Focus trap
  useEffect(() => {
    if (!isOpen || !sheetRef.current) return;

    const focusable = sheetRef.current.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab") {
        if (document.activeElement === last && !e.shiftKey) {
          e.preventDefault();
          first?.focus();
        } else if (document.activeElement === first && e.shiftKey) {
          e.preventDefault();
          last?.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKey);
    first?.focus();

    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.y > 100) onClose();
  };

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <section id="DrawingSheet">
          <motion.div
            className="sheet-backdrop"
            style={{ zIndex }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            ref={sheetRef}
            className="sheet-panel sheet-bottom"
            style={{ zIndex: zIndex + 1 }}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            drag="y"
            dragConstraints={{ top: 0 }}
            onDragEnd={handleDragEnd}
            role="dialog"
            aria-modal="true"
          >
            <button className="sheet-close" onClick={onClose}>
              ×
            </button>
            <div className="sheet-content">{children}</div>
          </motion.div>
        </section>
      )}
    </AnimatePresence>,
    document.body
  );
};
