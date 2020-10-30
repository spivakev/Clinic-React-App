import React from 'react';
import './style.css';
import Icons from '../Icons'

const NavigationCard = (props) => {
  let iconKey = props.iconKey;
  let title = props.title;
  let content = props.children;

  return (
    <div className="navigation-card">
      <div className="navigation-card__icon-wrapper">
        <div className="navigation-card__icon">
          <Icons iconKey={iconKey} />
        </div>
      </div>
      <div className="navigation-card__wrapper">
        <h2 className="navigation-card__title">{title}</h2>
        <p className="navigation-card__content">{content}</p>
      </div>
    </div>
  )
}

export default NavigationCard;