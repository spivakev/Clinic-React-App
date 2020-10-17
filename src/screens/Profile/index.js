import React from 'react';
import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'
import Main from '../../components/Main'
import './style.css';


const Profile = () => (
  <div className="profile profile__wrapper">
    <Sidebar />
    <div className="profile__content profile__wrapper">
      <Header title="Мой профиль" />
      <Main />
    </div>

  </div>
)

export default Profile;