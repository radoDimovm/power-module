import React from 'react';
import { useSelector } from 'react-redux';
import SingleParameterDisplay from '../singleParameterDisplay/SingleParameterDisplay';
import './ParameterDisplay.css';

const ParameterDisplay = () => {
  const obc = useSelector(state => state.obc);
  const camera = useSelector(state => state.camera);

  return (
    <div className='parameter-display'>
      <SingleParameterDisplay value={obc.volts} unit={'V'} title={'OBC voltage'} />
      <SingleParameterDisplay value={camera.volts} unit={'V'} title={'Camera voltage'} />
      <SingleParameterDisplay value={obc.amps} unit={'A'} title={'OBC current draw'} />
      <SingleParameterDisplay value={camera.amps} unit={'A'} title={'Camera current draw'} />
    </div>
  )
}

export default ParameterDisplay;