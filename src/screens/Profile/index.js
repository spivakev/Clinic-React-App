import React from 'react';
import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'
import VisitCard from '../VisitCard'
import malushko from '../../img/doctor_malushko.png'
import harkov from '../../img/doctor_harkov.png'
import './style.css';


const Profile = () => {
  let visits = [
    {
      "date": "Понедельник 15.06.20 | 15:30",
      "clinic": 'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
      "doctor": 'Малушко Т. Н.',
      "department": 'Хирургия'
    }];

  return (
    <div className="profile profile__wrapper">
      <Sidebar />
      <div className="profile__content profile__wrapper">
        <Header title="Мой профиль" />

        <div className="main">
          <div className="main__container">
            <section className="section scheduled-visits">
              <div className="section__title">Записи на прием</div>
              <VisitCard visitInfo={visits[0]} photoSrc={malushko} />
            </section>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Profile;