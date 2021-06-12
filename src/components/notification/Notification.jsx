import React from 'react';
import { LOW_VOLTAGE_TYPE } from '../notificationsPanel/notificationConsts/notificationTypes';
import './Notification.css';

const Notification = ({text, type = LOW_VOLTAGE_TYPE}) => {
  return (
    <div className={`notification ${type}`}>
      <h4>{text}</h4>
    </div>
  )
}

export default Notification;