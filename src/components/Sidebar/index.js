import React from 'react';
import './style.css';
import Menu from '../../components/Menu'
import SidebarFooter from '../../components/SidebarFooter'

const Sidebar = () => (
  <aside className="sidebar">
    <div className="sidebar__logo">Логотип</div>
    <Menu />
    <SidebarFooter />
  </aside>
)

export default Sidebar;