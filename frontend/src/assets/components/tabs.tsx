import React, { useState, ReactNode } from 'react';

interface TabProps {
  label: string;
  children: ReactNode;
}

interface TabsProps {
  children: React.ReactElement<TabProps>[];
}

export const Tab: React.FC<TabProps> = ({ children }) => <>{children}</>;

export const Tabs: React.FC<TabsProps> = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="tabs-container">
      <nav className="tabs-header">
        {children.map((tab, index) => (
          <button
            key={index}
            className={`tab-button ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          >
            {tab.props.label}
          </button>
        ))}
      </nav>
      <div className="tabs-content">
        {children[activeIndex]}
      </div>
    </div>
  );
};
