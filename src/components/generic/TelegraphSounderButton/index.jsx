import React from 'react';

import useMorseCode from '../../../hooks/useMorseCode';
import TelegraphSounderButtonContainer from './TelegraphSounderButton.styles';

export default function TelegraphSounderButton() {
  const buttonRef = useMorseCode();

  return (
    <TelegraphSounderButtonContainer type="button" ref={buttonRef}>
      <h2>tap</h2>
      <h3>(or use space)</h3>
    </TelegraphSounderButtonContainer>
  );
}
