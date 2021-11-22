import React, { useContext } from 'react';

import { LATIN_ALPHABET } from '../../../../consts/morseCode';
import { SelectedLettersContext } from '../../../../contextProviders/SelectedLettersProvided';
import { SelectAllButtonContainer, SelectAllButtonText } from './SelectAllButton.styles';

export default function SelectAllButton() {
  const { selectedLetters, addAllSelectedLetters, removeAllSelectedLetters } =
    useContext(SelectedLettersContext);

  const handleClick = () => {
    if (selectedLetters.length === LATIN_ALPHABET.length) {
      removeAllSelectedLetters();
    } else {
      addAllSelectedLetters();
    }
  };
  return (
    <SelectAllButtonContainer onClick={handleClick}>
      <SelectAllButtonText>Select All</SelectAllButtonText>
    </SelectAllButtonContainer>
  );
}
