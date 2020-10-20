import React from 'react';
import { Link } from "react-router-dom";
import Icons from '../../components/Icons'

const NavIcon = (props) => (
  <Link className="nav-icon" to={props.to} activeClassName="active">
    <Icons iconKey={props.iconKey} />
  </Link>
)

export default NavIcon;