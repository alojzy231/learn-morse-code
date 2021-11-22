import React from 'react';

import { LATIN_ALPHABET } from '../../../consts/morseCode';
import SelectAllButton from './SelectAllButton';
import LettersSelectionContainer from './LettersSelection.styles';
import Letter from './Letter';

export default function LettersSelection() {
  return (
    <LettersSelectionContainer>
      <SelectAllButton />
      {LATIN_ALPHABET.map((letter) => (
        <Letter letterSymbol={letter} key={letter} />
      ))}
    </LettersSelectionContainer>
  );
}
