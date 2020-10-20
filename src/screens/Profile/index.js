import React from 'react';
import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'
import VisitCard from '../../components/VisitCard'
import NavigationCard from '../../components/NavigationCard'
import NavLink from '../../components/NavLink'
import visits from '../../visits.json';
import './style.css';


const Profile = () => {
  let cardInfo = [
    {
      "iconKey": "cardInfo",
      "title": "Информация о пациенте",
      "content": "Ваши личные данные Рекомендация врачей История болезней"
    },
    {
      "iconKey": "lab",
      "title": "Результаты анализов",
      "content": "Вы можете узнать здесь результаты своих анализов"
    },
    {
      "iconKey": "addInfo",
      "title": "Добавить информацию",
      "content": "Добавляйте в свою электронную медицинскую карту новые данные"
    },
    {
      "iconKey": "history",
      "title": "История приемов",
      "content": "Вся информация о полученных услугах за все время хранится здесь"
    }
  ]

  return (
    <div className="profile profile__wrapper">
      <Sidebar />
      <div className="profile__content profile__wrapper">
        <Header title="Мой профиль" />

        <div className="main">
          <div className="main__container">
            <section className="section scheduled-visits">
              <div className="section__title">Записи на прием</div>
              <div className="scheduled-visits__wrapper">
                <VisitCard visitInfo={visits[0]} />
                <VisitCard visitInfo={visits[1]} />
                <div className="all-visits scheduled-visits__all">
                  <p>Еще {visits.length - 2} Записи</p>
                  <NavLink to="/appointments" text="Подробнее" />
                </div>
              </div>
            </section>

            <section className="section electronic-card">
              <div className="section__title">Электронная карта</div>
              <div className="electronic-card__row">
                <div className="electronic-card__col">
                  <NavigationCard iconKey="cardInfo" title="Информация о пациенте">
                    <ul>
                      <li>Ваши личные данные</li>
                      <li>Рекомендации врачей</li>
                      <li>История болезней</li>
                    </ul>
                  </NavigationCard>
                </div>
                <div className="electronic-card__col">
                  <NavigationCard iconKey="lab" title="Результаты анализов">
                    <p>Вы можете узнать здесь результаты своих анализов</p>
                  </NavigationCard>
                </div>
                <div className="electronic-card__col">
                  <NavigationCard iconKey="addInfo" title="Добавить информацию">
                    <p>Добавляйте в свою электронную медицинскую карту новые данные</p>
                  </NavigationCard>
                </div>
                <div className="electronic-card__col">
                  <NavigationCard iconKey="history" title="История приемов">
                    <p>Вся информация о полученных услугах за все время хранится здесь</p>
                  </NavigationCard>
                </div>

              </div>
            </section>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Profile;