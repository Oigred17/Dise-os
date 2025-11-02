import React, { useState } from 'react';
import Icon from '../icons/Icon';
import './Input.css';

const Input = ({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  disabled = false,
  required = false,
  icon,
  className = '',
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const inputType = type === 'password' && showPassword ? 'text' : type;
  const inputId = `input-${Math.random().toString(36).substr(2, 9)}`;

  const inputClasses = [
    'input',
    isFocused && 'input--focused',
    error && 'input--error',
    disabled && 'input--disabled',
    icon && 'input--with-icon',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className="input-group">
      {label && (
        <label htmlFor={inputId} className="input-label">
          {label}
          {required && <span className="input-required">*</span>}
        </label>
      )}
      <div className="input-wrapper">
        {icon && (
          <div className="input-icon">
            <Icon name={icon} size={18} color="#9ca3af" />
          </div>
        )}
        <input
          id={inputId}
          type={inputType}
          className={inputClasses}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          required={required}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
        {type === 'password' && (
          <button
            type="button"
            className="input-toggle"
            onClick={() => setShowPassword(!showPassword)}
            tabIndex={-1}
          >
            <Icon 
              name={showPassword ? 'eye-off' : 'eye'} 
              size={18} 
              color="#9ca3af" 
            />
          </button>
        )}
      </div>
      {error && <span className="input-error">{error}</span>}
    </div>
  );
};

export default Input;

