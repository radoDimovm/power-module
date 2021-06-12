import React from 'react';
import './SingleParameterDisplay.css';

const SingleParameterDisplay = (props) => {
  return (
    <div className={'single-parameter-display'}>
      <h1>{props.value.toFixed(2)}{props.unit}</h1>
      <h3>{props.title}</h3>
    </div>
  )
}

export default SingleParameterDisplay;