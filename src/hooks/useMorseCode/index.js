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
    navigator.vibrate(100);
    clearTimeout(resetTimeout);
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

  useEffect(() => {
    if (buttonRef.current) {
      const currentButtonRef = buttonRef.current;

      window.addEventListener('keydown', handleSpaceDown);
      window.addEventListener('keyup', handleSpaceUp);

      currentButtonRef.addEventListener('pointerdown', handleButtonDown);
      currentButtonRef.addEventListener('pointerup', handleButtonUp);

      return () => {
        window.removeEventListener('keydown', handleSpaceDown);
        window.removeEventListener('keyup', handleSpaceUp);

        currentButtonRef.removeEventListener('pointerdown', handleButtonDown);
        currentButtonRef.removeEventListener('pointerup', handleButtonUp);
      };
    }

    return null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return buttonRef;
};

export default useMorseCode;
