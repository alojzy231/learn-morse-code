import React from 'react';

import MorseCodeProvider from 'contextProviders/MorseCodeProvider';
import TelegraphSounderButton from '../components/generic/TelegraphSounderButton';

export default function Home() {
  return (
    <>
      <h1>Test</h1>
      <MorseCodeProvider>
        <TelegraphSounderButton />
      </MorseCodeProvider>
    </>
  );
}
