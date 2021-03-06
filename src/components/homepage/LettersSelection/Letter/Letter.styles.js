import styled from 'styled-components';
import { Header3 } from '../../../../styles/Typography.styles';

export const LetterContainer = styled.button`
  margin: 0 0.8rem;

  border: none;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
export const LetterText = styled.h2`
  color: ${({ selected, theme: { colors } }) => (selected ? colors.black : colors.disabled)};

  @media ${({ theme: { medias } }) => medias.mobile} {
    ${Header3};
  }
`;
