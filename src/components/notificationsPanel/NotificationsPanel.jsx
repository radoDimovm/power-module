import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { usePrevious } from '../../hooks/usePrevious';
import Notification from '../notification/Notification';
import { HIGH_DRAW, LOW_VOLTAGE, MAX_VOLTAGE, SUPER_HIGH_DRAW } from './notificationConsts/notificationTriggerValues';
import { HIGH_DRAW_TYPE, LOW_VOLTAGE_TYPE, MAX_VOLTAGE_TYPE, SUPER_HIGH_DRAW_TYPE } from './notificationConsts/notificationTypes';

import './NotificationsPanel.css';

const INITIAL_NOTIFICATIONS_STATE = {
  obcMaxVoltage: {text: 'Max Voltage - OBC battery', type: MAX_VOLTAGE_TYPE, isVisible: false},
  obcLowVoltage: {text: 'Low Voltage - OBC battery', type: LOW_VOLTAGE_TYPE, isVisible: false},
  obcHighDraws: {text: 'High Current Draw - OBC battery', type: HIGH_DRAW_TYPE, isVisible: false},
  obcSuperHighDraws: {text: 'Extremely High Current Draw - OBC battery', type: SUPER_HIGH_DRAW_TYPE, isVisible: false},
  cameraMaxVoltage: {text: 'Max Voltage - Camera battery', type: MAX_VOLTAGE_TYPE, isVisible: false},
  cameraLowVoltage: {text: 'Low Voltage - Camera battery', type: LOW_VOLTAGE_TYPE, isVisible: false},
  cameraHighDraws: {text: 'High Current Draw - Camera battery', type: HIGH_DRAW_TYPE, isVisible: false},
  cameraSuperHighDraws: {text: 'Extremely High Current Draw - Camera battery', type: SUPER_HIGH_DRAW_TYPE, isVisible: false},
}

