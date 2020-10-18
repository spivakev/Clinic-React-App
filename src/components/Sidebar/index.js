import React from 'react';
import './style.css';
import Menu from '../../components/Menu';
import MenuItem from '../MenuItem';
import developer_logo from '../../img/appvelox_logo.png'

const Sidebar = () => (
  <aside className="sidebar">
    <div className="sidebar__content">
      <div className="sidebar__logo">Логотип</div>
      <Menu />
      <Button text="Подать заявку"/>
    </div>
    <div className="sidebar__footer">
      <MenuItem iconKey="info" text="Помощь" />
      <img className="sidebar__developer-logo" src={developer_logo} width="114" height="20" alt="Appvelox" />
    </div>
  </aside>
)

export default Sidebar;