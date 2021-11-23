import React from 'react';

import useMorseCode from '../../../hooks/useMorseCode';
import {
  TelegraphSounderButtonContainer,
  TelegraphSounderButtonTitle,
  TelegraphSounderButtonDescription,
} from './TelegraphSounderButton.styles';

export default function TelegraphSounderButton() {
  const buttonRef = useMorseCode();

  return (
    <TelegraphSounderButtonContainer type="button" ref={buttonRef}>
      <TelegraphSounderButtonTitle>tap</TelegraphSounderButtonTitle>
      <TelegraphSounderButtonDescription>(or use space)</TelegraphSounderButtonDescription>
    </TelegraphSounderButtonContainer>
  );
}
