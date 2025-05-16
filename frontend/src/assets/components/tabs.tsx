import React, { useState, useEffect, ReactNode, useRef } from 'react';

interface TabProps {
  label: string;
  tabId: string; // 🆕 each tab has a unique ID
  children: ReactNode;
}

interface TabsProps {
  children: React.ReactElement<TabProps>[];
}

export const Tab: React.FC<TabProps> = ({ children }) => <>{children}</>;

export const Tabs: React.FC<TabsProps> = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // 🆕 handle deep link on mount
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    const index = children.findIndex(tab => tab.props.tabId === hash);
    if (index !== -1) {
      setActiveIndex(index);
      // Scroll into view
      containerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [children]);

  return (
    <div className="tabs-container" ref={containerRef}>
{/*       <div className="tabs-header">
        {children.map((tab, index) => (
          <button
            key={tab.props.tabId}
            className={`tab-button ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          >
            {tab.props.label}
          </button>
        ))}
      </div> */}
      <div className="tabs-content">
        {children[activeIndex]}
      </div>
    </div>
  );
};
