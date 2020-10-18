import React from 'react';
import './style.css';
import Icons from '../Icons'


const MenuItem = (props) => (
  <div className="menu-item menu__item">
    <a className="menu-item__link" href="#">
      <Icons className="menu-item__icon" iconKey={props.iconKey} />
      <span className="menu-item__text">{props.text}</span>
    </a>
  </div>
)

export default MenuItem;