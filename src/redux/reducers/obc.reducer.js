import { CHANGE_OBC_CONNECTION, SET_OBC_AMPS, SET_OBC_VOLTS } from "../types/parameterDisplay.types";

const INITIAL_STATE = {
  amps: 1.0,
  volts: 24,
  connected: true
};

const obcReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SET_OBC_AMPS:
      return {...state, amps: action.payload}
    case SET_OBC_VOLTS:
      return {...state, volts: action.payload}
    case CHANGE_OBC_CONNECTION:
      return {...state, connected: !state.connected}
    default:
      return state;
  }
}

export default obcReducer;