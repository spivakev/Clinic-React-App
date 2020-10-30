import React from 'react';
import './style.css';

const Avatar = (props) => (
  <img className="avatar" src={props.src} alt="Аватар" width={props.size} height={props.size} />
)

export default Avatar;