import React from 'react';
import './style.css';

const Link = (props) => (
  <a className="link" href={props.href}>{props.text}</a>
)

export default Link;