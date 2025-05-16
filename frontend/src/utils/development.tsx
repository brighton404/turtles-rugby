// PageInDevelopment.tsx
import React from 'react';
import './PageInDevelopment.css'; // Create this CSS file
import ConstructionTurtle from '@/unnamed.png'
import Button, { ButtonColor, ButtonState } from '@/assets/lib/button';
import { useLocation } from "react-router-dom";
import ReactDOM from 'react-dom';
 import { useEffect } from 'react';


const PageInDevelopment: React.FC = () => {
  const location = useLocation();
  const developmentPages = ["/mentorship", "/membership", "/sponsor", "/partners"];
  if (!developmentPages.includes(location.pathname)) {
    return null;
  }
  useEffect(() => {
    const target = document.getElementById('inConstruction');
    const parent = target?.parentElement;

    if (!target || !parent) return;

    const observer = new MutationObserver(() => {
      const isRemoved = !document.getElementById('inConstruction');
      if (isRemoved && parent) {
        parent.appendChild(target);
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);


  return ReactDOM.createPortal(
    <div className='overlay-wrap' id="inConstruction">
    <div className="development-page">
      <div className="content">
        <img src={ConstructionTurtle} alt="" width="300px" />
        <h1>Page Under Construction</h1>
        <p>We're working hard to bring you something amazing.</p>
        <p>Please check back later.</p>
        <div className="innerDevPage">
          <Button color={ButtonColor.Secondary} state={ButtonState.Default} navigateTo='/'>Go to homepage</Button>
        </div>
      </div>
    </div>
    </div>,
    document.body
  );
};

export default PageInDevelopment;