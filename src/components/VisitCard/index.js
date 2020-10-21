import React from 'react';
import './style.css';
import Avatar from '../Avatar'
import Button from '../Button'


const VisitCard = (props) => {
  let visit = props.visitInfo;
  let img = require('../../img/' + visit.photo_name);

  return (
    <div className="visit-card">
      <div className="visit-card__wrapper">
        <h3 className="visit-card__date">{visit.date}</h3>
        <div className="visit-card__clinic">{visit.clinic}</div>
        <div className="doctor visit-card__doctor">
          <div className="doctor__avatar">
            <Avatar src={img} size="60" />
          </div>
          <div className="doctor__info">
            <div className="doctor__name">{visit.doctor}</div>
            <div className="doctor__department">{visit.department}</div>
          </div>
        </div>
      </div>
      <div className="visit-card__btn">
        <Button text="Отменить" />
      </div>

    </div>
  )
}

export default VisitCard;