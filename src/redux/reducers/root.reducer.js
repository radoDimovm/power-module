import { combineReducers } from "redux";
import cameraReducer from "./camera.reducer";
import commandingPanelReducer from './commandingPanel.reducer';
import obcReducer from "./obc.reducer";
import parameterDisplayReducer from './parameterDisplay.reducer';

const rootReducer =  combineReducers({
  commandingPanel: commandingPanelReducer,
  parameterDisplay: parameterDisplayReducer,
  obc: obcReducer,
  camera: cameraReducer,
});

export default rootReducer;