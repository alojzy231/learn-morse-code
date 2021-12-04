import styled from 'styled-components';

import { Header3, ParagraphSmall } from '../../styles/Typography.styles';

export const InfoContent = styled.div`
  width: 100%;
  padding: 2rem;
`;
export const InfoSection = styled.div`
  margin-bottom: 2.4rem;
`;
export const InfoHeader = styled.h2`
  @media ${({ theme: { medias } }) => medias.mobile} {
    ${Header3};
    font-weight: bold;
  }
`;
export const InfoParagraph = styled.p`
  margin-top: 1.2rem;

  @media ${({ theme: { medias } }) => medias.mobile} {
    ${ParagraphSmall};
  }
`;
