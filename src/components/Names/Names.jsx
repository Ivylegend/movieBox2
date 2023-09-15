import React from 'react';
import './Names.css';

const Names = ({title, name}) => {
  return (
    <div style={{display:"flex"}}>
        <p>{title} : </p>
        <p>{name}</p>
    </div>
  )
}

export default Names