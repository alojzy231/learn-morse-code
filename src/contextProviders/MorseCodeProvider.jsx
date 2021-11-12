import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const MorseCodeContext = React.createContext();

export default function MorseCodeProvider({ children }) {
  const [typedMorseCode, setTypedMorseCode] = useState([]);

  const resetTypedMorseCode = () => {
    setTypedMorseCode([]);
  };

  return (
    <MorseCodeContext.Provider value={{ typedMorseCode, setTypedMorseCode, resetTypedMorseCode }}>
      {children}
    </MorseCodeContext.Provider>
  );
}

MorseCodeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
