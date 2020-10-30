import React from 'react';
import './style.css';
import Icons from '../Icons'


const MenuItem = (props) => {
  let activeClass = '';
  if (props.isActive) activeClass = 'menu-item--active';

  return (
    <div className={"menu-item menu__item " + activeClass}>
      <a className="menu-item__link" href="#">
        <Icons className="menu-item__icon" iconKey={props.iconKey} />
        <span className="menu-item__text">{props.text}</span>
      </a>
    </div>
  )
}

export default MenuItem;