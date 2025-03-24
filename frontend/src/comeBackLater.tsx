import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const TurtleOverlay = () => {
  const location = useLocation();
  const [position, setPosition] = useState({ x: 50, y: 50 });

  // Define the pages where the overlay should appear
  const developmentPages = ["/mentorship", "/membership", "/test"];

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition({
        x: Math.random() * window.innerWidth * 0.8,
        y: Math.random() * window.innerHeight * 0.8,
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);  

  // Only show the overlay if the user is on a development page
  if (!developmentPages.includes(location.pathname)) {
    return null;
  }

  return (
    <div id="turtle-overlay">
      <div className="inner-turtle">
      <h1>Page in Development</h1>
      </div>
      <motion.img
        src="/src/0396f7944a827d8.png" // Ensure you have a pixelated turtle image
        alt="Swimming Turtle"
        animate={{ x: position.x, y: position.y }}
        transition={{ duration: 3, ease: "easeInOut" }}
      />
    </div>
  );
};

export default TurtleOverlay;
