import React from 'react';
import MenuItem from '../MenuItem'


const Menu = () => (
  <ul className="menu">
    <MenuItem iconKey="heart" text="Профиль" />
    <MenuItem iconKey="doctors" text="Врачи и клиники" />
    <MenuItem iconKey="messages" text="Сообщения" />
    <MenuItem iconKey="test" text="Тестирование" />
    <MenuItem iconKey="book" text="Полезно знать" />
  </ul>
)

export default Menu;