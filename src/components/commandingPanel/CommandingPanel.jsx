import { Button, withStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCameraConnection, changeObcConnection } from '../../redux/actions/parameterDisplay.actions';
import { changeObcConnection as changeObcConnectionServer, changeCameraConnection as changeCameraConnectionServer} from '../../backend-simulator/server.js';

import './CommandingPanel.css';

const ColorButton = withStyles(() => ({
  root: {
    color: 'white',
    backgroundColor: '#5f82bd',
    '&:hover': {
      backgroundColor: '#5ea5d6',
    },
  },
}))(Button);

const CommandingPanel = () => {
  // react-redux hooks
  const obcConnected = useSelector(state => state.obc.connected);
  const cameraConnected = useSelector(state => state.camera.connected);
  const dispatch = useDispatch();

  // react hooks
  let [obcButtonAction, setObcButtonAction] = useState('Disconnect');
  let [cameraButtonAction, setCameraButtonAction] = useState('Disconnect');

  useEffect(() => {
    obcConnected ? setObcButtonAction('Disconnect') : setObcButtonAction('Reconnect');
  }, [obcConnected]);

  useEffect(() => {
    cameraConnected ? setCameraButtonAction('Disconnect') : setCameraButtonAction('Reconnect');
  }, [cameraConnected]);

  // component functions
  const handleObcButtonClick = async () => {
    try {
      // const res = await api.put('...').send(obcButtonAction);
      const res = changeObcConnectionServer();
      if (res.status >= 200 || res.status <= 299) {
        dispatch(changeObcConnection());
      }
    } catch (error) {
      console.error('...')
    }
  }

  const handleCameraButtonClick = async () => {
    try {
      // const res = await api.put('...').send(cameraButtonAction);
      const res = changeCameraConnectionServer();
      if (res.status >= 200 || res.status <= 299) {
        dispatch(changeCameraConnection());
      }
    } catch (error) {
      console.error('...')
    }
  }

  return (
    <div className='commanding-panel'>
      <h3 className='title'>Commanding panel</h3>
      <ColorButton variant="contained" color="primary" className='button-obc button' onClick={handleObcButtonClick}>{obcButtonAction} OBC</ColorButton>
      <ColorButton variant="contained" color="primary" className='button-camera button' onClick={handleCameraButtonClick}>{cameraButtonAction} Camera</ColorButton>
    </div>
  )
}

export default CommandingPanel;