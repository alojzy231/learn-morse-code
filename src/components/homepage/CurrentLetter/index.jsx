import React, { useState, useEffect, useContext } from 'react';

import { MORSE_CODE_ALPHABET } from '../../../consts/morseCode';
import { MorseCodeContext } from '../../../contextProviders/MorseCodeProvider';
import isEqualTo from './compareArrays';
import {
  CurrentLetterContainer,
  CurrentAlphabetLetter,
  CurrentMorseCode,
} from './CurrentLetter.styles';
import Dash from './symbols/Dash';
import Dot from './symbols/Dot';

export default function CurrentLetter() {
  const [currentLetter, setCurrentLetter] = useState('');
  const [currentMorseCode, setCurrentMorseCode] = useState([]);
  const { typedMorseCode, resetTypedMorseCode } = useContext(MorseCodeContext);

  const changeCurrentLetter = () => {
    const newLetter =
      Object.keys(MORSE_CODE_ALPHABET)[
        Math.floor(Math.random() * Object.keys(MORSE_CODE_ALPHABET).length)
      ];
    setCurrentLetter(newLetter.toUpperCase());
    setCurrentMorseCode(MORSE_CODE_ALPHABET[newLetter].split(''));
  };

  useEffect(() => {
    if (
      typedMorseCode.length > 0 &&
      currentMorseCode.at(typedMorseCode.length - 1) !== typedMorseCode.at(-1)
    ) {
      resetTypedMorseCode();
    } else if (isEqualTo(typedMorseCode, currentMorseCode)) {
      resetTypedMorseCode();
      changeCurrentLetter();
    }
  }, [typedMorseCode]);

  return (
    <CurrentLetterContainer>
      <CurrentAlphabetLetter>{currentLetter}</CurrentAlphabetLetter>
      <CurrentMorseCode>
        {currentMorseCode.map((symbol, index) =>
          symbol === '.' ? (
            <Dot isWritten={typedMorseCode[index] === symbol} />
          ) : (
            <Dash isWritten={typedMorseCode[index] === symbol} />
          ),
        )}
      </CurrentMorseCode>
    </CurrentLetterContainer>
  );
}
