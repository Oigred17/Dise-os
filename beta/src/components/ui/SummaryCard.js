import React from 'react';
import Card from './Card';
import Icon from '../icons/Icon';
import './SummaryCard.css';

const SummaryCard = ({ 
  title, 
  value, 
  description, 
  icon, 
  variant = 'default',
  trend,
  className = '' 
}) => {
  const cardClasses = [
    'summary-card',
    `summary-card--${variant}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <Card variant="elevated" className={cardClasses} hover>
      <div className="summary-card__content">
        <div className="summary-card__icon">
          <Icon name={icon} size={24} color="currentColor" />
        </div>
        <div className="summary-card__info">
          <div className="summary-card__value">{value}</div>
          <div className="summary-card__title">{title}</div>
          <div className="summary-card__description">{description}</div>
          {trend && (
            <div className={`summary-card__trend summary-card__trend--${trend.type}`}>
              <Icon 
                name={trend.type === 'up' ? 'trending-up' : 'trending-down'} 
                size={14} 
                color="currentColor" 
              />
              <span>{trend.value}</span>
            </div>
          )}
        </div>
      </div>
      <div className="summary-card__background">
        <div className="summary-card__pattern"></div>
      </div>
    </Card>
  );
};

export default SummaryCard;

