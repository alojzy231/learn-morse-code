import React from 'react';

import PageTitle from '../components/generic/Page.styles';
import {
  InfoContent,
  InfoSection,
  InfoHeader,
  InfoParagraph,
} from '../components/info/Info.styles';

export default function info() {
  return (
    <>
      <PageTitle>Info</PageTitle>
      <InfoContent>
        <InfoSection>
          <InfoHeader>About</InfoHeader>
          <InfoParagraph>
            Morse code is a unique way of describing words. Who hasn&#39;tdreamt about communicating
            with a friend using it? But the process of learning might be painful. But since you are
            here you must be eager to learn it. This website was made especially for you to help you
            in the learning process.
          </InfoParagraph>
        </InfoSection>
        <InfoSection>
          <InfoHeader>How it works?</InfoHeader>
          <InfoParagraph>
            Click the orange button or press space on the homepage to transmit a signal. There are
            two types of signals: a single press transmits a dot but if you hold it longer, a dash.
            The same way you would communicate in morse code in real life! If you have made a
            mistake just wait and previous signals will be removed. You can select letters you want
            to practice or select them all and learn them in random order. Have fun!
          </InfoParagraph>
        </InfoSection>
      </InfoContent>
    </>
  );
}
