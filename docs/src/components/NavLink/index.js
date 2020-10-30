import React from 'react';
import './style.css';
import { Link } from "react-router-dom";

const NavLink = (props) => (
  <Link className="nav-link" to={props.to} activeClassName="active">{props.text}</Link>
)

export default NavLink;