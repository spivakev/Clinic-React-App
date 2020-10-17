import React from 'react';
import './style.css';
import Menu from '../../components/Menu'
import SidebarFooter from '../../components/SidebarFooter'

const Sidebar = () => (
  <aside className="Sidebar">
    Логотип
    <Menu />
Список пунктов меню
    <SidebarFooter />
  </aside>
)

export default Sidebar;