import React from 'react';
import './style.css';
import Icons from '../Icons'
import CalendarDay from '../CalendarDay'
//import Calendar from 'react-calendar'

const Calendar = (props) => {
  let daysNumber = props.daysNumber;
  let monthStartsWeekDay = props.monthStartsWeekDay;
  let availibleRangeStart = props.availibleRangeStart;
  let availibleRangeEnd = props.availibleRangeEnd;
  let daysVisitsArr = props.daysVisitsArr.slice();


  return (
    <div className="visit-calendar">
      <div className="visit-calendar__header">
        <Icons iconKey="arrowPrev" />
        <span>Июнь, 2020</span>
        <Icons iconKey="arrowNext" />
      </div>
      <div className="visit-calendar__body">
        <div className="visit-calendar__week-days week-days">
          <span className="week-days__day">Пн</span>
          <span className="week-days__day">Вт</span>
          <span className="week-days__day">Ср</span>
          <span className="week-days__day">Чт</span>
          <span className="week-days__day">Пт</span>
          <span className="week-days__day">Сб</span>
          <span className="week-days__day">Вс</span>
        </div>
        <div className="visit-calendar__days ">
          {daysVisitsArr.map(pair =>
            <CalendarDay key={new Date()} dayNumber={pair[0]} isAvailible={
              (pair[0] >= availibleRangeStart && pair[0] <= availibleRangeEnd) ? true : false}
              visitsNumber={pair[1]} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Calendar;
