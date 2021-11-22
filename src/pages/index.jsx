import React from 'react';

import MorseCodeProvider from '../contextProviders/MorseCodeProvider';
import TelegraphSounderButton from '../components/generic/TelegraphSounderButton';
import PageTitle from '../components/generic/Page.styles';
import CurrentLetter from '../components/homepage/CurrentLetter';
import LettersSelection from '../components/homepage/LettersSelection';
import SelectedLettersProvided from '../contextProviders/SelectedLettersProvided';

export default function Home() {
  return (
    <>
      <PageTitle>Learn morse code</PageTitle>
      <MorseCodeProvider>
        <SelectedLettersProvided>
          <LettersSelection />
          <CurrentLetter />
        </SelectedLettersProvided>
        <TelegraphSounderButton />
      </MorseCodeProvider>
    </>
  );
}
