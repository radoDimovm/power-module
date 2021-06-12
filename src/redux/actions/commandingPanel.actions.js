import { CHANGE_POWER_STATE_CAMERA, CHANGE_POWER_STATE_OBC } from "../types/commandingPanel.types"

export const changePowerStateObc = () => {
  return {
      type: CHANGE_POWER_STATE_OBC
  }
}
export const changePowerStateCamera = () => {
  return {
      type: CHANGE_POWER_STATE_CAMERA
  }
}
