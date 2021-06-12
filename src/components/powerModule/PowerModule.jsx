import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCameraAmps, setCameraVolts, setObcAmps, setObcVolts } from '../../redux/actions/parameterDisplay.actions';
import CommandingPanel from '../commandingPanel/CommandingPanel';
import NotificationsPanel from '../notificationsPanel/NotificationsPanel';
import ParameterDisplay from '../parameterDisplay/ParameterDisplay';

import { getObcInfo, getCameraInfo } from '../../backend-simulator/server.js';

import './PowerModule.css';

const PowerModule = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval( async () => {
      // const obcInfo = await api.get('url for obc info...');
      const { obcInfo } = getObcInfo();
      dispatch(setObcVolts(obcInfo.volts));
      dispatch(setObcAmps(obcInfo.amps));

      // const res = await api.get('url for camera info...');
      const { cameraInfo } = getCameraInfo();
      dispatch(setCameraVolts(cameraInfo.volts));
      dispatch(setCameraAmps(cameraInfo.amps));
    }, 1800);

    return () => clearInterval(interval);
  }, [dispatch])

  return (
    <div className="power-module">
      <ParameterDisplay />
      <CommandingPanel />
      <NotificationsPanel />
    </div>
  )
}

export default PowerModule;