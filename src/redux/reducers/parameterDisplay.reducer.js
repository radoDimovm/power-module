import { SET_CAMERA_AMPS, SET_CAMERA_VOLTS, SET_OBC_AMPS, SET_OBC_VOLTS } from "../types/parameterDisplay.types";


const INITIAL_STATE = {
  obcAmps: 0,
  obcVolts: 0,
  cameraAmps: 0,
  cameraVolts: 0
};

const parameterDisplayReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SET_OBC_AMPS:
      return {...state, obcAmps: action.payload}
    case SET_OBC_VOLTS:
      return {...state, obcVolts: action.payload}
    case SET_CAMERA_AMPS:
      return {...state, cameraAmps: action.payload}
    case SET_CAMERA_VOLTS:
      return {...state, cameraVolts: action.payload}
    default:
      return state;
  }
}

export default parameterDisplayReducer;
