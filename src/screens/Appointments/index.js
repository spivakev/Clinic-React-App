import React from 'react';
import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'
import NavIcon from '../../components/NavIcon'
import './style.css';
import visits from '../../visits.json'
import VisitCard from '../../components/VisitCard';
import Calendar from '../../components/Calendar';

const Appointments = () => {
 
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
                <Calendar />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Appointments;