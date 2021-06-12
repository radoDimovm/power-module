import { CHANGE_CAMERA_CONNECTION, CHANGE_OBC_CONNECTION, SET_CAMERA_AMPS, SET_CAMERA_VOLTS, SET_OBC_AMPS, SET_OBC_VOLTS } from "../types/parameterDisplay.types"


export const setObcAmps = (amps) => {
  return {
      type: SET_OBC_AMPS,
      payload: amps
  }
}

export const setObcVolts = (volts) => {
  return {
      type: SET_OBC_VOLTS,
      payload: volts
  }
}

export const setCameraAmps = (amps) => {
  return {
      type: SET_CAMERA_AMPS,
      payload: amps
  }
}

export const setCameraVolts = (volts) => {
  return {
      type: SET_CAMERA_VOLTS,
      payload: volts
  }
}

export const changeObcConnection = () => {
  return {
      type: CHANGE_OBC_CONNECTION
  }
}

export const changeCameraConnection = () => {
  return {
      type: CHANGE_CAMERA_CONNECTION
  }
}
