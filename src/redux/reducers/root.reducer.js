import { combineReducers } from "redux";
import cameraReducer from "./camera.reducer";
import obcReducer from "./obc.reducer";

const rootReducer =  combineReducers({
  obc: obcReducer,
  camera: cameraReducer,
});

export default rootReducer;