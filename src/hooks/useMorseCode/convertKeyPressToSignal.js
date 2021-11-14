import { MORSE_CODE, TIMING } from '../../consts/morseCode';

let timeDifference = null;
let startTime = 0;

const calculateSignalName = (signalLength) =>
  signalLength < TIMING.dash ? MORSE_CODE.dot : MORSE_CODE.dash;

const convertKeyPressedToSignal = (timeStamp, isStart = true) => {
  if (isStart) {
    startTime = timeStamp;
    return null;
  }

  timeDifference = timeStamp - startTime;
  return calculateSignalName(timeDifference);
};

export default convertKeyPressedToSignal;
