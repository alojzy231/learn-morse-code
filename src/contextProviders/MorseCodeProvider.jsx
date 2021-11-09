import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const MorseCodeContext = React.createContext();

export default function MorseCodeProvider({ children }) {
  const [currentMorseCode, setCurrentMorseCode] = useState('');

  return (
    <MorseCodeContext.Provider value={{ currentMorseCode, setCurrentMorseCode }}>
      {children}
    </MorseCodeContext.Provider>
  );
}

MorseCodeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
