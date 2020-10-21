import React from 'react';
import './style.css';
import CalendarVisits from '../CalendarVisits'

const CalendarDay = (props) => {
  let isAvailible = props.isAvailible;
  let dayNumber = props.dayNumber;

  console.log('isAvailible' + isAvailible)
  console.log('dayNumber' + dayNumber)

  let visitsNumber = props.visitsNumber;

  let styleClass;

  if (isAvailible) {
    styleClass = 'calendar-day--availible';
    if (visitsNumber > 0) visitsView = <CalendarVisits visitsNumber={visitsNumber} />
  } else {
    styleClass = 'calendar-day--not-availible'
  }

  return (
    <div className={"calendar-day " + styleClass}>

      <span className="calendar-day__number">{dayNumber}</span>
      <div className="calendar-day__visits">{visitsView}</div>

    </div>
  )

}

export default CalendarDay;
