import React, { useState, useEffect, useContext } from 'react';

import { MORSE_CODE_ALPHABET } from '../../../consts/morseCode';
import { MorseCodeContext } from '../../../contextProviders/MorseCodeProvider';
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
  const { typedMorseCode } = useContext(MorseCodeContext);
  console.log(typedMorseCode);
  const changeCurrentLetter = (letter) => {
    setCurrentLetter(letter.toUpperCase());
    setCurrentMorseCode(MORSE_CODE_ALPHABET[letter].split(''));
  };

  useEffect(() => {
    changeCurrentLetter('a');
  }, []);

  return (
    <CurrentLetterContainer>
      <CurrentAlphabetLetter>{currentLetter}</CurrentAlphabetLetter>
      <CurrentMorseCode>
        {currentMorseCode.map((symbol) => (symbol === '.' ? <Dot /> : <Dash />))}
      </CurrentMorseCode>
    </CurrentLetterContainer>
  );
}
