import React from 'react';
import './style.css';


const CalendarVisits = (props) => {
  let visitsNumber = props.visitsNumber;

  return (
    <span className="calendar-visits">{visitsNumber}</span>
  )
}

export default CalendarVisits;
