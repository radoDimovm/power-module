let obcConnected = true;
let obcVolts = 20;
let obcAmps = 1.2;
let cameraConnected = true;
let cameraVolts = 24;
let cameraAmps = 0.7;

export const getObcInfo = () => {
  if (obcConnected) {
    obcVolts = obcVolts - Math.floor(Math.random() * 5);
    if (obcVolts < 0) {
      obcVolts = 0;
    }
    obcAmps = obcAmps + Math.random() * 0.5;
    const obcInfo = {
      volts: obcVolts,
      amps: obcAmps
    }

    return {obcInfo, status: 200};
  }

  obcVolts = obcVolts + Math.floor(Math.random() * 5);
  if (obcVolts > 30) {
    obcVolts = 30;
  }
  if (obcAmps > 0) {
    obcAmps = obcAmps - Math.random() * 2.5;
  }
  if (obcAmps < 0) {
    obcAmps = 0;
  }
  const obcInfo = {
    volts: obcVolts,
    amps: obcAmps
  }

  return {obcInfo, status: 200};
}

export const getCameraInfo = () => {
  if (cameraConnected) {
    cameraVolts = cameraVolts - Math.floor(Math.random() * 5);
    if (cameraVolts < 0) {
      cameraVolts = 0;
    }
    cameraAmps = cameraAmps + Math.random() * 0.5;
    const cameraInfo = {
      volts: cameraVolts,
      amps: cameraAmps
    }

    return {cameraInfo, status: 200};
  }

  cameraVolts = cameraVolts + Math.floor(Math.random() * 5);
  if (cameraVolts > 30) {
    cameraVolts = 30;
  }
  if (cameraAmps > 0) {
    cameraAmps = cameraAmps - Math.random() * 2.5;
  }
  if (cameraAmps < 0) {
    cameraAmps = 0;
  }
  const cameraInfo = {
    volts: cameraVolts,
    amps: cameraAmps
  }

  return {cameraInfo, status: 200};
}

export const changeObcConnection = () => {
  obcConnected = !obcConnected;

  return {status: 200};
}

export const changeCameraConnection = () => {
  cameraConnected = !cameraConnected;

  return {status: 200};
}