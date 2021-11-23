import styled from 'styled-components';
import { Header1 } from '../../../styles/Typography.styles';

export const CurrentLetterContainer = styled.div`
  height: 19.5rem;
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const CurrentAlphabetLetter = styled.h1`
  @media ${({ theme: { medias } }) => medias.mobile} {
    ${Header1};
    font-weight: bold;
  }
`;
export const CurrentMorseCode = styled.div`
  display: flex;
  align-items: center;
`;
