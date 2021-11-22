import React, { useState, useEffect, useContext } from 'react';
import { SelectedLettersContext } from '../../../../contextProviders/SelectedLettersProvided';

import { LetterContainer, LetterText } from './Letter.styles';

export default function Letter({ letterSymbol }) {
  const { selectedLetters, addSelectedLetter, removeSelectedLetter } =
    useContext(SelectedLettersContext);
  const [selected, toggleSelected] = useState(true);

  useEffect(() => {
    if (selectedLetters.includes(letterSymbol) !== selected)
      toggleSelected((prevState) => !prevState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedLetters]);

  const handleClick = () => {
    if (selected) {
      removeSelectedLetter(letterSymbol);
    } else {
      addSelectedLetter(letterSymbol);
    }
  };

  return (
    <LetterContainer onClick={handleClick}>
      <LetterText selected={selected}>{letterSymbol}</LetterText>
    </LetterContainer>
  );
}
