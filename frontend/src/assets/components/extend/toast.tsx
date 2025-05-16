import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
type ToastType = "success" | "error" | "info" | "default";

// This is what the user sends (no id)
interface ToastInput {
  message: string;
  description: string;
  type?: ToastType;
  duration?: number;
  sticky?: boolean;
}

// This is what we store/display (includes id)
interface ToastData extends ToastInput {
  id: number;
}

let toastId = 0;

export const ToastContainer: React.FC = () => {
  const [toasts, setToasts] = useState<ToastData[]>([]);

  useEffect(() => {
    const handler = (e: Event) => {
      const customEvent = e as CustomEvent<ToastInput>;
      const detail = customEvent.detail;
      const id = toastId++;
      const newToast: ToastData = { ...detail, id };

      setToasts((prev: ToastData[]) => [...prev, newToast]);

      if (!detail.sticky) {
        setTimeout(() => {
          setToasts((prev) => prev.filter((toast) => toast.id !== id));
        }, detail.duration || 3000);
      }
    };

    window.addEventListener("toast", handler);
    return () => window.removeEventListener("toast", handler);
  }, []);

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const getIcon = (type?: ToastType): string => {
    switch (type) {
      case "success":
        return "✅";
      case "error":
        return "❌";
      case "info":
        return "ℹ️";
      default:
        return "🔔";
    }
  };

  return (
    <div className="toast-container">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            className={`toast toast-${toast.type || "default"}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.3 }}
          >
            <span className="toast-icon">{getIcon(toast.type)}</span>
            <div className="toast-content">
              <div>{toast.message}</div>
              <div>{toast.description}</div>
            </div>
            <button className="toast-close" onClick={() => removeToast(toast.id)}>×</button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

// Public toast function (only accepts ToastInput)
export const toast = (message: string, options: Omit<ToastInput, "message" > = { description: ""
}) => {
  const event = new CustomEvent<ToastInput>("toast", {
    detail: { message, ...options }
  });
  window.dispatchEvent(event);
};
