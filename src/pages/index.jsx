import React from 'react';

import MorseCodeProvider from '../contextProviders/MorseCodeProvider';
import TelegraphSounderButton from '../components/generic/TelegraphSounderButton';
import PageTitle from '../components/generic/Page.styles';
import CurrentLetter from '../components/homepage/CurrentLetter';

export default function Home() {
  return (
    <>
      <PageTitle>Learn morse code</PageTitle>
      <MorseCodeProvider>
        <CurrentLetter />
        <TelegraphSounderButton />
      </MorseCodeProvider>
    </>
  );
}
