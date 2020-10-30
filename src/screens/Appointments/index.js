import React from 'react';
import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'
import NavIcon from '../../components/NavIcon'
import './style.css';
import visits from '../../visits.json'
import VisitCard from '../../components/VisitCard';
import Calendar from '../../components/Calendar';

const Appointments = () => {
  let daysNumber = 30;
  let monthStartsWeekDay = 3; //1 - пн, 7 - вс
  let availibleRangeStart = 5;
  let availibleRangeEnd = 30;

  let daysVisitsArr = []

  for (let i = 0; i < daysNumber; i++) {
    let visitsCount = 0;

    if (i === 14) visitsCount = 2;
    else if (i === 29) visitsCount = 1;

    let dayNumber = String(i + 1);
    let pair = [dayNumber, visitsCount]
    daysVisitsArr.push(pair);
  }


  return (
    <div className="appointments screen screen__wrapper">
      <Sidebar />
      <div className="screen__content screen__wrapper">
        <Header title="Мой профиль" />

        <div className="appointments__main">
          <div className="appointments__back">
            <NavIcon to="/" iconKey="back" />
            <div className="section-title appointments__section-title ">Мои записи</div>
          </div>
          <div className="appointments__container">
            <section className="section my-appointments">
              <div className="my-appointments__wrapper">
                <div className="my-appointments__content">
                  {visits.map(visitInfo => <VisitCard visitInfo={visitInfo} />
                  )}
                </div>
              </div>
            </section>
            <section>
              <div className="appointments__calendar">
                <Calendar
                  daysNumber={daysNumber}
                  monthStartsWeekDay={monthStartsWeekDay}
                  availibleRangeStart={availibleRangeStart}
                  availibleRangeEnd={availibleRangeEnd}
                  daysVisitsArr={daysVisitsArr}
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Appointments;