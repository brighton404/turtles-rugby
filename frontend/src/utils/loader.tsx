import { useEffect, useState } from "react";
import "./Load.css";

const LoadingScreen = () => {
  const [dots, setDots] = useState(".");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : "."));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loadingScreen">
        <span className="loader"></span>
        {dots}
    </div>
  )
};

export default LoadingScreen;