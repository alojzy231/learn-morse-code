import React, { useState, useEffect, useContext } from 'react';

import { MORSE_CODE_ALPHABET } from '../../../consts/morseCode';
import { SelectedLettersContext } from '../../../contextProviders/SelectedLettersProvided';
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
  const { selectedLetters } = useContext(SelectedLettersContext);

  const changeCurrentLetter = () => {
    if (selectedLetters.length > 0) {
      let newLetter = selectedLetters[Math.floor(Math.random() * selectedLetters.length)];

      while (newLetter.toUpperCase() === currentLetter)
        newLetter = selectedLetters[Math.floor(Math.random() * selectedLetters.length)];

      setCurrentLetter(newLetter.toUpperCase());
      setCurrentMorseCode(MORSE_CODE_ALPHABET[newLetter].split(''));
    }
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typedMorseCode]);

  useEffect(() => {
    if (!selectedLetters.includes(currentLetter)) {
      changeCurrentLetter();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedLetters]);

  return (
    <CurrentLetterContainer>
      {selectedLetters.length > 0 && (
        <>
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
        </>
      )}
    </CurrentLetterContainer>
  );
}
