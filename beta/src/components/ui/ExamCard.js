import React from 'react';
import Card from './Card';
import Button from './Button';
import Icon from '../icons/Icon';
import './ExamCard.css';

const ExamCard = ({ 
  exam, 
  onDelete, 
  onEdit,
  className = '' 
}) => {
  const {
    title,
    type,
    status,
    group,
    location,
    date,
    professor,
    time,
    applicator,
    note
  } = exam;

  const getStatusVariant = (status) => {
    switch (status) {
      case 'scheduled': return 'scheduled';
      case 'confirmed': return 'confirmed';
      case 'pending': return 'pending';
      default: return 'default';
    }
  };

  const getTypeVariant = (type) => {
    switch (type) {
      case 'parcial': return 'parcial';
      case 'ordinario': return 'ordinario';
      case 'extraordinario': return 'extraordinario';
      case 'especial': return 'especial';
      default: return 'default';
    }
  };

  return (
    <Card variant="default" className={`exam-card ${className}`} hover>
      <div className="exam-card__header">
        <div className="exam-card__title-section">
          <h3 className="exam-card__title">{title}</h3>
          <div className="exam-card__tags">
            <span className={`exam-card__tag exam-card__tag--${getTypeVariant(type)}`}>
              {type}
            </span>
            <span className={`exam-card__tag exam-card__tag--${getStatusVariant(status)}`}>
              {status}
            </span>
          </div>
        </div>
        <Button
          variant="ghost"
          size="small"
          icon="trash"
          onClick={onDelete}
          className="exam-card__delete"
        />
      </div>

      <div className="exam-card__details">
        <div className="exam-card__detail-column">
          <div className="exam-card__detail">
            <Icon name="user" size={16} color="var(--color-gray-500)" />
            <span>{group}</span>
          </div>
          <div className="exam-card__detail">
            <Icon name="location" size={16} color="var(--color-gray-500)" />
            <span>{location}</span>
          </div>
        </div>
        <div className="exam-card__detail-column">
          <div className="exam-card__detail">
            <Icon name="calendar" size={16} color="var(--color-gray-500)" />
            <span>{date}</span>
          </div>
          <div className="exam-card__detail">
            <Icon name="user" size={16} color="var(--color-gray-500)" />
            <span>{professor}</span>
          </div>
        </div>
      </div>

      <div className="exam-card__time-applicator">
        <div className="exam-card__detail">
          <Icon name="clock" size={16} color="var(--color-gray-500)" />
          <span>{time}</span>
        </div>
        <div className="exam-card__detail">
          <Icon name="user" size={16} color="var(--color-gray-500)" />
          <span>Aplicador: {applicator}</span>
        </div>
      </div>

      {note && (
        <div className="exam-card__note">
          {note}
        </div>
      )}

      <div className="exam-card__actions">
        <Button
          variant="secondary"
          size="small"
          onClick={onEdit}
        >
          Editar
        </Button>
        <Button
          variant="primary"
          size="small"
        >
          Ver Detalles
        </Button>
      </div>
    </Card>
  );
};

export default ExamCard;

