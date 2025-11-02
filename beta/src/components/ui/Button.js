import React from 'react';
import Icon from '../icons/Icon';
import './Button.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  icon, 
  iconPosition = 'left',
  disabled = false,
  className = '',
  onClick,
  type = 'button',
  ...props 
}) => {
  const buttonClasses = [
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    disabled && 'btn--disabled',
    className
  ].filter(Boolean).join(' ');

  const iconElement = icon && (
    <Icon 
      name={icon} 
      size={size === 'small' ? 16 : size === 'large' ? 20 : 18} 
      color="currentColor"
    />
  );

  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {icon && iconPosition === 'left' && iconElement}
      {children && <span className="btn__text">{children}</span>}
      {icon && iconPosition === 'right' && iconElement}
    </button>
  );
};

export default Button;

