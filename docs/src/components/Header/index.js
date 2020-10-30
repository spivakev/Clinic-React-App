import React from 'react';
import './style.css';
import Icons from '../Icons';
import Avatar from '../Avatar';
import patientPhoto from '../../img/patient.png'

const Header = (props) => (
  <header className="header">
    <h1 className="header__title">{props.title}</h1>
    <div className="header__wrapper">
      <ul className="header__menu">
        <li className="header__item">
          <a href="#" className="header__link">
            <Icons iconKey="search" />
          </a>
        </li>
        <li className="header__item">
          <a href="#" className="header__link">
            <Icons iconKey="notifications" />
          </a>
        </li>
        <li className="header__item">
          <a href="#" className="header__link">
            <Icons iconKey="eye" />
          </a>
        </li>
      </ul>

      <div className="header__user">
        <a href="#">
          <div className="header__wrapper">
            <Avatar src={patientPhoto} size="45" />
            <Icons iconKey="select" />
          </div>
        </a>
      </div>
    </div>
  </header>
)

export default Header;