import React from 'react';
import './style.css';

const Avatar = (props) => (
  <img className="avatar" src={props.src} alt="Аватар" width="45" height="45" />
)

export default Avatar;