import React, { useEffect, useRef } from 'react';
import { ButtonColor, ButtonState } from '../../lib/actionButton';
import Button from '../../lib/button';
import SidebarNav from '../../lib/extend/dropdown/sidebarNav';
import Icons from '../../lib/icons';
import { useSidebar } from './sidebarContext';

const Sidebar: React.FC = () => {
  const { isOpen, closeSidebar } = useSidebar();
  const sidebarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (isOpen) document.body.style.overflow = "hidden";
      else document.body.style.overflow = "";
      return () => {
        document.body.style.overflow = "";
      };
    }, [isOpen]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node) && isOpen) {
        closeSidebar();
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, closeSidebar]);

  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    // Apply the new theme
    document.documentElement.setAttribute('data-theme', newTheme);

    // Save the theme to localStorage
    localStorage.setItem('theme', newTheme);
};

  return (
    <div  className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div ref={sidebarRef} className='sideBar-Wrap'>
        <div className="column gap-20">
          <div className='row content-x1'>
            <button className="close-button" onClick={closeSidebar}>&times;</button>
            <div className="column flex-spread content-x2">
              <Button onClick={toggleTheme} color={ButtonColor.Optimal} state={ButtonState.Default} icon={<Icons variant="sun" />} isOutlined={false} disabled={false}>theme</Button>
            </div>
          </div>
          <div className='column gap-20'>
            <Button color={ButtonColor.Optimal} state={ButtonState.Default} isOutlined={false} navigateTo="/" onClick={closeSidebar} disabled={false} > Home </Button>
            <Button color={ButtonColor.Optimal} state={ButtonState.Default} isOutlined={false} navigateTo="/about" onClick={closeSidebar} disabled={false} > About </Button>
            <SidebarNav label={'Teams'} displayCard={'m-teams'} />
            <Button color={ButtonColor.Optimal} state={ButtonState.Default} isOutlined={false} navigateTo="/news" onClick={closeSidebar} disabled={false} > News </Button>
            <Button color={ButtonColor.Optimal} state={ButtonState.Default} isOutlined={false} navigateTo="/events" onClick={closeSidebar} disabled={false} > Events </Button>
            <SidebarNav label={'Support'} displayCard={'m-support'} />
          </div>        
        </div>
      </div>
    </div>
  );
};

export default Sidebar;