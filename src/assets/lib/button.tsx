import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import './Button.css';

enum ButtonColor {
  Accent = 'accent',
  Primary = 'primary',
  Secondary = 'secondary',
  Optimal = 'optimal',
  Optimal2 = 'optimal2',
}

enum ButtonState {
  Default = 'default',
  Hovered = 'hovered',
  Touch = 'touch',
  Focused = 'focused',
  Disabled = 'disabled',
}

interface ButtonProps {
  color: ButtonColor;
  state: ButtonState;
  icon?: React.ReactNode;
  isOutlined?: boolean;
  navigateTo?: string; // New prop for navigation
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: FC<ButtonProps> = ({ 
  color, 
  state, 
  icon, 
  isOutlined = false, 
  navigateTo, // Destructure navigateTo
  onClick, 
  children 
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) onClick(); // Trigger custom onClick, if provided
    if (navigateTo) navigate(navigateTo); // Navigate to the target route, if specified
  };

  const getClassNames = () => {
    const colorClass = `button--${color}`;
    const stateClass = `button--${state}`;
    const outlineClass = isOutlined ? 'button--outlined' : '';
    return `button ${colorClass} ${stateClass} ${outlineClass}`;
  };

  return (
    <button className={getClassNames()} onClick={handleClick} disabled={state === ButtonState.Disabled}>
      {icon && <span className="iconWrap">{icon}</span>}
      <span className="btnText">{children}</span>
    </button>
  );
};
export default Button;
export { ButtonColor, ButtonState };