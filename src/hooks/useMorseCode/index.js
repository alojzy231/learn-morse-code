/* eslint-disable no-undef */
import { useEffect, useRef, useContext } from 'react';

import { TIMING } from '../../consts/morseCode';
import { MorseCodeContext } from '../../contextProviders/MorseCodeProvider';
import convertKeyPressedToSignal from './convertKeyPressToSignal';

const useSpaceButton = () => {
  const { setCurrentMorseCode } = useContext(MorseCodeContext);
  const buttonRef = useRef(null);
  let isSpacePressed = false;
  let resetTimeout = null;

  const checkIfSpace = (code) => code === 'Space';

  const handleSpaceDown = ({ code, timeStamp }) => {
    if (!isSpacePressed && checkIfSpace(code)) {
      buttonRef.current.focus();
      isSpacePressed = true;
      convertKeyPressedToSignal(timeStamp);
      clearTimeout(resetTimeout);
    }
  };

  const handleSpaceUp = ({ code, timeStamp }) => {
    if (checkIfSpace(code)) {
      isSpacePressed = false;
      setCurrentMorseCode((prevState) => prevState + convertKeyPressedToSignal(timeStamp, false));
      resetTimeout = setTimeout(() => setCurrentMorseCode(''), TIMING.space);
    }
  };

  useEffect(() => {
    if (buttonRef) {
      window.addEventListener('keydown', handleSpaceDown);
      window.addEventListener('keyup', handleSpaceUp);

      return () => {
        window.removeEventListener('keydown', handleSpaceDown);
        window.removeEventListener('keyup', handleSpaceUp);
      };
    }

    return null;
  }, []);

  return buttonRef;
};

export default useSpaceButton;