const NotificationsPanel = () => {
  const obc = useSelector(state => state.obc);
  const camera = useSelector(state => state.camera);

  const prevObcVolts = usePrevious(obc.volts);
  const prevObcAmps = usePrevious(obc.amps);
  const prevCameraVolts = usePrevious(camera.volts);
  const prevCameraAmps = usePrevious(camera.amps);


  const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS_STATE);

  useEffect(() => {
    if (prevObcVolts < MAX_VOLTAGE && obc.volts === MAX_VOLTAGE) {
      setNotifications((prevState) => ({...prevState, obcMaxVoltage: {...prevState.obcMaxVoltage, isVisible: true}}));
    }else if (prevObcVolts === MAX_VOLTAGE && obc.volts < MAX_VOLTAGE) {
      setNotifications((prevState) => ({...prevState, obcMaxVoltage: {...prevState.obcMaxVoltage, isVisible: false}}));
    }
    
    if (prevObcVolts >= LOW_VOLTAGE && obc.volts < LOW_VOLTAGE) {
      setNotifications((prevState) => ({...prevState, obcLowVoltage: {...prevState.obcLowVoltage, isVisible: true}}));
    }else if (prevObcVolts < LOW_VOLTAGE && obc.volts >= LOW_VOLTAGE) {
      setNotifications((prevState) => ({...prevState, obcLowVoltage: {...prevState.obcLowVoltage, isVisible: false}}));
    }

  }, [prevObcVolts, obc.volts])

  useEffect(() => {
    if (prevObcAmps <= HIGH_DRAW && obc.amps > HIGH_DRAW && obc.amps <= SUPER_HIGH_DRAW) {
      setNotifications((prevState) => ({...prevState, obcHighDraws: {...prevState.obcHighDraws, isVisible: true}}));
    }else if (prevObcAmps <= HIGH_DRAW && obc.amps > SUPER_HIGH_DRAW) {
      setNotifications((prevState) => ({...prevState, obcSuperHighDraws: {...prevState.obcSuperHighDraws, isVisible: true}}));
    }else if (prevObcAmps > HIGH_DRAW && prevObcAmps <= SUPER_HIGH_DRAW && obc.amps > SUPER_HIGH_DRAW) {
      setNotifications((prevState) => ({
        ...prevState,
        obcHighDraws: {...prevState.obcHighDraws, isVisible: false},
        obcSuperHighDraws: {...prevState.obcSuperHighDraws, isVisible: true}
      }));
    }else if (prevObcAmps > SUPER_HIGH_DRAW && obc.amps <= HIGH_DRAW) {
      setNotifications((prevState) => ({...prevState, obcSuperHighDraws: {...prevState.obcSuperHighDraws, isVisible: false}}));
    }else if (prevObcAmps > SUPER_HIGH_DRAW && obc.amps > HIGH_DRAW && obc.amps <= SUPER_HIGH_DRAW) {
      setNotifications((prevState) => ({
        ...prevState,
        obcHighDraws: {...prevState.obcHighDraws, isVisible: true},
        obcSuperHighDraws: {...prevState.obcSuperHighDraws, isVisible: false}
      }));
    }else if (prevObcAmps > HIGH_DRAW && prevObcAmps <= SUPER_HIGH_DRAW && obc.amps <= HIGH_DRAW) {
      setNotifications((prevState) => ({...prevState, obcHighDraws: {...prevState.obcHighDraws, isVisible: false}}));
    }

  }, [prevObcAmps, obc.amps])

  useEffect(() => {
    if (prevCameraVolts < MAX_VOLTAGE && camera.volts === MAX_VOLTAGE) {
      setNotifications((prevState) => ({...prevState, cameraMaxVoltage: {...prevState.cameraMaxVoltage, isVisible: true}}));
    }else if (prevCameraVolts === MAX_VOLTAGE && camera.volts < MAX_VOLTAGE) {
      setNotifications((prevState) => ({...prevState, cameraMaxVoltage: {...prevState.cameraMaxVoltage, isVisible: false}}));
    }
    
    if (prevCameraVolts >= LOW_VOLTAGE && camera.volts < LOW_VOLTAGE) {
      setNotifications((prevState) => ({...prevState, cameraLowVoltage: {...prevState.cameraLowVoltage, isVisible: true}}));
    }else if (prevCameraVolts < LOW_VOLTAGE && camera.volts >= LOW_VOLTAGE) {
      setNotifications((prevState) => ({...prevState, cameraLowVoltage: {...prevState.cameraLowVoltage, isVisible: false}}));
    }

  }, [prevCameraVolts, camera.volts])
  
  useEffect(() => {
    if (prevCameraAmps <= HIGH_DRAW && camera.amps > HIGH_DRAW && camera.amps <= SUPER_HIGH_DRAW) {
      setNotifications((prevState) => ({...prevState, cameraHighDraws: {...prevState.cameraHighDraws, isVisible: true}}));
    }else if (prevCameraAmps <= HIGH_DRAW && camera.amps > SUPER_HIGH_DRAW) {
      setNotifications((prevState) => ({...prevState, cameraSuperHighDraws: {...prevState.cameraSuperHighDraws, isVisible: true}}));
    }else if (prevCameraAmps > HIGH_DRAW && prevCameraAmps <= SUPER_HIGH_DRAW && camera.amps > SUPER_HIGH_DRAW) {
      setNotifications((prevState) => ({
        ...prevState,
        cameraHighDraws: {...prevState.cameraHighDraws, isVisible: false},
        cameraSuperHighDraws: {...prevState.cameraSuperHighDraws, isVisible: true}
      }));
    }else if (prevCameraAmps > SUPER_HIGH_DRAW && camera.amps <= HIGH_DRAW) {
      setNotifications((prevState) => ({...prevState, cameraSuperHighDraws: {...prevState.cameraSuperHighDraws, isVisible: false}}));
    }else if (prevCameraAmps > SUPER_HIGH_DRAW && camera.amps > HIGH_DRAW && camera.amps <= SUPER_HIGH_DRAW) {
      setNotifications((prevState) => ({
        ...prevState,
        cameraHighDraws: {...prevState.cameraHighDraws, isVisible: true},
        cameraSuperHighDraws: {...prevState.cameraSuperHighDraws, isVisible: false}
      }));
    }else if (prevCameraAmps > HIGH_DRAW && prevCameraAmps <= SUPER_HIGH_DRAW && camera.amps <= HIGH_DRAW) {
      setNotifications((prevState) => ({...prevState, cameraHighDraws: {...prevState.cameraHighDraws, isVisible: false}}));
    }

  }, [prevCameraAmps, camera.amps])

  return (
    <div className='notifications-panel'>
      <h1>Notifications</h1>
      {
        Object.values(notifications)
          .filter((notification) => notification.isVisible === true)
          .map((notification) => {
            return <Notification type={notification.type} text={notification.text} />
          })
      }
    </div>
  )
}

export default NotificationsPanel;