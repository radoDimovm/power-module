import { CHANGE_CAMERA_CONNECTION, SET_CAMERA_AMPS, SET_CAMERA_VOLTS } from "../types/parameterDisplay.types";

const INITIAL_STATE = {
  amps: 1.0,
  volts: 24,
  connected: true
};

const cameraReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SET_CAMERA_AMPS:
      return {...state, amps: action.payload}
    case SET_CAMERA_VOLTS:
      return {...state, volts: action.payload}
    case CHANGE_CAMERA_CONNECTION:
      return {...state, connected: !state.connected}
    default:
      return state;
  }
}

export default cameraReducer;