import React from 'react';
import './style.css';
import Icons from '../Icons'

const NavigationCard = (props) => {

  let cardContent = props.cardContent
  return(
  <div className="navigation-card">
    <div className="navigation-card__icon-wrapper">
      <div className="navigation-card__icon">
          <Icons iconKey={cardContent.iconKey} />
      </div>
    </div>
    <div className="navigation-card__wrapper">
        <h2 className="navigation-card__title">{cardContent.title}</h2>
        <p className="navigation-card__content">{cardContent.content}</p>
    </div>
  </div>
  )
}

export default NavigationCard;