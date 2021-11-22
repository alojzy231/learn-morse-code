import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { LATIN_ALPHABET } from '../consts/morseCode';

export const SelectedLettersContext = React.createContext();

export default function SelectedLettersProvided({ children }) {
  const [selectedLetters, setSelectedLetters] = useState(LATIN_ALPHABET);

  const removeSelectedLetter = (removedLetter) => {
    setSelectedLetters((prevSelectedLetters) =>
      prevSelectedLetters.filter((currLetter) => currLetter !== removedLetter),
    );
  };
  const addSelectedLetter = (addedLetter) => {
    setSelectedLetters((prevSelectedLetters) => [...prevSelectedLetters, addedLetter]);
  };
  const addAllSelectedLetters = () => setSelectedLetters(LATIN_ALPHABET);
  const removeAllSelectedLetters = () => setSelectedLetters([]);

  return (
    <SelectedLettersContext.Provider
      value={{
        selectedLetters,
        removeSelectedLetter,
        addSelectedLetter,
        addAllSelectedLetters,
        removeAllSelectedLetters,
      }}
    >
      {children}
    </SelectedLettersContext.Provider>
  );
}

SelectedLettersProvided.propTypes = {
  children: PropTypes.node.isRequired,
};
