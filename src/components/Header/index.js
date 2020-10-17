import React from 'react';
import './style.css';
import IconSearch from '../IconSearch';
import IconNotification from '../IconNotification';
import IconEye from '../IconEye';
import IconSelect from '../IconSelect';
import Avatar from '../Avatar';
import patientPhoto from '../../img/patient.png'

const Header = (props) => (
  <header className="header">
    <h1 className="header__title">{props.title}</h1>
    <div className="header__wrapper">
      <ul className="header__menu">
        <li className="header__item">
          <a href="#" className="header__link">
            <IconSearch />
          </a>
        </li>
        <li className="header__item">
          <a href="#" className="header__link">
            <IconNotification />
          </a>
        </li>
        <li className="header__item">
          <a href="#" className="header__link">
            <IconEye />
          </a>
        </li>
      </ul>

      <div className="header__user">
        <a href="#">
          <div className="header__wrapper">
            <Avatar src={patientPhoto} />
            <IconSelect />
          </div>
        </a>
      </div>
    </div>
  </header>
)

export default Header;