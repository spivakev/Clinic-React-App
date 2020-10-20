import React from 'react';
import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'
import NavIcon from '../../components/NavIcon'
import SectionTitle from '../../components/SectionTitle'
import './style.css';

const Appointments = () => {
  return (
    <div className="profile profile__wrapper">
      <Sidebar />
      <div className="profile__content profile__wrapper">
        <Header title="Мой профиль" />

        <div className="main">
          <div className="main__container">
            <section className="section my-appointments">
              <div className="section__title-wrapper">
                <NavIcon to="/" iconKey="back" />
                <div className="section__title">Мои записи</div>
              </div>


            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Appointments;