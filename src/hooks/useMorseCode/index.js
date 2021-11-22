/* eslint-disable no-undef */
import { useEffect, useRef, useContext } from 'react';

import { TIMING } from '../../consts/morseCode';
import { MorseCodeContext } from '../../contextProviders/MorseCodeProvider';
import convertKeyPressedToSignal from './convertKeyPressToSignal';

const useMorseCode = () => {
  const { setTypedMorseCode } = useContext(MorseCodeContext);
  const buttonRef = useRef(null);
  let resetTimeout = null;

  const checkIfSpace = (code) => code === 'Space';

  const handleButtonDown = ({ timeStamp }) => {
    clearTimeout(resetTimeout);
    navigator.vibrate(100);
    buttonRef.current.focus();
    convertKeyPressedToSignal(timeStamp);
  };

  const handleButtonUp = ({ timeStamp }) => {
    setTypedMorseCode((prevState) => [...prevState, convertKeyPressedToSignal(timeStamp, false)]);
    resetTimeout = setTimeout(() => {
      setTypedMorseCode([]);
    }, TIMING.space);
  };

  const handleSpaceDown = ({ code, timeStamp, repeat }) => {
    if (checkIfSpace(code) && !repeat) {
      handleButtonDown({ timeStamp });
    }
  };

  const handleSpaceUp = ({ code, timeStamp }) => {
    if (checkIfSpace(code)) {
      handleButtonUp({ timeStamp });
    }
  };

  const handleTouchStart = (event) => {
    event.preventDefault();
    handleButtonDown(event);
  };

  const handleTouchEnd = (event) => {
    event.preventDefault();
    handleButtonUp(event);
  };

  useEffect(() => {
    if (buttonRef.current) {
      const currentButtonRef = buttonRef.current;

      window.addEventListener('keydown', handleSpaceDown);
      window.addEventListener('keyup', handleSpaceUp);

      currentButtonRef.addEventListener('mousedown', handleButtonDown);
      currentButtonRef.addEventListener('mouseup', handleButtonUp);

      currentButtonRef.addEventListener('touchstart', handleTouchStart);
      currentButtonRef.addEventListener('touchend', handleTouchEnd);

      return () => {
        window.removeEventListener('keydown', handleSpaceDown);
        window.removeEventListener('keyup', handleSpaceUp);

        currentButtonRef.removeEventListener('mousedown', handleButtonDown);
        currentButtonRef.removeEventListener('mouseup', handleButtonUp);

        currentButtonRef.removeEventListener('touchstart', handleTouchStart);
        currentButtonRef.removeEventListener('touchend', handleTouchEnd);
      };
    }

    return null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return buttonRef;
};

export default useMorseCode;
