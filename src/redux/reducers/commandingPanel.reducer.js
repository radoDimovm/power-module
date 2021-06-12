import { CHANGE_POWER_STATE_CAMERA, CHANGE_POWER_STATE_OBC } from '../types/commandingPanel.types';

const INITIAL_STATE = {
  obcPowerState: 'Disconnect',
  cameraPowerState: 'Disconnect'
};

const commandingPanelReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case CHANGE_POWER_STATE_OBC:
      return state.obcPowerState === 'Disconnect'
        ? {...state, obcPowerState: 'Reconnect'}
        : {...state, obcPowerState: 'Disconnect'};
    case CHANGE_POWER_STATE_CAMERA:
      return state.cameraPowerState === 'Disconnect'
        ? {...state, cameraPowerState: 'Reconnect'}
        : {...state, cameraPowerState: 'Disconnect'};
    default:
      return state;
  }
}

export default commandingPanelReducer;
