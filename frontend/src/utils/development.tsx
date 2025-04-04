// PageInDevelopment.tsx
import React from 'react';
import './PageInDevelopment.css'; // Create this CSS file
import ConstructionTurtle from '@/unnamed.png'
import Button, { ButtonColor, ButtonState } from '@/assets/lib/button';
import { useLocation } from "react-router-dom";


const PageInDevelopment: React.FC = () => {
  const location = useLocation();
  const developmentPages = ["/mentorship", "/membership", "/sponsor", "/partners"];
  if (!developmentPages.includes(location.pathname)) {
    return null;
  }

  return (
    <div className='overlay-wrap'>
    <div className="development-page" id="inConstruction">
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
    </div>
  );
};

export default PageInDevelopment;